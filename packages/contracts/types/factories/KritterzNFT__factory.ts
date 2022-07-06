/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { KritterzNFT, KritterzNFTInterface } from "../KritterzNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "MintLimitExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    name: "MintSupplyExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongPayment",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "previousBaseTokenURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newBaseTokenURI",
        type: "string",
      },
    ],
    name: "BaseTokenURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IRenderer",
        name: "previousRenderer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IRenderer",
        name: "newRenderer",
        type: "address",
      },
    ],
    name: "RendererUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRICE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROYALTY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseTokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numToBeMinted",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "normalizeOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renderer",
    outputs: [
      {
        internalType: "contract IRenderer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseTokenURI",
        type: "string",
      },
    ],
    name: "setBaseTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRenderer",
        name: "_renderer",
        type: "address",
      },
    ],
    name: "setRenderer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawAllERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040526101f460c0523480156200001757600080fd5b506040518060400160405280601581526020017f53746f6e657920437265656b204b7269747465727a00000000000000000000008152506040518060400160405280600781526020016625a924aa2a22a960c91b81525067016345785d8a000061271083838160029080519060200190620000949291906200014c565b508051620000aa9060039060208401906200014c565b5050600160005550620000bd33620000fa565b608082905260a08190526040517f5daa87a0e9463431830481fd4b6e3403442dfb9a12b9c07597e9f61d50b633c890600090a1505050506200022e565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200015a90620001f2565b90600052602060002090601f0160209004810192826200017e5760008555620001c9565b82601f106200019957805160ff1916838001178555620001c9565b82800160010185558215620001c9579182015b82811115620001c9578251825591602001919060010190620001ac565b50620001d7929150620001db565b5090565b5b80821115620001d75760008155600101620001dc565b600181811c908216806200020757607f821691505b6020821081036200022857634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c051611d316200027a6000396000818161045901526107c901526000818161033b015281816113ae01526113fa0152600081816104ad0152610b780152611d316000f3fe6080604052600436106101cd5760003560e01c8063853828b6116100f7578063a0712d6811610095578063c87b56dd11610064578063c87b56dd1461056e578063d547cfb71461058e578063e985e9c5146105a3578063f2fde38b146105ec57600080fd5b8063a0712d6814610502578063a22cb46514610515578063a2309ff814610535578063b88d4fde1461054e57600080fd5b80638ada6b0f116100d15780638ada6b0f1461047b5780638d859f3e1461049b5780638da5cb5b146104cf57806395d89b41146104ed57600080fd5b8063853828b614610412578063857abbd4146104275780638704a2081461044757600080fd5b806330176e131161016f57806356d3163d1161013e57806356d3163d1461039d5780636352211e146103bd57806370a08231146103dd578063715018a6146103fd57600080fd5b806330176e131461030957806332cb6b0c1461032957806342842e0e1461035d57806352f0832a1461037d57600080fd5b8063095ea7b3116101ab578063095ea7b31461026157806318160ddd1461028357806323b872dd146102aa5780632a55205a146102ca57600080fd5b806301ffc9a7146101d257806306fdde0314610207578063081812fc14610229575b600080fd5b3480156101de57600080fd5b506101f26101ed3660046116cd565b61060c565b60405190151581526020015b60405180910390f35b34801561021357600080fd5b5061021c610637565b6040516101fe9190611742565b34801561023557600080fd5b50610249610244366004611755565b6106c9565b6040516001600160a01b0390911681526020016101fe565b34801561026d57600080fd5b5061028161027c366004611783565b61070d565b005b34801561028f57600080fd5b5060015460005403600019015b6040519081526020016101fe565b3480156102b657600080fd5b506102816102c53660046117af565b6107ad565b3480156102d657600080fd5b506102ea6102e53660046117f0565b6107bd565b604080516001600160a01b0390931683526020830191909152016101fe565b34801561031557600080fd5b50610281610324366004611812565b610803565b34801561033557600080fd5b5061029c7f000000000000000000000000000000000000000000000000000000000000000081565b34801561036957600080fd5b506102816103783660046117af565b610853565b34801561038957600080fd5b506102816103983660046117f0565b61086e565b3480156103a957600080fd5b506102816103b8366004611884565b61089d565b3480156103c957600080fd5b506102496103d8366004611755565b61090e565b3480156103e957600080fd5b5061029c6103f8366004611884565b610919565b34801561040957600080fd5b50610281610962565b34801561041e57600080fd5b50610281610976565b34801561043357600080fd5b50610281610442366004611884565b610a66565b34801561045357600080fd5b5061029c7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048757600080fd5b50600954610249906001600160a01b031681565b3480156104a757600080fd5b5061029c7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104db57600080fd5b506008546001600160a01b0316610249565b3480156104f957600080fd5b5061021c610b62565b610281610510366004611755565b610b71565b34801561052157600080fd5b506102816105303660046118af565b610c29565b34801561054157600080fd5b506000546000190161029c565b34801561055a57600080fd5b50610281610569366004611957565b610cbe565b34801561057a57600080fd5b5061021c610589366004611755565b610d02565b34801561059a57600080fd5b5061021c610d90565b3480156105af57600080fd5b506101f26105be366004611a06565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b3480156105f857600080fd5b50610281610607366004611884565b610e1e565b60006001600160e01b0319821663152a902d60e11b1480610631575061063182610e94565b92915050565b60606002805461064690611a34565b80601f016020809104026020016040519081016040528092919081815260200182805461067290611a34565b80156106bf5780601f10610694576101008083540402835291602001916106bf565b820191906000526020600020905b8154815290600101906020018083116106a257829003601f168201915b5050505050905090565b60006106d482610ee2565b6106f1576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b600061071882610f17565b9050336001600160a01b038216146107515761073481336105be565b610751576040516367d9dca160e11b815260040160405180910390fd5b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6107b8838383610f8d565b505050565b600080306127106107ee7f000000000000000000000000000000000000000000000000000000000000000086611a84565b6107f89190611ab9565b915091509250929050565b61080b611147565b7f19c1a81f34d9a8d208a44017474815e9089aff4b57e461c08509577eea2c3900600a838360405161083f93929190611af6565b60405180910390a16107b8600a838361161e565b6107b883838360405180602001604052806000815250610cbe565b60005b818110156107b85761088b6108868285611bb3565b6111a1565b8061089581611bcb565b915050610871565b6108a5611147565b600954604080516001600160a01b03928316815291831660208301527f10e9b6d73105db46c6a41a698f35efb8e1688178fe274b7b21f0bdc792de3ea5910160405180910390a1600980546001600160a01b0319166001600160a01b0392909216919091179055565b600061063182610f17565b60008160000361093c576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b61096a611147565b61097460006111d1565b565b600047116109ba5760405162461bcd60e51b815260206004820152600c60248201526b5a65726f2062616c616e636560a01b60448201526064015b60405180910390fd5b60006109ce6008546001600160a01b031690565b6001600160a01b03164760405160006040518083038185875af1925050503d8060008114610a18576040519150601f19603f3d011682016040523d82523d6000602084013e610a1d565b606091505b5050905080610a635760405162461bcd60e51b81526020600482015260126024820152714661696c656420746f20776974686472617760701b60448201526064016109b1565b50565b806001600160a01b031663a9059cbb610a876008546001600160a01b031690565b6040516370a0823160e01b81523060048201526001600160a01b038516906370a0823190602401602060405180830381865afa158015610acb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aef9190611be4565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610b3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5e9190611bfd565b5050565b60606003805461064690611a34565b80610b9c817f0000000000000000000000000000000000000000000000000000000000000000611a84565b3414610bbb5760405163788a686f60e01b815260040160405180910390fd5b6004828181610bed336001600160a01b03166000908152600560205260409081902054901c67ffffffffffffffff1690565b610bf79190611bb3565b1115610c1957604051637e0311c360e11b8152600481018390526024016109b1565b610c233385611223565b50505050565b336001600160a01b03831603610c525760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610cc9848484610f8d565b6001600160a01b0383163b15610c2357610ce58484848461123d565b610c23576040516368d2bf6b60e11b815260040160405180910390fd5b6009546060906001600160a01b031615610d875760095460405163c87b56dd60e01b8152600481018490526001600160a01b039091169063c87b56dd90602401600060405180830381865afa158015610d5f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106319190810190611c1a565b61063182611328565b600a8054610d9d90611a34565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc990611a34565b8015610e165780601f10610deb57610100808354040283529160200191610e16565b820191906000526020600020905b815481529060010190602001808311610df957829003601f168201915b505050505081565b610e26611147565b6001600160a01b038116610e8b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016109b1565b610a63816111d1565b60006301ffc9a760e01b6001600160e01b031983161480610ec557506380ac58cd60e01b6001600160e01b03198316145b806106315750506001600160e01b031916635b5e139f60e01b1490565b600081600111158015610ef6575060005482105b8015610631575050600090815260046020526040902054600160e01b161590565b60008180600111610f7457600054811015610f745760008181526004602052604081205490600160e01b82169003610f72575b80600003610f6b575060001901600081815260046020526040902054610f4a565b9392505050565b505b604051636f96cda160e11b815260040160405180910390fd5b6000610f9882610f17565b9050836001600160a01b0316816001600160a01b031614610fcb5760405162a1148160e81b815260040160405180910390fd5b6000828152600660205260408120546001600160a01b0390811691908616331480610ffb5750610ffb86336105be565b8061100e57506001600160a01b03821633145b90508061102e57604051632ce44b5f60e11b815260040160405180910390fd5b8460000361104f57604051633a954ecd60e21b815260040160405180910390fd5b811561107257600084815260066020526040902080546001600160a01b03191690555b6001600160a01b038681166000908152600560209081526040808320805460001901905592881682528282208054600101905586825260049052908120600160e11b4260a01b88178117909155841690036110fd576001840160008181526004602052604081205490036110fb5760005481146110fb5760008181526004602052604090208490555b505b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b505050505050565b6008546001600160a01b031633146109745760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109b1565b6000818152600460205260408120549003610a63576111bf81610f17565b60008281526004602052604090205550565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610b5e8282604051806020016040528060008152506113ab565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290611272903390899088908890600401611c91565b6020604051808303816000875af19250505080156112ad575060408051601f3d908101601f191682019092526112aa91810190611cc4565b60015b61130b573d8080156112db576040519150601f19603f3d011682016040523d82523d6000602084013e6112e0565b606091505b508051600003611303576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b606061133382610ee2565b61135057604051630a14c4b560e41b815260040160405180910390fd5b600061135a61147b565b9050805160000361137a5760405180602001604052806000815250610f6b565b806113848461148a565b604051602001611395929190611ce1565b6040516020818303038152906040529392505050565b817f0000000000000000000000000000000000000000000000000000000000000000816113db6000546000190190565b6113e59190611bb3565b11156114265760405163abdee1e960e01b81527f000000000000000000000000000000000000000000000000000000000000000060048201526024016109b1565b600a60006114348286611ab9565b905060005b818110156114545761144c8784876114d9565b600101611439565b5060006114618387611d10565b111561113f5761113f866114758488611d10565b866114d9565b6060600a805461064690611a34565b604080516080810191829052607f0190826030600a8206018353600a90045b80156114c757600183039250600a81066030018353600a90046114a9565b50819003601f19909101908152919050565b6114e38383611546565b6001600160a01b0383163b156107b8576000548281035b61150d600086838060010194508661123d565b61152a576040516368d2bf6b60e11b815260040160405180910390fd5b8181106114fa57816000541461153f57600080fd5b5050505050565b6000548260000361156957604051622e076360e81b815260040160405180910390fd5b8160000361158a5760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b03831660009081526005602090815260408083208054680100000000000000018702019055838352600490915281204260a01b85176001851460e11b1790555b60405160018201918301906001600160a01b038616906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a48281106115d157500160005550565b82805461162a90611a34565b90600052602060002090601f01602090048101928261164c5760008555611692565b82601f106116655782800160ff19823516178555611692565b82800160010185558215611692579182015b82811115611692578235825591602001919060010190611677565b5061169e9291506116a2565b5090565b5b8082111561169e57600081556001016116a3565b6001600160e01b031981168114610a6357600080fd5b6000602082840312156116df57600080fd5b8135610f6b816116b7565b60005b838110156117055781810151838201526020016116ed565b83811115610c235750506000910152565b6000815180845261172e8160208601602086016116ea565b601f01601f19169290920160200192915050565b602081526000610f6b6020830184611716565b60006020828403121561176757600080fd5b5035919050565b6001600160a01b0381168114610a6357600080fd5b6000806040838503121561179657600080fd5b82356117a18161176e565b946020939093013593505050565b6000806000606084860312156117c457600080fd5b83356117cf8161176e565b925060208401356117df8161176e565b929592945050506040919091013590565b6000806040838503121561180357600080fd5b50508035926020909101359150565b6000806020838503121561182557600080fd5b823567ffffffffffffffff8082111561183d57600080fd5b818501915085601f83011261185157600080fd5b81358181111561186057600080fd5b86602082850101111561187257600080fd5b60209290920196919550909350505050565b60006020828403121561189657600080fd5b8135610f6b8161176e565b8015158114610a6357600080fd5b600080604083850312156118c257600080fd5b82356118cd8161176e565b915060208301356118dd816118a1565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611927576119276118e8565b604052919050565b600067ffffffffffffffff821115611949576119496118e8565b50601f01601f191660200190565b6000806000806080858703121561196d57600080fd5b84356119788161176e565b935060208501356119888161176e565b925060408501359150606085013567ffffffffffffffff8111156119ab57600080fd5b8501601f810187136119bc57600080fd5b80356119cf6119ca8261192f565b6118fe565b8181528860208385010111156119e457600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060408385031215611a1957600080fd5b8235611a248161176e565b915060208301356118dd8161176e565b600181811c90821680611a4857607f821691505b602082108103611a6857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611a9e57611a9e611a6e565b500290565b634e487b7160e01b600052601260045260246000fd5b600082611ac857611ac8611aa3565b500490565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60408152600080855481600182811c915080831680611b1657607f831692505b60208084108203611b3557634e487b7160e01b86526022600452602486fd5b6040880184905260608801828015611b545760018114611b6557611b90565b60ff19871682528282019750611b90565b60008d81526020902060005b87811015611b8a57815484820152908601908401611b71565b83019850505b5050878603818901525050505050611ba9818587611acd565b9695505050505050565b60008219821115611bc657611bc6611a6e565b500190565b600060018201611bdd57611bdd611a6e565b5060010190565b600060208284031215611bf657600080fd5b5051919050565b600060208284031215611c0f57600080fd5b8151610f6b816118a1565b600060208284031215611c2c57600080fd5b815167ffffffffffffffff811115611c4357600080fd5b8201601f81018413611c5457600080fd5b8051611c626119ca8261192f565b818152856020838501011115611c7757600080fd5b611c888260208301602086016116ea565b95945050505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611ba990830184611716565b600060208284031215611cd657600080fd5b8151610f6b816116b7565b60008351611cf38184602088016116ea565b835190830190611d078183602088016116ea565b01949350505050565b600082611d1f57611d1f611aa3565b50069056fea164736f6c634300080d000a";

type KritterzNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KritterzNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KritterzNFT__factory extends ContractFactory {
  constructor(...args: KritterzNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<KritterzNFT> {
    return super.deploy(overrides || {}) as Promise<KritterzNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): KritterzNFT {
    return super.attach(address) as KritterzNFT;
  }
  override connect(signer: Signer): KritterzNFT__factory {
    return super.connect(signer) as KritterzNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KritterzNFTInterface {
    return new utils.Interface(_abi) as KritterzNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KritterzNFT {
    return new Contract(address, _abi, signerOrProvider) as KritterzNFT;
  }
}
