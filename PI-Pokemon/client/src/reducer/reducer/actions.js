import {
POKE_URL,
POKE_ID,
GET_POKE_NAME,
GET_POKE,
GET_POKE_ID,
POKE_NAME,
SEARCH_NAME,
GET_TYPES,
POKE_TYPES,
FILTER_TYPE,
POKE_POST,
NEW_POKE,
GET_CREATED
} from '../../constants/constants';


export function getPokemons(){
    return function(dispatch){
        return fetch(POKE_URL)
        .then((response)=> response.json())
        .then((res)=>{
            dispatch({
                type: GET_POKE,
                payload: res
            })
        })
    }
};

export function getPokeId(id){
    return function(dispatch){
        return fetch(POKE_ID+id)
        .then((response)=> response.json())
        .then((res)=>{
            dispatch({
                type: GET_POKE_ID,
                payload: res
            })
        })
    }
};


export function filterCreated(payload){
  return {
        type: GET_CREATED,
        payload
}
}

export function filterName(payload){
   return{
       type: GET_POKE_NAME,
       payload
   }
}

//arreglar anda lento
export function filterBySearch(name){
    return function(dispatch){
        try{
            return fetch(POKE_NAME + name )
            .then((response)=> response.json())
            .then((res)=>{
                dispatch({
                    type: SEARCH_NAME,
                    payload:res
                })
            })

        }catch(error){
            if(error.response){
                alert(Error.response.data)
            }
        }
    }
}

export function getPokemonTypes(){
    return function(dispatch){
        return fetch(POKE_TYPES)
        .then((response)=> response.json())
        .then((res)=> {
            dispatch({
                type: GET_TYPES,
                payload: res
            })
        })
    }
}

export function filterType(payload){
    return{
        type: FILTER_TYPE,
        payload
    }
}


export const newPokemon = (payload) => {
    return (dispatch)=>{
   try   {  
       return fetch(POKE_POST,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then((response)=>{
            dispatch({
                type: NEW_POKE
            })
        })
    }catch(error){
        console.log("newPokemon" + error)
    }
    }
}