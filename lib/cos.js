'use strict';

const CosSdk = require('cos-nodejs-sdk-v5');

/**
 * **egg-cos**
 *
 * Tencent Cloud COS Object Simple API for Egg.js.
 * With Promisfy.
 * Useage like [ali-oss]{@link https://github.com/ali-sdk/ali-oss}.
 *
 * @see https://cloud.tencent.com/document/product/436/8629
 * @see https://github.com/tencentyun/cos-nodejs-sdk-v5
 * @class COS
 */
class COS {
  constructor(options) {
    const Cos = options?.COS || CosSdk;
    delete options.COS;
    this.options = options;
    this.cos = new Cos(options);
  }

  callback(err, res, resolve, reject) {
    if (!err) {
      resolve(res);
      return;
    }
    const error = new Error(JSON.stringify(err));
    error.name = 'CosError';
    reject(error);
    return;
  }

  /**
   * **get object url with signature**
   *
   * @see https://cloud.tencent.com/document/product/436/36121
   * @param {String} Key object key
   * @param {Object} options user defined options
   * @return {Object} result with signature url
   * @memberof COS
   */
  signatureUrl(Key, options) {
    const params = { ...this.options, Key, ...options };
    return new Promise((resolve, reject) => {
      this.cos.getObjectUrl(params, (err, res) => {
        this.callback(err, res, resolve, reject);
      });
    });
  }

  /**
   * **get object head**
   *
   * @see https://cloud.tencent.com/document/product/436/7745
   * @param {Stirng} Key object key
   * @param {Object} options user defined options
   * @return {Object} head result
   * @memberof COS
   */
  head(Key, options) {
    const params = { ...this.options, Key, ...options };
    return new Promise((resolve, reject) => {
      this.cos.headObject(params, (err, res) => {
        this.callback(err, res, resolve, reject);
      });
    });
  }

  /**
   * **get object options cors preflight**
   *
   * @see https://cloud.tencent.com/document/product/436/8288
   * @param {Stirng} Key object key
   * @param {Object} options user defined options
   * @return {Object} options result
   * @memberof COS
   */
  options(Key, options) {
    const params = { ...this.options, Key, ...options };
    return new Promise((resolve, reject) => {
      this.cos.optionsObject(params, (err, res) => {
        this.callback(err, res, resolve, reject);
      });
    });
  }

  /**
   * **get object**
   *
   * @see https://cloud.tencent.com/document/product/436/7753
   * @param {String} Key object key
   * @param {Object} Output write stream of file
   * @param {Object} options user defined options
   * @return {Buffer | WriteStream | String} output
   * @memberof COS
   */
  get(Key, Output, options) {
    const params = { ...this.options, Key, Output, ...options };
    return new Promise((resolve, reject) => {
      this.cos.getObject(params, (err, res) => {
        this.callback(err, res, resolve, reject);
      });
    });
  }

  /**
   * **put file to object**
   *
   * @see https://cloud.tencent.com/document/product/436/7749
   * @param {String} Key object key of target
   * @param {Buffer | ReadStream | String} Body input of file
   * @param {Object} options user defined options
   * @return {object} put result
   * @memberof COS
   */
  put(Key, Body, options) {
    const params = { ...this.options, Key, Body, ...options };
    return new Promise((resolve, reject) => {
      this.cos.putObject(params, (err, res) => {
        this.callback(err, res, resolve, reject);
      });
    });
  }

  /**
   * **copy uri to object even cross butcket**
   *
   * @see https://cloud.tencent.com/document/product/436/10881
   * @param {String} Key target object key
   * @param {String} CopySource resource Uri, like: <BucketName-APPID>.cos.<Region>.myqcloud.com/sourceKey
   * @param {Object} options user defined options
   * @return {Object} copy result
   * @memberof COS
   */
  copy(Key, CopySource, options) {
    const params = { ...this.options, Key, CopySource, ...options };
    return new Promise((resolve, reject) => {
      this.cos.putObjectCopy(params, (err, res) => {
        this.callback(err, res, resolve, reject);
      });
    });
  }

  /**
   * **delete object**
   *
   * @see https://cloud.tencent.com/document/product/436/7743
   * @param {String} Key object key
   * @param {Object} options user defined options
   * @return {Object} delete result
   * @memberof COS
   */
  delete(Key, options) {
    const params = { ...this.options, Key, ...options };
    return new Promise((resolve, reject) => {
      this.cos.deleteObject(params, (err, res) => {
        this.callback(err, res, resolve, reject);
      });
    });
  }

  /**
   * **delete objects**
   *
   * @param {Array | Object} Objects target objects Array like [{ Key }]
   * @param {Object} options user defined options
   * @return {Object} delete result
   * @memberof COS
   */
  deleteMulti(Objects, options) {
    const params = { ...this.options, Objects, ...options };
    return new Promise((resolve, reject) => {
      this.cos.deleteMultipleObject(params, (err, res) => {
        this.callback(err, res, resolve, reject);
      });
    });
  }

  /**
   * **restore post object**
   *
   * @see https://cloud.tencent.com/document/product/436/12633
   * @param {String} Key target object key
   * @param {Object} options user defined options
   * @return {Object} restore result
   * @memberof COS
   */
  restore(Key, options) {
    const params = { ...this.options, Key, ...options };
    return new Promise((resolve, reject) => {
      this.cos.restoreObject(params, (err, res) => {
        this.callback(err, res, resolve, reject);
      });
    });
  }
}

module.exports = COS;
