let express = require('express');

let app = express();

let router = express.Router();

app.use("/mock", router)

router.use("/recommend",require('./homeController'))

app.listen(9000, () => console.log('awesome,listenling on port 9000'))

function sleep(time) {
  return new Promise((resolve,rejecet) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}

module.exports.sleep = sleep