import react from 'react';
import { Link } from 'react-router-dom';
import { CardContainer,DownBall,Circle  } from '../../styles/home/card';

export default function PokeCard({name,image,types,id}){
    return(
        <CardContainer>
            <div>
            <Link to={`/pokemon/${id}`}>
            <img src={image}/>
            </Link>
            </div>
            
            <DownBall>
            <hr/>
            <Circle>
                <div>
                    <div></div>
                </div>
            </Circle>
            <h2>{name}</h2>
            <h3>{types + ""}</h3>
            </DownBall>
            
        </CardContainer>
    )
}