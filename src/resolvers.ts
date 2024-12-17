import JWT from "jsonwebtoken";

import Course from "./db/models/Course";
import Collection from "./db/models/Collection";
import User from "./db/models/User";

import config from "./config";

import { ForbiddenError, AuthenticationError } from "./utils/error";

const resolvers = {
  Query: {
    async courses(_, args: { limit?: number; sortOrder?: "ASC" | "DESC" }) {
      try {
        const courses = await Course.findAll({
          order: args.sortOrder ? [["title", args.sortOrder]] : undefined,
          limit: args.limit || undefined,
        });

        return courses;
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    },
    async course(_, args) {
      try {
        const course = await Course.findByPk(args.id);

        if (!course) {
          throw new Error("Course not found");
        }

        return course;
      } catch (error) {
        console.error("Error finding course:", error);
      }
    },
    async collections() {
      try {
        const collections = await Collection.findAll({
          include: [Course],
        });
        return collections;
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    },
    async collection(_, args) {
      try {
        const collection = await Collection.findByPk(args.id, {
          include: [Course],
        });

        if (!collection) {
          throw new Error("Collection not found");
        }

        return collection;
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    },
    async login(_, args: { email: string; password: string }) {
      try {
        const user = await User.findOne({
          where: {
            email: args.email,
          },
        });

        if (!user) throw AuthenticationError();

        const passwordMatches = user.validatePassword(args.password);
        if (!passwordMatches) throw AuthenticationError();

        const token = JWT.sign(
          { id: user.id, email: user.email },
          config.jwt_secret,
          {
            expiresIn: "3d",
          }
        );

        return token;
      } catch (error) {
        console.error("Error login user in:", error);
      }
    },
  },
  Mutation: {
    async addCourse(_, { input }, ctx) {
      if (!ctx.user) throw ForbiddenError("Not Allowed");
      try {
        const course = await Course.create({
          ...input,
        });

        return course;
      } catch (error) {
        console.error("Error creating course:", error);
      }
    },
    async updateCourse(_, { id, input }, ctx) {
      if (!ctx.user) throw ForbiddenError("Not Allowed");
      try {
        const course = await Course.findByPk(id);

        if (!course) {
          throw new Error("Course not found");
        }

        await course.update(input);

        // Fetch the updated course
        const updatedCourse = await course.reload();

        return updatedCourse;
      } catch (error) {
        console.error("Error updating course:", error);
      }
    },
    async deleteCourse(_, { id }, ctx) {
      if (!ctx.user) throw ForbiddenError("Not Allowed");
      try {
        // Find the course first to return it after deletion
        const course = await Course.findByPk(id);

        if (!course) {
          throw new Error("Course not found");
        }

        // Delete the course
        await course.destroy();

        return course;
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    },
    async addCollection(_, { input }, ctx) {
      if (!ctx.user) throw ForbiddenError("Not Allowed");
      try {
        const collection = await Collection.create({
          name: input.name,
        });

        // If course IDs were provided, associate them with the collection
        if (input.courseIds && input.courseIds.length > 0) {
          const courses = await Course.findAll({
            where: {
              id: input.courseIds,
            },
          });

          await collection.$set("courses", courses);

          // Reload collection to get the associated courses
          await collection.reload({
            include: [Course],
          });
        }

        return collection;
      } catch (error) {
        console.error("Error creating collection:", error);
      }
    },
    async register(_, { input }) {
      try {
        // check if user with email exists
        const user = await User.findOne({
          where: {
            email: input.email,
          },
        });

        if (user) throw new Error("User already exists");

        const newUser = await User.create({
          ...input,
        });

        return newUser;
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
  },
};

export default resolvers;
