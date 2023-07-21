import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle("Url Shortner").setDescription("Url Shortner API").setVersion("1.0").build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("docs", app, document)
  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>("APP_PORT"));
}
bootstrap();
