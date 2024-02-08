
import styled from "@emotion/styled";
export const CategoryIndictor = styled.nav`
transition: 0.5s;
/* border-bottom: ${({ active }) => 
    active ? '5px solid red' : 'none' 

    }; */
background-color: ${({ active }) => 
    active ? '#ff0000' : 'none' 

    };
    color: ${({ active }) => 
    active ? 'red' : 'red' 

    };
    border-radius: 20px;
`;

