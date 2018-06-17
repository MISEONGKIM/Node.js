//메인 애플리케이션의 이름으로 app.js 많이 사용, 엔트리애플리케이션, 실행 시 최초의 진입점  
var express = require('express');
var app = express(); 
//express 쓸려면 이렇게 두 줄 형식대로 쓴다.

//홈페이지 경로 -> /
app.get('/', (req, res) => {
    //콜백함수, 매개변수 형태 사용설명서에(doc)에 약속되어있음
    res.send('hello home page');
});
app.get('/login',(req, res) => {
    res.send('login please');
});
//app을 이용해서 애플리케이션을 만들 수 있는 데 이 웹 애플리케이션이 3000번 포트를 바라볼 수 있게
app.listen(3000, function() {
    //콜백함수
    console.log('Conneted 3000 port!');
}); 
 