import React, {Component} from 'react';
import TodoListItem from './TodoListItem';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import { AppState } from '../store/configureStore';
import {Item} from '../types/Item';

interface ITodoList {
    items: Item[]
}

class TodoList extends Component<ITodoList> {
    
    render() {
       const elements = this.props.items.map( (el) => {
            return (
                <li key={el.id}  >
                    <TodoListItem  item={el}  />
                </li>
            )
        } )
        return (
            <ul className="list-item">
                {elements}
            </ul>
        )
    }
};

const mapStateToProps = (state: AppState) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, actions)(TodoList);