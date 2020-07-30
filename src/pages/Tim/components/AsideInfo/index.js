import React from 'react';
import styles from './index.less'
import classNames from 'classnames'
import PatientInfo from './PatientInfo'
const AsideInfo = ({  }) => (
  <>
		<div className={styles['aside-info-header']}>
			<div className={classNames(styles['header-tab'], styles['active'])}>
				患者信息
			</div>
			{/* <div className={styles['header-tab']}>
				常见问题
			</div> */}
		</div>
		<div className={styles['aside-info-main']}>
			<PatientInfo/>
		</div>
	</> 
);

export default AsideInfo;
