import React, { useState } from 'react';

import * as S from "./styles";

import Modal from '../../components/Modal';
import Content from '../../components/Content';

export default function Home() {

    const [book, setBook] = useState();
    const [modal, setModal] = useState(false);

    return (
        <S.Container>
            {modal && <Modal book={book} setBook={setBook} setModal={setModal} />}
            <Content setBook={setBook} setModal={setModal}/>
        </S.Container>
    )
}