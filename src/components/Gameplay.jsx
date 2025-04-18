import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../Styled/Button'
import Rules from './Rules'

const Gameplay = () => {
    const [score,setScore]=useState(0);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const[currentDice,setCurrentDice]=useState(1);
    const[error,setError]=useState("")
    const[showRules,setShowRules] = useState(false)


    const generateRandomNumber=(min,max)=>{
        
        return Math.floor(Math.random()*(max-min)+min);
    }

    const roleDice = ()=>{

        if(!selectedNumber) {
            setError("You have not selected any number")
            return;

        }
        

        const randomNumber=generateRandomNumber(1,7)

        setCurrentDice((prev)=>randomNumber);


        if(selectedNumber==randomNumber){
            setScore((prev)=>prev+randomNumber);
        }
        else{
            setScore((prev)=>prev-2)
        }
        setSelectedNumber(undefined)
    }

    const resetScore = () =>{
        setScore(0);
    }




  return (
    <MainContainer>
        <div className="topSection">
            <TotalScore score={score}/>
            <NumberSelector 
                error={error}
                setError={setError}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
            />
        </div>
        <RoleDice 
            currentDice={currentDice}
            roleDice={roleDice}
        />
        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset</OutlineButton>
            <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "hide" : "Show"} Rules</Button>
        </div>
        {showRules && <Rules/>}
        <p className='credit'>Karki</p>
    </MainContainer>
  )
}

const MainContainer = styled.main`
    padding-top: 70px;
    .topSection{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns{
        margin-top: 40px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-right: 100px;
    }
    .credit{
        text-align: end;
        margin-right: 30px;
        font-size: medium;
        font-weight: 600;
    }
`

export default Gameplay
