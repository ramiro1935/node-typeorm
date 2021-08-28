import { UserEntity } from '../../entities/user.entity';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { UserRepository } from '../application/user.repository';


  
export class UserOperation
  extends OperationRepository<UserEntity>
  implements UserRepository
{
  constructor() {
    super(UserEntity);
  }

  
}
