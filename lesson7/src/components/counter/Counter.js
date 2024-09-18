import React, { useRef, useState } from 'react';

function Counter() {
    const countRef = useRef(0); // Ссылка, сохраняющая текущее значение
    const [renderCount, setRenderCount] = useState(0); // Состояние для принудительного рендера

    const increment = () => {
        countRef.current++; // Обновляем значение ссылки, но не рендерим компонент
        console.log("countRef:", countRef.current);
    };

    const forceRender = () => {
        setRenderCount(renderCount + 1); // Принудительный рендер
    };

    return (
        <div>
            <p>countRef: {countRef.current}</p>
            <p>countRef: {renderCount}</p>
            <button onClick={increment}>Increment Ref</button>
            <button onClick={forceRender}>Force Render</button>
        </div>
    );
}

export default Counter;
