import React from "react";

const Card =({name, email, id})=>{
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 bw2 grow shadow-5 ">
            <img alt='robot_photo' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;