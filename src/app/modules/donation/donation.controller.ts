import { Request, Response } from "express";
import { donationService } from "./donation.service";

const allDonations = async (req: Request , res: Response) => {
  try {
    const result = await donationService.getAllDonationsFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Donation retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "Donations not found",
    });
  }
};

const requestDonation = async (
  req: Request & { user?: any },
  res: Response
) => {
  try {
    const requestData = {
      donorId: req.body.donorId,
      requesterId: req.user.id,
      phoneNumber: req.body.phoneNumber,
      dateOfDonation: req.body.dateOfDonation,
      hospitalName: req.body.hospitalName,
      hospitalAddress: req.body.hospitalAddress,
      reason: req.body.reason,
    };
    const result = await donationService.requestDonationIntoDB(requestData);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Request successfully made",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "User not found",
    });
  }
};

const myDonations = async (req: Request & { user?: any }, res: Response) => {
  try {
    const result = await donationService.getMyDonationsFromDB(req.user.id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Donation requests retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "User not found",
    });
  }
};

const myRequests = async (req: Request & { user?: any }, res: Response) => {
  try {
    const result = await donationService.getAllRequestsFromDB(req.user.id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Donation requests retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "User not found",
    });
  }
};

const updateStatus = async (req: Request, res: Response) => {
  try {
    const result = await donationService.updateStatusIntoDB(
      req.params.requestId,
      req.body.status
    );
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Donation request status successfully updated",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "Request not found",
    });
  }
};

export const donationController = {
  allDonations,
  requestDonation,
  myDonations,
  myRequests,
  updateStatus,
};
