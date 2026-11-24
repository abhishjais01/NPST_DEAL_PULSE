import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { buildDataSourceOptions } from './config/database.config';
import { HealthController } from './health.controller';
import { IntegrationsModule } from './integrations/integrations.module';
import { AssignmentEventPublisher } from './events/assignment-event.publisher';

@Module({
  imports: [TypeOrmModule.forRoot(buildDataSourceOptions(__dirname)), IntegrationsModule],
  controllers: [HealthController],
  providers: [AssignmentEventPublisher],
})
export class AppModule {}
