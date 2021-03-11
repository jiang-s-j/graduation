let express = require('express');
let Mock  = require("mockjs")
let app = express();



let router = express.Router();

app.use("/mock", router)

// router.use("/recommend",require('./homeController'))

app.post("/mock/getInitRecommend",async function (req,res){
  let data = Mock.mock({
    "flag" : true,
    "code": 200,
    "desc" : null,
    "data|20-40": [{
      "img": '',
      "name": "@cname",
      "descript|20-50":"@cname"
    }]
  })
  await sleep(1000)
  return res.json(data)
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