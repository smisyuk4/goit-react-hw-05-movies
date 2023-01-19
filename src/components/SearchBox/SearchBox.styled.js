import styled from '@emotion/styled';

export const Label = styled.label`
    position: relative; 
`

export const SearchInput = styled.input`
    padding: 5px 30px 5px 5px;
    font-size: 18px;
    border-radius: 8px;
    background-color: #e5d5d5;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

    &:hover,
    &:focus {
        background-color: #f09898;
        cursor: pointer;
    }
`

export const Error = styled.p`
    position: absolute;
    bottom: 0;    
    left: 0;
    transform: translateY(35px);
    color: red;
`;

export const ButtonFind = styled.button`
    position: absolute;
    top: 0;    
    right: 0;
    transform: translate(-3px, 2px);
    border: none;
    background-color: inherit;
          
    svg:hover,
    svg:focus {
        color: red;
        cursor: pointer;
    }
`;