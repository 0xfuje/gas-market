import Chains from './components/Chains';
import styled from 'styled-components';
import Footer from './components/Footer';

function App() {
    return (
    <StyledApp className='App'>
        <h1 className='App-title'>gas market ⛽</h1>
        <Chains />
        <Footer />
    </StyledApp>
    );
}

const StyledApp = styled.div`
   .App {
       &-title {
           font-size: ${props => props.theme.font.size.alpha};
           margin: ${props => props.theme.space.epsilon} 0;
           text-transform: capitalize;
           @media screen and (min-width: ${props => props.theme.breakpoints.epsilon}) {
                text-align: center;
            }
       }
   }
`;

export default App;
