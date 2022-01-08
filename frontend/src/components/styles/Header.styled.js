import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
`

// since Nav and Logo will only be used in Header
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`

export const Logo = styled.img``