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
                    value={name}
                    onChangeText={text => setName(text)}
                />

                <TitleInput>E-mail</TitleInput>
                <InputForm
                    placeholder="E-mail"
                    autoCorrect={false}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <TitleInput>Phone</TitleInput>
                <InputForm
                    placeholder="(XX) XXXXX-XXXX"
                    autoCorrect={false}
                    value={phone}
                    onChangeText={text => setPhone(text)}
                />

                <TitleInput>WhatsApp</TitleInput>
                <InputForm
                    placeholder="(XX) XXXXX-XXXX"
                    autoCorrect={false}
                    value={whatsApp}
                    onChangeText={text => setWhatsAppe(text)}
                />

                <TitleInput>Projeto</TitleInput>
                <InputForm
                    placeholder="Fale um pouco do seu projeto"
                    autoCorrect={false}
                    value={projeto}
                    onChangeText={text => setProjeto(text)}
                />

                <BtnSubmitForm>
                    <TxtSubmitForm>Cadastrar</TxtSubmitForm>
                </BtnSubmitForm>

            </Container>
        </ScrollView>
    );
}
