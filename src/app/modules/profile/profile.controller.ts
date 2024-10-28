import { Request, Response } from "express";
import { profileService } from "./profile.service";

const myProfile = async (req: Request & { user?: any }, res: Response) => {
  try {
    const result = await profileService.getProfileFromDB(req.user.id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Profile retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "Profile not found",
    });
  }
};

const userProfile = async (req: Request , res: Response) => {
  try {
    const result = await profileService.getProfileFromDB(req.params.userId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Profile retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "Profile not found",
    });
  }
};

const updateProfile = async (req: Request & { user?: any }, res: Response) => {
  try {
    const result = await profileService.updateProfileIntoDB(
      req.user.id,
      req.body
    );
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User profile updated successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "Profile not found",
    });
  }
};

const updatePassword = async (req: Request & { user?: any }, res: Response) => {
  try {
    const result = await profileService.updatePasswordIntoDB(
      req.user.id,
      req.body
    );
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User profile updated successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "Profile not found",
    });
  }
};

export const profileController = {
  myProfile,
  userProfile,
  updateProfile,
  updatePassword
};
