import * as Acts from '@/store/contans'
import { takeEvery } from 'redux-saga/effects'

function * testAsync () {
  console.log('isrunning');
}


function * IndexSage() {
  console.log('aa ');
  yield takeEvery(Acts.TESTINDEX,testAsync)
}

export default IndexSage