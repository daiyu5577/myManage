import React, { useCallback, useMemo, useState } from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import MessageListItem from './item';
// import { useRematchDispatch, useRematchSelector } from '@/store';
import { TIM, tim } from '../../tim';
import GroupAvatar from '../GroupAvatar/index';

import styles from './index.less';
console.log(tim, 'pd--tim--');
const ConversationList = () => {
  // const { conversationList, activeConversationID } = useRematchSelector(
  //   ({ tim: { conversationList, activeConversationID } }) => ({
  //     conversationList,
  //     activeConversationID,
  //   })
  // );
  const [activeConversationID, setConversationID] = useState('GROUP@123')

  // const dispatch = useRematchDispatch();

  const onMessageItemClick = ()=>{}

  const list = [
    {
      userProfile:{
        // nick: '张三',
        avatar: require('@assets/image/logo192.png')
      },
      groupProfile:{
        name: '赵四',
        groupID: '001'
      },
      lastMessage: {
        lastTime: new Date().getTime(),
        messageForShow: '在吗'
      },
      type: 'GROUP',
      conversationID: 'GROUP@123',
      unreadCount: 10,
    },
    {
      userProfile:{
        nick: '张三',
        avatar: require('@assets/image/logo192.png')
      },
      lastMessage: {
        lastTime: '2020-07-20 12:00:00',
        messageForShow: '在吗'
      },
      type: 'C2C',
      conversationID: 'C2C@4566',
      unreadCount: 20,
    },
    {
      userProfile:{
        nick: '张三',
        avatar: '../../assets/default-avatar.png'
      },
      lastMessage: {
        lastTime: '2020-07-20 12:00:00',
        messageForShow: '在吗'
      },
      type: 'C2C',
      conversationID: 'C2C@4567',
      unreadCount: 20,
    },
    {
      userProfile:{
        nick: '张思',
        avatar: '../../assets/default-avatar.png'
      },
      lastMessage: {
        lastTime: '2020-07-20 12:00:00',
        messageForShow: '在吗'
      },
      type: 'C2C',
      conversationID: 'C2C@4568',
      unreadCount: 20,
    },
    {
      userProfile:{
        nick: '王五',
        avatar: '../../assets/default-avatar.png'
      },
      lastMessage: {
        lastTime: '2020-07-20 12:00:00',
        messageForShow: '在吗'
      },
      type: 'C2C',
      conversationID: 'C2C@4569',
      unreadCount: 20,
    } ,
    {
      userProfile:{
        nick: '刘能',
        avatar: '../../assets/default-avatar.png'
      },
      lastMessage: {
        lastTime: '2020-07-20 12:00:00',
        messageForShow: '在吗'
      },
      type: 'C2C',
      conversationID: 'C2C@4560',
      unreadCount: 20,
    },
    {
      userProfile:{
        nick: '刘能2',
        avatar: '../../assets/default-avatar.png'
      },
      lastMessage: {
        lastTime: '2020-07-20 12:00:00',
        messageForShow: '在吗'
      },
      type: 'C2C',
      conversationID: 'C2C@45602',
      unreadCount: 20,
    },
    {
      userProfile:{
        nick: '刘能3',
        avatar: '../../assets/default-avatar.png'
      },
      lastMessage: {
        lastTime: '2020-07-20 12:00:00',
        messageForShow: '在吗'
      },
      type: 'C2C',
      conversationID: 'C2C@45603',
      unreadCount: 20,
    },
    {
      userProfile:{
        nick: '刘能4',
        avatar: '../../assets/default-avatar.png'
      },
      lastMessage: {
        lastTime: '2020-07-20 12:00:00',
        messageForShow: '在吗'
      },
      type: 'C2C',
      conversationID: 'C2C@45604',
      unreadCount: 20,
    },
    {
      userProfile:{
        nick: '刘能5',
        avatar: '../../assets/default-avatar.png'
      },
      lastMessage: {
        lastTime: '2020-07-20 12:00:00',
        messageForShow: '在吗'
      },
      type: 'C2C',
      conversationID: 'C2C@45605',
      unreadCount: 20,
    },
    {
      userProfile:{
        nick: '刘能6',
        avatar: '../../assets/default-avatar.png'
      },
      lastMessage: {
        lastTime: '2020-07-20 12:00:00',
        messageForShow: '在吗固定镜头一级页面规范与看芙蓉图天原集团反导条约今天要所有人头痛'
      },
      type: 'C2C',
      conversationID: 'C2C@45606',
      unreadCount: 20,
    },
  ]
  return (
    <>
      {list.map((item) => {
        const nickName = item.userProfile?.nick;
        const groupName = item.groupProfile?.name;
        const userAvatar = item.userProfile?.avatar;
        const date = item.lastMessage.lastTime;

        const name = nickName || groupName || '未知';

        let avatar = null;

        if (item.type === TIM.TYPES.CONV_C2C) {
          avatar = (
            <Avatar
              src={userAvatar}
              size={48}
              shape='square'
              className={styles['tim-message-list-content-item-avatar']}
            >
              {userAvatar || name}
            </Avatar>
          );
        } else if (item.type === TIM.TYPES.CONV_GROUP) {
          const groupID = item.groupProfile.groupID;
          avatar = <GroupAvatar groupID={groupID} />;
        }

        return (
          <Dropdown
            key={item.conversationID}
            overlay={
              <Menu>
                <Menu.Item onClick={() => tim.deleteConversation(item.conversationID)}>
                  删除会话
                </Menu.Item>
              </Menu>
            }
            trigger={['contextMenu']}
          >
            <div>
              <MessageListItem
                active={activeConversationID === item.conversationID}
                name={name}
                date={date}
                description={item.lastMessage.messageForShow}
                avatar={avatar}
                unreadCount={activeConversationID === item.conversationID ? 0 : item.unreadCount}
                onClick={() => {
                  if (item.conversationID !== activeConversationID) onMessageItemClick(item.conversationID);
                }}
              />
            </div>
          </Dropdown>
        );
      })}
    </>
  );
};

export default ConversationList;
