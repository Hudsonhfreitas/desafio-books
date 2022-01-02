import styled from "styled-components";

import Bg from "../../assets/bg-img.svg"

export const Container = styled.div`
    background: url(${Bg}) no-repeat center center;
    background-size: cover;
    height: 100vh;
`

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1166px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    align-items:center;
`

export const LoginContainer = styled.div` 
    color: #FFFFFF;
    width: 100%;
    max-width: 36.8rem;
`

export const Header = styled.header`
    display: flex;
`

export const Logo = styled.img`
    width: 100%;
    max-width: 104.4px;
`

export const Books = styled.h1`
    font-weight: 300;
    font-size: 2.8rem;
    line-height: 4rem;
    margin-left: 1.66rem;
`
export const Form = styled.form`
    margin-top: 4.8rem;
    display: flex;
    flex-direction: column;
`

export const InputContainer = styled.div`
    position: relative;
    &:not(:first-child) { 
        margin-top: 1.6rem;
    }
`

export const Label = styled.label`
    position: absolute;
    font-size: 1.2rem;
    line-height: 1.6rem;
    opacity: 0.5;
    top: 0.8rem;
    left: 1.6rem;
    z-index: 1;
`

export const Email = styled.input.attrs({type: 'email'})`
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    border: none;
    width: 100%;
    padding: 2.8rem 1.6rem .8rem 1.6rem;
`

export const Password = styled.input.attrs({type: 'password'})`
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    border: none;
    height: 6rem;
    width: 100%;
    padding: 2.8rem 1.6rem .8rem 1.6rem;
`

export const Button = styled.button`
    background: #FFFFFF;
    border-radius: 44px;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #B22E6F;
    padding: .8rem 2rem ;
    position: absolute;
    border: none;
    top: 50%;
    transform: translateY(-50%);
    right: 1.2rem;
`