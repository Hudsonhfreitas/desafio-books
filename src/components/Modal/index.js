import React, { useCallback, memo} from 'react';
import * as S from './styles';

import quotes from '../../assets/quotes.svg';
import close from '../../assets/close.svg';

function Modal({book, setModal}) {

    const handleClose = useCallback(() => {
        document.getElementById('root').removeAttribute('style', 'overflow: auto')
        setModal(false)
    }, [])

  return (

    <S.Container>
        <S.Modal onClick={handleClose}/>
        <S.CloseButton background={close} onClick={handleClose}/>
        {book && 
            <S.BookContainer>
                <S.BookImage src={book.imageUrl}  alt={book.title}/>
                <S.InfoArea>
                    <S.Top>
                        <S.Title>{book.title}</S.Title>
                        <S.Author>{book.authors.join(', ')}</S.Author>
                    </S.Top>
                    <S.Info>
                        <h3>Informações</h3>
                        <S.InfoList>
                            <S.InfoItem>
                                <strong>Páginas</strong>
                                <span>{book.pageCount} páginas</span>
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>Editora</strong>
                                <span>{book.publisher}</span>
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>Publicação</strong>
                                <span>{book.published}</span>
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>Idioma</strong>
                                <span>{book.language}</span>
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>Título Original</strong>
                                <span>{book.title}</span>
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>ISNB-10</strong>
                                <span>{book.isbn10}</span>
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>ISNB-13</strong>
                                <span>{book.isbn13}</span>
                            </S.InfoItem>
                        </S.InfoList>
                    </S.Info>
                    <S.Review>
                        <h3>Resenha da Editora</h3>
                        <S.ReviewText><S.Quotes src={quotes} alt="quotes"/> {book.description}</S.ReviewText>
                    </S.Review>
                </S.InfoArea>
            </S.BookContainer>
        }
    </S.Container>
  );
}

export default memo(Modal);