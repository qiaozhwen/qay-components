import React from 'react'
import ReactDom from 'react-dom'
import {Button} from "antd";
import 'antd/dist/antd.css'
const App = ()=>{
    return (
        <div>
            <Button>antd</Button>
        </div>
    )
}
ReactDom.render(<App/>, document.getElementById('root'))