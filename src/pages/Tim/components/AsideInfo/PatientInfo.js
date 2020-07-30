import React from 'react';
import styles from './index.less'
import classNames from 'classnames'

const PatientInfo = ({  }) => (
  <div className={styles['patient-info']}>
		<div className={styles['patient-info-in-line']}>
			<div className={styles['info-label']}>患者ID:</div>
			<div className={styles['info-desc']}>12345</div>
		</div>
		<div className={styles['patient-info-in-line']}>
			<div className={styles['info-label']}>姓名:</div>
			<div className={styles['info-desc']}>张三</div>
		</div>
		<div className={styles['patient-info-in-line']}>
			<div className={styles['info-label']}>慢特病:</div>
			<div className={styles['info-desc']}>
				<span className={styles['disease-tag']}>糖尿病</span>
				<span className={styles['disease-tag']}>哮喘</span>
			</div>
		</div>
		<div className={styles['patient-info-in-line']}>
			<div className={styles['info-label']}>病情标签:</div>
			<div className={styles['info-desc']}>
				<span className={styles['disease-tag']}>糖尿病</span>
				<span className={styles['disease-tag']}>哮喘</span>
			</div>
		</div>
		<div className={styles['patient-info-in-cloumn']}>
			<div className={styles['info-label']}>病情主诉:</div>
			<div>
				啦啦啦啦啦啦啦啦啦啦
				啦啦啦啦啦啦啦啦啦啦
				哦哦哦哦哦哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦
			</div>
		</div>
		<div className={styles['patient-info-in-cloumn']}>
			<div className={styles['info-label']}>配图:</div>
			<div className={styles['img-box']}>
				<img src={require('@assets/image/bgImage.jpg')}/>
				<img src={require('@assets/image/bgImage.jpg')}/>
				<img src={require('@assets/image/bgImage.jpg')}/>
			</div>
		</div>
		<div className={styles['patient-info-in-cloumn']}>
			<div className={styles['info-label']}>既往史:</div>
			<div>
				哦哦哦哦哦哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦
			</div>
		</div>
		<div className={styles['patient-info-in-cloumn']}>
			<div className={styles['info-label']}>体格检查:</div>
			<div>
				<div className={classNames(styles['extra-info-line'])}>
					<div className={styles['info-sub-label']}>脉搏:</div>
					<div className={styles['info-sub-desc']}>100次/分钟</div>
				</div>
				<div className={classNames(styles['extra-info-line'])}>
					<div className={styles['info-sub-label']}>呼吸:</div>
					<div className={styles['info-sub-desc']}>100次/分钟</div>
				</div>
				<div className={classNames(styles['extra-info-line'])}>
					<div className={styles['info-sub-label']}>收缩压:</div>
					<div className={styles['info-sub-desc']}>80mmHg</div>
				</div>
				<div className={classNames(styles['extra-info-line'])}>
					<div className={styles['info-sub-label']}>舒张压:</div>
					<div className={styles['info-sub-desc']}>80mmHg</div>
				</div>
			</div>
		</div>
		<div className={styles['patient-info-in-line']}>
			<div className={styles['info-label']}>订单编号:</div>
			<div className={styles['info-desc']}>1234599765788444</div>
		</div>
		<div className={styles['patient-info-in-line']}>
			<div className={styles['info-label']}>预约时间:</div>
			<div className={styles['info-desc']}>2020.07.05 17:50</div>
		</div>
	</div> 
);

export default PatientInfo;
