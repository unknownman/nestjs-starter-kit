import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*
   * implementing cache
   */
  @UseInterceptors(CacheInterceptor) // automatic cache active
  @CacheKey('custom-key') // define custum cache key name
  @CacheTTL(30) // override TTL from 5 seconds(default) to 30 seconds
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
