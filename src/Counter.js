import { useState } from "react";
import './Counter.css'

const Counter = () => {
 const [count, setCount] = useState(0)
    const plusHandler = () => {
        setCount(count + 1)
    }

  const decrementHandler = () => {
        setCount(count - 1)
  }

    return ( 
        <div className="btn-counter">
            <div className="para-count">
                <p>
                    Count: {count}
                </p>
            </div>
            <div>
            <button onClick={plusHandler} className="btn btn-left">
                increment
            </button>
            </div>
<div>
    <button onClick={decrementHandler} className="btn">
        decrement
    </button>
</div>
        </div>
     );
}
 
export default Counter;