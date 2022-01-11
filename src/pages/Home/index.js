import React, { useContext, useState, useEffect} from 'react';
import { AttContext } from '../../contexts/AttContext';

import api from '../../services/api';

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