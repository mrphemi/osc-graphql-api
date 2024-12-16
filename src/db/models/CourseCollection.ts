import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";

import Course from "./Course";
import Collection from "./Collection";

@Table({
  timestamps: true,
  tableName: "course_collections",
  modelName: "CourseCollection",
})
export default class CourseCollection extends Model {
  @ForeignKey(() => Course)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  course_id!: string;

  @ForeignKey(() => Collection)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  collection_id!: string;
}
