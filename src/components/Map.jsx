import React from 'react';
import { Grid } from 'antd-mobile';

import GridItem from './GridItem';
import ToolBar from './ToolBar';
import Map from '../map';
import MapData from '../map/mapData';
import { crossData } from '../map/logic';

const str = Map.x99[0];
const data = MapData(str)

const color = {
  default: '#fff',
  focus: '#ccc',
  cross: '#fdf6f6',
  same: '#ddf9dd',
  error: 'red'
}
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.focus = null               // 当前焦点
    this.before_focus = null        // 前一个焦点
    this.crossArr = []              // 计算十字路径上的子
    this.remark = false;            // 标记功能是否开启
    this.state = {
      data: data                    // 棋盘子的数组
    };
  }
  componentDidMount() {
    this.props.changeTitle('map');
  }

  mapRender(arr) {
    this.setState({
      data: arr
    })
  }
  // 显示十字架背景
  changeCrossBackground(mapData, el) {
    // 还原上次路径上的默认颜色
    if (this.crossArr.length > 0) {
      this.crossArr.forEach((item, i) => {
        if (item.background == color.cross) {
          item.background = color.default
        }
      })
    }
    // 改变本次路径上的颜色
    this.crossArr = crossData(mapData, el)
    this.crossArr.forEach((item, i) => {
      if (item.background == color.default) {
        item.background = color.cross
      }
    })
  }
  // 显示相同高亮
  changeSameItemBackground(mapData, el) {
    mapData.forEach(item => {
      item.background = item.background_default;
      if (el.text !== "" && item.text == el.text) {
        item.background = color.same;
      }
    })
  }
  // 点击棋盘
  gridClick(el) {
    // 设置焦点
    this.focus = el
    // 改变相同数颜色
    this.changeSameItemBackground(this.state.data, el)
    // 改变十字路径颜色
    if (el.text == '') {// 空位才执行
      this.changeCrossBackground(this.state.data, el)
    }
    // 渲染棋盘
    this.mapRender(this.state.data)

  }


  // 落子
  doIt(id){
    let el = this.focus
    if (el && !el.isDefault) {
      this.state.data[el.id].text = id
      this.state.data[el.id].remarks[0] = false
      this.changeSameItemBackground(this.state.data, el)
      this.mapRender(this.state.data)
    }
  }
  doItRemark(id){
    let el = this.focus
    if (el && !el.isDefault) {
      this.state.data[el.id].text=''
      let remarks = this.state.data[el.id].remarks
      remarks[id] == '' ? (remarks[id] = id) : (remarks[id] = '')
      remarks[0] = true
      this.mapRender(this.state.data)
    }
  }
  // 点击按钮区
  ToolItemClick(id, event) {
    // 没有激活标记功能
    if(!this.remark){
      if (['1','2', '3', '4', '5', '6', '7', '8', '9',''].indexOf(id) >= 0) {
        this.doIt(id)
        return
      }
      if (id = 'remark') {
        this.remark = !this.remark
        return
      }
    // 激活标记功能
    }else{
      if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(id) >= 0) {
        this.doItRemark(id)
        return
      }
      if (id = 'remark') {
        this.remark = !this.remark
        return
      }
    }
    
    
  }


  render() {
    return (
      <div>
        <Grid data={this.state.data} columnNum={9}
          onClick={this.gridClick.bind(this)}
          renderItem={GridItem} />
        <ToolBar ToolItemClick={this.ToolItemClick.bind(this)}/>
      </div>
    )
  }
}
