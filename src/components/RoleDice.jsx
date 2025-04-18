import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({roleDice,currentDice}) => {

  return (
    <DiceContainer>
      <div className='dice'
        onClick= {roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 100px;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`

export default RoleDice
