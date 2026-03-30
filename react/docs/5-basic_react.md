# 📘 5장 리액트 기본 기능 다루기 (설명 포함)

---

## 1. 컴포넌트

### 🔹 개념 설명

- 컴포넌트는 UI를 구성하는 최소 단위
- 재사용 가능하며, 함수 형태로 작성됨

---

### 🔹 실습 환경 설정

```jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
```

```jsx
function App() {
  return <div className='App'></div>
}

export default App
```

---

### 🔹 컴포넌트 생성

```jsx
function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  )
}
```

📌 반드시 대문자로 시작해야 컴포넌트로 인식됨

---

## 2. JSX

### 🔹 개념 설명

- JavaScript + HTML 혼합 문법
- 중괄호 {} 안에서 JS 표현식 사용 가능

```jsx
function Body() {
  const number = 1

  return (
    <div>
      <h1>body</h1>
      <h2>{number}</h2>
    </div>
  )
}
```

---

### 🔹 조건부 렌더링

```jsx
function Body() {
  const num = 19

  return (
    <h2>
      {num % 2 === 0 ? "짝수" : "홀수"}
    </h2>
  )
}
```

---

## 3. Props

### 🔹 개념 설명

- 부모 → 자식으로 데이터 전달
- 읽기 전용 (immutable)

```jsx
function App() {
  return <Body name="이정환" />
}

function Body(props) {
  return <div>{props.name}</div>
}
```

---

## 4. 이벤트 처리

### 🔹 개념 설명

- 사용자 행동에 반응하는 함수

```jsx
function Body() {
  function handleClick() {
    alert("클릭됨")
  }

  return <button onClick={handleClick}>클릭</button>
}
```

---

## 5. State

### 🔹 개념 설명

- 컴포넌트 내부 상태 관리
- 값이 바뀌면 자동 렌더링

```jsx
import { useState } from "react"

function Body() {
  const [count, setCount] = useState(0)

  return <h2>{count}</h2>
}
```

---

## 6. Ref

### 🔹 개념 설명

- DOM 직접 접근
- 렌더링과 무관하게 값 유지

```jsx
import { useRef } from "react"

const inputRef = useRef()

<input ref={inputRef} />
```

---

## 🔥 핵심 요약

- 컴포넌트: UI 조각
- JSX: HTML + JS
- Props: 데이터 전달
- State: 상태 관리
- Ref: DOM 접근

---

## 🚀 한 줄 정리

React는 컴포넌트 기반으로 상태를 관리하며 효율적으로 UI를 업데이트하는 라이브러리이다.
