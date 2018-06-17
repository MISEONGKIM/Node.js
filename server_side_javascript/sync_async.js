var fs = require('fs'); //파일 시스템도 모듈이므로 require로 불러옴
console.log(1);
//readFileSync(file,[option]) : 동기 
var data = fs.readFileSync('./server_side_javascript/data.txt',{encoding: 'utf8'}); //encoding 객체 옵션부분에 넘겨줌
console.log(data);

console.log(2);
//readFile(file,[option],callback) : 비동기
fs.readFile('./server_side_javascript/data.txt',{encoding: 'utf8'},function(err,data){
    console.log(3);
    console.log(data);
});
console.log(4);

// 1 2 4 3 순으로 나옴 
// 동기는 1번 실행 -> readFileSync 실행 끝난 후 -> log(data) 실행
// 비동기는 2번 실행 -> readFile 실행 끝날 때 까지 안기다리고 -> 4번 실행 -> 실행 끝나면 3번 실행(콜백함수가 호출되면서 실행이 끝났다라고 알려줌)
