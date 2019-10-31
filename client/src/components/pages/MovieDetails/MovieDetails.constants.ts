import { Dimensionality, DialoguesType } from 'shared/models';

export interface ShowingsFilters {
  dialoguesType: DialoguesType | null;
  screenType: Dimensionality | null;
}

export const DEFAULT_SHOWINGS_FILTERS = {
  dialoguesType: null,
  screenType: null,
};
