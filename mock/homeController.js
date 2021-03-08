let Mock  = require("mockjs")
let express = require('express')
let asyncUtil = require('./server')
let router = express.Router()

router.post("/mockData",async function (req,res){
  let data = Mock.mock({
    "flag" : true,
    "code": 200,
    "desc" : null,
    "data": "true"
  })
  console.log(asyncUtil);
  await asyncUtil.sleep(1000)
  return res.json(data)
})

module.exports = router