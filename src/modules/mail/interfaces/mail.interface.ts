import { z } from "zod";
import { mailSchema, otpSchema, welcomeSchema } from "../validations/mail.validation.js"



export type WelcomeMailPayload = z.infer<typeof welcomeSchema>;
export type OTPMailPayload = z.infer<typeof otpSchema>;
export type MailPayload = z.infer<typeof mailSchema>;