import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');

  app.setGlobalPrefix('api');
  app.enableCors({ origin: '*', });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Application is running on: ${process.env.PORT}`);

  if (process.env.NODE_ENV === 'development') {
    const seedService = app.get(require('./seed/seed.service').SeedService);
    try {
      const result = await seedService.create();
      logger.log(`[SEED] ${typeof result === 'string' ? result : 'Seed ejecutado'}`);
    } catch (e) {
      logger.error(`[SEED] Error ejecutando seed: ${e.message}`);
    }
  }
}
bootstrap();
