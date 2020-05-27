import * as React from "react";

interface Props {
  history: any
}

interface State {
  msg: string;
}

class UserList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      msg: '我是----用户列表'
    };
  }

  handlerToUserInfo = () => {
    const { history } = this.props;
    history.push({ pathname: '/home/userInfo' })
  }

  render() {
    const { msg } = this.state;

    return (
    <div onClick={this.handlerToUserInfo}>{msg}</div>
    );
  }
}

export default UserList;
