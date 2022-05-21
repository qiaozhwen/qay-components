import React from "react";
import {Form} from "./index";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Input} from "antd";
export const TestForm = ()=>{
  return <Form>
    <Form.Item label={'姓名'} initialValue={''}>
      <Input placeholder={'请输入'}></Input>
    </Form.Item>
    <Form.Item label={'年龄'} initialValue={''}>
      <Input placeholder={'请输入'}></Input>
    </Form.Item>
    <Form.Item label={'更多'} initialValue={''}>
      <Input placeholder={'请输入'}></Input>
    </Form.Item>
  </Form>
}
export default {
  title:'Form',
  component: TestForm
} as ComponentMeta<typeof Form>;
