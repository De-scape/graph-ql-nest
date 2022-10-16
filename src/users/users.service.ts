import { Injectable } from '@nestjs/common';
import { CreateUsersChat } from './dto/create-user.input';
import { Chat, User } from './entities/user.entity';

@Injectable()
export class UsersService {
  dummyChat: Chat = { id: 1, content: 'test!' };
  dummyUser: User = { name: 'test', chat: [this.dummyChat] };
  users: User[] = [this.dummyUser];
  chats: Chat[] = [this.dummyChat];

  createUsersChat(createUsersChat: CreateUsersChat) {
    console.log(createUsersChat);

    const newId = this.chats[this.chats.length - 1].id + 1;
    const newChat = { id: newId, content: createUsersChat.chatContent };
    this.chats.push(newChat);

    this.users[0].chat.push(newChat);

    return newChat;
  }

  async getUsersChat() {
    console.log(this.users);

    return this.users;
  }
}
