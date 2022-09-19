import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    height: ${RFValue(100)}px;
    background-color:#2b3743;
    align-items: center;
    justify-content: space-between;
    padding: 35px 17px;
`;

export const ViewHeader = styled.TouchableOpacity`
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #fbfdfe;
`;

export const TitleLua = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #fbfdfe;
    padding-left: 10px;
`;