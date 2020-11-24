/* eslint-disable quote-props */
import React from 'react';
import { Container } from './styles';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { IProblem } from '../../../@types/problems';
import CustomMarker from './Marker';
import 'leaflet/dist/leaflet.css';

const DefaultCenter = L.latLng(-7.2171368, -35.911943);

const problems: IProblem[] = [
  {
    _id: '5fb478156f772e163211e1cb',
    author: '5fa73d6696dd081d89e45862',
    sector: 'safety',
    location: {
      lat: -7.21667,
      lg: -35.908813
    },
    description: 'teste3',
    title: 'this is an test',
    image: 'https://pbs.twimg.com/media/EnD5dt9XMAAm9UV?format=jpg&name=large',
    status: 'OnGoing',
    comments: [
      {
        owner: '5fb478156f772e163211e1cb',
        text: 'description',
        role: 'admin',
        image:
          'https://pbs.twimg.com/media/EnD5dt9XMAAm9UV?format=jpg&name=large'
      },
      {
        owner: '5fb478156f772e163211e1cb',
        text: 'description',
        role: 'admin',
        image:
          'https://pbs.twimg.com/media/EnD5dt9XMAAm9UV?format=jpg&name=large'
      },
      {
        owner: '5fb478156f772e163211e1cb',
        text: 'description',
        role: 'admin',
        image:
          'https://pbs.twimg.com/media/EnD5dt9XMAAm9UV?format=jpg&name=large'
      },
      {
        owner: '5fb478156f772e163211e1cb',
        text: 'description',
        role: 'admin',
        image:
          'https://pbs.twimg.com/media/EnD5dt9XMAAm9UV?format=jpg&name=large'
      },
      {
        owner: '5fb7cf56a247530017a2dfd7',
        text: 'oi som',
        role: 'admin',
        image: ''
      }
    ],
    createdAt: '2020-11-18T01:25:41.382Z'
  }
];
const Map = () => {
  return (
    <Container>
      <MapContainer
        style={{ height: '100vh', width: '90vw' }}
        center={DefaultCenter}
        zoom={15}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {problems.map((problem) => {
          
          return (
            <CustomMarker key={problem._id} problem={problem}></CustomMarker>
          );
        })}
      </MapContainer>
    </Container>
  );
};

export default Map;
