import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.routes";
import { authRoutes } from "./app/modules/auth/auth.routes";
import { donationRoutes } from "./app/modules/donation/donation.routes";
import { profileRoutes } from "./app/modules/profile/profile.routes";
import { searchRoutes } from "./app/modules/search/search.routes";

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Blood Donation Server Running",
  });
});

app.use("/api/register", userRoutes);
app.use("/api/login", authRoutes);
app.use("/api/donation-request", donationRoutes);
app.use("/api/my-profile", profileRoutes);
app.use("/api/donor-list", searchRoutes);

export default app;
