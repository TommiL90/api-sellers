import { Injectable } from '@nestjs/common';
import { CreateMemoryDto } from './dto/create-memory.dto';
import { UpdateMemoryDto } from './dto/update-memory.dto';
import { MemoriesRepository } from './repositories/memories.repository';

@Injectable()
export class MemoriesService {
  constructor(private memoriesRepository: MemoriesRepository) {}

  async create(createMemoryDto: CreateMemoryDto, userId: string) {
    const newMemory = await this.memoriesRepository.create(
      createMemoryDto,
      userId,
    );
    return newMemory;
  }

  async findAllByOwner(ownerId: string) {
    const memories = await this.memoriesRepository.findAllByOwner(ownerId);
    return memories;
  }

  async findAll() {
    const memories = await this.memoriesRepository.findAll();
    return memories;
  }

  async findOne(id: string) {
    const memory = await this.memoriesRepository.findOne(id);
    return memory;
  }

  async update(id: string, updateMemoryDto: UpdateMemoryDto) {
    const memory = await this.memoriesRepository.update(id, updateMemoryDto);
    return memory;
  }

  async delete(id: string) {
    const memory = await this.memoriesRepository.delete(id);
    return memory;
  }
}
