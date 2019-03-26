import React from 'react';

export default props => (
<div 
    style={{
     textDecoration: props.item.complete ? "line-through": ""

}}
    onClick={props.toggleComplete}
>
    {props.item.text}
</div>
);
 