import React, {Component, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import { DelayItem } from '../types/DelayItem';

const modal = document.getElementById("modal") as HTMLElement;

interface IDoneOrDelayProps {
    onClose: () => void;
    toggleDone: (id: number) => void;
    delayItem: (item : DelayItem) => void;
    itemId: number;
    isDone: boolean;
    startReadoutDelay: () => void;
    children?: React.ReactNode
}

interface IDoneOrDelayState {
    delaySeconds: number
}


class DoneOrDelay extends Component<IDoneOrDelayProps, IDoneOrDelayState> {
    
    state = {
        delaySeconds: 5
    }
    
    el: HTMLElement = document.createElement("div");
    
    itemDone = () => {
        this.props.toggleDone(this.props.itemId);
        this.props.onClose();

    }
    
    delayItemClick = () => {
        const delay = new Date().getTime() + this.state.delaySeconds*1000;
        
        this.props.delayItem({
            id: this.props.itemId,
            delayTime: delay
        });

        this.props.startReadoutDelay()
        this.props.onClose();
    }
    
    handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        this.setState({
            delaySeconds: +(e.target.value)
        })
    }
    
    componentDidMount() {
        modal.appendChild(this.el);
      }
    
    componentWillUnmount() {
        modal.removeChild(this.el);
     }
    
    render() {
        return ReactDOM.createPortal(
            <div className="modal_Inner">
                <div className="modal_Element">
                    {this.props.children}
                    <button onClick={this.itemDone}>
                        {this.props.isDone ? "Возобновить" : "Выполнить" }
                    </button>
                    <div>
                        Отложить на
                        <select onChange={ (e) => {this.handleChange(e)}}
                                value={this.state.delaySeconds}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                        секунд
                          <button onClick={this.delayItemClick}>Ок</button>
                    </div>
                    
                    <button onClick={this.props.onClose}>Отмена</button>
                </div>
            </div>,
            this.el
            )
    }
}



export default connect(null, actions)(DoneOrDelay);

