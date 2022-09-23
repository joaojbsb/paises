import React, {useEffect, useState} from 'react';
import { Container, ContainerPaises, Imagem, Linha, Text, TextInformacion,FilterRegionWrapper ,TextFilterRegion } from './styles';
import { FlatList, Modal } from 'react-native';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Filter } from '../components/Filter';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export type PaisesProps = {
    name: {
        common: string;
        official: string;
    };
    independent: boolean;
    capital: string;
    region: string;
    languages: string;
    area: string;
    population: string;
    subregion: string;
    flags : {
        png: string
    }
}

type FilterProps = {
    filter: string;
    setFilter: ((filter)=> void);
    closeModal: (()=> void)
};

export function Home() {

    const [ paises, setPaises ] = useState<PaisesProps[]>([]);
    const [filter, setFilter ] = useState('ame');
    const [ modalVisible, setModalVisible ] = useState(false);

    const navigation = useNavigation();

    function handleOpenScreenDetails(common: string){
        navigation.navigate('Details', {common});
    }

    function modalClose(){
        setModalVisible(false)
    };

    function modalOpen(){
        setModalVisible(true)
    }

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => {
        setPaises(data);
    });
    }, []);

    return (
        <Container>
            <Header />

            <Search placeholder='Encontre um país' />

            <FilterRegionWrapper onPress={modalOpen} >
                <TextFilterRegion>Filtrar por Continente</TextFilterRegion>
                <AntDesign name="down" size={14} color="white" />
            </FilterRegionWrapper>

            <Modal 
                animationType='slide'
                visible={modalVisible} 
                transparent={true}
            >
                {/*<Filter onPress={modalClose} />*/}
            </Modal>


            <FlatList
                showsVerticalScrollIndicator= {false}
                data={paises}
                keyExtractor={(item) => item.name.official}
                renderItem={({ item }) => {
                    return (
                        <>
                        <ContainerPaises onPress={()=>handleOpenScreenDetails(item.name.common)} >
                            <Imagem source={{uri: item.flags.png}} />
                            <Text>{item.name.common}</Text>
                            <TextInformacion>População: {item.population}</TextInformacion>
                            <TextInformacion>Continente: {item.region}</TextInformacion>
                            <TextInformacion>Capital: {item.capital}</TextInformacion>
                        </ContainerPaises>
                        <Linha />
                        </>
                    )
                }}            
            />

        </Container>
    )
}



