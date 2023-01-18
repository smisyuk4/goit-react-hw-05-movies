import styled from '@emotion/styled';

export const CastList = styled.ul`
    display: grid;
    max-width: calc(100vw - 30px);
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
`
export const ActorCard = styled.li`
    padding: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

export const ActorPhoto = styled.img`
    margin-bottom: 10px;
    width: 100%;
    height: 150px;
    object-fit: cover;
`

export const ActorName = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 12px;

    @media screen and (min-width: 320px) {
        font-size: 16px;
    }
`