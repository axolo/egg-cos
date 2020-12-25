# egg-cos

[腾讯云COS] [SDK] Egg.js插件。

## 安装

```bash
npm i @axolo/egg-cos --save
```

## 开启插件

```js
// {app_root}/config/plugin.js
exports.cos = {
  enable: true,
  package: '@axolo/egg-cos',
};
```

## 详细配置

```js
// {app_root}/config/config.default.js
exports.cos = {
  SecretId: 'COS_SECRETID',
  SecretKey: 'COS_SECRETKEY',
  Bucket: 'BUCKET-APPID',
  Region: 'COS_REGION', // e.g ap-shanghai
};
```

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 例子

获取文件授权访问URL，例如：`http://localhost:7001/cos/logo.png`。

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

## 提问交流

请到 [egg issues](https://github.com/axolo/egg-cos/issues) 异步交流。

## License

[MIT](LICENSE)

[腾讯云COS]: https://cloud.tencent.com/document/product/436/8629
[SDK]: https://github.com/tencentyun/cos-nodejs-sdk-v5
