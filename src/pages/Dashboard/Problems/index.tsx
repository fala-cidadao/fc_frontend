import React, { useState } from 'react';
import { Problem } from '../../../@types/problems';
import ProblemItem from '../../../components/ProblemItem';
import { Container } from './styles';

import filter from '../../../utils/filter';

const Problems: React.FC = () => {
  const [data, setData] = useState<Problem[]>([
    {
      title: 'teste',
      author: 'test',
      created_at: new Date().toDateString(),
      sector: 'teste',
      status: 'teste'
    },
    {
      title: 'teste2',
      author: 'test2',
      created_at: new Date().toDateString(),
      sector: 'teste2',
      status: 'teste2'
    }
  ]);

  return (
    <Container>
      {data.map((elem) => {
        return <ProblemItem problem={elem} />;
      })}
    </Container>
  );
};

export default Problems;
