import { asyncHandler } from "../../../shared/utils/async-handler.js";
import type { Request, Response } from "express";
import { mailSchema } from "../validations/mail.validation.js";
import { AppError } from "../../../shared/exceptions/AppError.js";
import { queueMail } from "../services/mail.service.js";
import { sendSuccess } from "../../../shared/responses/api.response.js";


export const sendMailController = asyncHandler(async (req: Request, res: Response) => {
    const parsed = mailSchema.safeParse(req.body);
    if (!parsed.success) {
        throw new AppError(parsed.error.message, 400);
    }

    await queueMail(parsed.data);
    return sendSuccess(res, { message: "Mail queued successfully" }, 202);
}