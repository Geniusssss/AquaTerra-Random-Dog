import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// display a button and a specification
const GenerateButton = ({ getAllDogs }) => {

  // restyled button
  const LongButton = styled(Button)(() => ({
    width: '50%',
  }));

  return (
    <Container>
      <Typography
        fontSize="25px"
        align="center"
        color="text.primary"
        margin="5%"
      >
        Click button to generate new dogs
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        margin="0% 0% 10% 0%"
      >
        <LongButton onClick={getAllDogs}
          variant="contained"
          size="large"
        >
          New Dogs
        </LongButton>
      </Stack>
    </Container>
  )
};

export default GenerateButton;
