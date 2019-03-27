import * as types from './mutation-types'
import { MutationTree }  from 'vuex'

const mutations:MutationTree<any> = {
  [types.SAVE_LIST](state: any, list: []) {
    state.list = list
  }
}

export default mutations