
export const initialState = []

function RoomsReducer(state, action) {
    switch (action.type) {
        case "GET_ROOMS":
            return{
                ...state,
                state : action.payload                
            };
        case "POST_ROOM":
            return {

            }
        default:
            break;
    }
}

export default RoomsReducer