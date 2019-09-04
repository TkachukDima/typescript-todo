import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { AppState } from '../store/configureStore';
import { Item } from '../types/Item';

interface IAddNewItem {
    items: Item[],
    addNewItem: (item: Item) => void
}

class AddNewItem extends Component<IAddNewItem> {
    state = {
        content: ''
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState ({
            content: e.target.value
        })
    }

    saveNewItem = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {items} = this.props;
        const lastId = items.length ? items[items.length - 1].id : 1;
        const id = lastId + 1;
        const content = this.state.content;
        this.setState({
            content: ''
        })

        this.props.addNewItem({
            id,
            content,
            done: false
        })
    }
    
    render() {

        // console.log(this.props);
        return (
            <div>
                <div>
                    Add new Item
                </div>
                
                <form onSubmit={ (e) => this.saveNewItem(e) }>
                    <input  type="text"
                            onChange={ (e) => this.handleChange(e) }
                            value={this.state.content}
                            placeholder="Input text"/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state: AppState) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, actions)(AddNewItem);