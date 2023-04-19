import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { AppController } from "./app.controller";

@Module({
  imports: [HealthModule],
  controllers: [AppController],
})
export class AppModule {}
