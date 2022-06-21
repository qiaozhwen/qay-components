import React, { ComponentProps } from 'react'
import { Form as OriginalForm, FormInstance } from 'antd'

type FormProps = ComponentProps<typeof OriginalForm>
type FormInterface = typeof OriginalForm
export const FormCmp: React.ForwardRefRenderFunction<any, FormProps> = (
  { children, ...props }: FormProps,
  ref
) => {
  return (
    <OriginalForm ref={ref} {...props}>
      {children}
    </OriginalForm>
  )
}
const FormForwardRef = React.forwardRef<any, FormProps>(FormCmp) as <
  Values = any
>(
  props: FormInterface & {
    children?: React.ReactNode
  } & {
    ref?: React.Ref<FormInstance<Values>> | undefined
  }
) => React.ReactElement
let Form
Form = FormForwardRef as FormInterface

Form.useForm = OriginalForm.useForm
Form.Item = OriginalForm.Item
Form.List = OriginalForm.List
Form.ErrorList = OriginalForm.ErrorList
Form.Provider = OriginalForm.Provider

var a = {
  a: '123',
  c: '1234',
  d: { v: '4526', o: '999' }
}
switch (a) {
  case a:
    break
}
console.log('123')
export { Form }
