import React, { useState, useEffect, useRef } from "react";

function Counter2() {
  const [num2, setNum2] = useState(0);
  let num = 0; /** 화면이 바뀔 때마다 초기화됨 */

  return (
    <>
      <button onClick={() => setNum2(num2 + 1)}>버튼</button>
      <div>{num2}</div>
      <button
        onClick={() => {
          num += 1;
          console.log(num);
        }}>
        버튼
      </button>
      <div>{num}</div>
    </>
  );
}

export default Counter2;