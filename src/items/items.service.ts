

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Item } from './entity/item.entity';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Item) private itemsRepository: Repository<Item>) { }

    async getItem(_id: number): Promise<Item> {
        return await this.itemsRepository.findOne({ id: _id });
    }
    
    async getItems(): Promise<Item[]> {
        return await this.itemsRepository.find({});
    }

    async createItem(item: Item): Promise<InsertResult> {
        return await this.itemsRepository.insert(item);
    }

    async updateItem(_id: number, item: Item): Promise<UpdateResult> {
        return await this.itemsRepository.update(_id, item);
    }

    async deleteItem(_id: number): Promise<DeleteResult> {
        return await this.itemsRepository.delete(_id);
    }
}