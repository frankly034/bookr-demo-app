import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Card = (Input) => (
    <Input/>
)

Card.Container = styled.div`
    border: solid 1px #333;
    border-raduis: 10px;
    padding: 20px;
    text-align: center;
`;

export default Card;