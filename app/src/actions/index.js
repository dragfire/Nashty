import * as Type from './types'

export let addClient = socketid => {
    return {
        type: Type.ADD_CLIENT, id: socketid
    };
};

export let addAdmin = socketid => {
    return {
        type: Type.ADD_ADMIN, id: socketid
    };
};

export let addActiveAdmin = socketid => {
    return {
        type: Type.ACTIVE_ADMIN, id: socketid
    };
};

export let addActiveClient = socketid => {
    return {
        type: Type.ACTIVE_CLIENT, id: socketid
    };
};
