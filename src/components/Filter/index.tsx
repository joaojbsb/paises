import React from "react";
import { TouchableOpacityProps } from 'react-native'

import { Container, TextFilter, TextFilterButton } from "./styles";

type FilterProps = TouchableOpacityProps & {
    filter: string;
    setFilter: ((filter)=> void);
    closeModal: (()=> void)
}

export function Filter({ ...rest}: TouchableOpacityProps){
    return(
        <Container>
            
            <TextFilterButton onPress={console.log('clicou')} >
                <TextFilter>Africa</TextFilter>
            </TextFilterButton>
            
            <TextFilterButton onPress={console.log('clicou')} >
                <TextFilter>America</TextFilter>
            </TextFilterButton>
            
            <TextFilterButton onPress={console.log('clicou')} >
                <TextFilter>Asia</TextFilter>
            </TextFilterButton>
            
            <TextFilterButton onPress={console.log('clicou')} >
                <TextFilter>Europa</TextFilter>
            </TextFilterButton>
            
            <TextFilterButton onPress={console.log('clicou')} >
                <TextFilter>Oceania</TextFilter>
            </TextFilterButton>

        </Container>
    )
}