
var caculator = require('./caculator')
var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log("girnamL:::  " + __dirname);
});

app.post('/', function(req, res){
  var a = req.body.a;
  var b = req.body.b;
  var phepTinh = req.body.phepTinh;

  if(phepTinh == "+") {
    var tong = caculator.add(parseInt(a), parseInt(b))
    res.send("Tong: " + tong)
  } else if(phepTinh == "-") {
    var tru = caculator.subtract(parseInt(a), parseInt(b))
    res.send("Tru: " + tru)
  } else if(phepTinh == "*") {
    var nhan = caculator.multiply(parseInt(a), parseInt(b))
    res.send("Nhan: " + nhan)
  } else if(phepTinh == "/") {
    var chia = caculator.chia(parseInt(a), parseInt(b))
    res.send("Chia: " + chia)
  }

  console.log("Gia tri bodu" + req.body);

  console.log("Tong: " + tong + "\n Phep tru" + tru + "\nPhep nhan " + nhan);
  
});

app.listen(PORT, () => console.log("Server dang chay cong : "+ PORT));