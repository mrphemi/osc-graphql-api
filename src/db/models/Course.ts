import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  BelongsToMany,
} from "sequelize-typescript";

import Collection from "./Collection";
import CourseCollection from "./CourseCollection";

interface CourseAttributes {
  id: string;
  title: string;
  description: string;
  duration: string;
  outcome: string;
  collections?: Collection[];
}

// Creation attributes interface - makes 'id' optional
interface CourseCreationAttributes extends Optional<CourseAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "courses",
  modelName: "Course",
})
export default class Course extends Model<
  CourseAttributes,
  CourseCreationAttributes
> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  duration!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  outcome!: string;

  @BelongsToMany(() => Collection, () => CourseCollection)
  collections?: Collection[];

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}
