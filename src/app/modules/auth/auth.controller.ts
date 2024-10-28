import { Request, Response } from "express";
import { authService } from "./auth.service";

const login = async (req: Request, res: Response) => {
  try {
    const result = await authService.loginUser(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "Incorrect Password",
    });
  }
};

export const authController = {
  login,
};
