import express, { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { donationController } from "./donation.controller";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

const auth = () => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new Error("You are not authorized!");
      }

      const verifiedUser = jwt.verify(token, "32BitHashString") as JwtPayload;

      const findUser = await prisma.user.findFirstOrThrow({
        where: {
          email: verifiedUser.email,
        },
      });

      if (!findUser) {
        throw new Error("User not found!");
      }

      req.user = findUser;

      next();
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.name || err.message || "You are not authorized.",
        errorDetails: "unauthorized error",
      });
    }
  };
};

router.post("/", auth(), donationController.requestDonation);
router.get("/", auth(), donationController.myDonations);
router.get("/all", donationController.allDonations);
router.get("/requests", auth(), donationController.myRequests);
router.put("/:requestId", auth(), donationController.updateStatus);

export const donationRoutes = router;
