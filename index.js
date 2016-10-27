exports = module.exports = require('./lib/client');
exports.AbstractStore = require('./lib/store');
exports.MemoryStore = require('./lib/stores/memory');
exports.RedisStore = require('./lib/stores/redis');
