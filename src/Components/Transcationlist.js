import React, {useContext} from 'react';
import { Transcation } from './Transcation';

import { GlobalContext } from '../context/GlobalState';

export const Transcationlist = () => {
  const newLocal = useContext(GlobalContext);
  const { transcations } = newLocal;

    return (
      <>
        <h3>History</h3>
        <ul className="list">
          {transcations.map(transcation => (<Transcation key={transcation.id} transcation=
          {transcation} />))}
        </ul>
      </>
    )
    
  }


