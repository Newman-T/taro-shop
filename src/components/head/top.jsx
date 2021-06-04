import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import './top.scss'

export default class Top extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const collect = require('../../assets/img/collect.png');
    const more = require('../../assets/img/more.png');
    const search = require('../../assets/img/search.png');
    const tuan = require('../../assets/img/tuan.png');
    return (
      <View className='top'>
        <View className='left'></View>
        <View className='right'>
          <Image className='img' src={search} />
          <Image className='img' src={collect} />
          <Image className='img' src={tuan} />
          <Image className='img' src={more} />
        </View>
      </View>
    )
  }
}