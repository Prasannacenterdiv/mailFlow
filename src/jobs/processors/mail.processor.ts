import type { Job } from "bullmq";
import { sendMail } from "../../infrastructure/providers/resend.provider.js";
import type { MailPayload } from "../../modules/mail/interfaces/mail.interface.js";
import { logger } from "../../shared/logger/logger.js";

export const processMailJob = async (job: Job<MailPayload>) => {

    logger.info(`Processing job [${job.id}] type: ${job.data.type}`);
    await sendMail(job.data);

}