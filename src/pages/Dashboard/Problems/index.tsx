import React, { ChangeEvent, useState } from 'react';
import { Problem } from '../../../@types/problems';
import ProblemItem from '../../../components/ProblemItem';
import { Container, Filter, List, RowBox, Select, FilterRadio } from './styles';

import { Icon } from '@iconify/react';
import bxSearch from '@iconify/icons-bx/bx-search';
import bxBell from '@iconify/icons-bx/bx-bell';
import filter from '../../../utils/filter';

const Problems: React.FC = () => {
  const [selected, setSelected] = useState<string>('date');
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
      <Filter>
        <RowBox>
          <div className='field'>
            <p className='control has-icons-right'>
              <input
                className='input'
                type='email'
                placeholder='Busque alguma reclamação'
              />
              <span className='icon is-small is-right'>
                <Icon icon={bxSearch} style={{ fontSize: '20px' }} />
              </span>
            </p>
          </div>
          <Icon
            className='bell'
            icon={bxBell}
            style={{ fontSize: '30px', cursor: 'pointer' }}
          />
        </RowBox>

        <RowBox>
          <div>
            <span>Filtrar por: </span>
            <Select
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelected(e.target.value)
              }
              value={selected}
            >
              <option value='date'>Data</option>
              <option value='sector'>Setor</option>
              <option value='title'>Título</option>
            </Select>
          </div>
          <RowBox>
            <FilterRadio>
              <input name='filterRadio' type='radio' />
              <label>Concluído</label>
            </FilterRadio>
            <FilterRadio>
              <input name='filterRadio' type='radio' />
              <label>Em andamento</label>
            </FilterRadio>
          </RowBox>
        </RowBox>
      </Filter>
      <List>
        {data.map((elem) => {
          return <ProblemItem key={elem.title} problem={elem} />;
        })}
      </List>
    </Container>
  );
};

export default Problems;
