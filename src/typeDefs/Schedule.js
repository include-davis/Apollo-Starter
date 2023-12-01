import gql from "graphql-tag";

const typeDefs = gql`
  type Schedule {
    id: ID!
    name: String!
    student: Student!
  }

  input ScheduleInput {
    studentId: String!
    name: String!
  }

  type Query {
    schedule(id: ID!): Schedule
  }

  type Mutation {
    createSchedule(input: ScheduleInput!): Schedule
  }
`;
export default typeDefs;
