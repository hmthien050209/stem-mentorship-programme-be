import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const documentConfig = new DocumentBuilder()
    .setTitle('STEM Mentorship Programme Backend')
    .setDescription(
      'The backend for the website to introduce a Vietnamese cultural tradition of the STEM Mentorship Programme',
    )
    .setVersion('1.0')
    .addTag('mentorship')
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('swagger', app, documentFactory);

  const port = process.env.PORT ?? 5001;
  await app.listen(port);
  Logger.log(`Server started on port ${port}`, 'Bootstrap');
}

void bootstrap();
