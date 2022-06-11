import react from 'react';
import { Link } from 'react-router-dom';
import GitHub from '../../../image/github.png';
import Linkedin from '../../../image/ln.png';
import Gmail from '../../../image/mail.png';
import { Navcontainer, Logo } from '../../../styles/navBar/navBar';
import Image from '../../../image/Pokemon.png'
import { Imagen } from '../../../styles/landing/landing';


export default function NavBar2(){
    return(

            <Navcontainer>
                <Link to='/'>
                <Logo src={Image} alt='pokemon'/>
                </Link>
                <Link to='/pokemon/form'>
                
                </Link>
                <Imagen src={Gmail} alt='linkedin'/>
                <Imagen src={GitHub} alt='github'/>
                <Imagen src={Linkedin} alt='linkedin'/>
            </Navcontainer>
            
      
    )
}