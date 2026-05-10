import { z } from "zod";

export const welcomeSchema = z.object({
    to: z.string().email(),
    type: z.literal("welcome"),
    name: z.string().min(1),
});

export const otpSchema = z.object({
    to: z.string().email(),
    type: z.literal("otp"),
    otp: z.string().length(6),
    expiresIn: z.string().optional(),
});

export const mailSchema = z.discriminatedUnion("type", [welcomeSchema, otpSchema]);