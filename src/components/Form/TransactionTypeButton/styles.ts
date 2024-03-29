import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { 
    RFPercentage,
    RFValue
 } from 'react-native-responsive-fontsize';
 import { Feather } from '@expo/vector-icons';

 interface IconProps {
    type: 'up' | 'down';
 }

 interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down';
 }

export const Container = styled(TouchableOpacity)<ContainerProps>`
    width: 48%;
    flex-direction: row;
    align-items: center;
    border-width: ${({isActive, type}) => isActive ? 0 : 1.5}px;
    border-style: solid;
    border-color: 1.5px solid ${({theme}) => theme.colors.text};
    padding: 16px;
    font-size: ${RFValue(14)}px;
    border-radius: 5px;
    justify-content: center;
    ${({isActive, type}) => isActive && type === 'up' && css`
        background-color: ${({theme}) => theme.colors.success_light};
    `}; 
    ${({isActive, type}) => isActive && type === 'down' && css`
        background-color: ${({theme}) => theme.colors.attention_light};
    `};
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text}; 
    margin-right: 12px;
    color: ${({theme, type}) => type === 'up' ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;