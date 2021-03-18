import { createSelector } from '@reduxjs/toolkit';

export const getRaws = createSelector(
  state => state.raws.list,
  files => files
);

export const getRawLoading = createSelector(
  state => state.raws.loading,
  loading => loading
);

export const getSelectedRawById = createSelector(
    getRaws,
  (_, gistId) => gistId,
  (raws, gistId) => raws[gistId] || []
);