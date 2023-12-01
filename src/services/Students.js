import prisma from "../prisma/client.js";

export default class Student {
  // CREATE
  static async create({ input }) {
    const { name } = input;
    const student = await prisma.student.create({
      data: {
        name,
      },
    });
    return student;
  }

  // READ
  static async find({ id }) {
    return prisma.student.findUnique({
      where: {
        id,
      },
    });
  }

  // OTHER
  static async getSchedules({ id }) {
    return prisma.schedule.findMany({
      where: {
        studentId: id,
      },
    });
  }
}
