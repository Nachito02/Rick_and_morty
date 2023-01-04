import { ADD_CHARACTER, DELETE_CHARACTER } from "./types";


const initialState = {
    myFavorites : []
}


const rootReducer = (state= initialState, action)  => {

        switch(action.type) {
            case ADD_CHARACTER:
                return {
                    ...state, myFavorites: [...state.myFavorites, action.payload]
                }

            case DELETE_CHARACTER:
                return {
                    ...state,
                     myFavorites:state.myFavorites.filter(character   => {
                        return character.id != action.payload.id
                    })
                }

                default: return {
                    ...state
                }
        }

}


export default rootReducer;