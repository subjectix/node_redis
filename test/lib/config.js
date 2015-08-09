module.exports = (function () {
    var redis = require('../../index');
    redis.debug_mode = process.env.DEBUG ? JSON.parse(process.env.DEBUG) : false;

    var config = {
        redis: redis,
        PORT: 6378,
        HOST: {
            IPv4: "127.0.0.1",
            IPv6: "::1"
        }
    };

    config.configureClient = function (parser, ip, opts) {
        var args = [];
        opts = opts || {};

        args.push(config.PORT);
        args.push(config.HOST[ip]);
        opts.family = ip;
        opts.parser = parser;
        args.push(opts);
        
        return args;
    };

    return config;
})();
