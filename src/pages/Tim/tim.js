import TIM from 'tim-js-sdk';
import COS from 'cos-js-sdk-v5';
import genTestUserSig from '@utils/generateTestUserSig';

const SDKAppID = 1400401142;
const userID = '0';
const userSig = genTestUserSig(SDKAppID, userID).userSig ;

// 创建TIM实例
let tim = TIM.create({SDKAppID})

// 日志级别
tim.setLogLevel(4);

// 注册cos
tim.registerPlugin({
  'cos-js-sdk': COS
})

// 登录
tim.login({
	userID,
	userSig,
});

export  { TIM, tim};