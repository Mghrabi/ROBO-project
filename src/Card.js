import React from 'react';



const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib ma2 pa2 br3 grow bw2 shadow-5'>
            <img width='150px' height='150px' src={`https://robohash.org/${id}`}></img>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;