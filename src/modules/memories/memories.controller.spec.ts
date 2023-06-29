// import { Test, TestingModule } from '@nestjs/testing';
// import { MemoriesController } from './memories.controller';
// import { MemoriesService } from './memories.service';
// import { MemoriesRepository } from './repositories/memories.repository';
// import { PrismaService } from 'src/database/prisma.service';
// import { MemoriesPrismaRepository } from './repositories/prisma/users.prisma.repository';

// describe('MemoriesController', () => {
//   let controller: MemoriesController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [MemoriesController],
//       providers: [
//         MemoriesService,
//         PrismaService,
//         {
//           provide: MemoriesRepository,
//           useClass: MemoriesPrismaRepository,
//         },
//       ],
//     }).compile();

//     controller = module.get<MemoriesController>(MemoriesController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });
