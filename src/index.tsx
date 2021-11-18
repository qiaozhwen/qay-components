import React from 'react';
import { Button } from 'antd';
const transFormParam = (filterJson)=>{
    
}
interface cmpType {
    type: 'select' | 'input' | 'radio' | 'checkBox'
    dataSource: any
}
const CreateFilter =(param: cmpType[])=>{
    console.log(param);
    return (
        <div>
            <Button>antd</Button>
        </div>
    )
} 
export {CreateFilter}