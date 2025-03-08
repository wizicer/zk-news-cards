import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-03-01",
    projects: [
      {
        "name": "Verifiable Multi-Scalar Multiplications (MSMs) in Cryptographic Proof Systems",
        "url": "https://decentralizedthoughts.github.io/2025-02-14-verifiable-MSM/",
        "type": "博客",
        "tags": [
          "Decentralized Thoughts",
          "MSM",
        ],
        "summary": "Decentralized Thoughts在博客{{name}}中讨论了在加密证明系统中验证多标量乘法（MSM）结果的高效方法，该方法通过将计算分解为可批量验证的子计算，显著提高了验证效率。"
      },
      {
        name: "Integer Commitments, Old and New Tools",
        url: "https://eprint.iacr.org/2025/081",
        type: "论文",
        tags: [
          "Iftach Haitner", "Yehuda Lindell",
          "整数承诺",
        ],
        summary:
          "Haitner等人在{{name}}论文中以教程的形式详细介绍了基于RSA的整数承诺及相关协议，并提出了一种新的高效设置协议，用于采样承诺参数。",
      },
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-02",
    projects: [
      {
        "name": "How to Share an NP Statement or Combiners for Zero-Knowledge Proofs",
        "url": "https://eprint.iacr.org/2025/334",
        "type": "论文",
        "tags": [
          "combiner",
          "NPSS",
          "MPC"
        ],
        "summary": "Benny Applebaum和Eliran Kachlon在{{name}}论文中提出了信息论安全的NPSS定义和构造，支持任意t≤n的t-out-of-n秘密共享，并展示了其在零知识证明组合中的应用。"
      },
      {
        "name": "Bulletproofs for R1CS: Bridging the Completeness-Soundness Gap and a ZK Extension",
        "url": "https://eprint.iacr.org/2025/327",
        "type": "论文",
        "tags": [
          "Gil Segev",
          "Coinbase",
          "Bulletproofs",
          "R1CS"
        ],
        "summary": "@coinbase 的 Gil Segev在{{name}}论文中提出了一种扩展的Bulletproofs系统，用于R1CS，旨在弥补完整性和可靠性之间的差距，并增加了诚实验证者零知识特性。（诚实验证者零知识性(HVZK)指的是在验证者严格遵循协议的前提下，证明系统能够确保验证者无法从交互中获取任何关于证明者秘密信息的额外知识。是较弱但实用的特性。）"
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-04",
    projects: [
      {
        "name": "Unearthing the Reality of zkTLS: A Benchmarking and Cryptanalysis Report",
        "url": "https://hackmd.io/@-fI_Eu_rR8qs02aOhOPWNg/HkRyz5OF1g",
        "type": "博客",
        "tags": [
          "Xiang Xie", "Xiao Wang",
          "zkTLS",
          "QuickSilver",
        ],
        "urls": [
            createUrlItem("源代码", "https://github.com/primus-labs/zktls-bench")
        ],
        "summary": "@xxiang_xie 和Xiao Wang分享了关于zkTLS的基准测试和密码分析报告，包括MPC-TLS和Proxy-TLS两种主要方法的性能比较，并指出了 @reclaimprotocol 中的问题，最后展示了Primus的garble-then-prove系统的显著速度优势。"
      },
      {
        "name": "Making Airdrops More Human with ZKEmail",
        "url": "https://x.com/zkemail/status/1896599253117530500",
        "type": "博客",
        "tags": [
          "@zkemail",
          "Airdrops",
          "Email",
        ],
        "summary": "@zkemail 团队分享了如何通过ZKEmail使空投更加人性化的博客{{name}}，讨论了使用ZK技术验证资格并通过邮箱领取代币的方法。并表示他们已经与 @JupiterExchange 展开了合作。"
      },
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-05",
    projects: [
      {
        "name": "Mopro: Comparison of Circom Provers",
        "url": "https://mirror.xyz/privacy-scaling-explorations.eth/GLbuCflH0hu_DncKxiC2No5w3LZJAGw4QaCB-HYD5e0",
        "type": "博客",
        "tags": [
          "Vivian Jeng",
          "Mopro",
          "Circom",
          "Groth16",
        ],
        "summary": "Vivian Jeng在{{name}}博客中分享了Mopro团队对Circom的Groth16证明生成器的比较研究，重点讨论了移动设备上的证明生成速度和性能优化。"
      },
      {
        "name": "zkVM Benchmarking",
        "url": "https://blog.pi2.network/zkvm-benchmarking/",
        "type": "博客",
        "tags": [
          "Pi Squared",
          "zkVM",
        ],
        "summary": "Pi Squared在博客{{name}}中深入探讨了zkVM生态系统，包括Risc Zero、Jolt、zkWasm、Cairo、Nexus、SP1、Lurk七种zkVM的性能比较及其在实现证明协议中的应用。"
      }
    ],
    insights: [
      {
        "title": "如何证明自己是“一个人”",
        "type": "reprint",
        "slogan": "证明自己",
        "url": "https://x.com/sodofi_/status/1896980643780894908",
        "quotes": [
        ],
        "images": [
          "./images/2025/03/05.jpg"
        ],
      }
    ]
  },
  {
    date: "2025-03-06",
    projects: [
      {
        "name": "Intmax: a scalable payment L2 from plasma and validity proofs",
        "url": "https://mirror.xyz/privacy-scaling-explorations.eth/__VLZrfjSScx42E786k-Ba4YptQfv8ujCWY_DuN1k4o",
        "type": "博客",
        "tags": [
          "Pierre",
          "Plasma",
          "L2",
        ],
        "summary": "Pierre在{{name}}博客中探讨了Intmax，一个基于Plasma和有效性证明的可扩展支付L2解决方案，详细介绍了其工作原理、数据可用性机制及如何通过有效性证明防止恶意聚合器。",
        "notes": [
          "Intmax是基于Plasma和数据有效性(DA)证明的可扩展支付L2解决方案。",
          "Plasma是一种通过最小化链上数据并依赖用户挑战机制实现扩展的L2架构。",
          "**防数据扣留**：用 DA 机制和 BLS 签名，防止数据扣留(data withholding)并确保交易数据的完整性。",
          "**防恶意聚合器**：通过有效性证明（如 PCD）防止聚合器提交恶意交易，确保交易和余额的有效性。",
          "**可扩展性**：Intmax 的链上数据量极低，理论 TPS 可达 7000，通过优化数据存储和证明生成实现高效扩展。",
          "**主要算法**：Intmax 使用 Plonky2 生成单一余额证明，支持复杂的证明组合和验证流程。"
        ]
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-07",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "Diamond iO: A Straightforward Construction of Indistinguishability Obfuscation from Lattices",
        "url": "https://eprint.iacr.org/2025/236",
        "type": "论文",
        "tags": [
          "Sora Suegami", "Enrico Bottazzi",
          "iO",
          { zh: "格", en: "Lattice" },
        ],
        "summary": { 
          zh: "Suegami和Bottazzi在{{name}}论文中提出了diamond iO，一种新的基于格的iO构造，通过轻量级矩阵操作替代了昂贵的递归加密过程，显著降低了复杂性。",
          en: "Suegami and Bottazzi proposed diamond iO in {{name}}, a new iO construction based on lattices that replaces expensive recursive encryption with lightweight matrix operations, significantly reducing complexity."
        }
      },
      {
        "name": "The Barrett-Montgomery duality and a new multi-precision modular reduction scheme with only $n^2+1$ digit multiplications",
        "url": "https://hackmd.io/@Ingonyama/Barret-Montgomery",
        "type": "博客",
        "tags": [
          { zh: "模约简", en: "Modular Reduction" },
          "Barrett",
          "Montgomery",
        ],
        "summary": {
          zh: "Yuval Domb在{{name}}博客中探讨了Barrett和Montgomery模约简算法的对偶性，并提出了一种新的多精度模约简方案，仅需$n^2+1$次数字乘法，显著提升了计算效率。",
          en: "Yuval Domb explored the duality of Barrett and Montgomery modular reduction algorithms in {{name}}, proposing a new multi-precision modular reduction scheme that requires only $n^2+1$ digit multiplications, significantly improving computational efficiency."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-08",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "Polynomial Protocols for R1CS String Manipulation",
        "url": "https://www.michaelstraka.com/polyprotocols",
        "type": "博客",
        "tags": [
          "Michael Straka",
          "Circom",
          { zh: "字符串", en: "String" }
        ],
        "summary": { 
          zh: "Michael Straka在{{name}}博客中分享了与Alin Tomescu合作开发的两个多项式协议，用于在R1CS电路中处理字符串连接和子字符串提取，代码实现用在了 @Aptos Keyless电路中。",
          en: "Michael Straka shared polynomial protocols developed with Alin Tomescu for string concatenation and substring extraction in R1CS circuits, code implemented in @Aptos Keyless circuit."
        }
      },
      {
        "name": "Nexus Specification",
        "url": "https://specification.nexus.xyz",
        "type": "新闻",
        "tags": [
          "Nexus",
          { zh: "规范", en: "Specification" },
          "zkVM"
        ],
        "summary": { 
          zh: "@NexusLabs 团队发布了Nexus规范文档，提供了详细的技术规格和指南，从中也可以看到他们在设计zkVM时的考虑，以及详细的约束条件。",
          en: "@NexusLabs team released the Nexus specification document, providing detailed technical specifications and guidelines, also showing their considerations and constraints in designing the zkVM."
        }
      }
    ],
    insights: [
    ]
  },
];

const others = [
];
