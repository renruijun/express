let path = require("path");

let printMoudleInfo = (filename, dirname) => {
  console.info("======================================================");
  console.info("= 模块信息：");
  console.info("= 模块名称：", path.parse(filename).base);
  console.info("= 模块路径：", dirname);
  console.log(
    "= 模块路径转换用 path 模块：http://www.runoob.com/nodejs/nodejs-path-module.html"
  );
  console.info("======================================================");
};

module.exports = printMoudleInfo;
