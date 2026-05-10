export type mailType = 'welcome' | 'otp';

export interface BaseMailPayload {
    to: string,
    type: mailType
}

export interface WelcomeMailPayload extends BaseMailPayload {
    type: 'welcome',
    name: string
}

export interface OtpMailPyaload extends BaseMailPayload {
    type: 'otp',
    otp: string,
    expiresIn: string
}

export type MailPayload = WelcomeMailPayload | OtpMailPyaload;

