import { Injectable } from '@nestjs/common';
import { generate } from 'short-uuid'

@Injectable()
export class ShortUuidService {
    get(): string {
        return generate()
    }
}
