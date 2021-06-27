import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://luiz:luiz@cluster0.mgybt.mongodb.net/test')
  ]
})
export class AppModule {}
