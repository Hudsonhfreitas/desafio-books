import React, { useContext, useState, useEffect} from 'react';
import { AttContext } from '../../contexts/AttContext';

import api from '../../services/api';

import * as S from "./styles";

import logo from "../../assets/Logoblack.svg";
import Book from '../../components/Book';
import Modal from '../../components/Modal';

export default function Home() {

    const [books, setBooks] = useState()
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState();
    const [modal, setModal] = useState(false);

    const {handleLogout} = useContext(AttContext)

    let local = localStorage.getItem("ioasys");
    let json = JSON.parse(local);

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

    function handlePageChange(func) {

        setLoading(true)

        if(func === "next") {
            setCurrentPage((page) => page + 1)
        }
        else {
            setCurrentPage((page) => page - 1)
        }
    }

    useEffect(() => {

        async function changePage() {
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
                setBooks(booksData.data)
            } catch(err) {
                handleLogout()
            }
            
            setLoading(false)
        }

        changePage()
        
    },[currentPage])
    
    const getBookInfo = async (id) => {
        setModal(true)
        setBook()
        try {
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

    return (
        
        <S.Container>
            {modal && <Modal book={book} setModal={setModal}/>}
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
                { loading === false ?
                <>
                    <S.BooksContainer>
                        {books && books.data.map((book, i) => (
                            <Book key={i} bookData={book} getBookInfo={getBookInfo}/>
                        ))
                        }       
                    </S.BooksContainer>
                    <S.Controller>
                        <S.Pages>
                            Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
                        </S.Pages>
                        <S.ButtonController 
                            disabled={currentPage === 1 ? true : false} 
                            onClick={() => handlePageChange("prev")}
                        >&lt;</S.ButtonController>
                        <S.ButtonController 
                            disabled={currentPage === totalPages ? true : false}
                            onClick={() => handlePageChange("next")}
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