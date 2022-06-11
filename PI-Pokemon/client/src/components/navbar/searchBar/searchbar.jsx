import {react, useState} from 'react';
import {useDispatch} from 'react-redux';
import { filterBySearch, getPokemons } from '../../../reducer/reducer/actions';



import { SearchInput } from '../../../styles/navBar/searchBar';


export default function SearchBar(){
    const dispatch= useDispatch();
    const[name,setName]= useState('');

    function handleSearchChange(arg){
        arg===''?
        dispatch(getPokemons()):
        dispatch(filterBySearch(arg));
    }

    function handleInputChange(e){
        console.log(e.target.value)
        e.preventDefault();
        handleSearchChange(e.target.value)
        setName(e.target.value)
    }


    return(

            <div>
               <SearchInput 
               
               onChange={(e)=>handleInputChange(e)}
               placeholder='🔎'/>
               
            
            </div>
            
      
    )
}