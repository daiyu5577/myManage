import React from 'react'
import styles from './index.less'
import {SwitcherOutlined} from '@ant-design/icons'
const InputArea = ({})=>(
	<>
		<header className={styles['input-area-header']}>
			<div className={styles['icon-box']}>
				<SwitcherOutlined title="发送图片"/>
				<SwitcherOutlined title="发送图片"/>
				<SwitcherOutlined title="发送图片"/>
				<SwitcherOutlined title="发送图片"/>
			</div>
			<div className={styles['operat-text']}>问诊记录</div>
		</header>
		<textarea className={styles['text-area']}></textarea>
		<div className={styles['btn-area']}>
			<div className={styles['submit-btn']}>发送</div>
		</div>
	</>
)

export default InputArea