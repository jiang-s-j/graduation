import {put, takeEvery, takeLatest} from 'redux-saga/effects'
import * as Act from '@/store/contans'
import {getRecommend} from '@/api/index'

import Require from '@/utils/axios';
import Path from '@/config/path'




function  * initRecommendAsync(action) {
  console.log(1);
  try {
    const res = yield Require.post(Path.baseUrl + '/getInitRecommend')
    if(res.flag && res.data) {
      yield put({type: 'setrecommend',load: res.data})
    }

  } catch (error) {
    
  }
}

function * recommendSaga() {
  console.log('0');
  yield takeEvery('initRecommendSaga',initRecommendAsync)
}

export default recommendSaga  