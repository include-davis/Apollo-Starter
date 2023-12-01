import prisma from "../prisma/client.js";

export default class Schedule {
  // CREATE
  static async create({ input }) {
    const { studentId, name } = input;
    const schedule = await prisma.schedule.create({
      data: {
        studentId,
        name,
      },
    });
    return schedule;
  }

  // READ
  static async find({ id }) {
    return prisma.schedule.findUnique({
      where: {
        id,
      },
    });
  }

  // OTHER
  static async getStudent({ studentId }) {
    return prisma.student.findUnique({
      where: {
        id: studentId,
      },
    });
  }
}
