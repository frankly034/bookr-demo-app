import React from 'react';
import styled from 'styled-components';


const Input = ({ type,  placeholder, padding, borderRadius }) => (
    <Input.Container
        type={type}
        placeholder={placeholder}
        padding={padding}
        borderRadius={borderRadius}
    />
)

Input.Container = styled.input`
    ${({ type,  placeholder, padding, borderRadius}) => `
        padding: ${ padding || '10px'};
        width: 300px;
        border: none;
        border: solid 1px #333;
        border-radius: ${ borderRadius || 0}
        margin: 6rem;
        `
    }
`;

export default  Input;
