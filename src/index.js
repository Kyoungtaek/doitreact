//리액트 필수 모듈
import React from 'react';
import ReactDOM from 'react-dom';
// 초기화며을 구성하는 사용자 코드
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 리액트 엔진이 화면을 출력하는 코드
// Id가 root인 엘레먼트에 컴포넌트를 출력합니다.
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
