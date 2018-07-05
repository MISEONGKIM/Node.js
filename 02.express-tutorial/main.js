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
app.use("/", express.static("public")); //express 내의 static 미들웨어 , '/' 이 경로로 들어왔을 때 public 디렉터토리에 있는 파일에 접근할 수 있게 해줘
// 위에꺼랑 밑에꺼 경로 같은 데 먼저 작성된 순서대로 우선권 가짐
// app.get("/", function(req, res) {
//   res.send("hello world");
// });

app.use("/user", user); //'/user'로 요청이 들어오면 user 라우터로 연결시킴

//서버 3000 포트로 염
app.listen(3000, function() {
  console.log("Example App listening on port 3000");
});

app.locals.pretty = true; //jade 코드 예쁘게 해줌
app.set("view engine", "jade"); // express에 jade템플릿엔진 연결 , view engine은 템플릿 엔진이라는 뜻 약속된 것, 어떤 템플릿 엔진을? -> jade를
app.set("views", "./views"); // 템플릿이 있는 디렉토리(views : jade파일들)를 express에 알려주는 코드, 이 부분 생략해도 디폴트로 views로 지정되있음
app.get("/template", function(req, res) {
  //'/template'라는 경로로 들어온 사용자에게 콜백함수가 실행되면서 temp라고 하는 템플릿 파일을 웹페이지로 렌더링해서 전송한다
  res.render("temp", { _title: "title", time: Date() }); //첫번째 인자는 템플릿명, 두번째 인자는 jade파일에 정의된 변수들에게 값 전달되는 객체(파라미터 같은?)
});
//즉, response로 temp를 렌더하게 되면 express는 내부적으로 정의해놓은 views디렉토리에서 템플릿엔진으로 jade로 정의 해놓았기 때문에
//jade의 확장자인 temp.jade 찾아서 이 템플릿 파일을 jade의 문법에 따라 해석한 후 사용자에게 response하는 코드

app.get("/form", (req, res) => {
  res.render("form");
});
app.get("/form_receiver", (req, res) => {
  //form 이 get 방식일 때
  var title = req.query.title;
  var description = req.query.description;
  res.send(title + "," + description);
});

var bodyParser2 = require("body-parser");
app.use(bodyParser2.urlencoded({ extended: false }));
//request가 body없는데 bodyParser가 추가해줌
app.post("/form_receiver", (req, res) => {
  //form 이 post 방식일 때
  //req.body 사용하려면 body-parser라는 미들웨어 포함시켜야햄 안하면 값이 undefined임
  var title = req.body.title;
  var description = req.body.description;
  res.send(title + "," + description);
});
