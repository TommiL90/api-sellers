// import { Test, TestingModule } from '@nestjs/testing';
// import { MemoriesService } from './memories.service';
// import { PrismaService } from 'src/database/prisma.service';
// import { MemoriesRepository } from './repositories/memories.repository';
// import { MemoriesPrismaRepository } from './repositories/prisma/users.prisma.repository';

// describe('MemoriesService', () => {
//   let service: MemoriesService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         MemoriesService,
//         PrismaService,
//         {
//           provide: MemoriesRepository,
//           useClass: MemoriesPrismaRepository,
//         },
//       ],
//     }).compile();

//     service = module.get<MemoriesService>(MemoriesService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });
