import { Module } from '@nestjs/common';
import { MemoriesService } from './memories.service';
import { MemoriesController } from './memories.controller';
import { MemoriesRepository } from './repositories/memories.repository';
import { MemoriesPrismaRepository } from './repositories/prisma/memories.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [MemoriesController],
  providers: [
    MemoriesService,
    PrismaService,
    {
      provide: MemoriesRepository,
      useClass: MemoriesPrismaRepository,
    },
  ],
})
export class MemoriesModule {}
