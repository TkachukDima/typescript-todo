import React, {Component} from 'react';
import {connect} from 'react-redux';


class DoneOrDelay extends Component {
    
    render() {
        return (
            <div>
                <button>Готово</button>
                <button>Отложить</button>
            </div>
        )
    }
}

export default connect()(DoneOrDelay);

