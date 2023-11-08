import React from "react";
import { Wrapper } from './styles';
import AddInput from "./add-input";
import InputController from './input-controller';

const Menu = () => {
    const handleClick = () => {
        console.log('chamou a função');
        return;
    }

    return (
        <Wrapper>
            <InputController value="Ponto e Zoom Iniciais"/>
            <AddInput title="Pontos" onClickFunc={handleClick} />
            <InputController value="Ponto 1" id={1} />
            <InputController value="Ponto 2" id={2} />
            <InputController value="Ponto 3" id={3} />
            <InputController value="Ponto 1" id={1} />
            <InputController value="Ponto 2" id={2} />
            <InputController value="Ponto 3" id={3} />
            <InputController value="Ponto 1" id={1} />
            <InputController value="Ponto 2" id={2} />
            <InputController value="Ponto 3" id={3} />
            <AddInput title="Áreas" onClickFunc={handleClick} />
            <InputController value="Área 1" id={1} />
            <AddInput title="Perímetros" onClickFunc={handleClick} />
            <InputController value="Perímetro 1" id={1} />
            <InputController value="Perímetro 2" id={2} />
        </Wrapper>
    );
};

export default Menu;
