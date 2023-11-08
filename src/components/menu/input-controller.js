import React, { useState } from "react";
import { Button, Delete } from './styles';

const InputController = ({value, id = null }) => {
    const [ isMouseOver, setIsMouseOver ] = useState(false);

    const handleClickDelete = () => {
        console.log('deletando...');
        return;
    }

    return (
        <Button>
            {value}
            {id ? <Delete onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)} onClick={handleClickDelete} isMouseOver={isMouseOver} /> : null}
        </Button>
    );
};

export default InputController;
