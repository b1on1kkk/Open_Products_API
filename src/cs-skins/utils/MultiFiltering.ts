import { BadRequestException } from '@nestjs/common';

import { ErrorChecker } from './ErrorChecker';
import { PrismaService } from 'src/prisma.service';

import type { TFiltering } from '../types/types';

export async function MultiFiltering(prop: TFiltering, prisma: PrismaService) {
  const { price_from, price_to, order, type, quality } = prop;

  const error_status = ErrorChecker(prop);

  if (error_status.status)
    return new BadRequestException(error_status.error_text);

  return await prisma.csSkins.findMany({
    where: {
      price: {
        lte: price_to ? +price_to : undefined,
        gte: price_from ? +price_from : undefined,
      },
      type: type ? type : undefined,
      skin_quality: quality ? quality : undefined,
    },
    orderBy: {
      price: order ? order : undefined,
    },
  });
}
