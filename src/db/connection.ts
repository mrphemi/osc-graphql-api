import { Sequelize } from "sequelize-typescript";
import Course from "./models/Course";
import Collection from "./models/Collection";
import CourseCollection from "./models/CourseCollection";
import User from "./models/User";

import config from "../config";

const sequelize = new Sequelize({
  ...config.getDbConfig(),
  dialect: "sqlite",
  storage: "./database.sqlite",
  models: [Course, Collection, CourseCollection, User],
});

export default sequelize;
