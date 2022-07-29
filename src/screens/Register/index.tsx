import React, { useState } from 'react';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Modal } from 'react-native';
import { CategorySelect } from '../CategorySelect';
import { 
    Container,
    Header, 
    Title,
    Form,
    Fields,
    TransactionsTypes
} from './styles';


export function Register() {
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input
                        placeholder='Nome'
                    >
                    </Input>

                    <Input
                        placeholder='Preço'
                    >
                    </Input>

                    <TransactionsTypes>
                        <TransactionTypeButton
                            type='up'
                            title='Income'
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        >

                        </TransactionTypeButton>
                        <TransactionTypeButton
                            type='down'
                            title='Outcome'
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        >

                        </TransactionTypeButton>
                    </TransactionsTypes>
                    <CategorySelectButton 
                        title="Categoria"
                        onPress={handleOpenSelectCategoryModal}
                    >

                    </CategorySelectButton>
                </Fields>
                <Button title='Enviar'></Button>
            </Form>
            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal} 
                >

                </CategorySelect>
            </Modal>
        </Container>
    );
}