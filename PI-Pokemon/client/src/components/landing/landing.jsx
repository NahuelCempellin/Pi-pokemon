import react from 'react';
import {Link} from 'react-router-dom'
import CharizardImg from '../../image/charizard.png'
import { LandingCont, Image, Intermediate,Button, ImgCont, TittleCont } from '../../styles/navBar/navBar';
import NavBar2 from '../navbar/nav/navbar2';


export default function LandingPage(){
    return(
        <div>
            
        <LandingCont>
              
                <TittleCont>
                <h1>POKEMON APP!!</h1>
                <Link to='/pokemon'>
                <Button >GO!</Button>
                 </Link>

                 </TittleCont>
                <ImgCont>
                 <Image src={CharizardImg}/>
                 </ImgCont>
       
          
        </LandingCont>
        </div>
    )
}