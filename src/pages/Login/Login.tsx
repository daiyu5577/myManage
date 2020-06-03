import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import style from './Login.less'
interface Props {
  history: any;
}

interface State {}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handlerToUserList = () => {
    const { history } = this.props;
    history.push({ pathname: '/user/userList' });
  };

  onFinish = (values: any): any => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo: any): any => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const layout = {
      labelCol: { span: 8 },
    };
    const tailLayout = {
      wrapperCol: { offset: 5, span: 18 },
    };
    return (
      <div className={style.loginLayout}>
        <p className={style.loginTitle}>用户登录</p>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" size="large" >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
     
    )
  }
}

function mapStateToProps(dispatch: DispatchProp, ownProps: any): any {
  console.log('dispatch', dispatch);
  return {};
}

function mapStateToState(state: any): any {
  console.log('state', state);
  return {
    userState: state.user,
  };
}

export default connect(mapStateToState, mapStateToProps)(Login);
