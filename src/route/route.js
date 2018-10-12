let express = require("express");
let app = express();

let moudleInfo = require("../utils/moduleInfo");
moudleInfo.printMoudleInfo(__filename, __dirname);

// 处理静态文件
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("首页数据");
});

app.get("/userInfo", (req, res) => {
  res.send("用户信息数据");
});

app.get("/userList", (req, res) => {
  res.send("用户列表");
});

app.post("/", (req, res) => {
  res.send("首页post请求");
});

let server = app.listen(8091, () => {
  let { address, port } = server.address();
  console.log("路由测试服务访问地址： http://%s:%s", address, port);
});
