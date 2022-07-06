import KritterzNFTGoerli from "@web3-scaffold/contracts/deploys/goerli/KritterzNFT.json";
import { KritterzNFT__factory } from "@web3-scaffold/contracts/types";
import { useContractRead } from "wagmi";

import { provider, targetChainId } from "./EthereumProviders";

// I would have used `KritterzNFT__factory.connect` to create this, but we may
// not have a provider ready to go. Any interactions with this contract should
// use `kritterzNFTContract.connect(providerOrSigner)` first.

// export const kritterzNFTContract = new Contract(
//   KritterzNFTGoerli.deployedTo,
//   KritterzNFT__factory.abi
// ) as KritterzNFT;

export const kritterzNFTContract = KritterzNFT__factory.connect(
  KritterzNFTGoerli.deployedTo,
  provider({ chainId: targetChainId })
);

export const useKritterzNFTContractRead = (
  readConfig: Omit<
    Parameters<typeof useContractRead>[0],
    "addressOrName" | "contractInterface"
  >
) =>
  useContractRead({
    ...readConfig,
    addressOrName: KritterzNFTGoerli.deployedTo,
    contractInterface: KritterzNFT__factory.abi,
  });
