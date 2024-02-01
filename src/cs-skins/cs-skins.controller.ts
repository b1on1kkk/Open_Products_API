import { Controller, Get, Query } from '@nestjs/common';
import { CsSkinsService } from './cs-skins.service';

import type { TFiltering } from './types/types';
import { WeaponTypes } from './types/types';

@Controller('cs-skins')
export class CsSkinsController {
  constructor(private readonly csSkinsService: CsSkinsService) {}

  @Get('skins')
  async getAllSkins(
    @Query()
    filter: TFiltering,
  ) {
    return this.csSkinsService.getAllSkins(filter);
  }

  @Get('pistols')
  async getPistols(
    @Query()
    filter: TFiltering,
  ) {
    return this.csSkinsService.getDifferentWeapons(WeaponTypes.Pistols, filter);
  }

  @Get('shotguns')
  async getShotguns(
    @Query()
    filter: TFiltering,
  ) {
    return this.csSkinsService.getDifferentWeapons(
      WeaponTypes.Shotguns,
      filter,
    );
  }

  @Get('submachine_guns')
  async getSubmachineGuns(
    @Query()
    filter: TFiltering,
  ) {
    return this.csSkinsService.getDifferentWeapons(
      WeaponTypes.Submachine_Guns,
      filter,
    );
  }

  @Get('assault_rifles')
  async getAssaultRifles(
    @Query()
    filter: TFiltering,
  ) {
    return this.csSkinsService.getDifferentWeapons(
      WeaponTypes.Assault_Rifles,
      filter,
    );
  }

  @Get('sniper_rifles')
  async getSniperRifles(
    @Query()
    filter: TFiltering,
  ) {
    return this.csSkinsService.getDifferentWeapons(
      WeaponTypes.Sniper_Rifles,
      filter,
    );
  }

  @Get('machine_guns')
  async getMachineGuns(
    @Query()
    filter: TFiltering,
  ) {
    return this.csSkinsService.getDifferentWeapons(
      WeaponTypes.Machine_Guns,
      filter,
    );
  }

  @Get('other')
  async getOtherWeapons(
    @Query()
    filter: TFiltering,
  ) {
    return this.csSkinsService.getDifferentWeapons(WeaponTypes.Other, filter);
  }
}
