import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './footList.scss';
import AddCut from '../addcut/addCut';

export default class FootList extends Component {
  constructor(){
    super(...arguments)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    const { currentList } = this.props;
    return (
      <View className='footList'>
        <View className='footListTitle'>标题123</View>
        {currentList.map((item,index)=>{
          const imgurl = require(`../../assets/img/food1.jpg`);
          return <View className='footitem-for' key={index}>
            <Image className='footitemImg' src={imgurl}></Image>
            <View className='info'>
              <View>{item.title}</View>
              <View>月销：{item.sold}</View>
              <View>单价：{item.unit}</View>
            </View>
            <AddCut food={item}></AddCut>
          </View>
        })}
      </View>
    )
  }
}