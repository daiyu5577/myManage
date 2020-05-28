import * as React from "react";
import { Spin } from 'antd';

interface style {
  [key: string]: string;
}

const style: style = {
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.05)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

function Loading(props: any) {
  return (
    <div style={style}>
      <Spin style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
  )
}


export default React.memo(Loading)