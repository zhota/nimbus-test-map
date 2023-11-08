import React from "react";
import { Title } from './styles'

const AddInput = ({title, onClickFunc}) => {
    return (
        <Title onClick={onClickFunc}>{title}  +</Title>
    );
};

export default AddInput;
