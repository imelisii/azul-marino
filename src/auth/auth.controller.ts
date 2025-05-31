import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './decorator/auth.decorator';
import { GetUser } from './decorator/get-user.decorator';
import { LoginUserDto } from './dto/login-user.dto';
import { Usuario } from 'generated/prisma';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(
    @GetUser() user: Usuario,
  ) {
    return this.authService.checkAuthStatus(user);

  }

  @Post("login")
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

}
