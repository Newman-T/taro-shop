import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import Top from './top';
import Activity from './activity';
import './head.scss'

export default class Head extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      store: {
        title: 'yayaya1',
        tip: '欢迎光临，很高兴为你服务',
        label: ['味道好', '分量足', '性价比'],
      }
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    const backImg = require('../../assets/img/back.jpg');
    const { store } = this.state;
    return (
      <View className='head'>
        <Top />
        <Image className='back' src={backImg}></Image>
        <View className='store'>
          <Image className='store-left' src={backImg}></Image>
          <View className='store-right'>
            <View className='title'>{store.title}</View>
            <View className='tip'>{store.tip}</View>
            {store.label.map((item, index)=>{
              return <Text className='tip-item' key={index}>{item}</Text>
            })}
          </View>
        </View>
        <Activity></Activity>
      </View>
    )
  }
}