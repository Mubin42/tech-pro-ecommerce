import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from './store/store.module';
import { UserModule } from './user/user.module';


// test commit
@Module({
  imports: [
    // Importing config module
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // Importing mongoDB module
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    StoreModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
