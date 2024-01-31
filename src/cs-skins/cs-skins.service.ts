import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import type { TPriceRange, WeaponTypes } from './cs-skins.controller';

@Injectable()
export class CsSkinsService {
  constructor(private prisma: PrismaService) {}

  async getAllSkins(price_range: TPriceRange) {
    const { price_from, price_to, order, type, quality } = price_range;

    if (+price_from > +price_to) {
      return new BadRequestException(
        'price_from can not be larger than price_to!',
      );
    }

    return await this.prisma.csSkins.findMany({
      where: {
        price: {
          lte: price_to !== undefined ? +price_to.length : undefined,
          gte: price_from !== undefined ? +price_from : undefined,
        },
        type: type !== undefined ? type : undefined,
        skin_quality: quality !== undefined ? quality : undefined,
      },
      orderBy: {
        price: order !== undefined ? order : undefined,
      },
    });
  }

  async getDifferentWeapons(weapon_type: WeaponTypes) {
    console.log(weapon_type);

    return await this.prisma.csSkins.findMany({
      where: {
        type: `${weapon_type}`,
      },
    });
  }
}
