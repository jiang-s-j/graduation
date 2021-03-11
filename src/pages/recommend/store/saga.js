import {takeEvery} from 'redux-saga/effects'
import * as Act from '@/store/contans'
import {getRecommend} from '@/api/index'

import Require from '@/utils/axios';
import Path from '@/config/path'


function * recommendSaga() {
  console.log('aa');
  yield takeEvery('initRecommendSaga',initRecommendAsync)
}

function  * initRecommendAsync(action) {
  try {
    const res = yield Require.post(Path.baseUrl + '/getInitRecommend')
    if(res.flag && res.data) {
      
    }

  } catch (error) {
    
  }


}

export default recommendSaga  