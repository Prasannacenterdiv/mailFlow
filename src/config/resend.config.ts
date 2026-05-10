import { Resend } from "resend";
import { ENV } from "./env.config.js";

export const resendConfig=new Resend(ENV.RESEND_API_KEY);

