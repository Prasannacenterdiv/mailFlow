import React from 'react';
import { render } from "@react-email/components";
import type { MailPayload } from "../../modules/mail/interfaces/mail.interface.js";
import { WelcomeEmail } from "../../modules/mail/templates/WelcomeEmail.js";
import { OTPEmail } from '../../modules/mail/templates/OTPEmail.js';

import { resend } from "../../config/resend.config.js"
import { MAIL_SUBJECTS } from '../../modules/mail/constants/mail.constants.js';
import { ENV } from '../../config/env.config.js';
import { logger } from '../../shared/logger/logger.js';

const renderTemplate = async (payload: MailPayload): Promise<string> => {
    if (payload.type === "welcome")
        return await render(React.createElement(WelcomeEmail, { name: payload.name }));
    if (payload.type === "otp")
        return await render(React.createElement(OTPEmail, { otp: payload.otp, expiresIn: payload.expiresIn }));
    throw new Error("Unknown mail type");
};

export const sendMail = async (payload: MailPayload) => {
    const html = await renderTemplate(payload);
    const result = await resend.emails.send({
        from: ENV.MAIL_FROM,
        to: payload.to,
        subject: MAIL_SUBJECTS[payload.type] ?? "No Subject",
        html,
    });
    logger.info(`Email sent to ${payload.to} [${payload.type}] → ID: ${result.data?.id}`);
    return result;
};