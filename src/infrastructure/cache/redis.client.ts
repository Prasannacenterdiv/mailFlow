import Redis from 'ioredis';
import { redisConfig } from '../../config/redis.config.js';
import { logger } from '../../shared/logger/logger.js';

export const redisClient = new Redis(redisConfig);

redisClient.on('connect', () => logger.info('Connected to REDIS!'));
redisClient.on('error', (err: Error) => logger.error(`REDIS connection error: ${err}`));
