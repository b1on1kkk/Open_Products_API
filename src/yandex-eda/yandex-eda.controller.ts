import { Controller, Get, Param, Query } from '@nestjs/common';
import { YandexEdaService } from './yandex-eda.service';

import type { TRatingFilter } from './types/types';

@Controller('yandex-eda')
export class YandexEdaController {
  constructor(private readonly yandexService: YandexEdaService) {}

  @Get('restaurants')
  getRestaurants(
    @Query()
    rating_filter: TRatingFilter,
  ) {
    const { rt_filt_rating, rt_filt_cost } = rating_filter;

    if (rt_filt_rating && !rt_filt_cost) {
      return this.yandexService.getFilteredRestaurantsByRating(rt_filt_rating);
    } else if (rt_filt_cost && !rt_filt_rating) {
      return this.yandexService.getFilteredRestaurantsByCost(rt_filt_cost);
    } else if (rt_filt_rating && rt_filt_cost) {
      return this.yandexService.getMultiFilteredRestaurants(
        rt_filt_rating,
        rt_filt_cost,
      );
    }

    return this.yandexService.getRestaurants();
  }

  @Get('restaurants/:id')
  getRestaurantById(@Param('id') id: string) {
    return this.yandexService.getRestaurantById(id);
  }
}
