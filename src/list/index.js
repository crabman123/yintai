import React, {
  Component
} from 'react'


class List extends Component {
  render() {
    var props = this.props;
    return (
      <div className="App">
        <input type="text" ref="ipt" />
        <button onClick={()=>props.add(this.refs.ipt.value)}>add todo</button>
        <ul>
          {props.list.map(function(item, index){
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      add: function(data) {
        dispatch({
          type: "ADD",
          payload: data
        })
      }
    }
  }
  // 生成容器组件
const Appa = connect(mapStateToProps, mapDispatchToProps)(List);

export default Appa