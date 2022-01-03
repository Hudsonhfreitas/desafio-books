import React from 'react';
import * as S from './styles';

function Book({bookData, getBookInfo}) {
  return (
      <S.Container onClick={() => getBookInfo(bookData.id)}>
        <S.BookImg src={bookData.imageUrl} alt={bookData.id}/>
        <S.BookInfoArea>
            <S.BookInfo>
                <S.BookTitle>{bookData.title}</S.BookTitle>
                {bookData.authors.map((author, i) => (
                    <S.BookAuthor key={i}>{author}</S.BookAuthor>
                ))}
            </S.BookInfo>
            <S.BookDetails>
                <S.BookSpan>{`${bookData.pageCount} páginas`}</S.BookSpan>
                <S.BookSpan>{bookData.publisher}</S.BookSpan>
                <S.BookSpan>{`Publicado em ${bookData.published}`}</S.BookSpan>
            </S.BookDetails>
        </S.BookInfoArea>
      </S.Container>
  );
}

export default Book;