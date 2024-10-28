import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
const prisma = new PrismaClient();

const getProfileFromDB = async (userId: string) => {
  const result = await prisma.user.findFirstOrThrow({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      bloodType: true,
      location: true,
      availability: true,
      profileImage: true,
      createdAt: true,
      updatedAt: true,
      UserProfile: true,
    },
  });

  return result;
};

const updateProfileIntoDB = async (id: string, body: any) => {
  const { bloodType, location, availability, profileImage, bio, age, lastDonationDate } = body;

  const userData = {
    bloodType,
    location,
    availability,
    profileImage,
  };

  const userProfile = {
    bio, age, lastDonationDate
  }

  await prisma.user.findFirstOrThrow({
    where: {
      id: id,
    },
  });

  if (bloodType || location || profileImage || availability !== undefined) {
    await prisma.user.update({
      where: {
        id: id,
      },
      data: userData,
    });
  }

  await prisma.userProfile.findFirstOrThrow({
    where: {
      userId: id,
    },
  });

  const updateStatus = await prisma.userProfile.update({
    where: {
      userId: id,
    },
    data: userProfile,
  });

  return updateStatus;
};

const updatePasswordIntoDB = async (id: string, body: any) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
  });

  const isCorrectPassword: boolean = await bcrypt.compare(
    body.oldPassword,
    userData.password
  );

  if (!isCorrectPassword) {
    throw new Error("Password incorrect!");
  }

  const hashedPassword = await bcrypt.hash(body.newPassword, 12);

  const updateStatus = await prisma.user.update({
    where: {
      id: id,
    },
    data: {password: hashedPassword},
  });

  return updateStatus;
};

export const profileService = {
  getProfileFromDB,
  updateProfileIntoDB,
  updatePasswordIntoDB
};
