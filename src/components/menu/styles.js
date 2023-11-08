import styled from "styled-components";
import closedTrashIcon from '../../icons/closedTrash.png';
import openedTrashIcon from '../../icons/openedTrash.png'

export const Wrapper = styled.div`
    flex: 1;
    position: relative;
    border: 1px solid red;
    background-color: #000;
    padding: 20px 5px;
`;

export const Button = styled.div`
    text-align: left;
    background-color: #999;
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid black;
`;

export const Title = styled.h2`
    color: #fff;
    margin: 30px 0 5px 0;
    cursor: pointer;
`;

export const Delete = styled.img.attrs(
    props => ({'src': props?.isMouseOver ? openedTrashIcon : closedTrashIcon})
)`
    width: 24px;
    height: 24px;
`;

Delete.defaultProps = {
    src: closedTrashIcon
};
