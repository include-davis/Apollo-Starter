import Schedules from "../services/Schedules.js";

const resolvers = {
  Schedule: {
    student: ({ studentId }) => Schedules.getStudent({ studentId }),
  },
  Query: {
    schedule: (_, { id }) => Schedules.find({ id }),
  },
  Mutation: {
    createSchedule: (_, { input }) => Schedules.create({ input }),
  },
};

export default resolvers;
