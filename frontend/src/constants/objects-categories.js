import {
  Backpack,
  DeviceMobile,
  DotsThreeOutline,
  File,
  Headset,
  Hoodie,
  PintGlass,
  PlugCharging,
} from '@phosphor-icons/react';

export const objectCategories = [
  {
    key: 'ELETRONIC',
    route: '/smartphones',
    name: 'Smartphones',
    icon: DeviceMobile,
  },
  {
    key: 'MATERIALS_AND_BAGS',
    route: '/materiais',
    name: 'Materiais e mochilas',
    icon: Backpack,
  },
  {
    key: 'CUPS_AND_BOTTLES',
    route: '/copos',
    name: 'Copos e garrafas',
    icon: PintGlass,
  },
  {
    key: 'ACCESSORIES',
    route: '/acessorios',
    name: 'Acessórios',
    icon: Headset,
  },
  {
    key: 'CLOTHES',
    route: '/roupas',
    name: 'Roupas',
    icon: Hoodie,
  },
  {
    key: 'DOCUMENTS',
    route: '/documentos',
    name: 'Documentos',
    icon: File,
  },
  {
    key: 'CHARGERS_AND_CABLES',
    route: '/carregadores',
    name: 'Carregadores e cabos',
    icon: PlugCharging,
  },
  {
    key: 'OTHERS',
    route: '/outros',
    name: 'Outros',
    icon: DotsThreeOutline,
  },
];
