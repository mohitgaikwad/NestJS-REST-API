import { Controller, Get, Post, Delete, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateItemDto } from './dto/item.dto';
// import { Request, Response } from 'express';
import { Item } from './entity/item.entity';
import { ItemsService } from './items.service';
import { DeleteResult } from 'typeorm';
import { CreateItemDto, UpdateItemDto } from './dto/item.dto';
import { ItemFile } from './item/item.file';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    getItems(): Promise<Item[]> {
        return this.itemsService.getItems();
    }
    
    @Get(':id')
    getItem(@Param('id', ParseIntPipe) id: number): Promise<Item> {
        return this.itemsService.getItem(id);
    }
    
    @Post()
    createItem(@Body() item: CreateItemDto): Promise<any> {
        return this.itemsService.createItem(item);
    }
    
    @Put(':id')
    updateItems(@Param('id', ParseIntPipe) id: number, @Body() item: CreateItemDto): Promise<any> {
        return this.itemsService.updateItem(id, item);
    }
    
    @Delete(':id')
    deleteItem(@Param('id', ParseIntPipe) id: number): Promise<any> {
        return this.itemsService.deleteItem(id);
    }
}




