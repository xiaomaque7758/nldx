const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.listen(3000,function(){
    console.log("服务器创建成功")
})
app.use(bodyParser.urlencoded({
    extended:false
}));

//托管静态页面
app.use(express.static("public"));
//挂载路由


