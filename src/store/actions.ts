import { Item } from "../types/Item";
import { ADD_NEW_ITEM, DELETE_ITEM, TOGGLE_DONE } from "../types/actions";
import {AppAction} from '../types/actions';

export const addNewItem = (item: Item): AppAction => {
    return {
        type: ADD_NEW_ITEM,
        payload : item
    }
}

export const deleteItem = (id: number): AppAction => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const toggleDone = (id: number): AppAction => {
    return {
        type: TOGGLE_DONE,
        payload: id
    }
}


