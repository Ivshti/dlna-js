var express = require('express');
var MediaRendererClient = require('upnp-mediarenderer-client');
var subtitlesUrl = 'http://192.168.0.106:8000/movie.srt';
var client = new MediaRendererClient('http://192.168.0.106:1871/');
var app = express();
app.use(function(req, res, next) {
  res.header('transferMode.dlna.org', 'Streaming');
  res.header('contentFeatures.dlna.org', 'DLNA.ORG_OP=01;DLNA.ORG_CI=0;DLNA.ORG_FLAGS=017000 00000000000000000000000000')
  res.header('CaptionInfo.sec', subtitlesUrl);
  next();
});

app.use('/', express.static(__dirname));

app.listen(8000, '0.0.0.0');
client.load('http://192.168.0.106:8000/movie.mp4', { autoplay: true  }, function(err, result) {
  console.log('playing ...');
});
