import React from 'react';


import './day.css';

import Modal from '../modal/Modal';
class Day extends React.Component{
    state = {
        modal:false,
        plansList:[]
    }
    onHandleModal = () =>{

    }
    render(){
        const {day} = this.props
        //添加class类名
        let classAdd = "month-active"
        if (day.status === 'unactive') {
            classAdd = "month-unactive"
        }
        if (day.date === new Date().getDate() && day.month === new Date().getUTCMonth()) {
            classAdd = "month-active day-today"
        } 
        return (
            <div className={`day-item ${classAdd}`}>
                <p onClick={this.onHandleModal}>{day.date}</p>
                {/* <Modal
                    isModal={this.state.isModal}
                    onCancel={this.onHandleModal}
                    onSubmitForm={this.addPlan}
                    plansList={this.state.plansList}
                    onDeletePlan={this.delPlan}
                 /> */}
            </div>
        )
    }
}
export default Day