import { DataSource } from "typeorm"
import { User } from "./entity/User.ts"

import "reflect-metadata"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "mysql-test-esfe-8ff0.b.aivencloud.com",
    port: 20787,
    username:"avnadmin",
    password:"AVNS_PfxZhqEHsyFEn50ylaO",
    database:"Mydatabase",
    entities:[User],
    logging: true,
    synchronize: true
})
// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap

try {
    
     async function conectarctar() {await AppDataSource.initialize()}
     conectarctar()
    


} catch (error) {
    console.log(error)
}


