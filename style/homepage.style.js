
import styled from "@emotion/styled";
export const CategoryIndictor = styled.nav`
transition: 0.5s;
border-bottom: ${({ active }) => 
    active ? '5px solid red' : 'none' 

    };
background-color: ${({ active }) => 
    active ? '#fff2' : 'none' 

    };
    border-radius: 5px;
`;

