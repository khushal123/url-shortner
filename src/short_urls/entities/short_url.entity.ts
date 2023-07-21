import { ApiProperty } from "@nestjs/swagger"
import { ShortUrl } from "@prisma/client"

export class ShortUrlEntity implements ShortUrl {
    createdAt: Date
    updatedAt: Date
    @ApiProperty()
    id: number
    @ApiProperty()
    url: string
    @ApiProperty()
    urlHash: string
}
