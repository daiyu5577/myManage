import React from 'react';
import styles from './index.less'

const ConversationPanelInput = ({ children }) => (
  <section className={styles["tim-conversation-input-area"]}>{children}</section>
);

export default ConversationPanelInput;
