import React from 'react';
import { Button } from 'semantic-ui-react';



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
    <Button color='red' size='small' onClick={props.onDelete}>x</Button>
</div>   
);
 