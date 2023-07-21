import { ApiProperty } from "@nestjs/swagger"

export class CreateShortUrlDto {
  @ApiProperty()
  url: string
  urlHash: string
}
