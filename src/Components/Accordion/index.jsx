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
  background: #ffffff;
  margin-bottom: 20rem;


`
const Container = styled.div`
width: 40%;
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`
const Wrap = styled.div`
background: #ffffff;
color: #000000;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
align-items: center;
cursor: pointer;

h1 {

  display: flex;
  position: relative;
  right: 6.4rem;
  font-size: 2rem;
  align-items: center;
  padding: 1rem;
}
.item2 {
  display: flex;
  position: relative;
  right: 6.5rem;
  font-size: 2rem;
  align-items: center;
}
.item3 {
  display: flex;
  position: relative;
  right: 19.7rem;
  font-size: 2rem;
  align-items: center;
}
.item4 {
  display: flex;
  position: relative;
  right: 28.7rem;
  font-size: 2rem;
  align-items: center;
}




span {
  margin-left: 1.5rem;
}

`
const Dropdown = styled.div`

  background: #ffffff;
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
  font-size: 20px;
}
.list1 {
  display: flex;
  position: relative;
  right: 12.7rem;
}
.list2 {
  display: flex;
  position: relative;
  right: 15.7rem;
}
.list3 {
  display: flex;
  position: relative;
  right: 10.2rem;
}
.list4 {
  display: flex;
  position: relative;
  right: 14rem;
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
                <h1 className='item2'>{item.question2}</h1>
                <h1 className='item3'>{item.question3}</h1>
                <h1 className='item4'>{item.question4}</h1>
              </Wrap>
              {clicked === index ? (
              <Dropdown>
              <p>{item.answer}</p>
              <p className='list1'>{item.answer1}</p>
              <p className='list2'>{item.answer2}</p>
              <p className='list3'>{item.answer3}</p>
              <p className='list4'>{item.answer4}</p>
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


