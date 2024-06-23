import React from "react";
import { Component } from "react";

interface MyProps{
    weather : string;
    children : React.ReactNode;
}

// const MyWeather : React.FC<MyProps> = (props) => {
//     const { weather, children } = props;

//     return(
//         <div style={{textAlign : "center"}}>
//             <br/>{children}<br/>
//             오늘의 날씨는 <text style={{color : "rgb(197, 222, 244)"}}>{props.weather}</text> 입니다.
//         </div>
//     );
// }

class MyWeather extends Component<MyProps> {
    render() {
        const { weather, children } = this.props;
        return(
            <div style={{textAlign : "center"}}>
                {/* <br/>{children}<br/> */}
                오늘의 날씨는 <text style={{color : "rgb(197, 222, 244)"}}>{weather}</text> 입니다.
            </div>
        );
    }
}

export default MyWeather;