var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/attribute/group/list', function (req, res) {
    var text = '{"output":[{"id":1,"name":"QQQ","enable":null,"createdAt":"2016-09-01T14:13:25.481Z","updatedAt":"2016-09-01T14:13:25.481Z"},{"id":2,"name":"我的测试","enable":null,"createdAt":"2016-09-01T15:08:05.192Z","updatedAt":"2016-09-01T15:08:05.192Z"}],"success":true,"message":""}';
    res.send(text);
});

app.get('*', function (req, res) {
    res.json({success: true});
});

app.post('*', function (req, res) {
    res.json({success: true});
});

app.listen(2016, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:2016');
});
