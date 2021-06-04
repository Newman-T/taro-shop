import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Head from '../../components/Head/head';
import Food from '../../components/Food/food';

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
      </View>
    )
  }
}
