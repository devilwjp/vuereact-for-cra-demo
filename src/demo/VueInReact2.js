import React from 'react'
import VueComponent from '../vue_app/test2.vue' // vue组件
import { applyVueInReact } from 'vuereact-combined'
let VueComponentInReact = applyVueInReact(VueComponent)
class demo2 extends React.Component{
    constructor (props) {
        super(props)
        this.event1 = this.event1.bind(this)
        this.state = {
            aaa: 1111
        }
    }
    event1 (...args) {
        console.log(args)
    }
    render(){
        return (
            <div className="react-com">
                <h3>我是React组件</h3>
                <h4>vue的v-model将aaa改为 <span style={{color:'blue'}}>{this.state.aaa}</span></h4>
                <VueComponentInReact prop1={'hello world'} prop2={'你好'} on={{
                    event1: this.event1
                }} $slots={{
                    slotA: <div style={{backgroundColor:'red'}}>插槽A</div>,
                    slotB: <div style={{backgroundColor:'red'}}>插槽B</div>
                }} $scopedSlots={{
                    slotC: (context) => <div style={{backgroundColor:'green'}}>我是作用域插槽：{context.value}</div>
                }}
                 // vue-model的使用
                 $model={{
                    value: this.state.aaa, // value必须是一个state
                    setter: (value) => { this.setState({ aaa: value }) } // setter必须是直接修改state
                }}>
                <hr/>
                <h1>我是普通的插槽</h1>
                </VueComponentInReact>
            </div>
        )
    }
}
export default demo2
