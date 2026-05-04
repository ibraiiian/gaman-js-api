// src/modules/users/Controllers.ts
import * as UserService from './Services';

// Mengambil list user
export const index = async (ctx: any) => {
  const users = await UserService.getUsers();
  return ctx.json({ data: users, message: "Berhasil mengambil data users" });
};

// Menyimpan user baru
export const store = async (ctx: any) => {
  const body = await ctx.req.json();
  const newUser = await UserService.createUser(body);
  return ctx.json({ data: newUser, message: "User berhasil ditambahkan" }, 201);
};