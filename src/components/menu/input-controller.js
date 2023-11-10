import React, { useState } from "react";
import { Button, Delete } from './styles';
import closedTrashIcon from '../../icons/closedTrash.png';
import openedTrashIcon from '../../icons/openedTrash.png'

const InputController = ({value, id = null }) => {
    const [ isMouseOver, setIsMouseOver ] = useState(false);

    const handleClickDelete = () => {
        console.log('deletando...');
        return;
    }

    return (
        <Button>
            {value}
            {id ? <Delete onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)} onClick={handleClickDelete} src={isMouseOver ? openedTrashIcon : closedTrashIcon} /> : null}
        </Button>
    );
};

export default InputController;
