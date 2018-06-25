import React from 'react'   //模块引入
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/reactStack.scss';

import { DatePicker } from 'antd';

class ReactStack extends React.Component {  //class特性
  static contextProps = {
    author:PropsTypes.string
  }
  render() {
    const learner = {name: this.props.author, age: 18}  //const定义变量
    const mainSkills = ['React', 'ES6', 'Webpack', 'Babel', 'NPM']
    const extraSkills = ['Git', 'Postman']
    const skillSet = [...mainSkills, ...extraSkills]
    const { name } = learner   //解构赋值
    let greetings = null    //let定义变量
    if (name) {
      greetings = `${name},欢迎到${mainSkills[0]}的世界！`  //字符模版
    }
    //以下用了箭头函数
    return (
      <div className="skills">
        <div>{greetings}</div>
        <ol>
          {skillSet.map((stack, i) => <li key={i}>{stack}</li>)}
        </ol>
        <DatePicker/>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    author:state.author
  }
}
ReactStack = connect(mapStateToProps)(ReactStack);
export default ReactStack