import { initGlobalState } from 'qiankun'
// 初始化 state
let state = {
    userName:'Sakura',
    userID:'7777777',
    score:0
}
const actions = initGlobalState(state);
actions.onGlobalStateChange((newData, prev) => {
  // newData: 变更后的状态; prev 变更前的状态
  console.log('主应用监听onGlobalStateChange', newData);
  state = newData
});
export {actions,state}

