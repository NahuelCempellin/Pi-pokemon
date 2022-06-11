import react from 'react';
import { Link } from 'react-router-dom';
import {Selector} from '../../../styles/navBar/searchBar';
import { filterName } from '../../../reducer/reducer/actions';
import { useDispatch } from 'react-redux';

export default function AlphSelect({setOrder}){

    const dispatch= useDispatch();

    function handleOrder(e){
        console.log(e.target.value)
        e.preventDefault();
        dispatch(filterName(e.target.value))
        setOrder(`Ordered ${e.target.value}`)
    }
    return(

            <div>
                <Selector 
                 defaultValue='default'
                onClick={(e)=>handleOrder(e)}>
                    
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </Selector>
            
            </div>
            
      
    )
}