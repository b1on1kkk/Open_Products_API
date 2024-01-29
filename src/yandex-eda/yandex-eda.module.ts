import { Module } from '@nestjs/common';
import { YandexEdaController } from './yandex-eda.controller';
import { YandexEdaService } from './yandex-eda.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [YandexEdaController],
  providers: [YandexEdaService, PrismaService],
})
export class YandexEdaModule {}
