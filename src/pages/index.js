import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppLayout from '../components/AppLayout';

import LoadingIndicator from '../components/generic/LoadingIndicator';

const DocumentsPage = lazy(() => import('./documents-page'));
const ServicesPage = lazy(() => import('./services-page'));
const SmevPage = lazy(() => import('./smev-page'));
const NotFoundPage = lazy(() => import('./not-found-page'));

const AppView = () => (
  <AppLayout>
    <Suspense fallback={<LoadingIndicator />}>
      <Switch>
        <Redirect from="/" to="/documents" exact />
        <Route path="/documents">
          <DocumentsPage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/smev">
          <SmevPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
  </AppLayout>
);

export default AppView;
