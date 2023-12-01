import gql from "graphql-tag";

const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
    schedules: [Schedule]
  }

  input StudentInput {
    name: String!
  }

  type Query {
    student(id: ID!): Student
  }

  type Mutation {
    createStudent(input: StudentInput): Student
  }
`;
export default typeDefs;
