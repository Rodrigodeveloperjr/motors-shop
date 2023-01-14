import { auctionRepository } from "../repositories/auction.repository";
import { NotFoundError } from "../errors/notFound.error";
import { Auction } from "../entities/auction.entity";

const listAuctionsService = async (): Promise<ReadonlyArray<Auction>> => {
  const auctions = await auctionRepository.find({
    relations: ["bids"],
  });

  return auctions;
};

const specificAuctionService = async (auction_id: string): Promise<Auction> => {
  const auction = await auctionRepository.findOne({ where: { id: auction_id }, relations: ["product"] });

  if (!auction) {
    throw new NotFoundError("Auction");
  }

  return auction;
};

export { listAuctionsService, specificAuctionService };
