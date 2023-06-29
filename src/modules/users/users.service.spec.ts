// import { Test, TestingModule } from '@nestjs/testing';
// import { UsersService } from './users.service';
// import { PrismaService } from 'src/database/prisma.service';
// import { UserPrismaRepository } from './repositories/prisma/users.prisma.repository';
// import { UserRepository } from './repositories/user.repositry';

// describe('UsersService', () => {
//   let service: UsersService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         UsersService,
//         PrismaService,
//         {
//           provide: UserRepository,
//           useClass: UserPrismaRepository,
//         },
//       ],
//     }).compile();

//     service = module.get<UsersService>(UsersService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });
