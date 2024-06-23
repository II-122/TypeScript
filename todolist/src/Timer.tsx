import { useState } from "react";

const Clock : React.FC = () => {
    let [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);
    return(
        <div style={{ textAlign : "center" }}>
            현재 시간 : {time.toLocaleTimeString()}
        </div>
    );
}

export default Clock;