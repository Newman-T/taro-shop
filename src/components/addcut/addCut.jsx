import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './addCut.scss';
import { getFoodCount, setFoodCount, getEvent } from '../../utils/commin';

let myEvent = getEvent();
export default class AddCut extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      number: 0
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.setState({
      number: getFoodCount(this.props.food)
    })
    myEvent.on('changeCata', ()=>{
      //小程序重新渲染获取最新的this.props有延时，给延时避免获取不到最新this.props
      setTimeout(() => {
        this.setState({
          number: getFoodCount(this.props.food)
        });
      }, 10);
    });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  cutFood () {
    if (this.props.food) {
      if (this.state.number>0) {
        setFoodCount(this.props.food, this.state.number, 'cut', ()=>{
          const num = getFoodCount(this.props.food);
          this.setState({
            number: num
          })
        });
      } else {
        console.error('减少出现异常');
      }
    }
  }

  addFood () {
    if (this.props.food) {
      setFoodCount(this.props.food, this.state.number, 'add', ()=>{
        const num = getFoodCount(this.props.food);
        this.setState({
          number: num
        })
      });
    }
  }

  render () {
    const { number } = this.state;
    const addImg = require(`../../assets/img/add.png`);
    const cutImg = require(`../../assets/img/cut.png`);
    let hideClass = number>0?'':'hide';
    return (
      <View className='addCut'>
        <Image onClick={this.cutFood.bind(this)} className={'cut '+hideClass} src={cutImg}></Image>
        <Text className={hideClass}>{number}</Text>
        <Image onClick={this.addFood.bind(this)} className='add' src={addImg}></Image>
      </View>
    )
  }
}