import { addMailToQueue } from "../producers/mail.producers.js";

import type { MailPayload } from "../interfaces/mail.interface.js"


export const queueMail = (payload: MailPayload) => addMailToQueue(payload);