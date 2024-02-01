import type { TFiltering } from '../types/types';

export function ErrorChecker(prop: TFiltering) {
  const { price_from, price_to, order, type, quality } = prop;
  const ERROR_SIMILAR_QUERIES_TEXT = 'similar queries are not supported!';
  const ERROR_FILTER_TEXT =
    'price_from can not be larger than price_to property!';

  if (
    (price_from && price_from.length > 1 && Array.isArray(price_from)) ||
    (price_to && price_to.length > 1 && Array.isArray(price_to)) ||
    (order && order.length > 1 && Array.isArray(order)) ||
    (type && type.length > 1 && Array.isArray(type)) ||
    (quality && quality.length > 1 && Array.isArray(quality))
  ) {
    return { error_text: ERROR_SIMILAR_QUERIES_TEXT, status: true };
  }

  if (+price_from > +price_to) {
    return { error_text: ERROR_FILTER_TEXT, status: true };
  }

  return { error_text: '', status: false };
}
