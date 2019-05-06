var Redis = require('ioredis');
import { Log } from './../log';

export class RedisConnector {
    /**
     * Redis pub/sub client.
     *
     * @type {object}
     */
    private _redis: any;

    /**
     * Create a new instance of subscriber.
     *
     * @param {any} options
     */
    constructor(private options) {
        this._redis = new Redis(options.databaseConfig.redis);
    }

    /**
     * Persist data to Redis hash key.
     *
     * @return {boolean} success
     */
    persist(key, member, data): boolean {
        if (this.options.devMode) {
            Log.info("Custom Event persisting to Redis key: " + key);
            Log.info("Hash member: " + member);
            Log.info("Data: " + data);
        }

        return this._redis.hset(key, member, data);
    }
}
