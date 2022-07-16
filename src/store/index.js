import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

export default store;

// *************** CLEAN VERSION WITHOUT REDUXJS/TOOLKIT ***************
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 counter: state.counter + 1,
//             };
//         case 'DECREMENT':
//             return {
//                 ...state,
//                 counter: state.counter - 1,
//             };

//         case 'INCREASE': {
//             return {
//                 ...state,
//                 counter: state.counter + action.amount,
//             };
//         }

//         case 'TOGGLE': {
//             return {
//                 ...state,
//                 showCounter: !state.showCounter,
//             };
//         }
//         default:
//             return state;
//     }
// };

// const store = createSlice(counterReducer);
// export default store;
