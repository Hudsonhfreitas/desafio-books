import React, { useContext, useState, useEffect, memo, useReducer} from 'react';
import { AttContext } from '../../contexts/AttContext';

import api from '../../services/api';

import * as S from "./styles";

import logo from "../../assets/Logoblack.svg";
import Book from '../../components/Book';

const reducer = (state, action) => {
    
    switch (action) {
        case "prev": {
            return state -= 1
        }
        case "next": {
            return state += 1
        }
    }
}

function Content({setBook, setModal}) {

    const [books, setBooks] = useState()
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, dispatch] = useReducer(reducer, 1);
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);

    const {handleLogout} = useContext(AttContext)

    let local = localStorage.getItem("ioasys");
    let json = JSON.parse(local);

    const getBookInfo = async (id) => {
        
        setBook()

        try {
            setModal(true)
            document.getElementById('root').setAttribute('style', 'overflow: hidden')
            const bookData = await api.get(`books/${id}`, {
                headers: {
                    Authorization: `Bearer ${(json.token)}`
                }
            })
            setBook(bookData.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true)
                let booksData = await api.get("books", {
                    headers: {
                        Authorization: `Bearer ${(json.token)}`
                    },
                    params: {
                        page: currentPage,
                        amount: 12,
                    }
                })
                setUser(json.name)
                setBooks(booksData.data)
                setTotalPages(Math.ceil(booksData.data.totalPages))
                
            } catch(err) {
                handleLogout()
            }
            
            setLoading(false)
        } 

        if(local) {
            loadData()
        }

    }, [])

    useEffect(() => {

        async function changePage() {
            try {
                setLoading(true)
                let booksData = await api.get("books", {
                    headers: {
                        Authorization: `Bearer ${(json.token)}`
                    },
                    params: {
                        page: currentPage,
                        amount: 12,
                    }
                })
                setBooks(booksData.data)
            } catch(err) {
                handleLogout()
            }
            
            setLoading(false)
        }

        changePage()
        
    }, [currentPage])
    

    return (
        
        <S.Container>
            <S.HomeWrapper>
                <S.Header>
                    <S.LeftContainer>    
                        <S.Logo src={logo}/>
                        <S.Books>Books</S.Books>
                    </S.LeftContainer>
                    <S.RightContainer>
                        <span>Bem vindo, <strong>{user}</strong></span>
                        <S.Logout onClick={handleLogout}></S.Logout>
                    </S.RightContainer>
                </S.Header>
                { loading === false ?
                <>
                    <S.BooksContainer>
                        {books && books.data.map((book) => (
                            <Book key={book.id} bookData={book} getBookInfo={getBookInfo}/>
                        ))
                        }       
                    </S.BooksContainer>
                    <S.Controller>
                        <S.Pages>
                            Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
                        </S.Pages>
                        <S.ButtonController 
                            id="prev"
                            disabled={currentPage === 1 ? true : false} 
                            onClick={() => dispatch("prev")}
                        >&lt;</S.ButtonController>
                        <S.ButtonController 
                            id="next"
                            disabled={currentPage === totalPages ? true : false}
                            onClick={() => dispatch("next")}
                        >&gt;</S.ButtonController>
                    </S.Controller>
                </>
                :
                <S.Loading>
                    <h1>Carregando...</h1>
                </S.Loading>
                }
            </S.HomeWrapper>
        </S.Container>
    )
}

export default memo(Content)