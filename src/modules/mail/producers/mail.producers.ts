import { mailQueue } from "../../../infrastructure/queues/mail.queue.js";
import type { MailPayload } from "../interfaces/mail.interface.js";

export const addMailToQueue = (payload: MailPayload) => mailQueue.add(`send-${payload.type}`, payload);

