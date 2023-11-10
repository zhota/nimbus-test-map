import React from "react";
import { Wrapper } from './styles';
import AddInput from "./add-input";
import InputController from './input-controller';

const Menu = data => {
    const handleClick = () => {
        console.log('chamou a função');
        return;
    }
    console.log('data >>', data);

    return (
        <Wrapper>
            <InputController value="Ponto e Zoom Iniciais"/>
            <AddInput title="Pontos" onClickFunc={handleClick} />
            {data?.points.map(point => {
                return <InputController value={point?.desc} id={point?.id} key={point?.id} />
            })}
            <AddInput title="Áreas" onClickFunc={handleClick} />
            {data?.areas.map(area => {
                return <InputController value={area?.desc} id={area?.id} key={area?.id} />
            })}
            <AddInput title="Perímetros" onClickFunc={handleClick} />
            {data?.perimeters.map(perimeter => {
                return <InputController value={perimeter?.desc} id={perimeter?.id} key={perimeter?.id} />
            })}
        </Wrapper>
    );
};

export default Menu;
