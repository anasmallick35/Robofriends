import React from 'react';
import React_game from '../components/React_game';
const CardList = (props) =>{
    return(
        <div>
            {
            props.robots.map((user ,i) => {
        return (
        <React_game key = {i} 
        id = {props.robots[i].id} 
        name = {props.robots[i].name} 
        email = {props.robots[i].email}/>
        );
    })
}
        </div>
    );
}

export default CardList;