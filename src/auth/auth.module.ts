import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from "@nestjs/jwt"
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),

    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: "asd1",
          signOptions: { expiresIn: "2h" }
        }
      }
    })

  ],
  exports: [JwtStrategy, PassportModule, JwtModule, AuthModule, AuthService]
})
export class AuthModule { }
