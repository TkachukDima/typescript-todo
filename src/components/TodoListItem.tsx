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
    visible: boolean,
    readout: number
}

class TodoListItem extends Component<ITodoListItem, ITodoListState> {
    
    state = {
        visible: false,
        readout: 0
    }

    timer : any = 0;

    handleClick = () => {
        this.setState( (state) => {
            return {
                visible: !state.visible
            }
        } )
    }

    startReadoutDelay = () => {
        this.timer = setInterval( () => {
            const time = this.props.item.delayTime - new Date().getTime();
            this.setState({
                readout: time
            })
        }, 100 )
    }

    stopInterval = () => {
        clearInterval(this.timer);
        setTimeout( () => {
            this.setState({
                readout: 0
            })
        }, 1000)
        
        
    }

    render() {
        const {deleteItem, item: {id, content, done, delayTime}} = this.props;
        let styleDone = "content";
        if(done) {
            styleDone += " item_done"
        }

        if( this.state.readout < 0 ) {
            this.stopInterval()
        }

        if( this.state.readout > 1) {
            styleDone += " item_delay"
        }
        
        return (
            <div className="item"> 
                <div className={styleDone}
                     onClick={() => this.handleClick()}>
                    {content} 
                </div>
                <div className="button">
                     <button onClick={ () => deleteItem(id) } >DEL</button>
                </div>
               
                {
                    this.state.visible && 
                    <DoneOrDelay onClose={this.handleClick}
                                 itemId={id}
                                 isDone={done}
                                 startReadoutDelay={this.startReadoutDelay}>
                        <h1>Выберите действие</h1>
                    </DoneOrDelay>
                }
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