import React from 'react';
import styles from './index.less'
const ConversionMessageHeader = ({ }) => (
  <>
    <div>
      <span className={styles['header-left']}>复诊</span>
      <span className={styles['header-name']}>张三/男/24岁</span>
    </div>
    <div>
      <span className={styles['close-btn']}>×</span>
    </div>
  </>
);

export default ConversionMessageHeader;
