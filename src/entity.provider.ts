import { DataSource } from "typeorm";
import { user } from "./cats.entity";


export const entityProvider=[{
    provider:user,
    useFactory:(datasouce:DataSource)=>
        datasouce.getRepository(user),
    inject:["DATA_SOURCE"]
}]