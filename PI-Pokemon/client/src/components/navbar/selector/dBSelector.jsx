import react from 'react';
import {useDispatch} from 'react-redux';
import { filterCreated } from '../../../reducer/reducer/actions';
import { Link } from 'react-router-dom';
import { Selector } from '../../../styles/navBar/searchBar';





export default function DbSelect({setOrder}){

    const dispatch=useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
        setOrder(`Ordered ${e.target.value}`)
    }

    return(

            <div>
                <Selector onChange={(e)=> handleSubmit(e)}>
                    <option value='All'>Api Or DB</option>
                    <option value='Created'>Database</option>
                    <option value='notCreated'>Api</option>
                </Selector>
            
            </div>
            
      
    )
}