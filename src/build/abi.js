const contractAddress = '0xf6ca362cBA8b9a8290a9abed06A25eA219AcfAc5';
const adminAddress = '0x3221a67f25507812a16664f191f030b247d17773';
const abi = {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "fund",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getFunds",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_address",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ],
    "allSourcePaths": {
      "0": "contracts/DappInsurance.sol"
    },
    "ast": {
      "absolutePath": "contracts/DappInsurance.sol",
      "exportedSymbols": {
        "DappInsurance": [
          90
        ]
      },
      "id": 91,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "33:23:0"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "canonicalName": "DappInsurance",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 90,
          "linearizedBaseContracts": [
            90
          ],
          "name": "DappInsurance",
          "nameLocation": "67:13:0",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3,
              "mutability": "mutable",
              "name": "owner",
              "nameLocation": "178:5:0",
              "nodeType": "VariableDeclaration",
              "scope": 90,
              "src": "162:21:0",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "162:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "private"
            },
            {
              "body": {
                "id": 11,
                "nodeType": "Block",
                "src": "211:35:0",
                "statements": [
                  {
                    "expression": {
                      "id": 9,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 6,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3,
                        "src": "221:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 7,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "229:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "229:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "221:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 10,
                    "nodeType": "ExpressionStatement",
                    "src": "221:18:0"
                  }
                ]
              },
              "id": 12,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 4,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "201:2:0"
              },
              "returnParameters": {
                "id": 5,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "211:0:0"
              },
              "scope": 90,
              "src": "190:56:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 25,
                "nodeType": "Block",
                "src": "312:46:0",
                "statements": [
                  {
                    "expression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 21,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "338:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DappInsurance_$90",
                              "typeString": "contract DappInsurance"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_DappInsurance_$90",
                              "typeString": "contract DappInsurance"
                            }
                          ],
                          "id": 20,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "330:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 19,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "330:7:0",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 22,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "330:13:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 23,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "src": "330:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 18,
                    "id": 24,
                    "nodeType": "Return",
                    "src": "323:28:0"
                  }
                ]
              },
              "functionSelector": "4d9b3735",
              "id": 26,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 15,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 14,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 89,
                    "src": "279:9:0"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "279:9:0"
                }
              ],
              "name": "getFunds",
              "nameLocation": "261:8:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 13,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "269:2:0"
              },
              "returnParameters": {
                "id": 18,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 17,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 26,
                    "src": "303:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 16,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "303:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "302:9:0"
              },
              "scope": 90,
              "src": "252:106:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 39,
                "nodeType": "Block",
                "src": "410:78:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 35,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 32,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "428:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 33,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "428:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "id": 34,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28,
                            "src": "441:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "428:20:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4572726f722120596f75206e65656420746f20706179206d6f72652e",
                          "id": 36,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "450:30:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_98f030d7f36525e93e169f682c27889ffd6203ebcac8a231b912046a28610f54",
                            "typeString": "literal_string \"Error! You need to pay more.\""
                          },
                          "value": "Error! You need to pay more."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_98f030d7f36525e93e169f682c27889ffd6203ebcac8a231b912046a28610f54",
                            "typeString": "literal_string \"Error! You need to pay more.\""
                          }
                        ],
                        "id": 31,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "420:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 37,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "420:61:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 38,
                    "nodeType": "ExpressionStatement",
                    "src": "420:61:0"
                  }
                ]
              },
              "functionSelector": "ca1d209d",
              "id": 40,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "fund",
              "nameLocation": "373:4:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 29,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 28,
                    "mutability": "mutable",
                    "name": "_amount",
                    "nameLocation": "386:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 40,
                    "src": "378:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 27,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "378:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "377:17:0"
              },
              "returnParameters": {
                "id": 30,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "410:0:0"
              },
              "scope": 90,
              "src": "364:124:0",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 84,
                "nodeType": "Block",
                "src": "580:222:0",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 56,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 52,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "606:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DappInsurance_$90",
                                    "typeString": "contract DappInsurance"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_DappInsurance_$90",
                                    "typeString": "contract DappInsurance"
                                  }
                                ],
                                "id": 51,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "598:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 50,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "598:7:0",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 53,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "598:13:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 54,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "598:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 55,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "622:1:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "598:25:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4572726f722120546865206173736574206f66207468697320636f6e747261637420697320302e",
                          "id": 57,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "625:41:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_b97b10995b23c5cdec641435ef0238e77d14e7cc18b704e522ae6b519932632d",
                            "typeString": "literal_string \"Error! The asset of this contract is 0.\""
                          },
                          "value": "Error! The asset of this contract is 0."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_b97b10995b23c5cdec641435ef0238e77d14e7cc18b704e522ae6b519932632d",
                            "typeString": "literal_string \"Error! The asset of this contract is 0.\""
                          }
                        ],
                        "id": 49,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "590:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 58,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "590:77:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 59,
                    "nodeType": "ExpressionStatement",
                    "src": "590:77:0"
                  },
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 66,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 60,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "681:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 63,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "699:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DappInsurance_$90",
                                "typeString": "contract DappInsurance"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_DappInsurance_$90",
                                "typeString": "contract DappInsurance"
                              }
                            ],
                            "id": 62,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "691:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 61,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "691:7:0",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 64,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "691:13:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 65,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "src": "691:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "681:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 80,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44,
                            "src": "787:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 77,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "769:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "src": "769:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                            "typeString": "function (uint256)"
                          }
                        },
                        "id": 81,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "769:26:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 82,
                      "nodeType": "ExpressionStatement",
                      "src": "769:26:0"
                    },
                    "id": 83,
                    "nodeType": "IfStatement",
                    "src": "677:118:0",
                    "trueBody": {
                      "expression": {
                        "arguments": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 72,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "740:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DappInsurance_$90",
                                    "typeString": "contract DappInsurance"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_DappInsurance_$90",
                                    "typeString": "contract DappInsurance"
                                  }
                                ],
                                "id": 71,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "732:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 70,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "732:7:0",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 73,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "732:13:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 74,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "src": "732:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 67,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "714:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "src": "714:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                            "typeString": "function (uint256)"
                          }
                        },
                        "id": 75,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "714:40:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 76,
                      "nodeType": "ExpressionStatement",
                      "src": "714:40:0"
                    }
                  }
                ]
              },
              "functionSelector": "f3fef3a3",
              "id": 85,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 47,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 46,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 89,
                    "src": "562:9:0"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "562:9:0"
                }
              ],
              "name": "withdraw",
              "nameLocation": "503:8:0",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 45,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 42,
                    "mutability": "mutable",
                    "name": "_address",
                    "nameLocation": "528:8:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 85,
                    "src": "512:24:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 41,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "512:15:0",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 44,
                    "mutability": "mutable",
                    "name": "_amount",
                    "nameLocation": "546:7:0",
                    "nodeType": "VariableDeclaration",
                    "scope": 85,
                    "src": "538:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 43,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "538:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "511:43:0"
              },
              "returnParameters": {
                "id": 48,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "580:0:0"
              },
              "scope": 90,
              "src": "494:308:0",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 88,
                "nodeType": "Block",
                "src": "827:17:0",
                "statements": [
                  {
                    "id": 87,
                    "nodeType": "PlaceholderStatement",
                    "src": "836:1:0"
                  }
                ]
              },
              "id": 89,
              "name": "onlyOwner",
              "nameLocation": "817:9:0",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 86,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "827:0:0"
              },
              "src": "808:36:0",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 91,
          "src": "58:788:0",
          "usedErrors": []
        }
      ],
      "src": "33:813:0"
    },
    "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610238806100326000396000f3fe6080604052600436106100345760003560e01c80634d9b373514610039578063ca1d209d14610059578063f3fef3a31461006e575b600080fd5b34801561004557600080fd5b504760405190815260200160405180910390f35b61006c6100673660046101b1565b610081565b005b61006c61007c3660046101ca565b6100d9565b803410156100d65760405162461bcd60e51b815260206004820152601c60248201527f4572726f722120596f75206e65656420746f20706179206d6f72652e0000000060448201526064015b60405180910390fd5b50565b600047116101395760405162461bcd60e51b815260206004820152602760248201527f4572726f722120546865206173736574206f66207468697320636f6e747261636044820152663a1034b990181760c91b60648201526084016100cd565b4781111561017b576040516001600160a01b038316904780156108fc02916000818181858888f19350505050158015610176573d6000803e3d6000fd5b505050565b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610176573d6000803e3d6000fd5b6000602082840312156101c357600080fd5b5035919050565b600080604083850312156101dd57600080fd5b82356001600160a01b03811681146101f457600080fd5b94602093909301359350505056fea26469706673582212201b299124fc866abbab8051ce6a936106f435dcabf01ca05b8580bf0da4896c5d64736f6c634300080d0033",
    "bytecodeSha1": "50a27c40849e49a876644e4d7ce2fceb65282087",
    "compiler": {
      "evm_version": "istanbul",
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "version": "0.8.13+commit.abaa5c0e"
    },
    "contractName": "DappInsurance",
    "coverageMap": {
      "branches": {
        "0": {
          "DappInsurance.fund": {
            "5": [
              428,
              448,
              true
            ]
          },
          "DappInsurance.withdraw": {
            "6": [
              598,
              623,
              true
            ],
            "7": [
              681,
              712,
              false
            ]
          }
        }
      },
      "statements": {
        "0": {
          "DappInsurance.fund": {
            "1": [
              420,
              481
            ]
          },
          "DappInsurance.getFunds": {
            "0": [
              323,
              351
            ]
          },
          "DappInsurance.withdraw": {
            "2": [
              590,
              667
            ],
            "3": [
              714,
              754
            ],
            "4": [
              769,
              795
            ]
          }
        }
      }
    },
    "dependencies": [],
    "deployedBytecode": "6080604052600436106100345760003560e01c80634d9b373514610039578063ca1d209d14610059578063f3fef3a31461006e575b600080fd5b34801561004557600080fd5b504760405190815260200160405180910390f35b61006c6100673660046101b1565b610081565b005b61006c61007c3660046101ca565b6100d9565b803410156100d65760405162461bcd60e51b815260206004820152601c60248201527f4572726f722120596f75206e65656420746f20706179206d6f72652e0000000060448201526064015b60405180910390fd5b50565b600047116101395760405162461bcd60e51b815260206004820152602760248201527f4572726f722120546865206173736574206f66207468697320636f6e747261636044820152663a1034b990181760c91b60648201526084016100cd565b4781111561017b576040516001600160a01b038316904780156108fc02916000818181858888f19350505050158015610176573d6000803e3d6000fd5b505050565b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610176573d6000803e3d6000fd5b6000602082840312156101c357600080fd5b5035919050565b600080604083850312156101dd57600080fd5b82356001600160a01b03811681146101f457600080fd5b94602093909301359350505056fea26469706673582212201b299124fc866abbab8051ce6a936106f435dcabf01ca05b8580bf0da4896c5d64736f6c634300080d0033",
    "deployedSourceMap": "58:788:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;252:106;;;;;;;;;;-1:-1:-1;330:21:0::1;252:106:::0;;160:25:1;;;148:2;133:18;252:106:0;;;;;;;364:124;;;;;;:::i;:::-;;:::i;:::-;;494:308;;;;;;:::i;:::-;;:::i;364:124::-;441:7;428:9;:20;;420:61;;;;-1:-1:-1;;;420:61:0;;950:2:1;420:61:0;;;932:21:1;989:2;969:18;;;962:30;1028;1008:18;;;1001:58;1076:18;;420:61:0;;;;;;;;;364:124;:::o;494:308::-;622:1:::1;598:21;:25;590:77;;;::::0;-1:-1:-1;;;590:77:0;;1307:2:1;590:77:0::1;::::0;::::1;1289:21:1::0;1346:2;1326:18;;;1319:30;1385:34;1365:18;;;1358:62;-1:-1:-1;;;1436:18:1;;;1429:37;1483:19;;590:77:0::1;1105:403:1::0;590:77:0::1;691:21;681:7;:31;677:118;;;714:40;::::0;-1:-1:-1;;;;;714:17:0;::::1;::::0;732:21:::1;714:40:::0;::::1;;;::::0;::::1;::::0;;;732:21;714:17;:40;::::1;;;;;;;;;;;;;::::0;::::1;;;;;;494:308:::0;;:::o;677:118::-:1;769:26;::::0;-1:-1:-1;;;;;769:17:0;::::1;::::0;:26;::::1;;;::::0;787:7;;769:26:::1;::::0;;;787:7;769:17;:26;::::1;;;;;;;;;;;;;::::0;::::1;;;;196:180:1::0;255:6;308:2;296:9;287:7;283:23;279:32;276:52;;;324:1;321;314:12;276:52;-1:-1:-1;347:23:1;;196:180;-1:-1:-1;196:180:1:o;381:362::-;457:6;465;518:2;506:9;497:7;493:23;489:32;486:52;;;534:1;531;524:12;486:52;560:23;;-1:-1:-1;;;;;612:31:1;;602:42;;592:70;;658:1;655;648:12;592:70;681:5;733:2;718:18;;;;705:32;;-1:-1:-1;;;381:362:1:o",
    "language": "Solidity",
    "natspec": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "offset": [
      58,
      846
    ],
    "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x34 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4D9B3735 EQ PUSH2 0x39 JUMPI DUP1 PUSH4 0xCA1D209D EQ PUSH2 0x59 JUMPI DUP1 PUSH4 0xF3FEF3A3 EQ PUSH2 0x6E JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x45 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP SELFBALANCE PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x6C PUSH2 0x67 CALLDATASIZE PUSH1 0x4 PUSH2 0x1B1 JUMP JUMPDEST PUSH2 0x81 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x6C PUSH2 0x7C CALLDATASIZE PUSH1 0x4 PUSH2 0x1CA JUMP JUMPDEST PUSH2 0xD9 JUMP JUMPDEST DUP1 CALLVALUE LT ISZERO PUSH2 0xD6 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1C PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4572726F722120596F75206E65656420746F20706179206D6F72652E00000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 SELFBALANCE GT PUSH2 0x139 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x27 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4572726F722120546865206173736574206F66207468697320636F6E74726163 PUSH1 0x44 DUP3 ADD MSTORE PUSH7 0x3A1034B9901817 PUSH1 0xC9 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0xCD JUMP JUMPDEST SELFBALANCE DUP2 GT ISZERO PUSH2 0x17B JUMPI PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 SELFBALANCE DUP1 ISZERO PUSH2 0x8FC MUL SWAP2 PUSH1 0x0 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x176 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 DUP3 ISZERO PUSH2 0x8FC MUL SWAP1 DUP4 SWAP1 PUSH1 0x0 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x176 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1C3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1DD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0x1F4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP5 PUSH1 0x20 SWAP4 SWAP1 SWAP4 ADD CALLDATALOAD SWAP4 POP POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SHL 0x29 SWAP2 0x24 0xFC DUP7 PUSH11 0xBBAB8051CE6A936106F435 0xDC 0xAB CREATE SHR LOG0 JUMPDEST DUP6 DUP1 0xBF 0xD LOG4 DUP10 PUSH13 0x5D64736F6C634300080D003300 ",
    "pcMap": {
      "0": {
        "offset": [
          58,
          846
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x80"
      },
      "2": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x40"
      },
      "4": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "MSTORE",
        "path": "0"
      },
      "5": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x4"
      },
      "7": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "CALLDATASIZE",
        "path": "0"
      },
      "8": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "LT",
        "path": "0"
      },
      "9": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x34"
      },
      "12": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "JUMPI",
        "path": "0"
      },
      "13": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x0"
      },
      "15": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "CALLDATALOAD",
        "path": "0"
      },
      "16": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0xE0"
      },
      "18": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "SHR",
        "path": "0"
      },
      "19": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "DUP1",
        "path": "0"
      },
      "20": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH4",
        "path": "0",
        "value": "0x4D9B3735"
      },
      "25": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "EQ",
        "path": "0"
      },
      "26": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x39"
      },
      "29": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "JUMPI",
        "path": "0"
      },
      "30": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "DUP1",
        "path": "0"
      },
      "31": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH4",
        "path": "0",
        "value": "0xCA1D209D"
      },
      "36": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "EQ",
        "path": "0"
      },
      "37": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x59"
      },
      "40": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "JUMPI",
        "path": "0"
      },
      "41": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "DUP1",
        "path": "0"
      },
      "42": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH4",
        "path": "0",
        "value": "0xF3FEF3A3"
      },
      "47": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "EQ",
        "path": "0"
      },
      "48": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x6E"
      },
      "51": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "JUMPI",
        "path": "0"
      },
      "52": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "53": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x0"
      },
      "55": {
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "DUP1",
        "path": "0"
      },
      "56": {
        "first_revert": true,
        "fn": null,
        "offset": [
          58,
          846
        ],
        "op": "REVERT",
        "path": "0"
      },
      "57": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "58": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "CALLVALUE",
        "path": "0"
      },
      "59": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "DUP1",
        "path": "0"
      },
      "60": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "ISZERO",
        "path": "0"
      },
      "61": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x45"
      },
      "64": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "JUMPI",
        "path": "0"
      },
      "65": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x0"
      },
      "67": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "DUP1",
        "path": "0"
      },
      "68": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "REVERT",
        "path": "0"
      },
      "69": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "70": {
        "op": "POP"
      },
      "71": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          330,
          351
        ],
        "op": "SELFBALANCE",
        "path": "0",
        "statement": 0
      },
      "72": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x40"
      },
      "74": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "MLOAD",
        "path": "0"
      },
      "75": {
        "op": "SWAP1"
      },
      "76": {
        "op": "DUP2"
      },
      "77": {
        "op": "MSTORE"
      },
      "78": {
        "op": "PUSH1",
        "value": "0x20"
      },
      "80": {
        "op": "ADD"
      },
      "81": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x40"
      },
      "83": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "MLOAD",
        "path": "0"
      },
      "84": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "DUP1",
        "path": "0"
      },
      "85": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "SWAP2",
        "path": "0"
      },
      "86": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "SUB",
        "path": "0"
      },
      "87": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "SWAP1",
        "path": "0"
      },
      "88": {
        "fn": "DappInsurance.getFunds",
        "offset": [
          252,
          358
        ],
        "op": "RETURN",
        "path": "0"
      },
      "89": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "90": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x6C"
      },
      "93": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x67"
      },
      "96": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "CALLDATASIZE",
        "path": "0"
      },
      "97": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x4"
      },
      "99": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x1B1"
      },
      "102": {
        "fn": "DappInsurance.fund",
        "jump": "i",
        "offset": [
          364,
          488
        ],
        "op": "JUMP",
        "path": "0"
      },
      "103": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "104": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x81"
      },
      "107": {
        "fn": "DappInsurance.fund",
        "jump": "i",
        "offset": [
          364,
          488
        ],
        "op": "JUMP",
        "path": "0"
      },
      "108": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "109": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "STOP",
        "path": "0"
      },
      "110": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "111": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x6C"
      },
      "114": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x7C"
      },
      "117": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "CALLDATASIZE",
        "path": "0"
      },
      "118": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x4"
      },
      "120": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x1CA"
      },
      "123": {
        "fn": "DappInsurance.withdraw",
        "jump": "i",
        "offset": [
          494,
          802
        ],
        "op": "JUMP",
        "path": "0"
      },
      "124": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "125": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0xD9"
      },
      "128": {
        "fn": "DappInsurance.withdraw",
        "jump": "i",
        "offset": [
          494,
          802
        ],
        "op": "JUMP",
        "path": "0"
      },
      "129": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "130": {
        "fn": "DappInsurance.fund",
        "offset": [
          441,
          448
        ],
        "op": "DUP1",
        "path": "0",
        "statement": 1
      },
      "131": {
        "fn": "DappInsurance.fund",
        "offset": [
          428,
          437
        ],
        "op": "CALLVALUE",
        "path": "0"
      },
      "132": {
        "fn": "DappInsurance.fund",
        "offset": [
          428,
          448
        ],
        "op": "LT",
        "path": "0"
      },
      "133": {
        "branch": 5,
        "fn": "DappInsurance.fund",
        "offset": [
          428,
          448
        ],
        "op": "ISZERO",
        "path": "0"
      },
      "134": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0xD6"
      },
      "137": {
        "branch": 5,
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "JUMPI",
        "path": "0"
      },
      "138": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x40"
      },
      "140": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "MLOAD",
        "path": "0"
      },
      "141": {
        "op": "PUSH3",
        "value": "0x461BCD"
      },
      "145": {
        "op": "PUSH1",
        "value": "0xE5"
      },
      "147": {
        "op": "SHL"
      },
      "148": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "DUP2",
        "path": "0"
      },
      "149": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "MSTORE",
        "path": "0"
      },
      "150": {
        "op": "PUSH1",
        "value": "0x20"
      },
      "152": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x4"
      },
      "154": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "DUP3",
        "path": "0"
      },
      "155": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "ADD",
        "path": "0"
      },
      "156": {
        "op": "MSTORE"
      },
      "157": {
        "op": "PUSH1",
        "value": "0x1C"
      },
      "159": {
        "op": "PUSH1",
        "value": "0x24"
      },
      "161": {
        "op": "DUP3"
      },
      "162": {
        "op": "ADD"
      },
      "163": {
        "op": "MSTORE"
      },
      "164": {
        "op": "PUSH32",
        "value": "0x4572726F722120596F75206E65656420746F20706179206D6F72652E00000000"
      },
      "197": {
        "op": "PUSH1",
        "value": "0x44"
      },
      "199": {
        "op": "DUP3"
      },
      "200": {
        "op": "ADD"
      },
      "201": {
        "op": "MSTORE"
      },
      "202": {
        "op": "PUSH1",
        "value": "0x64"
      },
      "204": {
        "op": "ADD"
      },
      "205": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "206": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x40"
      },
      "208": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "MLOAD",
        "path": "0"
      },
      "209": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "DUP1",
        "path": "0"
      },
      "210": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "SWAP2",
        "path": "0"
      },
      "211": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "SUB",
        "path": "0"
      },
      "212": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "SWAP1",
        "path": "0"
      },
      "213": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "REVERT",
        "optimizer_revert": true,
        "path": "0"
      },
      "214": {
        "fn": "DappInsurance.fund",
        "offset": [
          420,
          481
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "215": {
        "fn": "DappInsurance.fund",
        "offset": [
          364,
          488
        ],
        "op": "POP",
        "path": "0"
      },
      "216": {
        "fn": "DappInsurance.fund",
        "jump": "o",
        "offset": [
          364,
          488
        ],
        "op": "JUMP",
        "path": "0"
      },
      "217": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "218": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          622,
          623
        ],
        "op": "PUSH1",
        "path": "0",
        "statement": 2,
        "value": "0x0"
      },
      "220": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          598,
          619
        ],
        "op": "SELFBALANCE",
        "path": "0"
      },
      "221": {
        "branch": 6,
        "fn": "DappInsurance.withdraw",
        "offset": [
          598,
          623
        ],
        "op": "GT",
        "path": "0"
      },
      "222": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x139"
      },
      "225": {
        "branch": 6,
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "JUMPI",
        "path": "0"
      },
      "226": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x40"
      },
      "228": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "MLOAD",
        "path": "0"
      },
      "229": {
        "op": "PUSH3",
        "value": "0x461BCD"
      },
      "233": {
        "op": "PUSH1",
        "value": "0xE5"
      },
      "235": {
        "op": "SHL"
      },
      "236": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "DUP2",
        "path": "0"
      },
      "237": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "MSTORE",
        "path": "0"
      },
      "238": {
        "op": "PUSH1",
        "value": "0x20"
      },
      "240": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x4"
      },
      "242": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "DUP3",
        "path": "0"
      },
      "243": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "ADD",
        "path": "0"
      },
      "244": {
        "op": "MSTORE"
      },
      "245": {
        "op": "PUSH1",
        "value": "0x27"
      },
      "247": {
        "op": "PUSH1",
        "value": "0x24"
      },
      "249": {
        "op": "DUP3"
      },
      "250": {
        "op": "ADD"
      },
      "251": {
        "op": "MSTORE"
      },
      "252": {
        "op": "PUSH32",
        "value": "0x4572726F722120546865206173736574206F66207468697320636F6E74726163"
      },
      "285": {
        "op": "PUSH1",
        "value": "0x44"
      },
      "287": {
        "op": "DUP3"
      },
      "288": {
        "op": "ADD"
      },
      "289": {
        "op": "MSTORE"
      },
      "290": {
        "op": "PUSH7",
        "value": "0x3A1034B9901817"
      },
      "298": {
        "op": "PUSH1",
        "value": "0xC9"
      },
      "300": {
        "op": "SHL"
      },
      "301": {
        "op": "PUSH1",
        "value": "0x64"
      },
      "303": {
        "op": "DUP3"
      },
      "304": {
        "op": "ADD"
      },
      "305": {
        "op": "MSTORE"
      },
      "306": {
        "op": "PUSH1",
        "value": "0x84"
      },
      "308": {
        "op": "ADD"
      },
      "309": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0xCD"
      },
      "312": {
        "op": "JUMP"
      },
      "313": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          590,
          667
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "314": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          691,
          712
        ],
        "op": "SELFBALANCE",
        "path": "0"
      },
      "315": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          681,
          688
        ],
        "op": "DUP2",
        "path": "0"
      },
      "316": {
        "branch": 7,
        "fn": "DappInsurance.withdraw",
        "offset": [
          681,
          712
        ],
        "op": "GT",
        "path": "0"
      },
      "317": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          677,
          795
        ],
        "op": "ISZERO",
        "path": "0"
      },
      "318": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          677,
          795
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x17B"
      },
      "321": {
        "branch": 7,
        "fn": "DappInsurance.withdraw",
        "offset": [
          677,
          795
        ],
        "op": "JUMPI",
        "path": "0"
      },
      "322": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "PUSH1",
        "path": "0",
        "statement": 3,
        "value": "0x40"
      },
      "324": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "MLOAD",
        "path": "0"
      },
      "325": {
        "op": "PUSH1",
        "value": "0x1"
      },
      "327": {
        "op": "PUSH1",
        "value": "0x1"
      },
      "329": {
        "op": "PUSH1",
        "value": "0xA0"
      },
      "331": {
        "op": "SHL"
      },
      "332": {
        "op": "SUB"
      },
      "333": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          731
        ],
        "op": "DUP4",
        "path": "0"
      },
      "334": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          731
        ],
        "op": "AND",
        "path": "0"
      },
      "335": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          731
        ],
        "op": "SWAP1",
        "path": "0"
      },
      "336": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          732,
          753
        ],
        "op": "SELFBALANCE",
        "path": "0"
      },
      "337": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "DUP1",
        "path": "0"
      },
      "338": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "ISZERO",
        "path": "0"
      },
      "339": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x8FC"
      },
      "342": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "MUL",
        "path": "0"
      },
      "343": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "SWAP2",
        "path": "0"
      },
      "344": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x0"
      },
      "346": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "DUP2",
        "path": "0"
      },
      "347": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "DUP2",
        "path": "0"
      },
      "348": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "DUP2",
        "path": "0"
      },
      "349": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          732,
          753
        ],
        "op": "DUP6",
        "path": "0"
      },
      "350": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          731
        ],
        "op": "DUP9",
        "path": "0"
      },
      "351": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "DUP9",
        "path": "0"
      },
      "352": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "CALL",
        "path": "0"
      },
      "353": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "SWAP4",
        "path": "0"
      },
      "354": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "POP",
        "path": "0"
      },
      "355": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "POP",
        "path": "0"
      },
      "356": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "POP",
        "path": "0"
      },
      "357": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "POP",
        "path": "0"
      },
      "358": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "ISZERO",
        "path": "0"
      },
      "359": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "DUP1",
        "path": "0"
      },
      "360": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "ISZERO",
        "path": "0"
      },
      "361": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x176"
      },
      "364": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "JUMPI",
        "path": "0"
      },
      "365": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "RETURNDATASIZE",
        "path": "0"
      },
      "366": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x0"
      },
      "368": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "DUP1",
        "path": "0"
      },
      "369": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "RETURNDATACOPY",
        "path": "0"
      },
      "370": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "RETURNDATASIZE",
        "path": "0"
      },
      "371": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x0"
      },
      "373": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "REVERT",
        "path": "0"
      },
      "374": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "375": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          714,
          754
        ],
        "op": "POP",
        "path": "0"
      },
      "376": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "POP",
        "path": "0"
      },
      "377": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          494,
          802
        ],
        "op": "POP",
        "path": "0"
      },
      "378": {
        "fn": "DappInsurance.withdraw",
        "jump": "o",
        "offset": [
          494,
          802
        ],
        "op": "JUMP",
        "path": "0"
      },
      "379": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          677,
          795
        ],
        "op": "JUMPDEST",
        "path": "0"
      },
      "380": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "PUSH1",
        "path": "0",
        "statement": 4,
        "value": "0x40"
      },
      "382": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "MLOAD",
        "path": "0"
      },
      "383": {
        "op": "PUSH1",
        "value": "0x1"
      },
      "385": {
        "op": "PUSH1",
        "value": "0x1"
      },
      "387": {
        "op": "PUSH1",
        "value": "0xA0"
      },
      "389": {
        "op": "SHL"
      },
      "390": {
        "op": "SUB"
      },
      "391": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          786
        ],
        "op": "DUP4",
        "path": "0"
      },
      "392": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          786
        ],
        "op": "AND",
        "path": "0"
      },
      "393": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          786
        ],
        "op": "SWAP1",
        "path": "0"
      },
      "394": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "DUP3",
        "path": "0"
      },
      "395": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "ISZERO",
        "path": "0"
      },
      "396": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x8FC"
      },
      "399": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "MUL",
        "path": "0"
      },
      "400": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "SWAP1",
        "path": "0"
      },
      "401": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          787,
          794
        ],
        "op": "DUP4",
        "path": "0"
      },
      "402": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          787,
          794
        ],
        "op": "SWAP1",
        "path": "0"
      },
      "403": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x0"
      },
      "405": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "DUP2",
        "path": "0"
      },
      "406": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "DUP2",
        "path": "0"
      },
      "407": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "DUP2",
        "path": "0"
      },
      "408": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          787,
          794
        ],
        "op": "DUP6",
        "path": "0"
      },
      "409": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          786
        ],
        "op": "DUP9",
        "path": "0"
      },
      "410": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "DUP9",
        "path": "0"
      },
      "411": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "CALL",
        "path": "0"
      },
      "412": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "SWAP4",
        "path": "0"
      },
      "413": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "POP",
        "path": "0"
      },
      "414": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "POP",
        "path": "0"
      },
      "415": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "POP",
        "path": "0"
      },
      "416": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "POP",
        "path": "0"
      },
      "417": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "ISZERO",
        "path": "0"
      },
      "418": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "DUP1",
        "path": "0"
      },
      "419": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "ISZERO",
        "path": "0"
      },
      "420": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "PUSH2",
        "path": "0",
        "value": "0x176"
      },
      "423": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "JUMPI",
        "path": "0"
      },
      "424": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "RETURNDATASIZE",
        "path": "0"
      },
      "425": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x0"
      },
      "427": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "DUP1",
        "path": "0"
      },
      "428": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "RETURNDATACOPY",
        "path": "0"
      },
      "429": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "RETURNDATASIZE",
        "path": "0"
      },
      "430": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "PUSH1",
        "path": "0",
        "value": "0x0"
      },
      "432": {
        "fn": "DappInsurance.withdraw",
        "offset": [
          769,
          795
        ],
        "op": "REVERT",
        "path": "0"
      },
      "433": {
        "op": "JUMPDEST"
      },
      "434": {
        "op": "PUSH1",
        "value": "0x0"
      },
      "436": {
        "op": "PUSH1",
        "value": "0x20"
      },
      "438": {
        "op": "DUP3"
      },
      "439": {
        "op": "DUP5"
      },
      "440": {
        "op": "SUB"
      },
      "441": {
        "op": "SLT"
      },
      "442": {
        "op": "ISZERO"
      },
      "443": {
        "op": "PUSH2",
        "value": "0x1C3"
      },
      "446": {
        "op": "JUMPI"
      },
      "447": {
        "op": "PUSH1",
        "value": "0x0"
      },
      "449": {
        "op": "DUP1"
      },
      "450": {
        "op": "REVERT"
      },
      "451": {
        "op": "JUMPDEST"
      },
      "452": {
        "op": "POP"
      },
      "453": {
        "op": "CALLDATALOAD"
      },
      "454": {
        "op": "SWAP2"
      },
      "455": {
        "op": "SWAP1"
      },
      "456": {
        "op": "POP"
      },
      "457": {
        "jump": "o",
        "op": "JUMP"
      },
      "458": {
        "op": "JUMPDEST"
      },
      "459": {
        "op": "PUSH1",
        "value": "0x0"
      },
      "461": {
        "op": "DUP1"
      },
      "462": {
        "op": "PUSH1",
        "value": "0x40"
      },
      "464": {
        "op": "DUP4"
      },
      "465": {
        "op": "DUP6"
      },
      "466": {
        "op": "SUB"
      },
      "467": {
        "op": "SLT"
      },
      "468": {
        "op": "ISZERO"
      },
      "469": {
        "op": "PUSH2",
        "value": "0x1DD"
      },
      "472": {
        "op": "JUMPI"
      },
      "473": {
        "op": "PUSH1",
        "value": "0x0"
      },
      "475": {
        "op": "DUP1"
      },
      "476": {
        "op": "REVERT"
      },
      "477": {
        "op": "JUMPDEST"
      },
      "478": {
        "op": "DUP3"
      },
      "479": {
        "op": "CALLDATALOAD"
      },
      "480": {
        "op": "PUSH1",
        "value": "0x1"
      },
      "482": {
        "op": "PUSH1",
        "value": "0x1"
      },
      "484": {
        "op": "PUSH1",
        "value": "0xA0"
      },
      "486": {
        "op": "SHL"
      },
      "487": {
        "op": "SUB"
      },
      "488": {
        "op": "DUP2"
      },
      "489": {
        "op": "AND"
      },
      "490": {
        "op": "DUP2"
      },
      "491": {
        "op": "EQ"
      },
      "492": {
        "op": "PUSH2",
        "value": "0x1F4"
      },
      "495": {
        "op": "JUMPI"
      },
      "496": {
        "op": "PUSH1",
        "value": "0x0"
      },
      "498": {
        "op": "DUP1"
      },
      "499": {
        "op": "REVERT"
      },
      "500": {
        "op": "JUMPDEST"
      },
      "501": {
        "op": "SWAP5"
      },
      "502": {
        "op": "PUSH1",
        "value": "0x20"
      },
      "504": {
        "op": "SWAP4"
      },
      "505": {
        "op": "SWAP1"
      },
      "506": {
        "op": "SWAP4"
      },
      "507": {
        "op": "ADD"
      },
      "508": {
        "op": "CALLDATALOAD"
      },
      "509": {
        "op": "SWAP4"
      },
      "510": {
        "op": "POP"
      },
      "511": {
        "op": "POP"
      },
      "512": {
        "op": "POP"
      },
      "513": {
        "jump": "o",
        "op": "JUMP"
      }
    },
    "sha1": "77ec0551b05a4293ff26779235b75fbcdea1a4f7",
    "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\ncontract DappInsurance {\n    // NOTE: Every transaction happened on this contract is denoted in WEI\n    address private owner;\n\n    constructor() public {\n        owner = msg.sender;\n    }\n\n    function getFunds() public onlyOwner view returns (uint256) { \n        return address(this).balance;\n    }\n\n    function fund(uint256 _amount) public payable {\n        require(msg.value >= _amount, \"Error! You need to pay more.\");\n    }\n\n    function withdraw(address payable _address, uint256 _amount) public onlyOwner payable {\n        require(address(this).balance > 0, \"Error! The asset of this contract is 0.\");\n        if (_amount > address(this).balance) _address.transfer(address(this).balance);\n        else _address.transfer(_amount);\n    }\n\n    modifier onlyOwner {\n       _;\n    }\n}",
    "sourceMap": "58:788:0:-:0;;;190:56;;;;;;;;;-1:-1:-1;221:5:0;:18;;-1:-1:-1;;;;;;221:18:0;229:10;221:18;;;58:788;;;;;;",
    "sourcePath": "contracts/DappInsurance.sol",
    "type": "contract"
  }
export { adminAddress, contractAddress, abi };