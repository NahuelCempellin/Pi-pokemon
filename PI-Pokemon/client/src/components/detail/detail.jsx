import {react, useEffect,useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import  {useDispatch, useSelector} from 'react-redux';
import LoadingPage from '../loading/loading';
import { getPokeId } from '../../reducer/reducer/actions';
import PokedexImage from '../../image/Pokedex1.png';
import { Pokedex, Inter, ImageInter, PokeDexImg,ContInter, Aux } from '../../styles/pokedex/pokedex';



export default function PokeDex(){
const {id}= useParams();
const[loading, setLoading]= useState(true);



const dispatch= useDispatch();
const detail= useSelector((state)=> state.pokeDetail)


useEffect(()=>{
    dispatch(getPokeId(id))
},[])



    return(
        <div>
       {    loading=== true?(<LoadingPage setLoading={setLoading}/>):
           
       <Pokedex>

            <ContInter>
                <Aux>
                <PokeDexImg src={PokedexImage} alt='pokedex'/>
                <ImageInter>
                <h1>{detail.name}</h1>
                <img src={detail.image}/>
                </ImageInter>
                </Aux>
            </ContInter>
           

            <Inter>
            <p>Type: {detail.createdInDb=== true? detail.types.map(el=> el.name):detail.types + ''}</p>
            <p>HP: {detail.hp}</p>
            <p>STR: {detail.str}</p>
            <p>DEF: {detail.def}</p>
            <p>SP: {detail.vel}</p>
            <p>HE: {detail.height}</p>
            <p>WE: {detail.weight}</p>
            </Inter>
            
            <Link to='/pokemon'>
            <button>Back</button>
            </Link>
        </Pokedex>
        }
        </div>
    )
}