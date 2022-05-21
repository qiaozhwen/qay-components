import React from 'react';
import {Button, Col, Form, Row, Select, Input, Switch} from 'antd';
import 'antd/dist/antd.css'
const transFormParam = (filterJson)=>{
    
}
interface cmpType {
    type: 'select' | 'input' | 'radio' | 'checkBox' | 'switch'
    dataSource: any,
    takeIndex: number,
    placeHolder?: string,
    label: string,
    formName: string,
    cmpCallback?: ()=>{},
    rules?: any,
    wordContent?: any
}
interface paramType {
    formName: string,
    formCb?: ()=>{},
    cmpType: cmpType[]
}
const switchReturnItem = (type,cmpItem) =>{
    const {placeHolder, wordContent} = cmpItem
    switch(type){
        case 'select':
            return (
                <Select placeholder={placeHolder}>{wordContent}</Select>
            );
        case 'input':
            return (
                <Input placeholder={placeHolder}/>
            );
        case 'radio':
            return;
        case 'checkBox':
            return;
        // case 'switch':
        //     return (
        //         <Switch />
        //     );
    }
}
const createCmp = (cmpItem: cmpType) =>{
    const {takeIndex, type, label, formName, rules} = cmpItem
    return (
        <Col span={takeIndex}>
            <Form.Item
                label={label}
                name={formName}
                rules={rules}
            >
                {switchReturnItem(type, cmpItem)}
            </Form.Item>
        </Col>
    )
}
const CreateFilter = (param: paramType)=>{
    const {formCb, formName, cmpType} = param
    return (
        <Form
            name={formName}
            // onFinish={formCb}
        >
            <Row>
                {cmpType.map((cmpItem: cmpType)=>{
                    return createCmp(cmpItem)
                })}
            </Row>
        </Form>
    )
} 
export {CreateFilter}