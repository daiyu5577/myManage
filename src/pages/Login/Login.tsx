import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import style from './Login.less'
import {loginIn} from '../../models/login/action'
interface Props {
  history: any;
  loginIn: any;
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

  // 提交
  onFinish = (values: any): any => {
    // let {username, password} = values
    // console.log('pd--Success:', values);
    // console.log(this.props,'pd--props');
    this.props.loginIn({
      type: '',
      payload: values
    })
    
  };

  onFinishFailed = (errorInfo: any): any => {
    console.log('pd--Failed:', errorInfo);
  };

  render() {
    const layout = {
      labelCol: { span: 7 },
    };
    const tailLayout = {
      wrapperCol: { offset: 5, span: 19 },
    };
    return (
      <div className={style.loginLayout}>
        <div className={style.loginContent}>
          <p className={style.loginTitle}>登录</p>
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
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                { 
                  required: true, 
                  validator: (rule, value) => {
                    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
                    if(!reg.test(value)){
                      return Promise.reject('密码为6-12位数字和字符组成');
                    }       
                    return Promise.resolve(); 
                  } 
                },             
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" >
              登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
     
    )
  }
}

function mapDispatchToProps (dispatch: any, ownProps: any): any {
  console.log('dispatch', dispatch);
  return {
    loginIn(params: any): any {
      dispatch(loginIn(params))
    }
  };
}

function mapStateToProps(state: any): any {
  console.log('state', state);
  return {
    userState: state.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
