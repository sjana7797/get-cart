import Redis from "ioredis";

function getRedisUrl() {
  if (process.env.REDIS_CACHE) {
    return process.env.REDIS_CACHE;
  }

  throw new Error("No Redis url found");
}

const redisUrl = getRedisUrl();

const redis = new Redis(redisUrl);

export { redis };
