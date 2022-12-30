import { bidRepository } from "../../repositories/bidRepository";
import { Bid } from "../../entities/bid.entity";

const listAllBidsService = async (): Promise<Array<Bid>> => {
  const bids = await bidRepository.find({
    relations: ["user", "auction"],
  });

  return bids;
};

export { listAllBidsService };
