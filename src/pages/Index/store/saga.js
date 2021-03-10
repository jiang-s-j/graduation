import * as Acts from '@/store/contans'
import { takeEvery } from 'redux-saga/effects'
import {getRecommend,testapi}from '@/api/index'

function * testAsync () {
 
}


function * IndexSage() {
  yield takeEvery(Acts.TESTINDEX,testAsync)
}

export default IndexSage