import Students from "../services/Students.js";

const resolvers = {
  Student: {
    schedules: ({ id }) => Students.getSchedules({ id }),
  },
  Query: {
    student: (_, { id }) => Students.find({ id }),
  },
  Mutation: {
    createStudent: (_, { input }) => Students.create({ input }),
  },
};

export default resolvers;
