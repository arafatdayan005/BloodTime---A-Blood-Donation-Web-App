import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllDonationsFromDB = async () => {
  const result = await prisma.request.findMany({
    include: {
      donor: {
        select: {
          id: true,
          name: true,
          email: true,
          location: true,
          bloodType: true,
          availability: true,
        },
      },
      requester: {
        select: {
          id: true,
          name: true,
          email: true,
          location: true,
          bloodType: true,
          availability: true,
        },
      },
    },
  });

  return result;
};

const requestDonationIntoDB = async (body: any) => {
  const result = await prisma.request.create({
    data: body,
  });

  const resultData = await prisma.request.findFirstOrThrow({
    where: {
      id: result.id,
    },
    select: {
      id: true,
      donorId: true,
      phoneNumber: true,
      dateOfDonation: true,
      hospitalName: true,
      hospitalAddress: true,
      reason: true,
      requestStatus: true,
      createdAt: true,
      updatedAt: true,
      donor: {
        select: {
          id: true,
          name: true,
          email: true,
          bloodType: true,
          location: true,
          availability: true,
          createdAt: true,
          updatedAt: true,
          UserProfile: true,
        },
      },
    },
  });

  return resultData;
};

const getMyDonationsFromDB = async (userId: any) => {
  const result = await prisma.request.findMany({
    where: {
      donorId: userId,
    },
    include: {
      requester: {
        select: {
          id: true,
          name: true,
          email: true,
          location: true,
          bloodType: true,
          availability: true,
        },
      },
    },
  });

  return result;
};

const getAllRequestsFromDB = async (userId: any) => {
  const result = await prisma.request.findMany({
    where: {
      requesterId: userId,
    },
    include: {
      donor: {
        select: {
          id: true,
          name: true,
          email: true,
          location: true,
          bloodType: true,
          availability: true,
        },
      },
    },
  });

  return result;
};

const updateStatusIntoDB = async (
  id: string,
  status: "PENDING" | "APPROVED" | "REJECTED"
) => {
  await prisma.request.findFirstOrThrow({
    where: {
      id: id,
    },
  });

  const updateStatus = await prisma.request.update({
    where: {
      id: id,
    },
    data: {
      requestStatus: status,
    },
  });

  return updateStatus;
};

export const donationService = {
  getAllDonationsFromDB,
  requestDonationIntoDB,
  getMyDonationsFromDB,
  getAllRequestsFromDB,
  updateStatusIntoDB,
};
