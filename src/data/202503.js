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
  {
    date: "2025-03-09",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "zkVMs benchmarks",
        "url": "https://github.com/yetanotherco/zkvm_benchmarks",
        "type": "开源",
        "tags": [
          "Aligned", "Lambdaclass",
          "zkVM",
          { zh: "基准测试", en: "Benchmarks" },
        ],
        "summary": { 
          zh: "@alignedlayer 和 @class_lambda 团队发布了zkVM基准测试项目，包括在NV RTX A6000 GPU和AMD EPYC 8534P CPU上的Fibonacci和Keccak基准测试结果，包括RISC0，SP1，PICO三种证明系统。",
          en: "@alignedlayer and @class_lambda released zkVM benchmarks, including Fibonacci and Keccak benchmarks on NV RTX A6000 GPU and AMD EPYC 8534P CPU, with RISC0, SP1, PICO proof systems."
        }
      },
      {
        "name": "Circom MPC: TL;DR and Retrospective",
        "url": "https://mirror.xyz/privacy-scaling-explorations.eth/qelA6kAr-CMq-dgmvFUKMMqxf6GoDaP8Cs-5sRWYfO4",
        "type": "博客",
        "tags": [
          "PSE",
          "MPC",
        ],
        "summary": { 
          zh: "PSE 团队分享了Circom MPC项目的回顾，讨论了使用Circom语言开发MPC应用的方法，包括circom-2-arithc编译器的实现和与MP-SPDZ后端的集成。",
          en: "PSE team shared a retrospective of the Circom MPC project, discussing the development of MPC applications using the Circom language, including the implementation of the circom-2-arithc compiler and integration with the MP-SPDZ backend."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-10",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "A gentle introduction to shielded transactions",
        "url": "https://www.redshiftzero.com/post/utxo_privacy/",
        "type": "博客",
        "tags": [
          "Redshift Zero",
          "UTXO"
        ],
        "summary": { 
          zh: "Redshift Zero在博客{{name}}中介绍了隐匿交易(shielded tx)的概念，讨论了如何在ZCash等隐私支付系统中使用，以及如何在比特币类的UTXO协议上实现隐私保护。",
          en: "Redshift Zero introduced shielded transactions in blog {{name}}, discussing how to use them in privacy payment systems like ZCash and how to implement privacy protection in Bitcoin-shaped UTXO-based protocols."
        }
      },
      {
        "name": "Split Prover Zero-Knowledge SNARKs",
        "url": "https://eprint.iacr.org/2025/373",
        "type": "论文",
        "tags": [
          "Sanjam Garg",
          "Groth16",
        ],
        "summary": { 
          zh: "Garg等人在{{name}}论文中提出了分割证明者zkSNARKs，允许Alice将部分zkSNARK计算任务委托给助手Bob，同时确保数据隐私和证明的不可区分性。",
          en: "Garg et al. proposed split prover zkSNARKs in paper {{name}}, allowing Alice to delegate part of the zkSNARK computation tasks to helper Bob, while ensuring data privacy and proof indistinguishability."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-11",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "Exploring GKR: An Interactive Proof Scheme for Reducing Cryptographic Overhead",
        "url": "https://taueflambda.dev/posts/gkr/",
        "type": "博客",
        "tags": [
          "timofey",
          "GKR",
          "Sumcheck",
        ],
        "summary": {
          zh: "timofey在博客{{name}}中探讨了GKR，一类通过多线性扩展实现的交互式证明方案，被作者评价为：通过主要避免承诺来减少开销的一种方案。",
          en: "timofey explored GKR in blog{{name}}, a class of interactive proof schemes based on multilinear extensions, evaluated by the author as a scheme addresses cryptographic overhead differently—by nearly avoiding commitments in the first place."
        }
      },
      {
        "name": "Pairings coming out",
        "url": "https://mirror.xyz/lisaakselrod.eth/5XJlZub-PJUpTXH7_shIEjr_z-R61-X_JfjXxnmIwEM",
        "type": "博客",
        "tags": [
          "Lisa Akselrod",
          "Pairings",
          "Elliptic Curves",
        ],
        "summary": { 
          zh: "Lisa Akselrod在博客{{name}}中深入探讨了配对（Pairings）的数学原理，包括椭圆曲线的基本性质、群定律以及有理函数等概念，最终导到Weil Pairing。",
          en: "Lisa Akselrod explored the mathematical principles of pairings in blog{{name}}, including the basic properties of elliptic curves, group laws, and rational functions, eventually leading to Weil Pairing."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-12",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "The path to secure and efficient zkVMs",
        "url": "https://a16zcrypto.com/posts/article/secure-efficient-zkvms-progress/",
        "type": "博客",
        "tags": [
          "a16z",
          "Justin Thaler",
          "zkVM",
          {zh: "进展", en: "Progress"}
        ],
        "summary": { 
          zh: "@a16zcrypto 的 @SuccinctJT 在博客{{name}}中讨论了zkVM的安全性和性能挑战，提出了实现安全高效zkVM的阶段目标，包括协议正确性、验证器和证明器实现的正式验证。",
          en: "@a16zcrypto's @SuccinctJT discussed the security and performance challenges of zkVMs in blog{{name}}, proposing a phased approach to achieving secure and efficient zkVMs."
        },
        "notes": {
          zh: [
            "作者预见了zkVM发展中的安全发展阶段和性能发展阶段。",
            "安全阶段：1. 协议正确，2. 验证器实现正确，3. 证明器实现正确。",
            "性能阶段：1. 合理的验证成本，2. 至多256k证据及16ms验证时间。",
            "目前为性能阶段1，安全阶段1尚未达到。",
            "虽然近两年有可能达到性能阶段2，但可能是以牺牲安全性为前提的，安全阶段的提升，可能会伴随性能阶段的降低。"
          ],
          en: [
            "The author foresaw the development of zkVMs in terms of security and performance stages.",
            "Security stage: 1. Protocol correctness, 2. Verifier implementation correctness, 3. Prover implementation correctness.",
            "Performance stage: 1. Reasonable verification cost, 2. At most 256k proof and 16ms verification time.",
            "Currently at performance stage 1, security stage 1 has not been reached.",
            "Although it is hope to reach performance stage 2 within two years, it may be at the cost of sacrificing security. A security stage upgrade may come with a performance stage downgrade."
          ]
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-13",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "Announcing DeepProve: zkML to Keep AI in Check",
        "url": "https://www.lagrange.dev/blog/announcing-deepprove-zkml",
        "type": "新闻",
        "tags": [
          "LAGRANGE",
          "zkML",
          "AI",
        ],
        "summary": { 
          zh: "@lagrangedev 发布了DeepProve，一个zkML库，旨在实现可验证的AI推理，声称比以往快158倍，标志着AI与ZK技术的结合。",
          en: "@lagrangedev announced DeepProve, a zkML library, aiming to achieve verifiable AI inference, claiming 158x faster than previous methods, marking the convergence of AI and ZK technology."
        }
      },
      {
        "name": "EZKL Benchmark of DeepProve",
        "url": "https://x.com/CamutoDante/status/1899901570461941881",
        "type": "新闻",
        "tags": [
          "Dante",
          "zkML",
          "AI",
        ],
        "summary": { 
          zh: "@CamutoDante 发布长推表示DeepProve的基准测试结果并没有他们声称的那么快，并给出了具体的测试数据，同时还指出DeepProve的快速可能是由于对正确性和证明大小的妥协。",
          en: "@CamutoDante posted a long thread indicating that DeepProve's benchmark results did not match their claims, providing specific benchmark data, and pointing out that DeepProve's speed may be due to compromises in accuracy and proof size."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-14",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "ZKP System Solidity Gas Estimation Report Executive Summary",
        "url": "https://github.com/wizicer/zkp-solidity-gas",
        "type": "开源",
        "tags": [
          "icerdesign",
          "Solidity",
          "Gas",
        ],
        "summary": {
          zh: "@icerdesign 发布了ZKP系统Solidity Gas估算报告，详细分析了不同ZKP框架（包括SnarkJs, Noir, gnark, halo2等）和模式在Solidity中的Gas消耗，包括部署成本、验证成本等。",
          en: "@icerdesign published a ZKP system Solidity Gas estimation report, analyzing the Gas consumption of different ZKP frameworks (including SnarkJs, Noir, gnark, halo2, etc.) and patterns in Solidity, including deployment costs, verification costs, etc."
        }
      },
      {
        "name": "How to Prove False Statements",
        "url": "https://blog.cryptographyengineering.com/2025/02/04/how-to-prove-false-statements-part-1/",
        "type": "博客",
        "tags": [
          "Matthew Green",
          {zh: "随机预言模型", en: "Random Oracle Model"},
        ],
        "summary": { 
          zh: "Matthew Green在博客{{name}}中讨论了随机预言模型(ROM)及其在密码学中的应用，特别是对Fiat-Shamir变换的实际攻击，强调了理论模型与安全证明之间的复杂关系。",
          en: "Matthew Green discussed the Random Oracle Model (ROM) and its applications in cryptography in blog{{name}}, particularly highlighting the actual attacks on Fiat-Shamir transformations, emphasizing the complexity between theoretical models and security proofs."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-16",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "ETHGlobal Trifecta",
        "url": "https://ethglobal.com/events/trifecta",
        "type": "活动",
        "tags": [
          "ethGlobal",
          {zh: "黑客松", en: "Hackathon"},
          "Trifecta"
        ],
        "summary": { 
          zh: "ethGlobal Trifecta活动将在3月21日开始72小时的线上黑客松，该活动是一个高水平的黑客松，要求是过去ethGlobal的获奖者才能参加。活动将围绕三个主题进行竞争：AI Agents、TEEs 和 ZK。",
          en: "ethGlobal Trifecta will take place from 3/21 as a 72-hour online hackathon, targeting high-level participants who have won past ethGlobal events. The competition will focus on three topics: AI Agents, TEEs, and ZK."
        }
      },
      {
        "name": "zkAML: Zero-knowledge Anti Money Laundering in Smart Contracts with whitelist approach",
        "url": "https://eprint.iacr.org/2025/465",
        "type": "论文",
        "tags": [
          "Donghwan Oh",
          "AML",
          {zh: "韩国银行", en: "Bank of Korea"}
        ],
        "summary": { 
          zh: "Oh等人在论文{{name}}中提出zkAML框架，利用zkSNARK技术实现智能合约中的反洗钱合规，无需暴露敏感信息，该工作是与韩国银行合作完成的。",
          en: "Oh et al. proposed zkAML framework in paper {{name}}, utilizing zkSNARK technology to implement anti-money laundering compliance in smart contracts, without exposing sensitive information, this work is jointly completed with the Bank of Korea."
        }
      },
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-17",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "Still confused by Plonk's permutation?",
        "url": "https://www.cryptologie.net/article/627/still-confused-by-plonks-permutation/",
        "type": "博客",
        "tags": [
          "cryptologie.net",
          "David Wong",
          {zh: "置换论证", en: "Permutation Argument"}
        ],
        "summary": {
          zh: "@cryptodavidw 在博客{{name}}中分享了Plonk的置换参数视觉解释，通过颜色编码和表格展示，帮助理解Plonk协议中如何通过不同cosets和挑战压缩技术实现置换。",
          en: "@cryptodavidw shared a visual explanation of Plonk's permutation argument in blog{{name}}, using color coding and tables to help understand how Plonk protocol achieves permutation through different cosets and challenge compression."
        }
      },
      {
        "name": "Scroll Sepolia's Major Upgrade to zkVM",
        "url": "https://x.com/lispcz/status/1901187824759771356",
        "type": "新闻",
        "tags": [
          "Zhuo Zhang",
          "zkVM",
          "zkEVM",
          "REVM"
        ],
        "summary": {
          zh: "@Scroll_ZKP Sepolia最近进行了重大升级，从zkEVM过渡到zkVM，使用REVM实现EVM兼容性，并将底层框架从Halo2迁移到OpenVM，降低电路复杂度，提高小团队自行部署zkRollup的能力。",
          en: "@Scroll_ZKP Sepolia recently underwent a major upgrade, switching from zkEVM to zkVM, using REVM for EVM compatibility, and migrating the underlying framework from Halo2 to OpenVM, reducing circuit complexity and enhancing the ability of small teams to deploy zkRollup independently."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-19",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "zkEngine: An (NIVC) zkWASM Implementation",
        "url": "https://github.com/ICME-Lab/zkEngine_dev",
        "type": "开源",
        "tags": [
          "ICME-Lab",
          "zkWASM",
          "Nebula",
        ],
        "summary": {
          zh: "ICME-Lab开源了zkEngine，一个基于Nebula证明方案的(NIVC) zkWASM实现，旨在为受限环境提供内存高效和高便携性的本地可验证计算和隐私保护。",
          en: "ICME-Lab released zkEngine, an (NIVC) zkWASM implementation based on Nebula proof system, aiming to provide memory-efficient and portable local verifiable computing and privacy protection for resource-constrained environments."
        }
      },
      {
        "name": "Privacy 2.0: PETs and the Promise of Private Shared State",
        "url": "https://x.com/archetypevc/status/1899869844230623274",
        "type": "博客",
        "tags": [
          "Aadharsh Pannirselvam",
          "archetypevc",
          "PETs",
        ],
        "summary": {
          zh: "@archetypevc 的 Aadharsh Pannirselvam 在博客{{name}}中讨论了隐私2.0时代，包括隐私增强技术（PETs）如TEEs、MPC、FHE和ZK的潜力及潜在问题。",
          en: "Aadharsh Pannirselvam from @archetypevc discussed the privacy 2.0 era in blog{{name}}, including the potential of privacy-enhancing technologies (PETs) such as TEEs, MPC, FHE, and ZK, and the potential issues."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-20",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "zkVM HackerHouse",
        "url": "https://mp.weixin.qq.com/s/yNH87nAUHxQBBFc_ywdB6Q",
        "type": "活动",
        "tags": [
          "Coset",
          "zkVM",
          "HackerHouse",
        ],
        "summary": {
          zh: "Coset与SECBIT Labs将于2025年4月14日至27日在苏州举办zkVM HackerHouse，提供免费住宿，聚焦zkVM与硬件加速技术，欢迎报名参加。",
          en: "Coset and SECBIT Labs will host the zkVM HackerHouse in Suzhou from April 14 to 27, providing free accommodation and focusing on zkVM and hardware acceleration."
        }
      },
      {
        "name": "Kimchi Proof System vs KZG Commitments",
        "url": "https://blockofchain.medium.com/kimchi-proof-system-vs-kzg-commitments-cbd86032fda5",
        "type": "博客",
        "tags": [
          "Alperen Tunçkıran",
          { en: "KZG Commitments", zh: "KZG承诺" },
          "Mina",
        ],
        "summary": {
          zh: "Alperen Tunçkıran在博客{{name}}中比较了Kimchi证明系统与KZG承诺，详细介绍了Kimchi的技术架构、创新点及其在Mina区块链中的应用。",
          en: "Alperen Tunçkıran compared Kimchi proof system with KZG commitments in blog{{name}}, providing a detailed introduction to Kimchi's technical architecture, innovations, and its application in the Mina blockchain."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-03-21",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "SoK: Understanding zk-SNARKs: The Gap Between Research and Practice",
        "url": "https://arxiv.org/abs/2502.02387",
        "type": "论文",
        "tags": [
          "Junkai Liang",
          "Research",
        ],
        "summary": {
          zh: "Junkai Liang等人在{{name}}论文中深入研究了zk-SNARKs，从理论到实践全面分析了研究与实践之间的差距，提出了统一的“主配方”，并对现有zk-SNARKs进行了分类。",
          en: "Junkai Liang, et al. in {{name}}paper delved into zk-SNARKs, providing a comprehensive analysis of the gap between research and practice, proposing a unified 'master recipe', and categorizing existing zk-SNARKs."
        }
      },
      {
        "name": "hash-circuits",
        "url": "https://github.com/bkomuves/hash-circuits",
        "type": "开源",
        "tags": [
          "Balazs Komuves",
          "circom",
          "hash",
        ],
        "summary": {
          zh: "Balazs Komuves发布了hash-circuits开源项目，包含多种流行哈希函数的circom实现，如SHA2、Keccak/SHA3、Blake2、Poseidon2、Griffin和MiMC，并提供了约束数量比较。",
          en: "Balazs Komuves released the hash-circuits open-source project, containing multiple popular hash function circom implementations, such as SHA2, Keccak/SHA3, Blake2, Poseidon2, Griffin, and MiMC, and providing constraint comparison."
        }
      }
    ]
  },
  {
    date: "2025-03-24",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "Transpiling a Halo2 circuit into CCS",
        "url": "https://ethresear.ch/t/transpiling-a-halo2-circuit-into-ccs/21963",
        "type": "博客",
        "tags": [
          "pnyda2",
          "Halo2",
          "CCS",
          "Plonkish",
        ],
        "summary": {
          zh: "pnyda2发布了halo2 ccs+，一个将zcash/halo2电路转换为CCS电路的转译器，并以poseidon hash为例给出了基准测试结果。",
          en: "pnyda2 released halo2 ccs+, a transpiler that converts zcash/halo2 circuits to CCS circuits, and provided a benchmark result with poseidon hash."
        }
      },
      {
        "name": "Zero-Knowledge Proofs",
        "url": "https://vasekrozhon.wordpress.com/2025/03/17/zero-knowledge-proofs/",
        "type": "博客",
        "tags": [
          "Václav Rozhoň",
          { en: "Beginner", zh: "入门" }
        ],
        "summary": {
          zh: "Václav Rozhoň发布了关于零知识证明的入门讲解，有趣的是利用彩色电路讲解零知识证明中的可满足性问题。",
          en: "Václav Rozhoň released an introduction to zero-knowledge proofs, interestingly explaining the satisfiability problem in zero-knowledge proofs using colored circuits."
        }
      }
    ]
  },
  {
    date: "2025-03-25",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "On Extractability of the KZG Family of Polynomial Commitment Schemes",
        "url": "https://eprint.iacr.org/2025/514",
        "type": "论文",
        "tags": [
          "Juraj Belohorec",
          "KZG",
          { en: "Extractability", zh: "提取性" }
        ],
        "summary": {
          zh: "Belohorec等人在{{name}}论文中提出了一个统一框架，用于证明KZG类多项式承诺方案的知识健全性，涵盖单变量和多变量变体。通过概念化Lipmaa等人的证明技术，他们展示了工具和可证伪的完整性假设，允许黑盒提取多变量KZG方案。",
          en: "Belohorec et al. proposed a unified framework in {{name}} for proving the soundness of KZG class polynomial commitment schemes, covering both single and multi-variable variants. By conceptualizing the proof technique of Lipmaa et al., they demonstrated the completeness and soundness of the integrity assumptions, allowing black-box extraction of multi-variable KZG schemes."
        }
      },
      {
        "name": "Benchmarking in-browser P256 ECDSA proving systems",
        "url": "https://blog.hyle.eu/benchmarking-in-browser-p256-ecdsa-proving-systems/",
        "type": "博客",
        "tags": [
          "Hylé",
          "p256",
          "zkVM",
        ],
        "summary": {
          zh: "Hylé团队分享了在浏览器中验证P256 ECDSA签名的证明系统基准测试结果，重点比较了Noir、Circom、Halo2和Cairo的性能和用户体验。",
          en: "Hylé team shared benchmarking results of P256 ECDSA proving systems in the browser, focusing on comparing the performance and user experience of Noir, Circom, Halo2, and Cairo."
        }
      }
    ]
  },
  {
    date: "2025-03-26",
    languages: ['zh', 'en'],
    projects: [
      {
        "name": "ZKarnage: Stress Testing ZK Systems Through Maximum Pain",
        "url": "https://github.com/yourbuddyconner/zkarnage",
        "type": "开源",
        "tags": [
          "Conner Swann",
          { en: "Stress Testing", zh: "压力测试" }
        ],
        "summary": {
          zh: "@yourbuddyconner 开源了ZKarnage项目，旨在通过最差情况攻击，测试Ethproof provers的性能极限。",
          en: "@yourbuddyconner opened source ZKarnage, aiming to test the performance limits of Ethproof provers through worst-case attacks."
        },
        "notes": {
          zh: [
            "构造最差情况(worst case)，迫使EVM加载大型合约来增加计算负担。",
            "使用`EXTCODESIZE`字节码迫使EVM加载合约字节码，增加ZK电路的复杂度。`EXTCODECOPY`也是类似的。",
            "该操作消耗最小的gas（~408 gas/KB），但在ZK电路中非常复杂。",
            "该代码库提供了构造这类最差情况的工具"
          ],
          en: [
            "Construct worst case, forcing EVM to load large contracts to increase proving burden.",
            "Use `EXTCODESIZE` bytecode to force EVM to load contract bytecode, increasing ZK circuit complexity. `EXTCODECOPY` is similar.",
            "This operation consumes the least gas (~408 gas/KB), but is very complex in ZK circuits.",
            "This repo provides tools to construct such worst cases."
          ]
        }
      },
    ]
  },
];

const others = [
];
