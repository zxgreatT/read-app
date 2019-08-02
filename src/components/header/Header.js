import React from 'react';
import './header.css';


function Header(props) {
    const {year, month, handlePre, handleCur, handleNext} = props
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    let transfromMonth = (month)=> {
        const len = monthNames.length;
        for(let i = 0;i < len;i++){
            if(month == i)
            return monthNames[i]
        }
    }
    let monthName = transfromMonth(month);
        return (
            <div className="header">
                <span className="name-month">{monthName}</span>
                <span className="name-year">{year}</span>
                <div className="buttons">
                    <div><button onClick={handlePre}>上月</button></div>
                    <div><button onClick={handleCur}>本月</button></div>
                    <div><button onClick={handleNext}>下月</button></div>
                </div>
            </div>
        )
    };
  


export default Header