import React from "react";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from "react-native";

import { Container,ViewHeader, Title, TitleLua } from './styles'

export function Header({...rest}: TouchableOpacityProps) {
    return (
        <Container>
            <Title>Qual País Você Procura</Title>

            <ViewHeader {...rest} >
                <Feather name="moon" size={18} color="white" />
                <TitleLua>Dark Mode</TitleLua>
            </ViewHeader>

        </Container>
    );
};