import { State } from '.';
import { ActionPayload, ActionTypes } from '../actions/generic.actions';
import { Action } from 'redux';

const initialState: State = {
   value: 0
}

export const clickerReducer = (state: State = initialState, 
                                action: ActionPayload & Action) => {
    switch(action.type) {
        case ActionTypes.ADD_CLICKS: {
            return {
                ...state,
                clicks: state.clicks + action.payload.clicks
            }
        }
        case ActionTypes.SPEND_CLICKS: {
            return {
                ...state,
                clicks: state.clicks - action.payload.clicks
            }
        }
        default: return state;
    }

}