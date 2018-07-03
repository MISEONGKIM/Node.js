var express = require("express");
var app = express();
var user = require("./routes/user");
var morgan = require("morgan");
var bodyParser = require("body-parser");

// var myLogger = function(req, res, next) {
//   console.log(req.url);
//   next();
// };
// app.use(myLogger);

app.use(morgan("dev")); //터미널에 logging정보 뜸
app.use(bodyParser.json()); //json 형태의 body를 읽을 수 있게 해줘라고 설정
app.use("/", express.static("public")); //'/' 이 경로로 들어왔을 때 public 디렉터토리에 있는 파일에 접근할 수 있게 해줘
// 위에꺼랑 밑에꺼 경로 같은 데 먼저 작성된 순서대로 우선권 가짐
// app.get("/", function(req, res) {
//   res.send("hello world");
// });

app.use("/user", user); //'/user'로 요청이 들어오면 user 라우터로 연결시킴

//서버 3000 포트로 염
app.listen(3000, function() {
  console.log("Example App listening on port 3000");
});
