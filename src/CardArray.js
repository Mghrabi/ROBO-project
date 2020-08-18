import React from 'react';
import Card from './Card';

const CardArray = ({robots}) => {
    return (
        <div>
           { robots.map((user, i) => {
            return (
                <Card 
                key={user.id}
                name={user.name} 
                email={user.email} 
                id={user.id}/>
            )
        })}
        </div>
        
    )
}


export default CardArray;