import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtTabBar } from 'taro-ui'
import './tabbar.scss';

export default class Tabbar extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      current: 0,
      path: {
        ORDER: '/pages/index/index',
        COUPON: '/pages/coupon/index'
      }
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  handleClick (value,e) {
    
    const { path } = this.state;
    console.log('value,e',value,e);
    switch (value) {
      case 0:
        Taro.reLaunch({
          url: path.ORDER
        })
        break;
      case 1:
        Taro.navigateTo({
          url: path.COUPON
        })
        break;
    
      default:
        break;
    }
    // this.setState({
    //   current: value
    // })
  }

  render () {
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '点餐', 'pagePath': 'pages/index/index', iconType: 'bullet-list' },
          { title: '优惠券', 'pagePath': 'pages/coupon/index', iconType: 'money', text: 'new' },
          // { title: '我的', iconType: 'user', text: '100', max: 99 }
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }
}