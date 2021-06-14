import React from 'react';
import {Container} from '@material-ui/core/';
import { 
  SafeEnvironmentContainer 
} from './styles';



export function SafeEnvironment(){
  return (
    <SafeEnvironmentContainer>
      <Container> 
        Ambiente Seguro
      </Container>

    </SafeEnvironmentContainer>
  )
}