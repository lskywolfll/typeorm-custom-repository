import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserParamsDto } from './dto/params-user.dto';
import { User } from './user.entity';
import { UsersRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async searchAdvance() {
    return await this.usersRepository.firstWhere('firstName', 'fernando');
  }
}
