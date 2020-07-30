import React from 'react';
import MessageListHeader from './Header';
import MessageListContent from './Content';

import './index.less';

const MessageList = ({ header, content }) => (
  <div className="tim-message-list">
    <MessageListHeader>{header}</MessageListHeader>
    <MessageListContent>{content}</MessageListContent>
  </div>
);

export default MessageList;
