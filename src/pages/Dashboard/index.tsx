import React, { Suspense } from 'react';
import Sidebar from '../../components/Sidebar';
import DashboardRoutes from '../../routes/dashboard.routes';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Suspense fallback={<h1>Carregando</h1>}>
        <DashboardRoutes />
      </Suspense>
    </Container>
  );
};

export default Dashboard;
