import { KritterzNFT, Transfer } from "../generated/KritterzNFT/KritterzNFT";
import { Token } from "../generated/schema";

export function handleTransfer(event: Transfer): void {
  const contract = KritterzNFT.bind(event.address);

  const token = new Token(event.params.tokenId.toString());
  token.owner = event.params.to;
  token.tokenURI = contract.tokenURI(event.params.tokenId);
  token.save();
}
