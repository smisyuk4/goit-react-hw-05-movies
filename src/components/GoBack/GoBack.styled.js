import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100px;
    color: currentColor;
    text-decoration: none;


    svg {
        margin-right: 10px;
    }

    &:hover, &:focus{
        color: red;
    }
`