import { Queue } from "bullmq";
import { MAIL_QUEUE_NAME } from "../../modules/mail/constants/mail.constants.js";
import { redisConfig } from "../../config/redis.config.js";

export const mailQueue = new Queue(MAIL_QUEUE_NAME, {
    connection: redisConfig,
    defaultJobOptions: {
        attempts: 3,
        backoff: {
            type: "exponential",
            delay: 5000
        },
        removeOnComplete: true,
        removeOnFail: true
    }

})