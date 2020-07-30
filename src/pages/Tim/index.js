import React from 'react';
import ReactDOM from 'react-dom';
import {tim, TIM } from './tim';
import styles from './index.less'
import Aside from './Layouts/Aside'
import MessageList from './Layouts/MessageList'
import ConversationList from './components/ConversationList'
import ConversationPanel from './Layouts/ConversationPanel'
import AsideInfo from './components/AsideInfo'
import {ConversionMessageInput, ConversionMessageHeader, ConversionMessageContent} from './components/ConversionMessage'
export default class TimUI extends React.PureComponent{
	constructor(props){
		super(props)
		this.state = {

		}
	}

	componentWillMount(){
		this.initListener()
	}

	componentDidMount(){
		
	}


	// 初始化监听
	initListener = () => {
		// 登录成功后会触发 SDK_READY 事件，该事件触发后，可正常使用 SDK 接口
		tim.on(TIM.EVENT.SDK_READY, this.onReadyStateUpdate)
		// SDK NOT READT
		tim.on(TIM.EVENT.SDK_NOT_READY, this.onReadyStateUpdate)
		// 被踢出
		tim.on(TIM.EVENT.KICKED_OUT, this.onKickOut)
		// SDK内部出错
		tim.on(TIM.EVENT.ERROR, this.onError)
		// 收到新消息
		tim.on(TIM.EVENT.MESSAGE_RECEIVED, this.onReceiveMessage)
		// 会话列表更新
		tim.on(TIM.EVENT.CONVERSATION_LIST_UPDATED, this.onUpdateConversationList)
		// 群组列表更新
		tim.on(TIM.EVENT.GROUP_LIST_UPDATED, this.onUpdateGroupList)
		// 网络监测
		tim.on(TIM.EVENT.NET_STATE_CHANGE, this.onNetStateChange)
		// 已读回执
		tim.on(TIM.EVENT.MESSAGE_READ_BY_PEER, this.onMessageReadByPeer)
	}

	// 登录成功
	onReadyStateUpdate = (event) => {
		console.log(event, 'pd--登录成功');
		const isSDKReady = event.name === TIM.EVENT.SDK_READY ? true : false
		if(isSDKReady){
			tim.getMyProfile()
			.then(({data}) => {
				console.log(data, 'pd--获取个人信息');
				
			})
			.catch(err=>{
				console.log(err, 'pd--登录失败');
				
			})
		}
		
	}
	// 被踢出
	onKickOut = event => {}
	// SDk 出错
	onError = event => {}
	// 收到消息
	onReceiveMessage = event => {}
	// 会话列表更新
	onUpdateConversationList = event => {}
	// 群组列表更新
	onUpdateGroupList = event => {}
	// 网络监测
	onNetStateChange = event => {
		console.log(event, 'pd--网络监测');
		
	}
	// 已读回执
	onMessageReadByPeer = event => {}



	render(){
		return(
			<div className={styles.timContainer}>
				<div className={styles.Content}>
					<Aside>
						<MessageList content={<ConversationList/>}/>
					</Aside>
					<ConversationPanel
        	  header={<ConversionMessageHeader />}
        	  content={<ConversionMessageContent />}
        	  input={<ConversionMessageInput />}
        	  aside={<AsideInfo />}
        	/>
				</div>
			</div>
		)
	}
}