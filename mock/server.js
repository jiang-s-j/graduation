let express = require('express');

let app = express();

// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
//   });


let router = express.Router();

app.use("/mock", router)

// router.use("/recommend",require('./homeController'))

app.post("/mock/recommend/mockData",async function (req,res){
  let data = Mock.mock({
    "flag" : true,
    "code": 200,
    "desc" : null,
    "data": "true"
  })
  console.log(asyncUtil);
  await sleep(1000)
  return res.json(data)
})
app.get('/mock/test',(req,res) => {
  res.json('hellow')
})

app.listen(9000, () => console.log('awesome,listenling on port 9000'))

function sleep(time) {
  return new Promise((resolve,rejecet) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}

module.exports.sleep = sleep