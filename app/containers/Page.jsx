import React from 'react';
import Container from '../components/common/layout/Container';

export default function Page(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}
