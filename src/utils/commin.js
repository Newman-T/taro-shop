import Taro from '@tarojs/taro';
import Event from './events';

const foodKey = 'taro_meituan;'
let myEvent = new Event();
//获取当前菜单数量
export function getFoodCount(food) {
  let store = Taro.getStorageSync(foodKey);
  if (store) {
    if (store[food.id]) {
      return store[food.id].number
    }
  } else {
    return 0
  }
}
//设置当前菜单数量
export function setFoodCount(food, num, type, callBack) {
  if (food) {
    let store = Taro.getStorageSync(foodKey);
    if (!store) {
      store = {}
    }
    if (type=='cut') {
      if (num==1) {
        if (store[food.id]) {
          delete store[food.id];
        }
      } else {
        if (store[food.id]) {
          store[food.id].number = num-1;
        }
      }
      Taro.setStorageSync(foodKey, store);
      callBack&&callBack();
    }
    if (type=='add') {
      if (store[food.id]) {
        store[food.id].number = num+1;
      } else {
        store[food.id] = {number: 1,...food};
      }
      Taro.setStorageSync(foodKey, store);
      callBack&&callBack();
    }
    
  }
}
export function getEvent() {
  return myEvent
}