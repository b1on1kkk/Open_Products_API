import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import type { TFiltering, WeaponTypes } from './types/types';

import { MultiFiltering } from './utils/MultiFiltering';

@Injectable()
export class CsSkinsService {
  constructor(private prisma: PrismaService) {}

  async getAllSkins(filter: TFiltering) {
    return MultiFiltering(filter, this.prisma);
  }

  async getDifferentWeapons(weapon_type: WeaponTypes, filter: TFiltering) {
    return MultiFiltering({ ...filter, type: weapon_type }, this.prisma);
  }
}
