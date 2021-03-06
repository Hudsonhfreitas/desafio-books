import styled from "styled-components";
import logout from "../../assets/logout.svg";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1166px;
    padding: 0 15px;
    margin: 0 auto;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LeftContainer = styled.div`
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

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    span {
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: #333333;
        @media screen and (max-width: 480px) {
            display: none;
        }
    }
`

export const Logout = styled.button`
    background: url(${logout});
    height: 3.2rem;
    width: 3.2rem;
    border: none;
    margin-left: 1.6rem;
`

export const BooksContainer = styled.ul`
    margin-top: 4.2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(27.2rem, 1fr));
    grid-gap: 1.6rem;
`
export const Controller = styled.div`
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 480px) {
        justify-content: center;
        text-align: center;
        position: relative;     
    }
`

export const Pages = styled.span`
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 2rem;
    color: #333333;
    margin-right: 1.6rem;
    @media screen and (max-width: 480px) {
        margin-right: 0;     
    }
`

export const ButtonController = styled.button`
    background: none;
    height: 3.2rem;
    width: 3.2rem;
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 50%;
    color: #333333;
    font-size: 1.8rem;
    &:not(:last-child) {
        margin-right: .8rem;
    }
    &:disabled {
        color: rgba(51, 51, 51, 0.4);
    }
    @media screen and (max-width: 480px) {
        &#prev, &#next{
            position: absolute;
        }
        &#prev {
            left: 20%;
        }
        &#next {
            right: 20%;
        }
    }
`

export const Loading = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 2rem
    }
`
