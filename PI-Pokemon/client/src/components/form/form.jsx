import {react, useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { getPokemonTypes, newPokemon } from '../../reducer/reducer/actions';
import validate from './validate';
import { FormCont,DivGrid, FirstDiv, ButtonCont, UlPoke, UlCont, H1 } from '../../styles/form/form';


export default function Form(){

    const dispatch= useDispatch();
    const history= useNavigate();
    const type= useSelector((state)=> state.types);
    const[error,setError]=useState({})
    const [input,setInput]= useState({
        name:'',
        image:'',
        hp:'',
        str:'',
        def:'',
        vel:'',
        height:'',
        weight:'',
        types:[],
    });




useEffect(()=>{
dispatch(getPokemonTypes())
},[]);

function handleSubmit(e){
    e.preventDefault();
    setError(validate(input))
    const errorSave=validate(input);
    if(Object.values(errorSave).length !== 0){
        alert('Please, fullfil the required Camps...')
    }else{
        dispatch(newPokemon(input));
        alert('pokemon posted successfully!!')
        history('/pokemon')
    }
    setInput({
        name:'',
        image:'',
        hp:'',
        str:'',
        def:'',
        vel:'',
        height:'',
        weight:'',
        types:[],
    })
    console.log(setInput)
}

function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    setError(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
    console.log(input)
}


function handleSelect(e){
    console.log(e)
    
    if(!input.types.includes(e.target.value)&& e.target.value !== 'Types'){
     setInput({
         ...input,
         types:[ ...input.types ,e.target.value]
     })

    }
     
 }

 function deleteTypes(p){
     console.log(p)
    setInput({
        ...input,
        types: input.types.filter((el)=> el!== p)
    });
    setError(
        validate({
        ...input,
        types: [...input.types]
    }))
    
}

    return(

            <FormCont>
                <H1>
                <h1>CREATE A NEW POKEMON</h1>
                </H1>
             <form>
                 <FirstDiv>
                 <div>
                 <label>Name:</label>
                 <input
                 type='text'
                 value={input.name}
                 name='name'
                 onChange={(e)=>handleChange(e)}
                 />{
                     error.name &&(
                         <p className='err'>{error.name}</p>
                     )
                 }
                 </div>
                 <div>
                 <label>IMAGE:</label>
                 <input
                 type='url'
                 value={input.image}
                 name='image'
                 onChange={(e)=>handleChange(e)}
                 />{
                     <p className='err'>{error.image}</p>
                 }
                 </div>
                 </FirstDiv>
                 <DivGrid>
                 <div>
                 <label>HP:</label>
                 <input
                 type='number'
                 min='0'
                 value={input.hp}
                 name='hp'
                 onChange={(e)=>handleChange(e)}
                 />
                 {
                     <p className='err'>{error.hp}</p>
                 }
                 </div>
                 <div>
                 <label>STRENGTH:</label>
                 <input
                 type='number'
                 min='0'
                 value={input.str}
                 name='str'
                 onChange={(e)=>handleChange(e)}
                 />
                 {
                     <p className='err'>{error.str}</p>
                 }
                 </div>
                 <div>
                 <label>DEFENSE:</label>
                 <input
                 type='number'
                 min='0'
                 value={input.def}
                 name='def'
                 onChange={(e)=>handleChange(e)}
                 />
                 {
                     <p className='err'>{error.def}</p>
                 }
                 </div>
                 <div>
                 <label>SPEED:</label>
                 <input
                 type='number'
                 min='0'
                 value={input.vel}
                 name='vel'
                 onChange={(e)=>handleChange(e)}
                 />
                 {
                     <p className='err'>{error.vel}</p>
                 }
                 </div>
                 <div>
                 <label>HEIGHT:</label>
                 <input
                 type='number'
                 min='0'
                 value={input.height}
                 name='height'
                 onChange={(e)=>handleChange(e)}
                 />
                 {
                     <p className='err'>{error.height}</p>
                 }
                 </div>
                 <div>
                 <label>WEIGTH:</label>
                 <input
                
                 type='number'
                 min='0'
                 value={input.weight}
                 name='weight'
                 onChange={(e)=>handleChange(e)}
                 />
                 {
                     <p className='err'>{error.weight}</p>
                 }
                 </div>
                 </DivGrid>
                 <div>
                     <label>TYPE:</label>
                    <select onClick={(e)=>handleSelect(e)}>
                        <option value='Types'>Types</option>
                        {type.map(el=>{
                            return(
                                <option value={el.name}>{el.name}</option>
                            )
                        })}
                    </select> {
                     <p className='err'>{error.types}</p>
                 }
                 <div>
                     <UlPoke>
                         {
                             input.types?.map(el=>{
                                 return(
                                     <UlCont>
                                     <li>{el}</li>
                                     <button onClick={()=>{deleteTypes(el)}}>x</button>
                                     </UlCont>
                                 )
                             })
                         }
                     </UlPoke>
                 </div>
                 </div>


            <ButtonCont>
                <button
                type='submit'
                onClick={(e)=>handleSubmit(e)}
                >Submit</button>
             <Link to='/pokemon'>
             <button>Back</button>
             </Link>
             </ButtonCont>
             </form>
             
            </FormCont>
            
      
    )
}