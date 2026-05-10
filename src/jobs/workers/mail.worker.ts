import { redisConfig } from "../../config/redis.config.js";
import { MAIL_QUEUE_NAME } from "../../modules/mail/constants/mail.constants.js"
import { logger } from "../../shared/logger/logger.js";
import { processMailJob } from "../processors/mail.processor.js"
import { Worker } from "bullmq";



export const createMailWorker = () => {
    const worker = new Worker(MAIL_QUEUE_NAME, processMailJob, {
        connection: redisConfig,
        concurrency: 5
    })

    worker.on("completed", (job) => logger.info(`Job ${job.id} completed`));
    worker.on("failed", (job, err) => logger.error(`Job ${job?.id} failed: ${err.message}`));

    logger.info("Mail worker started");
    return worker;

}
