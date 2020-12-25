'use strict';

const COS = require('cos-nodejs-sdk-v5');

/**
 * egg-cos default config
 * @member Config#cos
 * @property {String} SOME_KEY - some description
 * @see https://cloud.tencent.com/document/product/436/8629
 */
exports.cos = {
  default: {
    COS,
  },
  // client: {
  //   SecretId: 'COS_SECRETID',
  //   SecretKey: 'COS_SECRETKEY',
  //   Bucket: 'BUCKET-APPID',
  //   Region: 'COS_REGION', // e.g ap-shanghai
  // },
};
