import { createSelector } from '@reduxjs/toolkit';

export const getRaws = createSelector(
  state => state.files.list,
  files => files
);

export const getRawLoading = createSelector(
  state => state.files.loading,
  loading => loading
);

export const getSelectedRawById = createSelector(
    getRaws,
  (_, gistId) => gistId,
  (files, gistId) => files[gistId] || []
);