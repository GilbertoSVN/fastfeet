import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Packages from '~/pages/Packages';
import RegisterPackages from '~/pages/Packages/Register';
import EditPackages from '~/pages/Packages/Edit';

import DeliveryMan from '~/pages/DeliveryMan';
import RegisterDeliveryMan from '~/pages/DeliveryMan/Register';
import EditDeliveryMan from '~/pages/DeliveryMan/Edit';

import Recipients from '~/pages/Recipients';
import RegisterRecipients from '~/pages/Recipients/Register';
import EditRecipients from '~/pages/Recipients/Edit';

import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/packages/register" exact component={RegisterPackages} />
      <Route path="/packages/edit" exact component={EditPackages} />
      <Route path="/packages" component={Packages} />

      <Route
        path="/deliveryman/register"
        exact
        component={RegisterDeliveryMan}
      />
      <Route path="/deliveryman/edit" exact component={EditDeliveryMan} />
      <Route path="/deliveryman" component={DeliveryMan} />

      <Route path="/recipients/register" component={RegisterRecipients} />
      <Route path="/recipients/edit" component={EditRecipients} />
      <Route path="/recipients" component={Recipients} />

      <Route path="/problems" component={Problems} />
    </Switch>
  );
}
