import React from 'react';
import { IProblem } from '../../../../@types/problems';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { StyledPopup } from './styles';
import safety from '../../../../assets/Web/markers/safety.svg';
import energy from '../../../../assets/Web/markers/energy.svg';
import garbage from '../../../../assets/Web/markers/garbage.svg';
import health from '../../../../assets/Web/markers/health.svg';
import infraestruture from '../../../../assets/Web/markers/infrastruture.svg';
import other from '../../../../assets/Web/markers/other.svg';
import sewer from '../../../../assets/Web/markers/sewer.svg';
import education from '../../../../assets/Web/markers/education.svg';
import { NavLink } from 'react-router-dom';

type withChildren<T = unknown> = T & { children?: React.ReactNode };
type CustomMarkerProps = withChildren<{ problem: IProblem }>;

const defaultOptions = {
  iconSize: new L.Point(50, 55),
  iconAnchor: new L.Point(25, 55),
  shadowUrl: iconShadow
}

const SafetyIcon = new L.Icon({
  iconUrl: safety,
  ...defaultOptions
});

const EnergyIcon = new L.Icon({
  iconUrl: energy,
  ...defaultOptions
});

const GarbageIcon = new L.Icon({
  iconUrl: garbage,
  ...defaultOptions
});

const HealthIcon = new L.Icon({
  iconUrl: health,
  ...defaultOptions
});

const InfraestrutureIcon = new L.Icon({
  iconUrl: infraestruture,
  ...defaultOptions
});
const OtherIcon = new L.Icon({
  iconUrl: other,
  ...defaultOptions
});

const SewerIcon = new L.Icon({
  iconUrl: sewer,
  ...defaultOptions
});
const EducationIcon = new L.Icon({
  iconUrl: education,
  ...defaultOptions
});

const markerIcons: Record<string, L.Icon> = {
  education: EducationIcon,
  safety: SafetyIcon,
  sewer: SewerIcon,
  infraestruture: InfraestrutureIcon,
  healthIcon: HealthIcon,
  other: OtherIcon,
  garbage: GarbageIcon,
  energy: EnergyIcon
};

const CustomMarker: React.FC<CustomMarkerProps> = ({ problem, children }) => {
  if(!problem.location.lat || !problem.location.lg) problem.location = { lat: -7.21667, lg: -35.908813}
  const { lat, lg } = problem.location;
  return (
    <Marker
      key={problem._id}
      position={L.latLng(lat, lg)}
      icon={markerIcons[problem.sector || 'safety']}
    >
      <StyledPopup offset={[0, -60]}>
        <h3>{problem.title}</h3>
        <NavLink to={`problem/${problem._id}`}>see more</NavLink>
      </StyledPopup>
    </Marker>
  );
};

export default CustomMarker;
