import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './repositories/user.repositry';
// import { UserInMemoryRepository } from './repositories/in-memory/user.in-memory.repository';
import { PrismaService } from 'src/dastabase/prisma.service';
import { UserPrismaRepository } from './repositories/prisma/users.prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UsersModule {}
