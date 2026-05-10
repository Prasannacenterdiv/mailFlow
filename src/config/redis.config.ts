import { ENV } from "./env.config.js"

export const redisConfig={
    host:ENV.REDIS_HOST,
    port:ENV.REDIS_PORT 
}
