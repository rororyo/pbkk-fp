import { Body, Controller, Delete, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { getAuthCookie } from 'src/utils/auth-utils/get-auth-cookie';

@Controller('api/cart')
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private readonly jwtService: JwtService,
  ) {}
  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getCartItems(@Req() request:Request) {
    const cookie = getAuthCookie(request);
    const data = await this.jwtService.verifyAsync(cookie);
    const userId = data.id;
    const cartItems = await this.cartService.getCartItems(userId);
    return {
      status: 'success',
      message: 'Cart items fetched successfully',
      data: cartItems,
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('/')
  async postCartItem(@Body('item_id') itemId: number, @Body('quantity') quantity: number, @Req() request:Request) {
    const cookie = getAuthCookie(request);
    const data = await this.jwtService.verifyAsync(cookie);
    const userId = data.id;
    await this.cartService.postCartItem(userId, itemId, quantity);
    return {
      status: 'success',
      message: 'Cart item added successfully',
    }
  }
  @Put('/')
  async updateCartItem(@Body('item_id') itemId: number, @Body('quantity') quantity: number, @Req() request:Request) {
    const cookie = getAuthCookie(request);
    const data = await this.jwtService.verifyAsync(cookie);
    const userId = data.id;
    await this.cartService.updateCartItem(userId, itemId, quantity);
    return {
      status: 'success',
      message: 'Cart item updated successfully',
    }
  }
  @Delete('/')
  async deleteCartItem(@Body('item_id') itemId: number, @Req() request:Request) {
    const cookie = getAuthCookie(request);
    const data = await this.jwtService.verifyAsync(cookie);
    const userId = data.id;
    await this.cartService.deleteCartItem(userId, itemId);
    return {
      status: 'success',
      message: 'Cart item deleted successfully',
    }
  }
}
