import React from 'react';
import styles from './index.less'
const ConversionMessageContent = ({ }) => (
  <>
    <header className={styles['conversion-header']}>
      <span>当前聊天进行中</span>
			<div>
				<span className={styles['date']}>23小时40分钟</span>
				<span>后问诊结束</span>
			</div>
    </header>
  </>
);

export default ConversionMessageContent;
