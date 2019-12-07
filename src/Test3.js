import React from "react";

class Test3 extends React.Component {
    constructor (props) {
        super(props)
        console.log(props)
    }
    render () {
        return (
            <div>
                {this.props['data-aaa'].a}
            </div>
        )
    }
}
export default Test3
