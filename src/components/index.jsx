import React from 'react';

export const DashboardEventGrid = React.lazy(() => import('./dashboard-event-grid/index'));
export const DashboardTasksGrid = React.lazy(() => import('./dashboard-tasks-grid/index'));
export const CreateEventModal = React.lazy(() => import('./create-event-modal/index'));