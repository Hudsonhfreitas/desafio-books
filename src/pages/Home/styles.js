import styled from "styled-components";
import Bg from "../../assets/homeBg.svg";
import logout from "../../assets/logout.svg";

export const Container = styled.div`
    background: url(${Bg}) no-repeat center center;
    background-size: cover;
    padding: 4.2rem 0;
    height: 100vh;
`

export const HomeWrapper = styled.div`
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

export const BookItem = styled.li`
    background: #FFFFFF;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;
    padding: 1.6rem;
    height: 170px;
    display: flex;
    align-items: center;
`

export const BookImg = styled.img`
    width: 100%;
    height: 12.2rem;
    max-width: 8.1rem;
`
export const BookInfoArea = styled.div`
    margin-left: 1.6rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const BookInfo = styled.div`
    
`

export const BookTitle = styled.h3`
    font-size: 1.4rem;
    line-height: 2rem;
    color: #333333;
`

export const BookAuthor = styled.p`
    font-size: 1.2rem;
    line-height: 2rem;
    color: #AB2680;
`

export const BookDetails = styled.div`
    font-size: 1.2rem;
    line-height: 2rem;
    color: #999999;
`

export const BookSpan = styled.span`
    display: block;
`