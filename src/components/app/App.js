import './App.css';
import React,{Component} from 'react';

import Month from '../month/Month';
import Header from '../header/Header';
import { thisExpression } from '@babel/types';

class App extends Component{
    state = {
        month: new Date().getUTCMonth(),
        year: new Date().getUTCFullYear(),
    }
    handlePre = () => {
        if(this.state.month !== 0){
        return this.setState((state,props) => ({
            month:state.month - 1
        }))}else{
            return this.setState((state) =>({
                month: 11
            }))
        }

    }
    handleCur = () =>{
        
        this.setState((state,props) =>({
            month: new Date().getUTCMonth()
        }))
    }
    handleNext = () =>{
        if(this.state.month !== 11){
            return this.setState((state, props) => ({
            month: state.month + 1
        }))}else{
            return this.setState(() => ({
                month: 0
            }))
        }
        
    }
    static getDerivedStateFromProps(){
        
    }
    render() {
        const month = this.state.month;
        const year = this.state.year;
        return (
            <div className="App">
                <Header month={month} year={year} handlePre={this.handlePre} handleCur={this.handleCur} handleNext={this.handleNext} />
                {/* <Month month={month} year={year} /> */}
            </div>
        );
    }
}

export default App;