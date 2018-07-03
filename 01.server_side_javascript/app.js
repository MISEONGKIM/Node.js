//메인 애플리케이션의 이름으로 app.js 많이 사용, 엔트리애플리케이션, 실행 시 최초의 진입점
var express = require("express");
var app = express();
//express 쓸려면 위에 두 줄 형식대로 쓴다.

//public이라는 디렉토리에 정적인파일(이미지) 가져다 놓으면 사용자에게 서비스 가능
//express에 내장된 static 미들웨어임
app.use(express.static("public"));

//홈페이지 경로 -> /
app.get("/", (req, res) => {
  //콜백함수, 매개변수 형태 사용설명서에(doc)에 약속되어있음
  res.send("hello home page");
});
app.get("/login", (req, res) => {
  res.send("login please");
});

//public 디렉토리 및 route이미지
app.get("/route", (req, res) => {
  res.send('<img src="/route.png">');
});

//동적인 웹페이지 localhost/dynamic
app.get("/dynamic", (req, res) => {
  //send안에 그냥 html태그 쓰면 오류남 `안에 쓰면 안남

  //동적인 웹페이지 편한 경우 만약 li가 만개면 정적으로 생성하기 힘듬
  var lis = "";
  for (var i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }
  res.send(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Page Title</title>
    </head>
    
    <body>
      Hello Static
        <ul>
        ${lis} <!-- \`이걸 썻기 때문에 이렇게 선언 가능 --!>
        </ul>
      </body>
    </html>`);
});

//app을 이용해서 애플리케이션을 만들 수 있는 데 이 웹 애플리케이션이 3000번 포트를 바라볼 수 있게
app.listen(3000, function() {
  //콜백함수
  console.log("Conneted 3000 port!");
});
