import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUsersChat } from './dto/create-user.input';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('CreateUsersChat')
  create(@Args('createUsersChat') createUsersChat: CreateUsersChat) {
    return this.usersService.createUsersChat(createUsersChat);
  }

  @Query()
  async getUsersChat() {
    return this.usersService.getUsersChat();
  }
}
