import Dexie from "dexie";

export const userDB = new Dexie("userDB");
userDB.version(1).stores({
  users: "++id,username,email,password,colors",
});
