import type { Job } from "bullmq";
import { sendMail } from "../../infrastructure/providers/resend.provider.js";
import type { MailPayload } from "../../modules/mail/interfaces/mail.interface.js";

export const processMailJob = async (job: Job<MailPayload>) => await sendMail(job.data);