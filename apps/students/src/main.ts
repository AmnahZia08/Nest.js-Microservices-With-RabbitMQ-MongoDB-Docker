import { NestFactory } from '@nestjs/core';
import { StudentsModule } from './students.module';

async function bootstrap() {
  const app = await NestFactory.create(StudentsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
