let mongoose = require("mongoose");
// 添加更详细的连接日志

mongoose
  .connect("mongodb+srv://yy2935140484:439952014710q@cluster0.kuvzpp4.mongodb.net/food")
  .then(() => {
    console.log("数据库连接成功！");
  })
  .catch((err) => {
    console.log("数据库连接失败:", err);
  });


module.exports = {
  
};
