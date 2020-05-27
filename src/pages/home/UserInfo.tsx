import * as React from "react";

export interface Props {
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


  render() {
    const { msg } = this.state;

    return (
    <div>{msg}</div>
    );
  }
}

export default UserInfo;
