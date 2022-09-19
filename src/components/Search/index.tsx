import React from 'react';
import { TextInputProps } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { Container, TextInput } from './styles';

export function Search({ ...rest}: TextInputProps) {
    return(
        <Container >
            <AntDesign name="search1" size={24} color="white" />
            <TextInput {...rest} />
        </Container>
    )
}

