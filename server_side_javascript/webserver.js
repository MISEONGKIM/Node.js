//웹 서버를 이렇게 짧은 코드로 만든 것
//http를 통해 접속한다면 80번 port를 쓰자라는 약속
//node.js는 서버쪽에 위치하면서 빠르고 편리하게 응답할 수 있는 기반시스템을 제공한다.
const http = require('http'); //밑의 코드들을 위해선 http모듈(부품)이 요구된다.
 
const hostname = '127.0.0.1';
const port = 1337;

//createServer -> return: http.Sever(http라는 모듈의 Server라는 객체를 리턴)
//http.Sever 클래스는 listen이라는 메소드 가짐
http.createServer((req, res) => {
    //응답 결과 
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => { 
    //콜백함수
 console.log(`Server running at http://${hostname}:${port}/`);
});