import * as React from "react";

interface Props {
  history: any
}

interface State {
  msg: string;
}

class UserInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      msg: '我是----用户详情'
    };
  }

  handlerToUserList = () => {
    const { history } = this.props;
    history.push({ pathname: '/home/userList' })
  }

  render() {
    const { msg } = this.state;

    return (
    <div onClick={this.handlerToUserList}>{msg}</div>
    );
  }
}

export default UserInfo;
