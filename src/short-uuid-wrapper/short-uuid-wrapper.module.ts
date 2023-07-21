import { DynamicModule, Module } from '@nestjs/common';
import { ShortUuidService } from './short-uuid-service';

@Module({})
export class ShortUuidWrapperModule {
    static register(): DynamicModule {
        return {
            module: ShortUuidWrapperModule,
            providers: [ShortUuidService],
            exports: [ShortUuidService]
        }
    }
}
