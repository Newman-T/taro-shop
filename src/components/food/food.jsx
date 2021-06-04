import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import Cata from './cata';
import FootList from './footList';
import './food.scss';

export default class Food extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      current: 0,
      foodList: [],
      currentList: []
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  chagneCata(selectCata) {
    if (this.state.foodList.some(item => item.pid==selectCata.id)) {
      //不加载数据
      const newArr = this.state.foodList.filter(item => {
        return item.pid==selectCata.id
      })
      this.setState({
        currentList: newArr
      })
    } else {
      //加载数据
      this.setState({
        foodList: this.state.foodList.concat(this.getData(selectCata))
      }, ()=>{
        const newArr = this.state.foodList.filter(item => {
          return item.pid==selectCata.id
        })
        this.setState({
          currentList: newArr
        })
      })
    }
  }

  getData (selectCata) {
    const count = Math.round(Math.random() * 2);
    const imgurl=`food${count}.jpg`
    return Array.from(Array(Math.round(Math.random()*20)), (v, k)=>({
      'title': '分类'+selectCata.id+'菜品'+k+1,
      'id': selectCata.id+'_'+k,
      'pid': selectCata.id,
      'img': imgurl,
      'sold': Math.round(Math.random() * 200),
      'unit': Math.round(Math.random() * 10),
    }))
  }

  render () {
    const tabList = [{ title: '菜单' }, { title: '标签页2' }, { title: '标签页3' }];
    const { current, currentList } = this.state;
    return (
      <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={current} index={0} >
          <View className='tabItem'>
            <Cata onChangeCata={this.chagneCata.bind(this)}></Cata>
            <FootList currentList={currentList}></FootList>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    )
  }
}