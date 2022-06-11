import React from 'react';
import { LOADING } from '../../constants/constants';
import CharizardLoad from '../../image/charizardLoad.gif'
import { Container } from '../../styles/loading/loading';

export default function LoadingPage({setLoading}){
    return(
      <Container>
          <div>
          <img src={CharizardLoad} alt='image'/>
          <h2>Loading...</h2>
          </div>
          <div className="setLoading">
        {setTimeout(() => {
          setLoading(false);
        }, 3000)}
      </div>
      </Container>
    )
}