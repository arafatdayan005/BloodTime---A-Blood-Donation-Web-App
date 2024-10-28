import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

const loginUser = async (body: any) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: body.email,
    },
  });

  const isCorrectPassword: boolean = await bcrypt.compare(
    body.password,
    userData.password
  );

  if (!isCorrectPassword) {
    throw new Error("Password incorrect!");
  }

  const accessToken = jwt.sign(
    {
      email: userData.email,
      name: userData.name,
      bloodType: userData.bloodType,
      location: userData.location,
      availability: userData.availability,
      profileImage: userData.profileImage,
    },
    "32BitHashString",
    {
      algorithm: "HS256",
      expiresIn: "60m",
    }
  );

  return {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    token: accessToken,
  };
};

export const authService = {
  loginUser,
};
