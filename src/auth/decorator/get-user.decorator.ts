import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";

export const GetUser = createParamDecorator(
    (data, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();
        const user = req.user;
        console.log("User in get-user.decorator", req);
        console.log

        if (data === "email"){
            return user.email;
        }


    
        if( !user) throw new InternalServerErrorException("User not found in request");


        return (!data) ? user: user[data]
    }


);