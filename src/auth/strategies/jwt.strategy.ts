import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { Usuario } from "generated/prisma";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService,
    ) {
        super({
            secretOrKey: "asd1",
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    async validate(payload: JwtPayload): Promise<Usuario> {
        if (!payload || !payload.id) {
            throw new UnauthorizedException("Token inválido o no enviado");
        }

        if (!this.authService.usuario) {
            throw new UnauthorizedException("No autorizado");
        }

        const user = await this.authService.usuario.findFirst({ where: { id: payload.id, activo: true } });

        if (!user) throw new UnauthorizedException("Usuario no encontrado");
        if (!user.activo) throw new UnauthorizedException("Usuario inactivo");

        return user;
    }
}
