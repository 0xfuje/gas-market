import React from 'react';
import styled from 'styled-components';

function Spinner() {
    return <StyledSpinner className='Spinner' />;
}


const StyledSpinner = styled.div`

  display: inline-block;
  width: 3.125em;
  height: 3.125em;
  border: ${props => props.theme.space.eta} solid ${props => props.theme.colors.darkgrey};
  border-radius: 50%;
  border-top-color: ${props => props.theme.colors.light};;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;


    @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
    }
`

export { Spinner };