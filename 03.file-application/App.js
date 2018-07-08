var express = require('express');
var app = express(); //express모듈 가져왔으면 application 객체 만들어야됨
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
var fs = require('fs');

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

app.get('/topic/new', (req, res) => {
    fs.readdir('data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('new', {topics:files});
    });
})
app.get(['/topic', '/topic/:id'], (req, res) => {
    fs.readdir('data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        var id = req.params.id; //자바스크립트에선 값으면 null이 아닌 false와 등가
        if (id) {
            //id 값이 있을 때
            fs.readFile('data/' + id, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                }
                res.render('view', {
                    topics: files,
                    title: id,
                    description: data
                });
            });
        } else {
            //id 값이 없을 때 
            res.render('view', {
                topics: files,
                title: 'Welcome',
                description: 'Hello, javaScript for server.'
            });
        }
    });
});

// app.get('/topic/:id', (req, res) => {
//     var id = req.params.id;
//     fs.readdir('data',(err, files) => {
//         if(err) {
//             console.log(err);
//             res.status(500).send('Internal Server Error');
//         }
//         fs.readFile('data/' + id, 'utf8', (err,data) => {
//             if(err) {
//                 console.log(err);
//                 res.status(500).send('Internal Server Error');
//             }
//             res.render('view', {topics:files, title:id, description:data});
//         }); 
//     });

// });

app.post('/topic', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile(('data/' + title), description, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/' + title);
    });
});

app.listen(3000, function () {
    console.log('connectd, 3000port');
}); //특정 포트 listening하게 함
