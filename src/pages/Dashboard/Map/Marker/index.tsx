/* eslint-disable quote-props */
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { IProblem } from '../../../../@types/problems';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// import safetySVG from '../../../../assets/Web/marker/safety.svg';
// import energy from '../../../../assets/Web/marker/energy.svg';
// import garbage from '../../../../assets/Web/marker/garbage.svg';
import health from '../../../../assets/Web/marker/health.svg';
import appStore from '../../../../assets/Web/PNG/bg.png';
// import infraestruture from '../../../../assets/Web/marker/infraestruture.svg';
// import other from '../../../../assets/Web/marker/other.svg';
// import sewer from '../../../../assets/Web/marker/sewer.svg';
// import education from '../../../../assets/Web/marker/education.svg';
// import icon from 'leaflet/dist/images/marker-icon.png';
type withChildren<T = unknown> = T & { children?: React.ReactNode };
type CustomMarkerProps = withChildren<{ problem: IProblem }>;
// const SafetyIcon = new L.Icon({
//   iconUrl: safety,
//   shadowUrl: iconShadow
// });

// const EnergyIcon = new L.Icon({
//   iconUrl: energy,
//   shadowUrl: iconShadow
// });

// const GarbageIcon = new L.Icon({
//   iconUrl: garbage,
//   shadowUrl: iconShadow
// });

const HealthIcon = L.icon({
  iconUrl: health,
  shadowUrl: iconShadow
});

// const InfraestrutureIcon = new L.Icon({
//   iconUrl: infraestruture,
//   shadowUrl: iconShadow
// });
// const OtherIcon = new L.Icon({
//   iconUrl: other,
//   shadowUrl: iconShadow
// });

// const SewerIcon = new L.Icon({
//   iconUrl: sewer,
//   shadowUrl: iconShadow
// });
// const EducationIcon = new L.Icon({
//   iconUrl: education,
//   shadowUrl: iconShadow
// });

const markerIcons: Record<string, L.Icon> = {
  // education: EducationIcon,
  // safety: SafetyIcon,
  // sewer: SewerIcon,
  // infraestruture: InfraestrutureIcon,
  health: HealthIcon
  // other: OtherIcon,
  // garbage: GarbageIcon,
  // energy: EnergyIcon
};
const CustomMarker: React.FC<CustomMarkerProps> = ({ problem, children }) => {
  const { lat, lg } = problem.location;

  return (
    <Marker
      key={problem._id}
      position={L.latLng(lat, lg)}
      icon={markerIcons[problem.sector]}
    ></Marker>
  );
};

export default CustomMarker;
