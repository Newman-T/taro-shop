import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './cata.scss';
import { getEvent } from '../../utils/commin';

let event = getEvent();

export default class Cata extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      selectCata: null,
      cata: [
        {name:'菜单1',id:1},
        {name:'菜单2',id:2},
        {name:'菜单3',id:3},
        {name:'菜单4',id:4},
        {name:'菜单5',id:5},
        {name:'菜单6',id:6},
        {name:'菜单7',id:7},
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  //点击菜单
  clickHandle (item) {
    if ((this.state.selectCata&&this.state.selectCata!=item.id)||!this.state.selectCata) {
      this.setState({selectCata:item}, () => {
        this.props.onChangeCata&&this.props.onChangeCata(this.state.selectCata);
      });
      event.emit('changeCata');
    }
  }

  render () {
    const { cata, selectCata } = this.state;
    return (
      <View className='cata'>
        {(cata.map((item)=>{
          return <Text onClick={this.clickHandle.bind(this,item)} className={'cata-name ' + ((selectCata&&selectCata.id==item.id)?'select':'')} key={item.id}>{item.name}</Text>
        }))}
      </View>
    )
  }
}