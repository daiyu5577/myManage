import React from 'react';
import styles from './index.less'

const ConversationPanelContent= ({ children }) => (
  <section className={styles["tim-conversation-panel-main-content"]}>{children}</section>
);

export default ConversationPanelContent;
