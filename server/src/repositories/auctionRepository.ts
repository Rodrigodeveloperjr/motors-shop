import { Auction } from "../entities/auctions";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const auctionRepository: Repository<Auction> = AppDataSource.getRepository(Auction);

export { auctionRepository };
