import * as types from "./mutation-types";
import { ActionTree, Action } from "vuex";

import {getListData } from '@/api';



const getList: Action<object, object> = ({ commit }, params) => {
  return new Promise((resolve, reject) => {
    getListData(params, (res:any) => {
      if(+res.code === 200 && res.data.page) {
        const data = res.data;
        commit(types.SAVE_LIST, data.page.data);
        resolve(data);
      } else {
        reject(res.msg);
      }
    });
  });
};


const actions: ActionTree<object, object> = {
  getList,
};

export default actions;
