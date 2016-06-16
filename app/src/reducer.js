import * as Action from './actions'
import * as Type from './actions/types'

const INITIAL_STATE = {
    clients: [],
    admins: [],
    inbox: [],
    active: {
        client: '',
        admin: ''
    }
};
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Type.ADD_CLIENT:
            return Object.assign({}, state, {
                clients: [...state.clients, action.id]
            });
            break;
        case Type.ADD_ADMIN:
            return Object.assign({}, state, {
                admins: [...state.admins, action.id]
            });
            break;
        case Type.ACTIVE_CLIENT:
            return Object.assign({}, state, {
                active: {
                    client: action.id
                }
            });
            break;
        case Type.ACTIVE_ADMIN:
            return Object.assign({}, state, {
                active: {
                    client: state.active.client,
                    admin: action.id
                }
            });
            break;
        default:
            return state;
    }
}