import React from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../utils/categories';
import { Button } from '../../components/Form/Button';

import { 
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer
} from './styles';

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (name: Category) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect({ 
    category,
    setCategory,
    closeSelectCategory 
} : Props) {

    function handleCategorySelect(item: Category) {
        setCategory(item)
    }
    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categories}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Category
                        onPress={() => handleCategorySelect(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon}></Icon>
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator></Separator>}
            >
            </FlatList>
            <Footer>
                <Button 
                    title='Selecionar'
                    onPress={closeSelectCategory}
                ></Button>
            </Footer>
        </Container>
    );
}