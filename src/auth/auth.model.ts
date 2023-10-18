import { Prisma } from '@prisma/client';

export class Entity implements Prisma.EntityCreateInput {
    readonly login: string;
    readonly password: string;

}
