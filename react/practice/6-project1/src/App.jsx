import { useEffect, useRef, useState } from 'react';
import './App.css'
import Controller from './component/Controller';
import Viewer from './component/Viewer'; // Viewer 컴포넌트 로딩
import Even from './component/Even';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  const didMountRef = useRef(false);

  useEffect(() => { // 두 개의 인수 전달 -> 1. 콜백 함수, 2. 배열
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트!");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []); // 빈 배열 전달하면 마운트 시점에만 콜백 함수 실행

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);

    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    };
  });

  return (
    <div className='App'>
      <h1>Simple Counter</h1> {/* 제목 -> h1 */}
      <section>
        <input value={text} onChange={handleChangeText}/>
      </section>
      <section> {/* 섹션 분리, div와 동일 기능 */}
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App
