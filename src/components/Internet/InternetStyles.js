import styled from 'styled-components';

export const NoteContainer = styled.div`
    position: block;
    width: 100%;
    height: 110px;
    top: 50px;
    align-items: center;
    background-color: #000;

    @media (min-width: 300px) and (max-width: 800px) {
        height: 190px;
    }
`;

export const Advise = styled.h1`
color: #fdc500;
text-align: center;
font-size: 30px;
`;