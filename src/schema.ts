const schema = `#graphql
  enum SortOrder {
    ASC
    DESC
  }
  type Course {
    id: ID!
    title: String!
    description: String!
    duration: String!
    outcome: String!
  }
  input CourseInput {
    title: String!
    description: String!
    duration: String!
    outcome: String!
  }
  input UpdateCourseInput {
    title: String
    description: String
    duration: String
    outcome: String
  }
  type Collection {
    id: ID!
    name: String!
    courses: [Course]!
  }
  input CreateCollectionInput {
    name: String!
    courseIds: [ID!]
  }
  type Query {
    courses(limit: Int, sortOrder: SortOrder): [Course]
    course(id: ID!): Course
    collections: [Collection]
    collection(id: ID!): Collection
  }
  type Mutation {
    addCourse(input: CourseInput!): Course!
    updateCourse(id: ID!, input: UpdateCourseInput!): Course!
    deleteCourse(id: ID!): Course!
    addCollection(input: CreateCollectionInput!): Collection!
  }
`;

export default schema;
