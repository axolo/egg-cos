'use strict';

/**
 * **Tencent Cloud COS Promise API**
 *
 * API useage like ali-oss
 *
 * @see https://cloud.tencent.com/document/product/436/8629
 * @see https://github.com/tencentyun/cos-nodejs-sdk-v5
 * @see https://github.com/ali-sdk/ali-oss
 * @class COS
 */
class COS {
  constructor(options) {
    const { COS } = options;
    delete options.COS;
    this.options = options;
    this.cos = new COS(options);
  }

  signatureUrl(Key, options) {
    const params = { ...this.options, Key, ...options };
    return new Promise((resolve, reject) => {
      this.cos.getObjectUrl(params, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
  }

  get(Key, Output, options) {
    const params = { ...this.options, Key, Output, ...options };
    return new Promise((resolve, reject) => {
      this.cos.getObject(params, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
  }

  put(Key, Body, options) {
    const params = { ...this.options, Key, Body, ...options };
    return new Promise((resolve, reject) => {
      this.cos.putObject(params, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
  }

  delete(Key, options) {
    const params = { ...this.options, Key, ...options };
    return new Promise((resolve, reject) => {
      this.cos.deleteObject(params, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
  }

  // CopySource: <BucketName-APPID>.cos.<Region>.myqcloud.com/sourceKey
  // Key: targetKey only
  // @see: https://cloud.tencent.com/document/product/436/10881
  copy(Key, CopySource, options) {
    const params = { ...this.options, Key, CopySource, ...options };
    return new Promise((resolve, reject) => {
      this.cos.putObjectCopy(params, (err, data) => {
        console.log(err);
        if (err) return reject(err);
        return resolve(data);
      });
    });
  }
}

module.exports = COS;
