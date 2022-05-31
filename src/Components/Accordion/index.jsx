import React, { useState } from 'react'
import { Data } from './Data'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'





const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 20%;
  position: relative;
  height: 5vh;
  background: #F0F8FF;
  margin-bottom: 20rem;

`
const Container = styled.div`
width: 40%;
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`
const Wrap = styled.div`
background: #F0F8FF;
color: #000000;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
align-items: center;
cursor: pointer;

h1 {
  padding: 2rem 10rem 2rem 0;
  font-size: 2rem;
}

span {
  margin-left: 1.5rem;
}

`
const Dropdown = styled.div`

  background: #F0F8FF;
  color: #000000
  width:100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;

p {
  font-size: 1rem;
}
`

const Accordion = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    // if clicked question is aleready active, then close it
    if (clicked === index) {
      return setClicked(null)
    }

    setClicked(index)

  }
  return (
    
    <IconContext.Provider value={{
      color: '#00ffb9',
      size: '25px'
    }}>
      <AccordionSection>
        
        <Container>{Data.map((item, index) => {
          return (
            <>
              <Wrap onClick={() => toggle(index)} key={index}>
              <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                <h1>{item.question}</h1>
              </Wrap>
              {clicked === index ? (
              <Dropdown>
              <p>{item.answer}</p>
              </Dropdown>
               ): null}


            </>
            
          )
        })}
        
        </Container>

      </AccordionSection>
      
    </IconContext.Provider>
  
  )
}


export default Accordion;


