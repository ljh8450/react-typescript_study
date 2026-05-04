# 📌 React Counter App (Project 1)

## 📖 프로젝트 개요

React의 기본 개념을 학습하기 위한 간단한 카운터 앱

-   컴포넌트 기반 설계\
-   상태(State) 관리\
-   단방향 데이터 흐름 이해

------------------------------------------------------------------------

## 🧠 핵심 개념

-   컴포넌트 분리 (App / Viewer / Controller)\
-   State를 통한 UI 동적 변경\
-   Props를 통한 데이터 전달\
-   이벤트 콜백을 통한 부모-자식 통신

------------------------------------------------------------------------

## 🏗️ 프로젝트 구조

    App
    ├── Viewer (현재 값 표시)
    └── Controller (값 변경 버튼)

------------------------------------------------------------------------

## 🎮 Controller

``` jsx
const Controller = ({ handleSetCount }) => {
    return (
        <div>
            <button onClick={() => handleSetCount(-1)}>-1</button>
            <button onClick={() => handleSetCount(-10)}>-10</button>
            <button onClick={() => handleSetCount(-100)}>-100</button>
            <button onClick={() => handleSetCount(100)}>+100</button>
            <button onClick={() => handleSetCount(10)}>+10</button>
            <button onClick={() => handleSetCount(1)}>+1</button>
        </div>
    );
};

export default Controller;
```

------------------------------------------------------------------------

## ⚙️ App (State 관리)

``` jsx
import { useState } from 'react';
import Viewer from './component/Viewer';
import Controller from './component/Controller';

function App() {
    const [count, setCount] = useState(0);

    const handleSetCount = (value) => {
        setCount(count + value);
    };

    return (
        <div className='App'>
            <h1>Simple Counter</h1>

            <section>
                <Viewer count={count} />
            </section>

            <section>
                <Controller handleSetCount={handleSetCount} />
            </section>
        </div>
    );
}

export default App;
```

------------------------------------------------------------------------

## 🎯 State 설계 포인트

### ❌ 잘못된 위치

-   Viewer에 state → Controller에서 접근 불가\
-   Controller에 state → Viewer에서 접근 불가

### ✅ 올바른 위치

-   공통 부모(App)에 state 생성

👉 이유: 여러 컴포넌트에서 공유해야 하기 때문

------------------------------------------------------------------------

## 🔄 데이터 흐름 (React 핵심)

### 1. 기본 흐름

-   State → 부모 → 자식 (Props)\
-   이벤트 → 자식 → 부모 (Callback)

``` jsx
function Parent() {
    const [count, setCount] = useState(0);

    return (
        <Child
            count={count}
            onClick={() => setCount(count + 1)}
        />
    );
}

function Child({ count, onClick }) {
    return (
        <div>
            <p>{count}</p>
            <button onClick={onClick}>증가</button>
        </div>
    );
}
```

------------------------------------------------------------------------

## 📌 핵심 정리

-   React는 **단방향 데이터 흐름 구조**\
-   상태(State)는 **공통 부모에서 관리**\
-   데이터는 **props로 전달**\
-   이벤트는 **콜백 함수로 전달**

------------------------------------------------------------------------

## 🚀 확장 포인트

-   Context API → 깊은 컴포넌트 트리 해결\
-   Redux / Zustand → 전역 상태 관리\
-   Custom Hook → 로직 분리
