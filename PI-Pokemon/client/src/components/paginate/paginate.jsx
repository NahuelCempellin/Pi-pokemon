import react, { useState } from 'react';
import { PaginateCont } from '../../styles/paginate/paginate';

export default function Paginate({page, setPage,maximo}){
   const [input,setInput]= useState(1);

    const nextPage=()=>{
        setInput(input+1);
        setPage(page+1);
    }
    const prevPage=()=>{
        setInput(input-1);
        setPage(page-1);
    }

    const onKeyDown=(e)=>{
        if(e.keyCode == 13){
            setPage(parseInt(e.target.value))
            if(parseInt(e.target.value < 1)|| parseInt(e.target.value)> maximo || isNaN(e.target.value)){
                setInput(1);
                setPage(1);
            }else{
                setPage(parseInt(e.target.value))
            }
        }
    }

    const onChange=(e)=>{
        setInput(e.target.value)
    }
   
    return(
        <PaginateCont>
            <div>
            <button
            disabled={page ===1 || page<1}
            onClick={prevPage}
            >◄</button>
            <input
            onChange={(e)=>onChange(e)}
            onKeyDown={(e)=>onKeyDown(e)}
            name='page'
            autoComplete='off'
            value={input}/>
            <button
            disabled={page === maximo || page > maximo}
            onClick={nextPage}>►</button>
            </div>
            <p>de: {maximo}</p>
        </PaginateCont>
    )
}