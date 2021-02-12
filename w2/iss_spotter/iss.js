const request = require('request'); // ability to make request from terminal


const fetchMyIP = function(callback) { // makes a single API request to retrieve the user's IP address.
    console.log(callback);
    request('https://api.ipify.org/?format=json', (error, response, body) => {
        if (error) return callback(error, null);

        if (response.statuscode !== 200) {
            callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
            return;
        }

        const is = JSON.parse(body).ip;
        callback(null, ip);
    });
};

const fetchCoordsByIP = function(ip, callback) {
    request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
        if (error) {
            callback(error, null);
            return;
        }

        if (response.statusCode !== 200) {
            callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
            return;
        }

        const { latitude, longitude } = JSON.parse(body);

        callback(null, { latitude, longitude });
    });
};

const fetchISSFlyOverTimes = function(coords, callback) {
    const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;

    request(url, (error, response, body) => {
        if (error) {
            callback(error, null);
            return;
        }

        if (response.statusCode !== 200) {
            callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
            return;
        }

        const passes = JSON.parse(body).response;
        callback(null, passes);
    });
};

const nextISSTimesForMyLocation = function(callback) {
    fetchMyIP((error, ip) => {
        if (error) {
            return callback(error, null);
        }

        fetchCoordsByIP(ip, (error, loc) => {
            if (error) {
                return callback(error, null);
            }

            fetchISSFlyOverTimes(loc, (error, nextPasses) => {
                if (error) {
                    return callback(error, null);
                }

                callback(null, nextPasses);
            });
        });
    });
};

module.exports = { fetchMyIP };
module.exports = { fetchCoordsByIP };
module.exports = { fetchISSFlyOverTimes };
module.exports = { nextISSTimesForMyLocation };

const test = console.log(test);