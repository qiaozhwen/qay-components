import React from 'react'
import ReactDom from 'react-dom'
import {CreateFilter} from '../packages'
const App = ()=>{
    return (
        <div style={{padding: 10, width: 200}}>
            {CreateFilter({
                formName: 'test',
                // formCb: ():any=>{},
                cmpType:[
                    {type: 'select', formName: 'test1', takeIndex: 12, placeHolder:'请选择', wordContent: '', label: '', dataSource: []},
                    {type: 'select', formName: 'test2', takeIndex: 12, placeHolder:'请选择', wordContent: '', label: '', dataSource: []},
                    {type: 'input', formName: 'test3', takeIndex: 12, placeHolder:'请选择', wordContent: '', label: '', dataSource: []},
                    // {type: 'switch', formName: 'test4', takeIndex: 12, placeHolder:'请选择', wordContent: '', label: '', dataSource: []},
                ]
            })}
        </div>
    )
}
ReactDom.render(<App/>, document.getElementById('root'))
