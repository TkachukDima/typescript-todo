import { Item } from "../types/Item";
import { DelayItem } from "../types/DelayItem";
import { ItemActionTypes, ADD_NEW_ITEM, DELETE_ITEM, TOGGLE_DONE, DELAY_ITEM } from "../types/actions";


const initialState: Item[] = [
        {
            id: 1,
            content: 'Read book',
            done: false,
            delayTime: 0
        },
        {
            id: 2,
            content: 'do Homework',
            done: false,
            delayTime: 0
        },
        {
            id: 3,
            content: 'Play Games',
            done: false,
            delayTime: 0
        }
    ];

const itemReducer = (state = initialState, action: ItemActionTypes): Item[] => {
    switch (action.type) {
        case ADD_NEW_ITEM: 
            return [...state, action.payload];
        case DELAY_ITEM:
            const delayId = action.payload.id;
            const delayIndex = state.findIndex( (el) => el.id === delayId );
            const oldDelayItem = state[delayIndex];
            const newDelayItem = {
                ...oldDelayItem,
                delayTime: action.payload.delayTime
            };
            return [...state.slice(0, delayIndex),
                    newDelayItem,
                    ...state.slice(delayIndex + 1)];            
            // const toggleIndex = state.findIndex( (el) => el.id === toggleId );
            // const oldItem = state[toggleIndex];
            // const newItem = {
            //     ...oldItem,
            //     done: !oldItem.done
            // }
            
            // return [...state.slice(0, toggleIndex),
            //         newItem,
            //         ...state.slice(toggleIndex + 1)];
            return state;
        case DELETE_ITEM:
            const delId = action.payload;
            const idx = state.findIndex( (el) => el.id === delId )
            
            return [...state.slice(0, idx),
                    ...state.slice(idx + 1)];
        case TOGGLE_DONE:
            const toggleId = action.payload;
            const toggleIndex = state.findIndex( (el) => el.id === toggleId );
            const oldItem = state[toggleIndex];
            const newItem = {
                ...oldItem,
                done: !oldItem.done
            };
            return [...state.slice(0, toggleIndex),
                    newItem,
                    ...state.slice(toggleIndex + 1)];
            
        
        default:
            return state
    }

}

export default itemReducer;

