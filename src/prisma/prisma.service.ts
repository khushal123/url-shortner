import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { async } from 'rxjs';

@Injectable()
export class PrismaService  extends PrismaClient{
    
}
