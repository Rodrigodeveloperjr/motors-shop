import { auctionRepository } from "../../repositories/auctionRepository";
import { Auction } from "../../entities/auction.entity";

const listAllAuctionsService = async (): Promise<Array<Auction>> => {
  const auctions = await auctionRepository.find({
    relations: ["product", "bids"],
  });

  return auctions;
};

export { listAllAuctionsService };
