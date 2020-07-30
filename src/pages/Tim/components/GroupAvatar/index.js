import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import {tim, TIM} from '../../tim';
import classNames from 'classnames';
import styles from './index.less';

console.log(tim, 'pd--tim00');

const GroupAvatar = ({ groupID }) => {
  const [memberList, setMemberList] = useState([
    {
      avatar: '',
      nick: '张三',
      userID: '0'
    }
  ]);

  const onReadyStateUpdate = (event) => {
		// console.log(event, 'pd--登录成功GroupAvatar');
		const isSDKReady = event.name === TIM.EVENT.SDK_READY ? true : false
		if(isSDKReady){
			tim.getMyProfile()
			.then(({data}) => {
				// console.log(data, 'pd--获取个人信息GroupAvatar');	
			})
			.catch(err=>{
				// console.log(err, 'pd--登录失败GroupAvatar');	
			})
		}
  }
  // console.log(tim.getGroupMemberList(), 'pd--tim.getGroupMemberList');
  
  useEffect(() => {
    
    // tim.on(TIM.EVENT.SDK_READY, onReadyStateUpdate)
    // let promise = tim.getGroupMemberList({ groupID: 'group1', count: 30, offset:0 }); // 从0开始拉取30个群成员
    // promise.then(function(imResponse) {
    //   console.log(imResponse.data.memberList, 'pd--获取群成员列表'); // 群成员列表
    // }).catch(function(imError) {
    //   console.log('pd--getGroupMemberList error:', imError);
    // });
  }, [groupID]);



  return (
    <div className={classNames(styles["tim-message-list-content-item-avatar"], styles['tim-message-group-avatar'])}>
      {memberList.map(({ avatar, nick, userID }) => (
        <Avatar key={userID} src={avatar} shape="square" size={16}>
          {avatar || nick || '未知'}
        </Avatar>
      ))}
    </div>
  );
};

export default GroupAvatar;
