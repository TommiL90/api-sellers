// import { Test, TestingModule } from '@nestjs/testing';
// import { UsersController } from './users.controller';
// import { UsersService } from './users.service';
// import { PrismaService } from 'src/database/prisma.service';
// import { UserPrismaRepository } from './repositories/prisma/users.prisma.repository';
// import { UserRepository } from './repositories/user.repositry';

// describe('UsersController', () => {
//   let controller: UsersController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [UsersController],
//       providers: [
//         UsersService,
//         PrismaService,
//         {
//           provide: UserRepository,
//           useClass: UserPrismaRepository,
//         },
//       ],
//     }).compile();

//     controller = module.get<UsersController>(UsersController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });
