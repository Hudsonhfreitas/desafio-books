import React, { useContext, useState, useEffect} from 'react';
import { AttContext } from '../../contexts/AttContext';

import api from '../../services/api';

import * as S from "./styles";

import logo from "../../assets/Logoblack.svg";

export default function Home() {

    const [books, setBooks] = useState()
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [user, setUser] = useState("");

    const {handleLogout} = useContext(AttContext)

    useEffect(() => {

        let local = localStorage.getItem("ioasys");
        let json = JSON.parse(local)

        async function loadData() {
            try {
                let booksData = await api.get("books", {
                    headers: {
                        Authorization: `Bearer ${(json.token)}`
                    },
                    params: {
                        page: currentPage,
                        amount: 12,
                    }
                })
                setTotalPages(Math.ceil(json.totalPages))
                setUser(json.name)
                setBooks(booksData.data.data)
            } catch(err) {
                handleLogout()
            }
        } 

        if(local) {
            loadData()
        }

    }, [])
    
    console.log(books)

    return (
        <S.Container>
            <S.HomeWrapper>
                <S.Header>
                    <S.LeftContainer>    
                        <S.Logo src={logo}/>
                        <S.Books>Books</S.Books>
                    </S.LeftContainer>
                    <S.RightContainer>
                        <span >Bem vindo, <strong>{user}</strong></span>
                        <S.Logout onClick={handleLogout}></S.Logout>
                    </S.RightContainer>
                </S.Header>
                <S.BooksContainer>
                    {books && books.map(book => (
                        <S.BookItem key={book.id}>
                            <S.BookImg src={book.imageUrl} alt={book.id}/>
                            <S.BookInfoArea>
                                <S.BookInfo>
                                    <S.BookTitle>{book.title}</S.BookTitle>
                                    {book.authors.map((author, i) => (
                                        <S.BookAuthor key={i}>{author}</S.BookAuthor>
                                    ))}
                                </S.BookInfo>
                                <S.BookDetails>
                                    <S.BookSpan>{`${book.pageCount} páginas`}</S.BookSpan>
                                    <S.BookSpan>{book.publisher}</S.BookSpan>
                                    <S.BookSpan>{`Publicado em ${book.published}`}</S.BookSpan>
                                </S.BookDetails>
                            </S.BookInfoArea>
                        </S.BookItem>
                    ))}
                </S.BooksContainer>
            </S.HomeWrapper>
        </S.Container>
    )
}