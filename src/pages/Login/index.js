import React from 'react';

import * as S from "./styles"

import logo from "../../assets/logo.svg"

export default function Login() {
  return (
    <S.Container>
        <S.LoginWrapper>
            <S.LoginContainer>
                <S.Header>
                    <S.Logo src={logo} alt="logo ioasys"/>
                    <S.Books>Books</S.Books>
                </S.Header>
                <S.Form>
                    <S.InputContainer>
                        <S.Label>Email</S.Label>
                        <S.Email />
                    </S.InputContainer>
                    <S.InputContainer>
                        <S.Label>Senha</S.Label>
                        <S.Password /> 
                        <S.Button>Entrar</S.Button>
                    </S.InputContainer>
                </S.Form>
            </S.LoginContainer>
        </S.LoginWrapper>   
    </S.Container>
  );
}
