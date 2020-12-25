# egg-cos

[Tencent Cloud COS] [SDK] plugin for Egg.js.

## Install

```bash
npm i @axolo/egg-cos --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.cos = {
  enable: true,
  package: '@axolo/egg-cos',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.cos = {
  SecretId: 'COS_SECRETID',
  SecretKey: 'COS_SECRETKEY',
  Bucket: 'BUCKET-APPID',
  Region: 'COS_REGION', // e.g ap-shanghai
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

Get file signature url from cos like `http://localhost:7001/cos/logo.png`.

```js
const Controller = require('egg').Controller;

class CosController extends Controller {
  async show() {
    const { app, ctx } = this;
    const { id } = ctx.params;
    const res = await app.cos.signatureUrl(id);
    ctx.body = res;
  }
}

module.exports = CosController;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-cos/issues).

## License

[MIT](LICENSE)

[Tencent Cloud COS]: https://cloud.tencent.com/document/product/436/8629
[SDK]: https://github.com/tencentyun/cos-nodejs-sdk-v5
