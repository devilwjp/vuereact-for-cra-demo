import React from 'react'
import VueComponent from '../vue_app/test2.vue' // vue组件
import { applyVueInReact } from 'vuereact-combined'
let VueComponentInReact = applyVueInReact(VueComponent)
class demo1 extends React.Component{
    render(){
        return (
            <div className="react-com">
                <h3>React 组件</h3>
                <VueComponentInReact prop1={'hello world'} prop2={'你好'}>
                    <hr/>
                    <h1>我是普通的插槽</h1>
                </VueComponentInReact>
            </div>
        )
    }
}
export default demo1
