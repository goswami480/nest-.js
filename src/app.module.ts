import { Module } from '@nestjs/common';
import { DataModule } from './data.module';
import { MyService } from './data.service';
import { myController } from './data.controller';
import { entityProvider } from './entity.provider';



@Module({
  imports: [DataModule],
  controllers: [myController],
   providers: [MyService],
})
export class AppModule {}
