

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Item } from './entity/item.entity';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Item) private readonly itemsRepository: Repository<Item>) { }

    async getItem(): Promise<Item> {
        return await this.itemsRepository.find();
    }
    public async getItem(_id: string): Promise< | null> {
        return await (await this.itemsRepository.findOneOrFail(_id)).toResponseObject();
    }

    public async registerItem(itemData: CreateItemDto): Promise<> {
        const { email } = itemData;
        let item = await this.itemRepository.findOne({ where: { email } });
        if (item) {
            throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
        }
        item = this.itemRepository.create(itemData);
        await this.itemRepository.save(item);
        return item.toResponseObject();
    }
    public async updateItem(_id: string, updatedItem: UpdateItemDto): Promise<Item | null> {
        let item = await this.itemRepository.findOne(_id);
        if (!item) {
            throw new HttpException("User doesn't exist", HttpStatus.BAD_REQUEST);
        }

        const { email } = updatedItem;
        item = await this.itemRepository.findOne({ where: { email: email, id: Not(_id) } });
        if (item) {
            throw new HttpException("Email ID already exists", HttpStatus.BAD_REQUEST);
        }


        updateditem.id = _id;
        item = this.itemRepository.create(updateditem);
        return await this.itemRepository.save(item);
    }

    public async deleteItem(_id: string): Promise<DeleteResult> {
        return await this.itemRepository.delete(_id);
    }
}
