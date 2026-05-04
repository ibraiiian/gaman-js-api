import * as UserService from './Services';

// Mengambil list user
export const index = async (ctx: any) => {
  const users = await UserService.getUsers();
  // Gunakan standar native Response
  return Response.json({ data: users, message: "Berhasil mengambil data users" });
};

// Menyimpan user baru
export const store = async (ctx: any) => {
  const body = await ctx.req.json();
  const newUser = await UserService.createUser(body);
  // Gunakan standar native Response dengan status code 201
  return Response.json({ data: newUser, message: "User berhasil ditambahkan" }, { status: 201 });
};