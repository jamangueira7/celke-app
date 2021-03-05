import React, { useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../../config/api';

import {
    Container,
    TitleInput,
    InputForm,
    BtnSubmitForm,
    TxtSubmitForm,
    LoadingArea
} from './styles';

export default function Orcamento () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [projeto, setProjeto] = useState('');
    const [loading, setLoading] = useState(false);

    const addOrcamento = async () => {
        setLoading(true);
        await api.post('/orcamento', {name, email, phone, whatsApp, projeto
        }).then((response) => {
            setLoading(false);
            Alert.alert('', response.data.message);
        }).catch((err) => {
            setLoading(false);
            if(err.response) {
                Alert.alert('', response.data.message);
            } else {
                Alert.alert('', "Erro: Orçamento não enviado com sucesso, tente mais tarde!");
            }
        });
    }

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
                    keyboardType="email-address"
                    autoCapitalize="none"
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
                    onChangeText={text => setWhatsApp(text)}
                />

                <TitleInput>Projeto</TitleInput>
                <InputForm
                    placeholder="Fale um pouco do seu projeto"
                    autoCorrect={false}
                    value={projeto}
                    onChangeText={text => setProjeto(text)}
                />

                <BtnSubmitForm disable={loading} onPress={addOrcamento}>
                    <TxtSubmitForm>Cadastrar</TxtSubmitForm>
                </BtnSubmitForm>

                {loading && <LoadingArea>
                                <ActivityIndicator size="large" color="#fff" />
                            </LoadingArea>
                }

            </Container>
        </ScrollView>
    );
}
