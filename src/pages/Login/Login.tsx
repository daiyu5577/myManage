import * as React from 'react';
import { Dispatch } from 'redux';
import { connect, DispatchProp } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import Example from  './components/example'
import style from './Login.less'
import {loginIn} from '../../models/login/action'
interface Props {
  history: any;
  loginIn: any;
  dispatch: Dispatch;
}

interface State {}
interface  SquareConfig  {
  color?: string;
  width?: number;
  size: number;
  [propName: string]: any;
}
type SquareConfig2 = Readonly<SquareConfig>
let arr: any[] = ['1', '2', '3', '4'];
let ro: ReadonlyArray<string> = arr;
// ro[5] = 10; // error
// arr = ro; // error
arr[5] = 10
arr = ro as string[] 
arr[5] = 'zs'


const createSquare = (config: SquareConfig)=>{
  let newSquare = { size: 10} as SquareConfig2;
  let square: SquareConfig2 = {size: 100}
  if (config.color) {
    // newSquare.color = config.color;  // Error, Cannot assign to 'color' because it is a read-only property.ts
  }
  if (config.size) {
    // square.height = config.color; // error; square是只读的
  }
  if (config.width) {
    // newSquare.width = config.width * config.width; // Error, Cannot assign to 'width' because it is a read-only property.ts
  }
  return newSquare;
}


interface  arrConfig {
  forEach: any;
  [index: number]: any
}

let myArr: arrConfig= ['张三',  '李四', {name: '王五'}]

myArr.forEach((el: string, index: number) => {
  // console.log(index,'pd--index');
});





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
    // 直接调用即可
    const { dispatch } = this.props;
    dispatch({
      type: 'LOGIN_IN',
      payload: values,
    });
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
                    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
                    if (!reg.test(value)) {
                      return Promise.reject('密码为6-12位数字和字符组成');
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Example name={'李四'}/>
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  console.log('state', state);
  return {
    userState: state.user,
  };
}

export default connect(mapStateToProps)(Login);
