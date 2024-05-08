import React from 'react';

export const Login = React.lazy(() => import('./auth/login'));
export const Register = React.lazy(() => import('./auth/register'));
export const Dashboard = React.lazy(() => import('./dashboard/index'));