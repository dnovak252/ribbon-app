import * as sequelize from "sequelize";
import { UserFactory } from "./UserModel";
import { GiftFactory } from "./GiftModel";
import { ChildFactory } from "./ChildModel";
import { WishlistFactory } from "./WishlistModel";
require('dotenv').config();


const DatabaseName = process.env.DB_NAME || "";
const DatabaseUser = process.env.DB_USER || "";
const DatabasePassword = process.env.DB_PASSWORD || "";
const DatabaseHost = process.env.DB_HOST;

export const dbConfig = new sequelize.Sequelize(
  (DatabaseName),
  (DatabaseUser),
  (DatabasePassword),
  {
    port: Number(process.env.DB_PORT) || 3306,
    host: DatabaseHost,
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000, 
    }
  },
);

export const dbUser = UserFactory(dbConfig);
export const dbGift = GiftFactory(dbConfig);
export const dbChild = ChildFactory(dbConfig);
export const dbWishlist = WishlistFactory(dbConfig);

