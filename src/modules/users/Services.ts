// src/modules/users/Services.ts

export const getUsers = async () => {
  // Simulasi fetch data dari database
  return [
    { id: 1, name: "Ibrahim Bahaly", role: "Fullstack Developer", entity: "Ursite" },
    { id: 2, name: "Rayyan", role: "UI/UX Designer", entity: "Universitas Komputer Indonesia" }
  ];
};

export const createUser = async (data: any) => {
  // Simulasi insert data ke database
  return { id: 3, ...data };
};