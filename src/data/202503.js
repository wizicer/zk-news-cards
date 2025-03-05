import { createUrlItem } from "./util";

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
];

const others = [
];
