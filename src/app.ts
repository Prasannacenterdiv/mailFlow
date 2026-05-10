import express from "express";
import { mailRoutes } from "./modules/mail/index.js"
import { errorMiddleware } from "./shared/middleware/error.middleware.js"

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.json({ status: "ok" }));
app.use("/api/mail", mailRoutes);
app.use(errorMiddleware);
export default app;