import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './activity.scss';

export default class Activity extends Component {
  constructor(){
    super(...arguments)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='activity'>
        <View className='type'>减</View>
        <View className='info'>
          <Text className='info-item'>满20减5;满50减15;满60减20</Text>
        </View>
      </View>
    )
  }
}