import React from 'react';

const React_game = (props) =>{
    //1. const {name , email , id} = props; and in place of props.name we use name only. it is easy using destructor and also we use another method 
    //2. writing inside the function i.e. card = ({name,email,id}) =>
    return(
        <div className = "tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
            <img alt = "robots" src = {`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h2>{props.name}</h2> 
                <p2>{props.email}</p2>
            </div>
        </div>
    );
}
export default React_game;