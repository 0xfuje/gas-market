import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <StyledFooter className='Footer'>
            <p>© {new Date().getFullYear()} Gas Market. Built by <a className='Footer-link' href='https://github.com/0xfuje'>0xfuje</a></p>
        </StyledFooter>
    )
};

const StyledFooter = styled.div`
    margin-top: ${props => props.theme.space.alpha};
    font-size: ${props => props.theme.font.size.delta};
    color: ${props => props.theme.colors.lightgrey};
    text-align: center;
    .Footer {
        &-link {
            color: ${props => props.theme.colors.light};
            text-decoration: underline;
        }
    }
`

export default Footer;
