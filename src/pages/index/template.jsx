import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

export default class Index extends Component {
  constructor(){
    super(...arguments)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: 'xxx'
  }

  render () {
    return (
      <View></View>
    )
  }
}