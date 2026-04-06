import { useState } from 'react';
import './App.css'
import Controller from './component/Controller';
import Viewer from './component/Viewer'; // Viewer 컴포넌트 로딩

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1> {/* 제목 -> h1 */}
      <section> {/* 섹션 분리, div와 동일 기능 */}
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App
