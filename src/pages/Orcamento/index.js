import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    TitleInput,
    InputForm,
    BtnSubmitForm,
    TxtSubmitForm
} from './styles';

export default function Orcamento () {
    const navigation = useNavigation();

    return (
        <Container>
            <TitleInput>Nome</TitleInput>
            <InputForm
                placeholder="Nome completo"
                autoCorrect={false}
            />

            <TitleInput>E-mail</TitleInput>
            <InputForm
                placeholder="E-mail"
                autoCorrect={false}
            />

            <TitleInput>Phone</TitleInput>
            <InputForm
                placeholder="(XX) XXXXX-XXXX"
                autoCorrect={false}
            />

            <TitleInput>WhatsApp</TitleInput>
            <InputForm
                placeholder="(XX) XXXXX-XXXX"
                autoCorrect={false}
            />

            <TitleInput>Projeto</TitleInput>
            <InputForm
                placeholder="Fale um pouco do seu projeto"
                autoCorrect={false}
            />

            <BtnSubmitForm>
                <TxtSubmitForm>Cadastrar</TxtSubmitForm>
            </BtnSubmitForm>

        </Container>
    );
}
