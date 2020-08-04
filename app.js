'use strict';

const Cos = require('./lib/cos');

const createCos = options => {
  const { COS } = options;
  const cos = new Cos({ ...options });
  cos.COS = COS;
  return cos;
};

module.exports = app => {
  app.addSingleton('cos', createCos);
};
