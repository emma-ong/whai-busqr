import React from 'react'

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'


function Earnings(props) {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  return (
  <Stat w={'100%'} color='white'>
    <StatLabel 
     fontSize={{ base: '20px', md: '40px', lg: '56px' }}
     fontWeight={100}
     fontFamily="'Shadows Into Light', cursive;"
    >Total Earnings <br/>
    to date: </StatLabel>
    <StatHelpText 
    fontSize={{ base: '10px', md: '20px', lg: '28px' }}
    >{today}</StatHelpText>
    <StatNumber 
    fontSize={{ base: '18px', md: '35px', lg: '50px' }}
    fontFamily="'Shadows Into Light', cursive;"
    >${props.total}</StatNumber>
</Stat>
  )
}


export default Earnings