import { PartialType } from '@nestjs/swagger';
import { CreateShortUrlDto } from './create-short_url.dto';

export class UpdateShortUrlDto extends PartialType(CreateShortUrlDto) {}
