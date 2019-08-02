import React from 'react';
import './month.css';
import Week from '../week/Week';
import { template } from '@babel/core';
function Month(props) {
    const { month, year } = props
    const currentYear = year,
        currentMonth = month,
        tempFirDay = new Date(year, month, 1),
        tempLastDay = new Date(year, month + 1, 0),
        firstDayCurMonth = tempFirDay.getUTCDay(),
        lastDayCurMonth = tempLastDay.getUTCDay(),
        lastDateCurMonth = tempLastDay.getDate(),
        preListDays = preMonthDays(),
        curListDays = curMonthDays(),
        nexListDays = nexMonthDays(),
        fullListDays = preListDays.concat(curListDays, nexListDays)
    function preMonthDays(){
        let preListDays = [];
        let temp = new Date(currentYear, currentMonth, 0);
        let lastDay = temp.getDate();

        if (firstDayCurMonth > 0) {
            for (var i = 0; i < firstDayCurMonth; i++) {
                let obj = {};
                obj.date = lastDay - i;
                obj.month = currentMonth - 1;
                obj.year = currentYear;
                obj.status = "unactive";
                preListDays.push(obj)
            }
            return preListDays.reverse();
        } else {
            return preListDays;
        }
    }

    function curMonthDays(){
        let curListDays = []
        for (let i = 1; i <= lastDateCurMonth; i++) {
            let obj = {};
            obj.date = i;
            obj.month = currentMonth;
            obj.year = currentYear;
            obj.status = "active";
            curListDays.push(obj)
        }
        return curListDays;
    }
    function nexMonthDays(){
        let nexListDays = [];
        let temp = new Date(currentYear, currentMonth + 1, 1);
        let firstDay = temp.getDate();
        let dif = 14 - lastDayCurMonth + 1;

        if (lastDayCurMonth <= 6) {
            for (var i = 0; i < dif; i++) {
                let obj = {};
                obj.date = firstDay + i;
                obj.month = currentMonth + 1;
                obj.year = currentYear;
                obj.status = "unactive"
                nexListDays.push(obj)
            }
            return nexListDays;
        } else {
            return nexListDays;
        }
    }
    function createListByWeek() {
        const table = new Array(6)
        for (let i = 0; i < table.length; i++) {
            table[i] = new Array(7)
        }
        const count = 0;
        for (let row = 0; row < table.length; row++) {
            for (let col = 0; col < table[row].length; col++) {
                table[row][col] = fullListDays[count]
                count++
            }
        }
        return table
    }

    const weeksInMonth = createListByWeek()
    return (
        <div className="container">
            <table>
                <tbody>
                    <tr>
                        <th>日</th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                    </tr>
                    {weeksInMonth.map((item, index) => (
                        <tr key={index}>
                            <Week week={item} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default Month