import React, { HTMLAttributes } from 'react';
import { IProblem } from '../../@types/problems';

import { RowBox, Container } from './styles';

interface IProps extends HTMLAttributes<HTMLElement> {
  problem: IProblem;
}
const ProblemItem: React.FC<IProps> = (props) => {
  return (
    <Container>
      <RowBox>
        <h1>{props.problem.title}</h1>
        <span>{props.problem.status}</span>
      </RowBox>
      <span className='date'>{props.problem.createdAt}</span>
      <RowBox>
        <h3>{props.problem.sector}</h3>
        <h3>{props.problem.author}</h3>
      </RowBox>
    </Container>
  );
};

export default ProblemItem;
