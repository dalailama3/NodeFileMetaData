var express = require('express')
var path = require('path')
var multer = require('multer')
var upload = multer( { dest: 'uploads'})
var app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/file-upload', upload.single('file'), function (req, res) {


  res.json({
    "bytes": req.file.size
  })
})

app.listen(process.env.PORT || 3000)
