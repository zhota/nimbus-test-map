import React from "react";
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { Wrapper, Title, FormWrapper, Input, InputName, Button } from './styles';

const createLocation = async (data) => {
    const { data: response } = await axios.post('http://localhost:1500/location/create-new-location');
    

    return response.data;
}

const Header = () => {
    const queryClient = useQueryClient();
    const {handleSubmit, register} = useForm({
        mode: 'onChange',
    });
    const {mutate, isLoading} = useMutation(createLocation, {
        onSuccess: data => {
            console.log('success do mutation', data);
            const message = "success";
            alert(message);
        },
        onError: () => {
            alert("algo deu errado");
        },
        onSettled: () => {
            queryClient.invalidateQueries('create');
        }
    });

    const onSubmit = (data) => {
        const location = {
            ...data
        };
        mutate(location);
    }

    return (
        <Wrapper>
            <Title>Ponto e Zoom iniciais</Title>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>       
                <InputName>Latitude:</InputName>
                <Input {...register("lat")}></Input>
                <InputName>Longitude:</InputName>
                <Input {...register("lon")}></Input>
                <InputName>Zoom:</InputName>
                <Input {...register("zoom")}></Input>
                <Button type="submit">Salvar</Button>
            </FormWrapper>
        </Wrapper>
    );
};

export default Header;
