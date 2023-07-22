import React from "react";

const Scroll = (props)=>{
    return (
        <div style={{overflowY:'auto' ,border:'5px solid rgba(22,22,22,0)', height:'800px'  }}>
            {props.children}
        </div>
    )
};

export default Scroll;