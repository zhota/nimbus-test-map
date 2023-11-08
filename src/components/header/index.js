import React from "react";
import { Wrapper, Title, FormWrapper, Input, InputName, Button } from './styles';

const Header = () => {
    return (
        <Wrapper>
            <Title>Ponto e Zoom iniciais</Title>
            <FormWrapper>
                <InputName>Latitude:</InputName>
                <Input></Input>
                <InputName>Longitude:</InputName>
                <Input></Input>
                <InputName>Zoom:</InputName>
                <Input></Input>
                <Button>Salvar</Button>
            </FormWrapper>
        </Wrapper>
    );
};

export default Header;
