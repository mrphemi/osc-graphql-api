import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

import Course from "./Course";
import CourseCollection from "./CourseCollection";

interface CollectionAttributes {
  id: string;
  name: string;
  courses?: Course[];
}

interface CollectionCreationAttributes
  extends Optional<CollectionAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "collections",
  modelName: "Collection",
})
export default class Collection extends Model<
  CollectionAttributes,
  CollectionCreationAttributes
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
  name!: string;

  @BelongsToMany(() => Course, () => CourseCollection)
  courses?: Course[];

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}
