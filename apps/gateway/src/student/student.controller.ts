import { Controller, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get()
  getAll() {
    return 'this will get all students';
  }
}
