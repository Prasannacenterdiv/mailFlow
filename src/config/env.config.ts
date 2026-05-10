import dotenv from 'dotenv';
dotenv.config();


export const ENV={
    PORT:process.env.PORT || 3000,
    REDIS_HOST:process.env.REDIS_HOST || "127.0.0.1",   
    REDIS_PORT:process.env.REDIS_PORT || 6379,
    RESEND_API_KEY:process.env.RESEND_API_KEY!,
    MAIL_FROM:process.env.MAIL_FROM!,
}

