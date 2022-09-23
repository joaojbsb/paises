import React, {useEffect, useState} from "react";
import { FlatList } from "react-native";
import { PaisesProps } from "../Home/";
import { Header } from "../components/Header";

import { Container, Imagem, ContainerDetails, NamePais, TextDetails,ContainerWrapper } from "./styles";
import { useRoute } from "@react-navigation/native";

export function Details({name, capital, subregion, area, languages, population, region}: PaisesProps){
    const [ pais, setPais] = useState<PaisesProps[]>([]);
    const [ filterPais, setFilterPais ] = useState('');

    const route = useRoute();
    const { common } = route.params;
    

    useEffect(()=>{
        setFilterPais(common);
        fetch(`https://restcountries.com/v3.1/name/${common}`)
        .then(response => response.json())
        .then(data => {
        setPais(data);
    });
    }, []);

    return(
        <ContainerWrapper>
            <Header />
            {
                pais.map((item ) =>{
                    return(
                        
                        <Container>

                            <Imagem source={{uri: item.flags.png}} />
                            <ContainerDetails>
                                <NamePais>{item.name.common}</NamePais>
                                <TextDetails>Nome Oficial: {item.name.official}</TextDetails>
                                <TextDetails>População: {item.population}</TextDetails>
                                <TextDetails>Região: {item.region}</TextDetails>
                                <TextDetails>Sub Região: {item.subregion}</TextDetails>
                                <TextDetails>Capital: {item.capital}</TextDetails>
                                <TextDetails>Area: {item.area}</TextDetails>
                            </ContainerDetails>
                        </Container>
                    )
                })
            }
        </ContainerWrapper>

    );
};