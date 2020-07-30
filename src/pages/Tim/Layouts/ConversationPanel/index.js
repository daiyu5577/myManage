import React from 'react';
import ConversationHeader from './Header';
import ConversationContent from './Content';
import ConversationInputArea from './Input';
import ConversationPanelAside from './Aside';
// import { useRematchSelector } from '@/store';
// import { UNSET_ID } from '@/store/models/tim';

import styles from './index.less';

const ConversationPanel = ({ header, content, aside, input }) => {
  // const activeConversationID = useRematchSelector(
  //   ({ tim: { activeConversationID } }) => activeConversationID
  // );
  // if (activeConversationID === UNSET_ID) return null;
  return (
    <div className={styles['tim-conversation']}>
      <div className={styles['tim-conversation-panel']}>
        <ConversationHeader>{header}</ConversationHeader>
        <div className={styles['tim-conversation-panel-main']}>
          <ConversationContent>{content}</ConversationContent>
          <ConversationInputArea>{input}</ConversationInputArea>
        </div>   
      </div>
      <ConversationPanelAside>{aside}</ConversationPanelAside>
    </div>
  );
};

export default ConversationPanel;
