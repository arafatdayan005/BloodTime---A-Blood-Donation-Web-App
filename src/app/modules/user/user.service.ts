import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
const prisma = new PrismaClient();

const registerUserIntoDB = async (body: any) => {
  const hashedPassword = await bcrypt.hash(body.password, 12);
  const result = await prisma.user
    .create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        bloodType: body?.bloodType,
        location: body?.location,
      },
    })
    .then(async (userData) => {
      const createProfile = await prisma.userProfile.create({
        data: {
          userId: userData.id,
          age: body?.age,
          bio: body?.bio,
          lastDonationDate: body?.lastDonationDate,
        },
      });

      const data = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        bloodType: userData.bloodType,
        location: userData.location,
        availability: userData.availability,
        createdAt: userData.createdAt,
        updatedAt: userData.updatedAt,
        userProfile: createProfile,
      };
      return data;
    });
  return result;
};

export const userService = {
  registerUserIntoDB,
};
