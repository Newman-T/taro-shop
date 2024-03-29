import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Head from '../../components/Head/head';
import Food from '../../components/Food/food';
import Tabbar from '../../components/Tabbar/tabbar';

export default class Index extends Component {

  componentWillMount () { 
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Head />
        <Food />
        <Tabbar />
      </View>
    )
  }
}
