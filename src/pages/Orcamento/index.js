import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import {
    Container,
    TitleInput,
    InputForm,
    BtnSubmitForm,
    TxtSubmitForm
} from './styles';

export default function Orcamento () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsApp, setWhatsAppe] = useState('');
    const [projeto, setProjeto] = useState('');

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
        </ScrollView>
    );
}
