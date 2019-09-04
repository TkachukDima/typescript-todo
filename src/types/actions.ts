import {Item} from './Item';


export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const TOGGLE_DONE = 'TOGGLE_DONE';

export interface addNewItemAction {
    type: typeof ADD_NEW_ITEM;
    payload: Item;
}  

export interface deteleItemAction {
    type: typeof DELETE_ITEM;
    payload: number;
} 

export interface toggleDoneAction {
    type: typeof TOGGLE_DONE;
    payload: number
} 

export type ItemActionTypes = addNewItemAction | deteleItemAction | toggleDoneAction;

export type AppAction = ItemActionTypes;