import { Injectable,Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { user } from "./cats.entity";

@Injectable()
export class MyService {
    create(createUserDto: user): user | PromiseLike<user> {
        throw new Error("Method not implemented.");
    }
    
  
    constructor(@Inject(user) private readonly userRepository: Repository<user>) {}
   
    async adduser(user:user):Promise<user>{
        return this.userRepository.save(user);
    }
    findAll():Promise<user[]>{
        return this.userRepository.find();
    }
    find(id):Promise<user>{
        return this.userRepository.findOne(id);
    }
    update(id: number, user: user){
        return this.userRepository.save( user);
    }
    delete(id){
        return this.userRepository.delete(id);
    }
}