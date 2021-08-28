import { UserModel } from './../domain/user.model';
import { UserEntity } from '../../entities/user.entity';
import { RepositoryBase } from '../../shared/application/base.repository';

export interface UserRepository extends RepositoryBase<UserModel> {}
