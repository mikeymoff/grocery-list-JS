import React from 'react';
import ListForm from './ListForm'
import Item from './Item'

class GroceryList extends React.Component {

    state = {
        items: [],
        itemToShow: "All Items"
    };

    addItem = item => {
        this.setState(state => ({
            items: [item, ...this.state.items]
        }));
    };

    toggleComplete = id => {
        this.setState( state => ({
            items: state.items.map(item => {
                if (item.id === id) {
                    return {
                    id: item.id,
                    text: item.text,
                    complete: !item.complete
                    };
                } else {
                    return item;
                }
            })

        }));
    };

    updateItemToShow = s => {
        this.setState({
            itemToShow: s
        });
    };

    render() {
        let items = [];

        if (this.state.itemToShow === "All Items"){
            items = this.state.items;
        } else if (this.state.itemToShow === "Items still needed"){
            items = this.state.items.filter(item => !item.complete);
        } else if (this.state.itemToShow === "Items already in cart"){
            items = this.state.items.filter(item => item.complete);
        } 


        return (
        <div>
            <ListForm onSubmit = {this.addItem} />
            {items.map( item => (
            <Item key={item.id}
            toggleComplete={ () => this.toggleComplete(item.id)}
            item = {item}
            />
            ))}
            <div>
                Number of Items You Still Need: {this.state.items.filter( item => !item.complete).length}
                </div>
                <div>
                    <button onClick={() => this.updateItemToShow('All Items')}>All Items</button>
                    <button onClick={() => this.updateItemToShow('Items still needed')}>Items still needed</button>
                    <button onClick={() => this.updateItemToShow('Items already in cart')}>Items already in cart</button>

                </div>
        </div>
        );
    }
}

export default GroceryList;
