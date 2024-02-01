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
  Field_Tested = 'Field-Tested',
  Well_Worn = 'Well-Worn',
  Battle_Scarred = 'Battle-Scarred',
}

type SORTING_TYPES = 'desc' | 'asc';

export interface TFiltering {
  price_from: string | undefined;
  price_to: string | undefined;
  order: SORTING_TYPES | undefined;
  type: WeaponTypes | undefined;
  quality: SkinsQualityTypes | undefined;
}
