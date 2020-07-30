import React, {useState, useEffect, useRef, useCallback, useReducer} from  'react';
import styles from './example.less'
interface Props {
	[propsName: string]: any
}

const initialState = {count: 0}

const initialCount = (a: number, b: number)=>{
	return a + b
}

function init(initialData: any) {
	// console.log(initialData, 'pd--initialData');
	return { num: initialData.count}
}

function Example(props: Props) {
	const [count, setCount] = useState<any>(initialCount(1, 4));
	const [owner, setOwner] = useState({name: '张三', age: 10})
	const [coords, setCoords] = useState({x: 0, y: 0})
	// const [state, dispatch] = useReducer(reducer, initialState)
	const [state, dispatch] = useReducer(reducer, initialState, init)
	// console.log(state, 'pd--state');

	const add = (a: number, b: number) => {
		// console.log(a, b, 'pd--a,b');
		return a + b
	}

	const memoizedAdd = useCallback(add, [])

	memoizedAdd(1, 2)
	memoizedAdd(1, 2)

	
	const handler = useCallback(({clientX, clientY})=>{
		setCoords({
			x: clientX,
			y: clientY
		})
	},[])
	// const handler = ({clientX, clientY}: any)=>{
	// 	setCoords({
	// 		x: clientX,
	// 		y: clientY
	// 	})
	// }
	
	useEffect(()=>{
		document.title = `You clicked ${count} times`
		// console.log('pd--22');
	}, [count])

	useEffect(()=>{
		// console.log('pd--11');
		// 模拟数据请求
		const timer = setTimeout(()=>{
			// setCount('mock data')
			// setOwner({name: '王五', age: 18})
		}, 2000)
		return ()=>{
			clearTimeout(timer)
		}
	},[])

	// useEventListener('mousemove', handler)

	return (
  	<div>
			<p>You clicked {count} times</p>
			<button onClick={()=>setCount(count + 1)}>点击</button>
			<button onClick={()=>setCount(
				(prevCount: any)=>{
					// console.log(prevCount, 'pd--prevCount');
					// console.log(count, 'pd--count');
					return prevCount+1
				}
			)}>点击</button>
			<p>my name is {owner.name} age is {owner.age}</p>
			<button onClick={()=>setOwner({...owner, name : props.name})}>修改姓名</button>
			<h1>
    	  The mouse position is ({coords.x}, {coords.y})
    	</h1>
			<h2>Num: {state.num}</h2>
			<button onClick={() => dispatch({type: 'increment'})} style={{padding: '10px'}}>+</button>
			<button onClick={() => dispatch({type: 'decrement'})} style={{padding: '10px'}}>-</button>
			<button onClick={() => dispatch({type: 'reset', payload: initialState})} style={{padding: '10px'}}>reset</button>
			<div className={styles["warp"]} >
        <input id='input' autoFocus={true}  maxLength={5} onChange = {e=>{
					// console.log(e.target.value,'pd--ee');
					if(e.target.value.length >= 5) {
						e.target.value = e.target.value.slice(0, 5);
						e.target.blur();
						// set_text_value_position('input', 4, 4)
						setCss('input', 5, 5)
						
					}
				}}/>
        <div className={styles["box"]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
				<div className={styles['mask']}></div>
      </div>
		</div>
	)
}
function setSelectionRange(input: any, selectionStart: any, selectionEnd: any) {
	if (input.setSelectionRange) {  
			input.focus();  
			input.setSelectionRange(selectionStart, selectionEnd);  
	}  
	else if (input.createTextRange) {  
			var range = input.createTextRange();  
			range.collapse(true);  
			range.moveEnd('character', selectionEnd);  
			range.moveStart('character', selectionStart);  
			range.select();  
	} 
}

function setCss(opt: string, selectionStart: any, selectionEnd: any){
	var sr: any = document.getElementById(opt);
	// var len = sr.value.length;
	setSelectionRange(sr,selectionStart,selectionStart); //将光标定位到文本最后 
}

function useEventListener(eventName: string, handler: any, el = window) {
	// console.log(useRef(), 'pd--useRef');
	const saveHandler: any = useRef();

	// 如果handler变化了, 就更新ref.current的值
	useEffect(()=>{
		saveHandler.current = handler
	}, [handler]);

	useEffect(()=>{
		const isSurpport = el && el.addEventListener
		// console.log(isSurpport, 'pd--isSurpport');
		
		if(!isSurpport) return;

		// 创建事件监听调用 存储在ref的处理方法
		const eventListener = (event: any) => saveHandler.current(event);
		
		// 添加事件监听
		el.addEventListener(eventName, eventListener)
		
		// 销毁时移除事件监听
		return ()=>{
			el.removeEventListener(eventName, eventListener)
		}
	}, [eventName, el])

}

function reducer(state: any, action: any):any {
	switch(action.type){
		case 'increment':
			return  {num: state.num + 1};
		case 'decrement':
			return  {num: state.num - 1};	
		case 'reset':
			return  init(action.payload);
	}
}



export default React.memo(Example)

