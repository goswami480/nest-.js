import { user } from "./cats.entity";
import { DataSource } from "typeorm";

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const datasource = new DataSource({
        type: 'mysql',
        host: "127.0.0.1",
        port: 3306,
        username: 'root',
        password: 'admin123',
        database: 'my_db',
        connectTimeout: 60 * 60 * 1000,
        entities: [user],
        synchronize: true,
      });
      return datasource.initialize();
    },
  },
];
