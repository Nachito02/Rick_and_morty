
import { ADD_CHARACTER, DELETE_CHARACTER } from "./types"


export const addCharacter =  (id)   => ({
    type:ADD_CHARACTER,
    
    payload:id
})

export const deleteCharacter =  (id)   => ({
    type:DELETE_CHARACTER, 
    payload:id
})