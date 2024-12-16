import Course from "./db/models/Course";
import Collection from "./db/models/Collection";

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
  },
  Mutation: {
    async addCourse(_, { input }) {
      try {
        const course = await Course.create({
          ...input,
        });

        return course;
      } catch (error) {
        console.error("Error creating course:", error);
      }
    },
    async updateCourse(_, { id, input }) {
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
    async deleteCourse(_, { id }) {
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
    async addCollection(_, { input }) {
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
  },
};

export default resolvers;
