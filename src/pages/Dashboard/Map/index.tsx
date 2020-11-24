/* eslint-disable quote-props */
import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { IProblem } from '../../../@types/problems';
import CustomMarker from './Marker';
import 'leaflet/dist/leaflet.css';
import { api } from '../../../service/api';

const DefaultCenter = L.latLng(-7.2171368, -35.911943);

const Map = () => {
  const [problems, setProblem] = useState<IProblem[]>([])
  useEffect(() => {
    api
      .listProblems()
      .then((res) => {
        setProblem(res)
      })
  }, [])
  
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
