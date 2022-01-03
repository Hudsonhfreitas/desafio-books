import styled from "styled-components";

export const Container = styled.li`
    background: #FFFFFF;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;
    padding: 1.6rem;
    height: 170px;
    display: flex;
    align-items: center;
`

export const BookImg = styled.div`
    width: 100%;
    height: 12.2rem;
    max-width: 8.1rem;
    background: ${props => `url(${props.src})`} no-repeat center center;
    background-size: cover;
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