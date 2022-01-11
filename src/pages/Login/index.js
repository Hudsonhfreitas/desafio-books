import React, { useState, useContext} from 'react';
import { useNavigate  } from 'react-router-dom';

import * as S from "./styles";
import loginValidate from '../../commons/loginValidate';
import {AttContext} from '../../contexts/AttContext';

import logo from "../../assets/logo.svg"


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [loginStatus, setLoginStatus] = useState();
    const navigate = useNavigate();

    const { handleLogin } = useContext(AttContext);

    const validatingLogin = async (req) => {
        try {
            await loginValidate.validate(req);
            setLoginStatus()
        } catch(err) {
            throw new setLoginStatus(err.errors)
        }
    }

    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            const request = {email, password};
            await validatingLogin(request);
            await handleLogin(email, password);
            setLoginError(false);
            setLoginStatus()
            navigate("/home")
        }catch(error) {
            setLoginError(true)
        }
    }

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
                        <S.Label htmlFor='email'>Email</S.Label>
                        <S.Email
                            id="email"
                            name="email"
                            onChange={ e => setEmail(e.target.value)}
                        />
                    </S.InputContainer>
                    <S.InputContainer>
                        <S.Label htmlFor='password'>Senha</S.Label>
                        <S.Password 
                            id="password"
                            name="password"
                            onChange={ e => setPassword(e.target.value)}
                        /> 
                        <S.SubmitButton 
                            onClick={handleSumit}>
                            Entrar
                        </S.SubmitButton>
                    </S.InputContainer>
                    {loginError && !loginStatus && <S.Error>E-mail e/ou senha incorretos</S.Error>}
                    {loginStatus && <S.Error>{loginStatus}</S.Error>}
                </S.Form>
            </S.LoginContainer>
        </S.LoginWrapper>   
    </S.Container>
  );
}
