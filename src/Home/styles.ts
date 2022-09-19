import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color:  #202d36;
    justify-content: center;
    align-items: center;
`;

export const FilterRegionWrapper = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background-color: #2b3743;
    width: 200px;
    height: 40px;
`;

export const TextFilterRegion = styled.Text`
    color: rgba(249,255,255,0.7);
    font-size: 14px;
    padding-left: 10px;
    padding-right: 30px;
`;

export const ContainerPaises = styled.View`
    width: ${RFValue(220)}px;
    height: ${RFValue(240)}px;
    background-color: #2b3743;
    margin-bottom: 20px;
`;

export const Imagem = styled.Image`
    width: ${RFValue(220)}px;
    height: ${RFValue(120)}px;
`;

export const Text = styled.Text`
    padding: 0 6px;
    font-size: ${RFValue(16)}px;
    color: #fff;
    padding: 8px 8px;
`;

export const TextInformacion = styled.Text`
    font-size: ${RFValue(12)}px;
    color: rgba(249,255,255,0.7);
    padding: 2px 6px;
`;

export const Linha = styled.View`
    width: 100%;
    height: 1px;
    background-color: black;
`;