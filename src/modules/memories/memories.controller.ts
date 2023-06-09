import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { MemoriesService } from './memories.service';
import { CreateMemoryDto } from './dto/create-memory.dto';
import { UpdateMemoryDto } from './dto/update-memory.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiTags('Memories')
@Controller('memories')
export class MemoriesController {
  constructor(private readonly memoriesService: MemoriesService) {}

  @Post('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createMemoryDto: CreateMemoryDto, @Request() req) {
    return this.memoriesService.create(createMemoryDto, req.user.id);
  }

  @Get('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAllByOwner(@Request() req) {
    return this.memoriesService.findAllByOwner(req.user.id);
  }

  // @Get('')
  // findAll() {
  //   return this.memoriesService.findAll();
  // }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.memoriesService.findOne(id);
  }

  @Patch('upload/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileFieldsInterceptor([{ name: 'coverImage', maxCount: 1 }]))
  upload(
    @UploadedFiles() files: { coverImage?: Express.Multer.File[] },
    @Param('id') id: string,
  ) {
    const { coverImage } = files;
    return this.memoriesService.upload(id, coverImage[0]);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string) {
    return this.memoriesService.delete(id);
  }
}
