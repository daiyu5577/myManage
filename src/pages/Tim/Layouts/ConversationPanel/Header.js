import React from 'react';
import styles from './index.less'
const ConversationHeader = ({children }) => (
  <header className={styles["tim-conversation-panel-header"]}>
    {children}
  </header>
);

export default ConversationHeader;
