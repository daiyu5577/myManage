import React from 'react';
import styles from './index.less';


const Unread = ({ style, children }) => {
  const count = children > 99 ? '99+' : children;
  if (count <= 0) return null;
  return (
    <sup className={styles["tim-unread"]} style={style}>
      {count}
    </sup>
  );
};

export default Unread;
