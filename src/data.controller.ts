import { Controller,Post,Body,Put,Delete,Param,Get } from "@nestjs/common";
import { MyService } from "./data.service";
import { user } from "./cats.entity";
@Controller('/user')
export class myController{
    constructor(private readonly myService: MyService) {}
    @Post()
  async addUser(@Body() createUserDto: user): Promise<user> {
    return this.myService.create(createUserDto);
  }
    @Get(":id")
    find(@Param("id") id:number){
        return this.myService.find(id);
    }
    @Get()
    findAll(){
        return this.myService.findAll();
    }
    @Put(":id")
    update(@Param("id") id:number ,@Body() user:user){
       
        return this.myService.update(id,user);
    }
   }