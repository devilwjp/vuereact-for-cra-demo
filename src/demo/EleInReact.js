import React from 'react'
import { DatePicker, Card } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { DatePicker as ReactDatePick } from "antd"
import "antd/dist/antd.css"
import moment from 'moment'
import { applyVueInReact } from 'vuereact-combined'
const VueDatePick = applyVueInReact(DatePicker)
const VueCard = applyVueInReact(Card)
const dateFormat = moment(new Date())
class demo1 extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            value1: new Date(),
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange (val) {
        let date
        if (!val) {
            date = val
        } else {
            date = val.toDate()
        }
        this.setState({
            value1: date
        })
    }
    render(){
        return (
            <div className="react-com">
                <h3>React 组件</h3>
                <h3>{this.state.value1 && this.state.value1.toString()}</h3>
                <div className="vue-com">
                    vue element-ui的datePicker
                    <VueDatePick
                        // 实现vue的v-model
                        $model={{
                            value: this.state.value1,
                            setter: (val) => {
                                this.setState({value1:val})
                            }
                        }}
                        align="right"
                        type="date"
                        placeholder="选择日期"/>
                </div>
                <div className="vue-com">
                    vue element-ui的Card
                    <VueCard class="aaa" $slots={{
                        header: (
                            <div className="clearfix">
                                <span>vue的卡片</span>
                            </div>
                        )
                    }}>
                        <div className="react-com">
                            在element-ui的Card中应用react antd的DatePick<br/>
                            <ReactDatePick onChange={this.onChange} defaultValue={this.state.value1&&moment(this.state.value1)}/>
                        </div>
                    </VueCard>
                </div>
            </div>
        )
    }
}
export default demo1
