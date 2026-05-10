import { Router } from "express";
import { sendMailController } from "../controller/mail.controller.js";
const router = Router();
router.post("/send", sendMailController);

export default router;