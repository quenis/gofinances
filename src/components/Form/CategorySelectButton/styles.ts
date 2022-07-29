import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { 
    RFPercentage,
    RFValue
 } from 'react-native-responsive-fontsize';
 import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    justify-content: space-between;
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    align-items: center;
    padding: 18px 16px;
`;

export const Category = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
`;