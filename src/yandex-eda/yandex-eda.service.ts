import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';

import type { YandexEdaRestaurants } from '@prisma/client';
import type { SORTING_TYPES } from './types/types';

@Injectable()
export class YandexEdaService {
  constructor(private prisma: PrismaService) {}
  async getRestaurants() {
    return await this.prisma.yandexEdaRestaurants.findMany();
  }

  async getFilteredRestaurantsByRating(
    kind_of_filtering: SORTING_TYPES,
  ): Promise<YandexEdaRestaurants[]> {
    return await this.prisma.yandexEdaRestaurants.findMany({
      orderBy: {
        rating: kind_of_filtering,
      },
    });
  }

  async getFilteredRestaurantsByCost(
    kind_of_filtering: SORTING_TYPES,
  ): Promise<YandexEdaRestaurants[]> {
    return await this.prisma.yandexEdaRestaurants.findMany({
      orderBy: {
        cost: kind_of_filtering,
      },
    });
  }

  async getMultiFilteredRestaurants(
    kind_of_rating_filtering: SORTING_TYPES,
    kind_of_cost_filtering: SORTING_TYPES,
  ): Promise<YandexEdaRestaurants[]> {
    return await this.prisma.yandexEdaRestaurants.findMany({
      orderBy: [
        {
          rating: kind_of_rating_filtering,
        },
        {
          cost: kind_of_cost_filtering,
        },
      ],
    });
  }

  async getRestaurantById(id: string) {
    return await this.prisma.yandexEdaRestaurants.findMany({
      where: {
        id: +id,
      },
      select: {
        id: true,
        title: true,
        rating: true,
        reviews: true,
        YandexEdaRestaurantsProducts: {
          select: {
            id: true,
            name: true,
            product_name: true,
            description: true,
            price: true,
            weight: true,
          },
        },
      },
    });
  }
}
