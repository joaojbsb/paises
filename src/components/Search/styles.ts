import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    width: ${RFValue(325)}px;
    height: ${RFValue(56)}px;
    margin: 33px 17px;
    background-color:#2b3743;
    align-items: center;
    justify-content: flex-start;
    padding: 0 38px;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: "white"
})`
    padding: 0 28px;
    color: #fff;
`;