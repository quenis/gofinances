import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName,
    Icon,
    HighlightCards
} from './styles';


export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/45827947?v=4' }}></Photo>
                        <User>
                            <UserGreetings>Olá,</UserGreetings>
                            <UserName>Rodrigo</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"></Icon>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard></HighlightCard>
                <HighlightCard></HighlightCard>
                <HighlightCard></HighlightCard>
            </HighlightCards>
        </Container>
    )
}
