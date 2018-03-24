/**
 * cn -
 *    -- 更简单的处理多级嵌套数据的方法，在 name 中用 . 分隔字段名称。
 * en - Datum.Form.flatten
 */
import React, { PureComponent } from 'react'
import { Form, Input, Checkbox } from 'shineout'

export default class extends PureComponent {
  initValue = {
    email: 'test@example.com',
    account: {
      name: {
        firstName: 'Harry',
        lastName: 'Potter',
      },
      age: 18,
    },
    extra: {
      favoriteColor: ['cyan', 'yellow'],
    },
  }

  render() {
    return (
      <Form value={this.initValue} onSubmit={(data) => { console.log(data) }}>
        <Form.Item label="Email">
          <Input name="email" />
        </Form.Item>

        <Form.Item label="Password">
          <Input name="password" type="password" />
        </Form.Item>

        <Form.Item label="Account Name">
          <Input.Group style={{ width: 300 }}>
            <Input name="account.name.firstName" placeholder="First Name" />
            -
            <Input name="account.name.lastName" placeholder="Last Name" />
          </Input.Group>
        </Form.Item>

        <Form.Item label="Account Age">
          <Input style={{ width: 100 }} name="account.age" type="number" digits={0} defaultValue={0} />
        </Form.Item>

        <Form.Item label="Favorite Color">
          <Checkbox.Group
            name="extra.favoriteColor"
            data={['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']}
          />
        </Form.Item>

        <Form.Item label="">
          <Form.Submit>Submit</Form.Submit>
          <Form.Reset>Reset</Form.Reset>
        </Form.Item>
      </Form>
    )
  }
}
