import { Controller, Get, Query } from '@nestjs/common';
import { CsSkinsService } from './cs-skins.service';

export enum WeaponTypes {
  Pistols = 'Pistols',
  Shotguns = 'Shotguns',
  Submachine_Guns = 'Submachine_Guns',
  Assault_Rifles = 'Assault_Rifles',
  Sniper_Rifles = 'Sniper_Rifles',
  Machine_Guns = 'Machine_Guns',
  Other = 'Other',
}

export enum SkinsQualityTypes {
  Factory_New = 'Factory New',
  Minimal_Wear = 'Minimal Wear',
  Field_Tested = 'Field Tested',
  Well_Worn = 'Well Worn',
  Battle_Scarred = 'Battle Scarred',
}

export interface TPriceRange {
  price_from: string;
  price_to: string;
  order: 'asc' | 'desc';
  type: WeaponTypes;
  quality: SkinsQualityTypes;
}

@Controller('cs-skins')
export class CsSkinsController {
  constructor(private readonly csSkinsService: CsSkinsService) {}

  @Get('/skins')
  async getAllSkins(
    @Query()
    price_range: TPriceRange,
  ) {
    return this.csSkinsService.getAllSkins(price_range);
  }

  @Get('/skins/pistols')
  async getPistols() {
    return this.csSkinsService.getDifferentWeapons(WeaponTypes.Pistols);
  }

  @Get('/skins/shotguns')
  async getShotguns() {
    return this.csSkinsService.getDifferentWeapons(WeaponTypes.Shotguns);
  }

  @Get('/skins/submachine_guns')
  async getSubmachineGuns() {
    return this.csSkinsService.getDifferentWeapons(WeaponTypes.Submachine_Guns);
  }

  @Get('/skins/assault_rifles')
  async getAssaultRifles() {
    return this.csSkinsService.getDifferentWeapons(WeaponTypes.Assault_Rifles);
  }

  @Get('/skins/sniper_rifles')
  async getSniperRifles() {
    return this.csSkinsService.getDifferentWeapons(WeaponTypes.Sniper_Rifles);
  }

  @Get('/skins/machine_guns')
  async getMachineGuns() {
    return this.csSkinsService.getDifferentWeapons(WeaponTypes.Machine_Guns);
  }

  @Get('/skins/other')
  async getOtherWeapons() {
    return this.csSkinsService.getDifferentWeapons(WeaponTypes.Other);
  }
}
