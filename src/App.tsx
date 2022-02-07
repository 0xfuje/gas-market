import Chains from './components/Chains';
import styled from 'styled-components';


function App() {
    return (
    <StyledApp className='App'>
        <h1 className='App-title'>gas market ⛽</h1>
        <Chains />
    </StyledApp>
    );
}

const StyledApp = styled.div`
   .App {
       &-title {
           font-size: ${props => props.theme.font.size.alpha};
           margin-bottom: ${props => props.theme.space.epsilon};
           margin-top: ${props => props.theme.space.epsilon};
           text-transform: capitalize;
       }
   }
`;

export default App;
