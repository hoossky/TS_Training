import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Chat} from "./components";
import './App.css';
import {Counter, Hello, Clock, Kitty} from "./components/oop";
import {HomePage} from "./pages";

class App extends Component<any, any>{
    public render(){
        return  <Router>
            <Link to="/">홈으로 이동</Link><br/>
            <Link to="/chat">챗봇 이동</Link><br/>
            <Link to="/count">카운터 이동</Link><br/>
            <Link to="/hello">헬로 이동</Link><br/>
            <Link to="/clock">시계 이동</Link><br/>
            <Link to="/kitty">고양이 이동</Link><br/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/chat' component={Chat}/>
            <Route exact path='/count' component={Counter}>
                <Counter startNumber={0}/>
            </Route>
            <Route exact path='/hello' component={Hello}>
                <Hello name={"홍길동"}/>
            </Route>
            <Route exact path='/clock' component={Clock}>
                <Clock/>
            </Route>
            <Route exact path='/kitty' component={Kitty}>
                <Kitty/>
            </Route>
        </Router>
    }
}
export default App