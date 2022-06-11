import react from 'react';
import { Link } from 'react-router-dom';
import TypeSelect from '../selector/typeSelector';
import AlphSelect from '../selector/alphSelector';
import DbSelect from '../selector/dBSelector';
import SearchBar from '../searchBar/searchbar';
import { Navcontainer, Logo } from '../../../styles/navBar/navBar';
import Image from '../../../image/Pokemon.png';
import { HomNavCont } from '../../../styles/navBar/navAll';

export default function NavHome({setOrder}){
    return(
            <HomNavCont>
           
                <TypeSelect/>
                <AlphSelect setOrder={setOrder}/>
                <DbSelect setOrder={setOrder}/>
                <SearchBar/>
            
            </HomNavCont>
            
      
    )
}