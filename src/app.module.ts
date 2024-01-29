import { Module } from '@nestjs/common';
import { YandexEdaModule } from './yandex-eda/yandex-eda.module';
import { CsSkinsModule } from './cs-skins/cs-skins.module';

@Module({
  imports: [YandexEdaModule, CsSkinsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
