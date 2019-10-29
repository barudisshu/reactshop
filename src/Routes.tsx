/** @format */

import * as React from 'react';
import {Suspense} from 'react';
import {BrowserRouter as Router, Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';
import ProductsPage from './ProductsPage';
import Header from './Header';
import ProductPage from './ProductPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ContactUsPage from './ContactUsPage';

const AdminPage = React.lazy(() => import('./AdminPage'));

const Routes: React.SFC<RouteComponentProps> = props => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={props.location.key} timeout={500} classNames="animate">
          <Switch>
            <Redirect exact={true} from="/" to="/products" />
            <Route exact={true} path="/products" component={ProductsPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/contactus" component={ContactUsPage} />
            <Route path="/admin">
              <Suspense fallback={<div className="page-container">Loading... </div>}>
                {loggedIn ? <AdminPage /> : <Redirect to="/login" />}
              </Suspense>
            </Route>
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const RoutesWrap: React.SFC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

export default RoutesWrap;
