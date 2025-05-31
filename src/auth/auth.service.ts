import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginUserDto } from './dto/login-user.dto';
import { PrismaClient, Usuario } from 'generated/prisma';


@Injectable()
export class AuthService extends PrismaClient {

  constructor(
    private readonly jwtService: JwtService
  ) {
    super();
  }


  async login(userLoginDto: LoginUserDto) {
    const { email, password } = userLoginDto
    return this.usuario.findFirst({ where: { username: email, password: password } })
  }

  private getJWT(payload: JwtPayload): string {

    const token = this.jwtService.sign(payload);
    return token

  }


  findAll() {
    return this.usuario.findMany();
  }


  async checkAuthStatus(user: Usuario) {

    return {
      ...user,
      token: this.getJWT({ id: user.id, role: user.rol })
    }
  }



}
