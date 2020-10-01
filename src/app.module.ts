import { createConnection } from 'typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item  } from './items/entity/item.entity';
import { ItemsModule } from './items/items.module';
import { LoggingInterceptor } from './service/logging.interceptor';

@Module({
  imports: [ItemsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'item',
    entities: [Item],
    synchronize: true,
  })],
  WinstonModule.forRoot({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
  }),
],
  controllers: [AppController],
  providers: [AppService, 
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule { }