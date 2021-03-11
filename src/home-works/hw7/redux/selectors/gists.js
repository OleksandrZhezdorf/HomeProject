import { createSelector } from '@reduxjs/toolkit';

export const getGists = createSelector(
  state => state.gists.list,
  gists => gists
);

export const getGistLoading = createSelector(
  state => state.gists.loading,
  loading => loading
);

export const getSelectedGistById = createSelector(
  getGists,
  (_, gistId) => gistId,
  (gists, gistId) => gists.find(gist => gist.id === gistId)
);
