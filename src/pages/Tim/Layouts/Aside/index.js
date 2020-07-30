import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less'
import {Input, Icon} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
// const { Search } = Input;
const Aside = ({children})=>{
  return (
		<div className={styles.timAside}>
			<div className={styles.asidehead}>会话列表</div>
			<div className={styles.asideContent}>
				<div className={styles.asideSearch}>
					<div className={styles.searchWrap}>
						{/* <Icon type="search" /> */}
						<SearchOutlined style={{fontSize: '20px'}}/>
						<input placeholder="搜索联系人"/>
					</div>
				</div>
				<div  className={styles['tim-message-list-content']}>
					{children}
				</div>
			</div>
		</div>
  )
}

export default Aside