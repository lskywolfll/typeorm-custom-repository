import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async firstWhere(
    column: string,
    value: string | number,
    operator = '=',
  ): Promise<User | undefined> {
    return await this.createQueryBuilder()
      .where(`User.${column} ${operator} :value`, { value: value })
      .getOne();
  }
}
