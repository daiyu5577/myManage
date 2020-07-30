import React from 'react';
import styles from './index.less'
const ConversationPanelAside= ({ children }) => (
  <aside className={styles["tim-conversation-aside"]}>{children}</aside>
);

export default ConversationPanelAside;
