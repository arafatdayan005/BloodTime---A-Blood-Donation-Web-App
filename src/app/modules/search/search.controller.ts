import { Request, Response } from "express";
import { searchService } from "./search.service";

const donorList = async (req: Request, res: Response) => {
  try {
    const { searchTerm, page, limit, sortBy, sortOrder, bloodType, availability } = req.query;
    const skip = (Number(page || 1) - 1) * Number(limit || 10);

    const result = await searchService.getAllDonorsFromDB(searchTerm, skip, Number(limit), sortBy, sortOrder, bloodType, availability);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Donors successfully found",
      meta: {
        total: result.totalItems,
        page: page || 1,
        limit: limit || 10,
      },
      data: result.data,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.name || err.message || "Something went wrong",
      errorDetails: "Donors not found",
    });
  }
};

export const searchController = {
  donorList,
};
