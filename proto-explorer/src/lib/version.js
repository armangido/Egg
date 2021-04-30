import { aux } from "./proto";

const APP_VERSION = "1.20.8";
const APP_BUILD = "1.20.8.4";
const CLIENT_VERSION = 31;
const PLATFORM_STRING = "IOS";
const PLATFORM = aux.Platform.IOS;

/**
 * @param {!String} userId
 * @returns {!Object}
 */
function basicRequestInfo(userId) {
  return {
    eiUserId: userId,
    clientVersion: CLIENT_VERSION,
    version: APP_VERSION,
    build: APP_BUILD,
    platform: PLATFORM_STRING,
  };
}

export { APP_VERSION, APP_BUILD, CLIENT_VERSION, PLATFORM_STRING, PLATFORM, basicRequestInfo };
