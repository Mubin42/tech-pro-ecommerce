import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
