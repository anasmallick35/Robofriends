import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  /*  we cant use this as it impossible to add every user one by one. Except of this we create a new js file wher writing a code to fetch every element from robots.
    <div>
    <React_game id = {robots[0].id} name = {robots[0].name} email = {robots[0].email}/>
    <React_game id = {robots[1].id} name = {robots[1].name} email = {robots[1].email}/>
    <React_game id = {robots[2].id} name = {robots[2].name} email = {robots[2].email}/>
    </div>
 */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

