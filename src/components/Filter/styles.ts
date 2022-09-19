import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #2b3743;
    width: ${RFValue(200)}px;
    height: ${RFValue(130)}px;
    margin: 3px 0px 0px 0px;
`;
export const TextFilterButton = styled.TouchableOpacity`
    margin: 4px 10px;
`;

export const TextFilter = styled.Text`
    font-size: 14px;
    color: rgba(249,255,255,0.7);
`;