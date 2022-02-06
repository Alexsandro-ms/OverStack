import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    `

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    @media(max-width: 1000px){
        width: 50%;
    }
    @media(max-width: 600px){
        width: 70%;
    }
`
export const Input = styled.input`
    border-radius: var(--border-radius);
    max-width: 100%;
    font-size: 18px;
    padding: 15px 20px;
    margin-bottom: 20px;
    border: 2px solid var(--color-primary);
    color: var(--color-gray);
    background-color: var(--color-backgroundColor);
`
export const Button = styled.button`
    width: 100%;
    padding: 15px 20px;
    border: none;
    border-radius: var(--border-radius);
    background: var(--color-gradient);
    font-size: 18px;
    font-weight: 700;
    color: var(--color-white);
    cursor: pointer;

    &:hover{
        background: var(--color-gradient-hover);
    }
`