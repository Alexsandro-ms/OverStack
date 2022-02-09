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
    position: relative;
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

export const ShowP = styled.div`
    position: relative;
    top: -12px;
    color: var(--color-primary);
    cursor: pointer;
    
    h6{
        top: -3.5px;
        position: relative;
        margin: 5px 5px;
        display: inline-block;
        color: var(--color-gray);
        pointer-events: none;
    }
`

export const Img = styled.img`
    width: 200px;
    margin: 30px auto;
    cursor: pointer;
`

export const Signup = styled.a`
    text-align: center;
    max-width: 200px;
    color: var(--color-primary);
    margin: 12px auto;
    cursor: pointer;
    text-decoration: none;
    line-height: 25px;
`
export const Span = styled.span`
    color: var(--color-white);
    text-decoration: underline;
`

export const ForgotPassword = styled.a`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    color: var(--color-primary);
    text-decoration: none;
    line-height: 25px;
    margin-bottom: 20px;
`