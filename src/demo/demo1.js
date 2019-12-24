import React from 'react'
import Demo2 from './demo2'
import VueComponent from '../vue_app/test2.vue' // vue组件
import { applyVueInReact } from 'vuereact-combined'
import { withRouter } from 'react-router-dom'
let VueComponentInReact = applyVueInReact(VueComponent)
class demo1 extends React.Component{
    componentDidMount () {
        console.log(999,this.props)
    }
    render(){
        return (
            <div className="react-com">
                <h1>hello world</h1>
                <h3>React 组件</h3>
                <VueComponentInReact prop1={'hello world'} prop2={'你好'}
                $slots={{
                    slotA:(<h2 style={{color:'red'}}>插槽A</h2>),
                    slotB:(<h2 style={{color:'blue'}}>插槽B</h2>)
                }}
                $scopedSlots={{
                    slotC:(context)=>(<div>{context.value}</div>)
                }}>
                    <hr/>
                    <h1>我是普通的插槽</h1>
                </VueComponentInReact>
                <Demo2/>
            </div>
        )
    }
}
export default withRouter(demo1)
