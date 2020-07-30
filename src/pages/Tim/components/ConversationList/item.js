import React from 'react';
import classNames from 'classnames';
import Unread from '../../components/Unread';
import styles from  './index.less'

const componentClassName = 'tim-message-list-content-item';

const MessageListItem = ({
  active,
  name,
  date,
  description,
  avatar,
  onClick,
  unreadCount,
}) => (
  <div className={classNames(styles[`${componentClassName}`],  active&&styles['active'] )} onClick={onClick}>
    <Unread>{unreadCount}</Unread>
    {avatar}
    <h5 className={styles[`${componentClassName}-name`]}>{name}</h5>
    <span className={styles[`${componentClassName}-date`]}>{date}</span>
    <p className={styles[`${componentClassName}-desc`]}>{description} </p>
  </div>
);

export default MessageListItem;
