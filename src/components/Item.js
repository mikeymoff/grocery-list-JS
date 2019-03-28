import React from 'react';
import { Button, Icon } from 'semantic-ui-react';



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
    <br/>
    <Button
    inverted
    color='red'
    size='mini'
    icon={<Icon name='trash' link onClick={props.onDelete}/>}/>


</div>
);
