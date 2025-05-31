import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../interfaces/jwt-payload.interface";
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
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

        
        const user = await this.authService.usuario.findFirst({ where: { id: payload.id, activo: true } });

        if (!user) throw new UnauthorizedException("Usuario no econctado")
        if (!user.activo) throw new UnauthorizedException("Usuario inactivo");

        return user
    }

}