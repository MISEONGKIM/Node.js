//라우터 모듈화
var express = require("express");
var router = express.Router();

//:id -> 파라미터 설정 동적인 특정 값 받음
router.get("/:id", function(req, res) {
  res.send("Received a GET request, param:" + req.params.id);
});

router.post("/", function(req, res) {
  console.log(JSON.stringify(req.body, null, 2)); //json형태를 좀더 깔끔하게 보여지게 함
  res.json({
    success: true,
    user: req.body.username
  });
});

router.put("/", function(req, res) {
  res.status(400).json({ message: "Hey, you. Bad Request!" });
});

router.delete("/", function(req, res) {
  res.send("Received a DELETE request");
});

module.exports = router; // router 객체 내보내기
