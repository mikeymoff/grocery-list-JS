import React from 'react';

export default props => (
<div style={{ display: "flex", justifyContent: 'center' }}>
    <div 
        style={{
        textDecoration: props.item.complete ? "line-through": ""

    }}
        onClick={props.toggleComplete}
    >
        {props.item.text}
    </div>
    <button onClick={props.onDelete}>x</button>
</div>   
);
 