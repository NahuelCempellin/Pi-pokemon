import {react, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getPokemons } from '../../reducer/reducer/actions';
import {Link} from 'react-router-dom';
import PokeCard from './card';
import Paginate from '../paginate/paginate';
import { GridCard } from '../../styles/home/home';
import { NOT_FOUND } from '../../constants/constants';
import { ContainerNot } from '../../styles/loading/loading';
import NavHome from '../navbar/nav/navHome';



export default function Home(){
    const pokemons= useSelector((state)=>state.pokemon)
    const dispatch= useDispatch()
    const [order,setOrder]= useState('')

    const[page,setPage]= useState(1);
    const [perPage,setPerPage]= useState(12);
    const max= pokemons.length/perPage;
    const maximo= Math.ceil(max);
    

    useEffect(()=>{
        dispatch(getPokemons())
    },[])


    return(
        <div>
            <NavHome setOrder={setOrder}/>
            <Paginate 
            page={page}
            setPage={setPage}
            maximo={maximo}
            />
            
            <Link to='/'>
            
            </Link>
            <GridCard>
                <span>
            {
                pokemons.length === 0? (<ContainerNot>
                    <img src={NOT_FOUND} alt='image'/>
                    <p>POKEMON NOT FOUND...</p>
                </ContainerNot>):
                pokemons.slice((page-1)*perPage,
                (page-1)* perPage+perPage).map(poke=>{
                    return(
                        <div key={poke.id}>
                            <PokeCard
                            name={poke.name}
                            image={poke.image}
                            types={poke.create=== true?poke.types.map(el=>el.name): poke.types}
                            id={poke.id}
                            />
                        </div>
                    )
                })
            }
                </span>
            </GridCard>
        </div>
    )
}