import { BadGatewayException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable} from 'rxjs';
import { META_ROLES } from '../decorator/role-protected.decorator';
import { ValidRoles } from '../interfaces/valid-roles';

@Injectable()
export class UseRoleGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector
  ) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: ValidRoles[] = this.reflector.get(META_ROLES, context.getHandler())

    if (!validRoles) return true;
    if (validRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user 

    if (!user) throw new BadGatewayException("Usuario inexistente")
    for (const role of validRoles) {
      if (role === user.rol) return true;
    }


    throw new ForbiddenException("Perfil de usuario no valido para realizar esta accion")

  }
}
