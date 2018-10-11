let printMoudleInfo = require("../utils/moduleInfo");
printMoudleInfo(__filename, __dirname);

console.log("argv:", process.argv);

console.log("env:", process.env);
process.on("exit", code => {
  console.log("!!!进程退出,退出码：", code);
});
