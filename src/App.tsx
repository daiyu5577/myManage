import React, { PureComponent } from 'react';
import logo from './logo.svg';
import * as styles from './App.less';

interface AppProps {

}

interface AppState {
  title: object;
}
class App extends PureComponent<AppProps, AppState> {

  state = {
    title: {
      label: '测试一'
    }
  }

  handlerCheck = () => {
    const title = JSON.parse(JSON.stringify(this.state.title));
    title.label = title.label == '切换' ? '测试一' : '切换';
    this.setState({
      title
    })
  }

  render() {
    const { title } = this.state;
    return (
      <div className={styles.App}>
        <p onClick={this.handlerCheck}>{title.label}</p>
      </div>
    )
  }
}

export default App;
