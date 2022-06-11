import { FILTER_TYPE, GET_CREATED, GET_POKE, GET_POKE_ID, GET_POKE_NAME, GET_TYPES, NEW_POKE, POKE_POST, SEARCH_NAME } from "../../constants/constants";

const initialState={
    pokemon:[],
    allPokemon:[],
    pokeDetail:[],
    types:[],
};

const reducer=(state= initialState, action)=>{
    switch(action.type){
        case GET_POKE:
        return{

            ...state,
            pokemon: action.payload,
            allPokemon: action.payload
        }
        case GET_POKE_ID:
            return{
                ...state,
                pokeDetail: action.payload
            }
        case GET_POKE_NAME:
            const sortAlph =
            action.payload === "A-Z"
          ? state.allPokemon.sort((a, b) => a.name.localeCompare(b.name))
          : state.allPokemon.sort((a, b) => b.name.localeCompare(a.name));
            return{
                ...state,
                pokemon: sortAlph 
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
            //Arreglar types bd
         case FILTER_TYPE:
             return{
                 ...state,
                 pokemon: action.payload=== 'All'? state.allPokemon: state.allPokemon.filter(el=> el.types.includes(action.payload))
             }
        case NEW_POKE:{
            return{
                ...state
            }
        }   

        case SEARCH_NAME:
            return{
                ...state,
                pokemon: action.payload
            }
        case GET_CREATED:
            console.log(state.allPokemon)
            const filt=  state.allPokemon.filter((el)=> el.create===true);
            const notFilt=  state.allPokemon.filter((el)=> ! el.create===true)
            return{
                ...state,
                pokemon: action.payload ==='All'
                ? state.allPokemon
                : action.payload === 'Created'
                ? filt: notFilt
            }
        default:
            return{
                ...state
            }
    }
};

export default reducer;


