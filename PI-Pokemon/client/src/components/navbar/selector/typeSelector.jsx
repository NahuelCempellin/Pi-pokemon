import react, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonTypes, filterType } from '../../../reducer/reducer/actions';
import { Selector } from '../../../styles/navBar/searchBar';

export default function TypeSelect(){
    const dispatch= useDispatch();
    const type= useSelector((state)=> state.types);
    

    function filterSelect(e){
        e.preventDefault()
        dispatch(filterType(e.target.value))
    }


    useEffect(()=>{
        dispatch(getPokemonTypes());
    },[])


    return(

            <div>
                <Selector onChange={(e)=>filterSelect(e)}>
                    <option value='All'>Types</option>
                    {
                        type.map(el=>{
                            return(
                                <option id={el.id} value={el.name}>{el.name}</option>
                            )
                        })
                    }
                </Selector>
            
            </div>
            
      
    )
}