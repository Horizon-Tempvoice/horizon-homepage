import Redis from "ioredis";

const getRedisClient = () => {
  const client = new Redis({
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT || "6379", 10),
    password: process.env.REDIS_PASSWORD || undefined,
    username: process.env.REDIS_USERNAME || undefined,
    lazyConnect: false,
    connectTimeout: 1000,
    maxRetriesPerRequest: 1,
    retryStrategy: (times) => (times >= 3 ? null : Math.min(times * 200, 1000)),
  });

  client.on("error", (err) => {
    console.error("Redis error:", err);
  });

  return client;
};

declare global {
  // eslint-disable-next-line no-var
  var redis: Redis | undefined;
}

const redisClient = global.redis ?? getRedisClient();

if (process.env.NODE_ENV !== "production") {
  global.redis = redisClient;
}

export default redisClient;
