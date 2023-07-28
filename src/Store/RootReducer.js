const { combineReducers } = require("@reduxjs/toolkit");

import user from './User';
import loader from './Loader';
import chatrooms from './ChatRooms';

const rootReducers = combineReducers({
    user,
    loader,
    chatrooms,
});

export {
    rootReducers
};