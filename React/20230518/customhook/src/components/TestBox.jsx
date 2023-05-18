import React from 'react';
import {useMouseLocation} from 'react';

export default function TestBox() {
    const location = useMouseLocation();

    console.log(location)
    return (
        <div style={{height: 100, width: 100, backgroundColor: location.y > 200 ? "blue" : "gray"
    }}>TestBox</div>
    )
}