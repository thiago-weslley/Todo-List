import styled from "styled-components";

export const Container = styled.main`
    margin: 0 auto;
    margin-top: 10rem;
    background: #fff;
    max-width: 55rem;
    width: 95%;
    border-radius: 5px;
    padding: 2rem 3rem;
`;

export const InputTask = styled.div`
    display: flex;
    justify-content: space-between;

`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 3.5rem;
    padding-left: 1rem;
    width: 72%;
`

export const Button = styled.button`
    background: #8052ec;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 25%;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background: #4f2ba3;
    }
`
