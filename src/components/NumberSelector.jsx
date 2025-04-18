import React from 'react'
import styled from 'styled-components'

const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber}) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler=(Value)=>{
        setSelectedNumber(Value)
        setError("")
    }

    console.log(selectedNumber);


    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className="flex">
                {
                    arrNumber.map((Value, index) => (
                        <Box
                            isSelected={Value == selectedNumber}
                            key={index}
                            onClick={()=>numberSelectorHandler(Value) }>
                            {Value}
                        </Box>
                    ))
                }
            </div>
            <p>Select Number</p>

        </NumberSelectorContainer>
    );
}

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 100px;
    .flex{
        display: flex;
        gap: 24px;
        
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    .error{
        color: red;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`

export default NumberSelector
