import { Request, Response } from "express";
import { userService } from "./user.service";

const registerUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.registerUserIntoDB(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "User registered successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "Something went wrong",
    });
  }
};

export const userController = {
  registerUser,
};
