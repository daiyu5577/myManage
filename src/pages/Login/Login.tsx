import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';

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

  render() {
    return <div>登录</div>;
  }
}

function mapStateToProps(dispatch: DispatchProp, ownProps: any): any {
  console.log('dispatch', dispatch);
}

function mapStateToState(state: any): any {
  console.log('state', state);
  return {
    userState: state.user,
  };
}

export default connect(mapStateToState, mapStateToProps)(Login);
