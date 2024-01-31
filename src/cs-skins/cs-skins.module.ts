import { Module } from '@nestjs/common';
import { CsSkinsController } from './cs-skins.controller';
import { CsSkinsService } from './cs-skins.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CsSkinsController],
  providers: [CsSkinsService, PrismaService],
})
export class CsSkinsModule {}
