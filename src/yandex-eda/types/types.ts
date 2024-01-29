export type SORTING_TYPES = 'desc' | 'asc';

export interface TRatingFilter {
  rt_filt_rating: SORTING_TYPES;
  rt_filt_cost: SORTING_TYPES;
}
