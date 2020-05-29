import * as React from 'react';
import style from './UserInfo.less';

interface Props {
  history: any;
}

interface State {
  msg: string;
}

class UserInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      msg: '我是----用户详情',
    };
  }

  handlerToUserList = () => {
    const { history } = this.props;
    history.push({ pathname: '/user/userList' });
  };

  render() {
    const { msg } = this.state;

    return (
      <div className={style.userInfo} onClick={this.handlerToUserList}>
        {msg}
      </div>
    );
  }
}

export default UserInfo;
