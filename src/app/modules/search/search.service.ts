import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllDonorsFromDB = async (
  searchTerm: any,
  skip: number,
  limit: number,
  sortBy: any,
  sortOrder: any,
  bloodType: any,
  availability: any
) => {
  if (searchTerm || bloodType || availability) {
    if (
      searchTerm != "A_POSITIVE" &&
      searchTerm != "A_NEGATIVE" &&
      searchTerm != "B_POSITIVE" &&
      searchTerm != "B_NEGATIVE" &&
      searchTerm != "AB_POSITIVE" &&
      searchTerm != "AB_NEGATIVE" &&
      searchTerm != "O_POSITIVE" &&
      searchTerm != "O_NEGATIVE"
    ) {
      const result = await prisma.user.findMany({
        where: {
          ...(bloodType && { bloodType: bloodType }),
          ...(availability === "false" ? { availability: false } : {}),
          ...(availability !== undefined && availability !== "false"
            ? { availability: true }
            : {}),
          OR: searchTerm && [
            {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
            {
              email: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
            {
              location: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          ],
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
        skip: skip,
        take: limit || 10,
        orderBy: sortBy && {
          ...(sortBy === "lastDonationDate" || sortBy === "age"
            ? {
                UserProfile: {
                  [sortBy]: sortOrder || "asc",
                },
              }
            : {
                [sortBy]: sortOrder || "asc",
              }),
        },
      });

      const totalItems = result.length;

      return {
        data: result,
        totalItems: totalItems,
      };
    } else {
      const result = await prisma.user.findMany({
        where: {
          AND: [
            {
              bloodType: searchTerm,
            },
            bloodType && {
              bloodType: bloodType,
            },
            availability && {
              availability: availability,
            },
          ],
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
        skip: skip,
        take: limit || 10,
        orderBy: sortBy && {
          ...(sortBy === "lastDonationDate" || sortBy === "age"
            ? {
                UserProfile: {
                  [sortBy]: sortOrder || "asc",
                },
              }
            : {
                [sortBy]: sortOrder || "asc",
              }),
        },
      });

      const totalItems = result.length;

      return {
        data: result,
        totalItems: totalItems,
      };
    }
  }

  const result = await prisma.user.findMany({
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
    skip: skip,
    take: limit || 10,
    orderBy: sortBy && {
      ...(sortBy === "lastDonationDate" || sortBy === "age"
        ? {
            UserProfile: {
              [sortBy]: sortOrder || "asc",
            },
          }
        : {
            [sortBy]: sortOrder || "asc",
          }),
    },
  });

  const totalItems = result.length;

  return {
    data: result,
    totalItems: totalItems,
  };
};

export const searchService = {
  getAllDonorsFromDB,
};
