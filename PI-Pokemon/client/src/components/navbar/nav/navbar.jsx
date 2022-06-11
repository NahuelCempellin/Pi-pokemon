import react from 'react';
import { Link } from 'react-router-dom';
import TypeSelect from '../selector/typeSelector';
import AlphSelect from '../selector/alphSelector';
import DbSelect from '../selector/dBSelector';
import SearchBar from '../searchBar/searchbar';
import { Navcontainer, Logo } from '../../../styles/navBar/navBar';
import Image from '../../../image/Pokemon.png'
import { Hom, ContainerNav } from '../../../styles/navBar/navAll';



export default function NavBar({setOrder}){
    return(

            <Navcontainer>
                <ContainerNav>
                <Link to='/'>
                <Logo src={Image} alt='pokemon'/>
                </Link>
                <Hom>
                <Link to='/'>
                <h3>Landing |</h3>
                </Link>
                <Link to='/pokemon'>
                <h3>Home |</h3>
                </Link>
                <Link to='/pokemon/form'>
                <h3>Create |</h3>
                </Link>
                </Hom>
                </ContainerNav>
            </Navcontainer>
            
      
    )
}