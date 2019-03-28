import React from 'react';
import ListForm from './ListForm'
import Item from './Item'
import { Button, Header, Icon } from 'semantic-ui-react';

class GroceryList extends React.Component {

    state = {
        items: [],
        itemToShow: "All Items",
        toggleAllComplete: true
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
    handleDeleteItem = id => {
        this.setState({
           items: this.state.items.filter(item => item.id !== id)
        });
    };

    removeAllItemsThatAreCollected = () => {
        this.setState(state => ({
           items: state.items.filter(item => !item.complete) 
        }));
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
            <h1 class="ui center aligned icon header">
            <i class="shopping cart icon"></i>
                Grocery List
            </h1>

            <ListForm onSubmit = {this.addItem} />
            {items.map( item => (
            <Item
            key={item.id}
            toggleComplete={ () => this.toggleComplete(item.id)}
            onDelete={() => this.handleDeleteItem(item.id)}
            item = {item}
            />
            ))}
            <br/>
            <div>
                Number of Items You Still Need: {this.state.items.filter( item => !item.complete).length}
                </div>
                
                <div>
                    <Button inverted color='green' onClick={() => this.updateItemToShow('All Items')}>All Items</Button>
                    <Button inverted color='pink' onClick={() => this.updateItemToShow('Items still needed')}>Items still needed</Button>
                    <Button inverted color='blue' onClick={() => this.updateItemToShow('Items already in cart')}>Items already in cart</Button>

                </div>
                {this.state.items.some(item => item.complete) ? (
                <div>
<<<<<<< HEAD
                    <button  onClick={this.removeAllItemsThatAreCollected}>
                        Remove Items you already have from list
=======
                    <button onClick={this.removeAllItemsThatAreCollected}>
                        Remove All Items you already have in Cart
>>>>>>> update Remove all  button name
                    </button>
                </div>
                ) : null}
                <div>
                <br/>

          <button class="ui black basic button"
            onClick={() =>
              this.setState(state => ({
                items: state.items.map(item => ({
                  ...item,
                  complete: state.toggleAllComplete
                })),
                toggleAllComplete: !state.toggleAllComplete
              }))
            }
          >
            Toggle All to Cart {`${this.state.toggleAllComplete}`}
          </button>
        </div>
        </div>
        );
    }
}

export default GroceryList;
