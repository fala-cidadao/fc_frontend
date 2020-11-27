import React, { ChangeEvent, useEffect, useState } from 'react';
import { IProblem } from '../../../../@types/problems';
import ProblemItem from '../../../../components/ProblemItem';
import { Container, Filter, List, RowBox, Select, FilterRadio } from './styles';

import { Icon } from '@iconify/react';
import bxSearch from '@iconify/icons-bx/bx-search';
import { api } from '../../../../service/api';

const Problems: React.FC = () => {
  const [selected, setSelected] = useState<string>('date');
  const [search, setSearch] = useState<string>('');
  const [allData, setAllData] = useState<IProblem[]>([]);
  const [data, setData] = useState<IProblem[]>([]);

  useEffect(() => {
    api.listProblems().then((res) => {
      setAllData(res);
      setData(res);
    });
  }, []);

  function handleSearch() {
    let newData = allData;
    newData = newData.filter((elem) =>
      elem.title.toLowerCase().includes(search.toLowerCase())
    );
    search !== '' ? setData([...newData]) : setData(allData);
  }

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
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setSearch(e.target.value);
                  handleSearch();
                }}
              />
              <span className='icon is-small is-right'>
                <Icon icon={bxSearch} style={{ fontSize: '20px' }} />
              </span>
            </p>
          </div>
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
          return <ProblemItem key={elem._id} problem={elem} />;
        })}
      </List>
    </Container>
  );
};

export default Problems;
