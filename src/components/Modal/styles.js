import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    h3 {
        font-size: 1.2rem;
        line-height: 2.8rem;
        text-transform: uppercase;
    }
`

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    position: fixed;
    top: 0;
`

export const BookContainer = styled.div`
    width: 90%;
    max-width: 800px; 
    background: #FFF;
    padding: 4.8rem;
    box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
    border-radius: 4px;
    display: flex;
    align-items: center;
    z-index: 2;
    position: absolute;
    @media screen and (max-width: 620px) {
        flex-direction: column;
        padding: 2.4rem;
    }
    @media screen and (max-width: 420px) {
        top: 6rem;
    }
    
`

export const BookImage = styled.div`
    width: 34.9rem;
    height: 51rem;
    background: ${props => `url(${props.src})`} no-repeat center center;
    background-size: cover;
    filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
    @media screen and (max-width: 722px) {
        height: 35.1rem;
        width: 24rem;
    }
`

export const InfoArea = styled.div`
    margin-left: 4.8rem;
    width: 100%;
    flex: 1;
    @media screen and (max-width: 620px) {
        margin-top: 2.4rem;
        margin-left: 0;
    }
`

export const Top = styled.div`
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 4rem;
    color: #333333;
`
export const Author = styled.span`
    font-size: 1.2rem;
    line-height: 2rem;
    color: #AB2680;
`

export const Info = styled.div`
    margin-top: 3.2rem;
    color: #333333;
`

export const InfoList = styled.ul`
    margin-top: 1rem; 
`

export const InfoItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    line-height: 2rem;
    span {   
        color: #999999;
    }
`

export const Review = styled.div`
    margin-top: 3.2rem;
`

export const Quotes = styled.img`
    width: 17.58px;
    height: 14.14px;
`

export const ReviewText = styled.p`
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: #999999;
`

export const CloseButton = styled.button`
    position: absolute;
    height: 32px;
    width: 32px;
    background: ${props => `url(${props.background})`};
    background-size: cover;
    border: none;
    top: 1.6rem;
    right: 1.7rem;
`

