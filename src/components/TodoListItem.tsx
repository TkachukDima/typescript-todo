import React, {Component} from 'react';
import {connect} from 'react-redux'
// import { AppState } from '../store/configureStore';
import * as actions from '../store/actions';
import { Item } from '../types/Item';
import DoneOrDelay from './DoneOrDelay';

interface ITodoListItem {
    item: Item;
    deleteItem: (id: number) => void
}

interface ITodoListState {
    visible: boolean
}

class TodoListItem extends Component<ITodoListItem, ITodoListState> {
    
    state = {
        visible: false
    }
    
    handleClick = () => {
        this.setState( (state) => {
            return {
                visible: !state.visible
            }
        } )
    }

    render() {
        const {deleteItem, item: {id, content}} = this.props;
        const doneOrDelay = this.state.visible ? <DoneOrDelay /> : null;
        return (
            <div className="item"> 
                <div className="content"
                     onClick={() => this.handleClick()}>
                    {content} {doneOrDelay}  
                </div>
                <div className="button">
                     <button onClick={ () => deleteItem(id) } >DEL</button>
                </div>
            </div>
        )
    }
};

// const mapStateToProps = (state: AppState) => {
//     return {
//         items: state.items
//     }
// }

export default connect(null, actions)(TodoListItem);