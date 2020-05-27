import * as React from "react";

export interface Props {
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


  render() {
    const { msg } = this.state;

    return (
    <div>{msg}</div>
    );
  }
}

export default UserList;
