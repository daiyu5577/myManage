import * as React from "react";

interface Props {
  history: any
}

interface State {
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  handlerToUserList = () => {
    const { history } = this.props;
    history.push({ pathname: '/user/userList' })
  }

  render() {

    return (
      <div>登录</div>
    );
  }
}

export default Login;
