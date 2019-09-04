import { Item } from "../types/Item";
import { ItemActionTypes, ADD_NEW_ITEM, DELETE_ITEM } from "../types/actions";


const initialState: Item[] = [
        {
            id: 1,
            content: 'Read book',
            done: false
        },
        {
            id: 2,
            content: 'do Homework',
            done: false
        },
        {
            id: 3,
            content: 'Play Games',
            done: false
        }
    ];

const itemReducer = (state = initialState, action: ItemActionTypes): Item[] => {
    switch (action.type) {
        case ADD_NEW_ITEM: 
            return [...state, action.payload];
        case DELETE_ITEM:
            const delId = action.payload;
            const idx = state.findIndex( (el) => el.id === delId )
            return [...state.slice(0, idx),
                    ...state.slice(idx + 1)];
        default:
            return state
    }

}

export default itemReducer;

