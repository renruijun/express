let express = require("express");
let app = express();
let path = require("path");
let fs = require("fs");

let printMoudleInfo = require("../utils/moduleInfo");
printMoudleInfo(__filename, __dirname);

// 处理静态文件
app.use(express.static("public"));

app.get("/index", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf8");
  res.sendFile(__dirname + "/index.html");
});

app.get("/getForm", (req, res) => {
  let data = { name: req.query.name, age: req.query.age };
  res.end(JSON.stringify(data));
});

app.get("/getText", (req, res) => {
  let data = {
    status: 200,
    data: "我是ajax返回的新文本"
  };
  res.setHeader("Content-Type", "text/html; charset=utf8");
  res.end(JSON.stringify(data));
});

app.get("/getUserList", (req, res) => {
  let dataPath = path.resolve(__dirname, "..") + "/users.json";
  fs.readFile(dataPath, "utf8", (err, data) => {
    let resData = {
      status: 200,
      data: data
    };
    res.setHeader("Content-Type", "text/html; charset=utf8");
    res.end(JSON.stringify(resData));
  });
});

let server = app.listen(8092, () => {
  let { address, port } = server.address();
  console.log("GET服务访问地址： http://%s:%s", address, port);
});
