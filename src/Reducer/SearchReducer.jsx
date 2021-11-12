import { useSelector } from 'react-redux'
import {LOAD_NEWS, WORD_SEARCH, ID_ENGLISH,INDEX_ARRAY,TOTAL_RESULT} from '../Store/Type'
const initState = {
 cards:[],
 word:'',
 lang:1,
 index:0,
 pageSize:5,
 page:1,
 totalResults:0,
 totalPage:0
}

export const SearchReducer = (state =initState, action) => {
    switch (action.type) {
        case LOAD_NEWS: return {...state, cards: [...action.data]}
        case WORD_SEARCH: return {...state, word: action.word}
        case ID_ENGLISH: return {...state, lang: action.id}
        case INDEX_ARRAY: return {...state, index: action.index}
        case TOTAL_RESULT: return {...state, totalResults: action.totalResults}
        default: return state
    }

}
export const ws = (word) => {
    return {type: WORD_SEARCH, word}
    
} 
export const loadnews = (data) => {
    return {type:LOAD_NEWS, data}
}
export const changeLang =(id) => {
    return {type:ID_ENGLISH, id}
}
export const changeIndex =(index)=>{
    return {type:INDEX_ARRAY, index}
}
export const totalres = (totalResults) =>{
    return {type:TOTAL_RESULT, totalResults}
}