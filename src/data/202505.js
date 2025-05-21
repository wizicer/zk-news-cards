import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-05-01",
    projects: [
      {
        "name": "Exploring KZG Variants for Univariate Polynomials",
        "url": "https://blog.zksecurity.xyz/posts/kzg-1/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "KZG",
          "PCS",
        ],
        "summary": {
          zh: "@zksecurityXYZ 在博客{{name}}中探讨了KZG多项式承诺方案的变体，包括其基本构造和批处理技术，以及如何在zkSNARKs中应用这些技术以提高效率。",
          en: "@zksecurityXYZ explored variants of the KZG polynomial commitment scheme in blog{{name}}, including its basic construction and batch processing techniques, and how to apply these techniques in zkSNARKs to improve efficiency."
        }
      },
      {
        "name": "Episode 359: Lattice-Based Cryptography and Zero-Knowledge Systems",
        "url": "https://zeroknowledge.fm/podcast/359/",
        "type": "视频",
        "tags": [
          "Zero Knowledge Podcast",
          {zh: "格", en: "Lattice"},
        ],
        "summary": {
          zh: "ZK Podcast第359集邀请了IBM Research的研究科学家Vadim Lyubashevsky，讨论了基于格的密码学在零知识系统中的作用及其发展。",
          en: "ZK Podcast episode 359 invited IBM Research researcher Vadim Lyubashevsky to discuss the role and development of lattice-based cryptography in zero-knowledge systems."
        }
      },
    ],
  },
  {
    date: "2025-05-02",
    projects: [
      {
        "name": "Google Wallet Age & Identity Verifications",
        "url": "https://blog.google/products/google-pay/google-wallet-age-identity-verifications/",
        "type": "新闻",
        "tags": [
          "Google Wallet",
          "Digital Identity"
        ],
        "summary": {
          zh: "Google Wallet 更新，引入ZKP技术，支持英国和美国更多州的居民安全便捷地验证年龄和身份，同时扩展至50个国家。",
          en: "Google Wallet updates, introducing ZKP technology to support secure and convenient age and identity verification for residents of more UK and US states, expanding to 50 countries."
        }
      },
      {
        "name": "A New Era for Web3: Introducing Aztec Public Testnet",
        "url": "https://aztec.network/blog/a-new-era-for-web3-introducing-aztec-public-testnet",
        "type": "新闻",
        "tags": [
          "Aztec Network",
          "Noir",
          {zh: "测试网", en: "Testnet"}
        ],
        "summary": {
          zh: "@aztecnetwork 在{{name}}博客中介绍了其新推出的公共测试网，强调了PLONK证明系统和Noir编程语言在实现可编程隐私方面的突破，以及如何支持开发者构建完全隐私保护的应用程序。",
          en: "@aztecnetwork introduced its new public testnet in blog{{name}}, highlighting the breakthroughs of PLONK proof systems and Noir programming language in achieving programmable privacy, and how to support developers to build fully privacy-protected applications."
        }
      },
      {
        "name": "Folding Schemes: Why they matter and how they are not employed in the best way possible (Part 1)",
        "url": "https://hackmd.io/@srinathsetty/S1biKMlxxg",
        "type": "博客",
        "tags": [
          "srinathsetty",
          "Folding Schemes",
          "NeutronNova",
        ],
        "summary": {
          zh: "@srinathtv 在博客{{name}}中讨论了折叠方案的重要性及其在实际应用中的性能问题，特别强调了NeutronNova和Neo折叠方案的优越性。",
          en: "@srinathtv discussed the importance of folding schemes and their performance issues in practical applications in blog{{name}}, particularly highlighting the superiority of NeutronNova and Neo folding schemes."
        },
        "notes": {
          zh: [
            "折叠方案通过消除证明者工作中的明显部分来降低证明成本。",
            "递归证明组合变得 _实用且高效_。",
            "实现细节（尤其是内存检查和MSM）决定了性能。",
            "流行的椭圆曲线库经常错过优化机会，导致性能不佳。"
          ],
          en: [
            "Folding reduces prover's cost by eliminating significant parts of the prover's work.",
            "Recursive proof composition becomes _practical and efficient_.",
            "Implementation details—especially memory checking and MSM—make or break performance.",
            "Popular elliptic curve libraries often miss optimization opportunities, leaving performance on the table."
          ]
        }
      }
    ],
  },
  {
    date: "2025-05-03",
    projects: [
      {
        "name": "Trusted Compute Units: A Framework for Chained Verifiable Computations",
        "url": "https://arxiv.org/abs/2504.15717",
        "type": "论文",
        "tags": [
          "Fernando Castillo",
          "TEEs",
          "zkVMs",
        ],
        "summary": {
          zh: "Castillo等人在{{name}}论文中提出了Trusted Compute Unit (TCU)框架，通过整合zkVM和TEE实现跨技术可验证计算组合，允许去中心化应用（dApp）将计算任务卸载至TCU并获取正确性证明，同时保障数据隐私与输出完整性。",
          en: "Castillo et al. proposed the Trusted Compute Unit (TCU) framework in their paper{{name}}, integrating zkVMs and TEEs to enable cross-technology verifiable computation composition, allowing decentralized applications (dApps) to offload computation tasks to TCU and obtain correctness proofs while ensuring data privacy and output integrity."
        }
      },
      {
        "name": "Ligerito: A Small and Concretely Fast Polynomial Commitment Scheme",
        "url": "https://angeris.github.io/papers/ligerito.pdf",
        "type": "论文",
        "tags": [
          "Andrija Novakovic",
          "PCS",
        ],
        "summary": {
          zh: "Novakovic等人在{{name}}论文中提出了Ligerito，一种高效的多项式承诺与内积方案，支持单变量/多线性多项式，证明大小优化至$\log(N)^2/\log\log(N)$，并在消费级硬件（如M1 MacBook Pro）上实现快速证明生成（2^24项多项式仅需1.3秒）。",
          en: "Novakovic et al. proposed Ligerito, a small and concretely fast polynomial commitment scheme supporting univariate/multilinear polynomials, with proof size optimized to $\log(N)^2/\log\log(N)$ and fast proof generation (2^24-degree polynomial in 1.3 seconds) on consumer-grade hardware (e.g., M1 MacBook Pro)."
        }
      }
    ],
  },
  {
    date: "2025-05-04",
    projects: [
      {
        "name": "Barrett Tighter Bound",
        "url": "https://blog.zksecurity.xyz/posts/barrett-tighter-bound/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "Barrett reduction",
        ],
        "summary": {
          zh: "@zksecurityXYZ 在{{name}}博客中讨论了Barrett reduction算法的误差界限可以比传统假设的更紧，特别是在密码学中使用的模数（如NIST曲线）上，商近似误差最多为1。这一改进消除了实践中第二次减法的需要，使RustCrypto p256在标量乘法中实现了14%的性能提升。",
          en: "@zksecurityXYZ discussed that the error bound of Barrett reduction algorithm can be tighter than the traditional assumption, especially on moduli used in cryptography (e.g., NIST curves), with the quotient approximation error being at most 1. This improvement eliminates the need for the second subtraction in practice, resulting in a 14% performance boost in scalar multiplication for RustCrypto p256."
        }
      },
      {
        "name": "FICS and FACS: Fast IOPPs and Accumulation via Code-Switching",
        "url": "https://eprint.iacr.org/2025/737",
        "type": "论文",
        "tags": [
          "Anubhav Baweja",
          "IOPP",
          "accumulation schemes",
        ],
        "summary": {
          zh: "Baweja等人在{{name}}论文中提出了FICS和FACS两种方案，旨在提高基于IOP的简洁论证的效率。FICS减少了验证者查询复杂度，FACS实现了线性证明者时间，两者均支持包括系统LDPC码和张量码在内的线性时间可编码码类。",
          en: "Baweja et al. proposed FICS and FACS in their paper{{name}}, aiming to improve the efficiency of succinct arguments based on IOPs. FICS reduces the verifier query complexity, and FACS achieves linear prover time, both supporting linear time encodable code classes including systematic LDPC codes and tensor codes."
        }
      }
    ],
  },
  {
    date: "2025-05-05",
    projects: [
      {
        "name": "Simplifying the L1",
        "url": "https://vitalik.eth.limo/general/2025/05/03/simplel1.html",
        "type": "博客",
        "tags": [
          "vitalik.eth",
          "Ethereum",
          "RISC-V",
        ],
        "summary": {
          zh: "@VitalikButerin 在{{name}}博客中讨论了简化以太坊L1的愿景，包括共识层和执行层的简化策略，以及如何通过共享协议组件减少复杂性。",
          en: "@VitalikButerin discussed the vision of simplifying the Ethereum L1 in the{{name}} blog, including simplification strategies for the consensus layer and execution layer, and how to reduce complexity through shared protocol components."
        }
      },
      {
        "name": "Post Mortem May 2, 2025",
        "url": "https://solana.com/news/post-mortem-may-2-2025",
        "type": "漏洞",
        "tags": [
          "Solana",
          "ZK",
          "ElGamal",
        ],
        "summary": {
          zh: "@solana 基金会报告了ZK ElGamal Proof程序中的一个潜在漏洞，允许构建任意证明。已发布补丁并由安全公司审查，目前无已知利用。",
          en: "@solana reported a potential vulnerability in the ZK ElGamal Proof program, allowing the construction of arbitrary proofs. A patch has been released and reviewed by a security company, with no known exploits currently."
        }
      }
    ],
  },
  {
    date: "2025-05-06",
    projects: [
      {
        "name": "Audit of the Rust p256 Crate",
        "url": "https://reports.zksecurity.xyz/reports/near-p256/",
        "type": "博客",
        "tags": [
          "zkSecurity",
          {zh: "审计", en: "Audit"},
          "ECDSA"
        ],
        "summary": {
          zh: "@zksecurityXYZ 对Rust p256 crate进行了安全评估，未发现重大问题，代码库经过充分测试且架构良好。评估范围包括椭圆曲线操作、ECDSA签名验证和字段算术。本审计报告可以作为p256曲线的学习参考资料。",
          en: "@zksecurityXYZ conducted a security assessment of the Rust p256 crate, finding no major issues, with the codebase being well-tested and architecturally sound. The assessment covered elliptic curve operations, ECDSA signature verification, and field arithmetic. This audit report can serve as a learning reference for p256 curves."
        },
        "notes": {
          zh: 
            [
              "P-256优化：利用a=-3特性加速计算",
              "ECDSA安全：必须用确定性nonce（RFC6979）",
              "性能关键：预计算16个点提升签名速度",
              "重要漏洞：随机数生成可能产生非法值",
              "优化技巧：删除多余运算可提速16%",
            ],
          en: [
            "P-256 optimization: Utilize the a=-3 property to accelerate calculations",
            "ECDSA security: Must use a deterministic nonce (RFC6979)",
            "Performance key: Precomputing 16 points improves signature speed",
            "Important vulnerability: Random number generation may produce invalid values",
            "Optimization tip: Removing redundant operations can speed up by 16%",
          ]
        }
      }
    ]
  },
  {
    date: "2025-05-07",
    projects: [
      {
        "name": "Comparing Ligerito and WHIR",
        "url": "https://nmohnblatt.github.io/ligerito-and-whir/",
        "type": "博客",
        "tags": [
          "nmohnblatt",
          "Ligerito",
          "WHIR",
        ],
        "summary": {
          zh: "nmohnblatt在博客{{name}}中比较了Ligerito和WHIR两种多项式承诺方案，讨论了它们在递归结构、Sumcheck约束和代码使用上的相似性与差异。",
          en: "nmohnblatt compares Ligerito and WHIR in the blog{{name}}, discussing their similarities and differences in recursive structures, Sumcheck constraints, and code usage.",
        },
        "notes": {
          zh: [
            "WHIR仅支持RS码，验证简洁；Ligerito支持任意线性码，泛用性强",
            "WHIR利用可折叠性优化，Ligerito采用码切换技术",
            "WHIR验证效率更高，Ligerito证明生成更快",
            "WHIR可能生成更小证明，Ligerito兼容性更好",
            "选择依据：验证效率选WHIR，灵活性选Ligerito",
            "Blaze是两者的混合方案",
          ],
          en: [
            "WHIR supports only RS codes, with concise verification; Ligerito supports arbitrary linear codes, with broader applicability.",
            "WHIR utilizes foldable properties, while Ligerito employs code switching technology.",
            "WHIR has higher verification efficiency, while Ligerito generates proofs faster.",
            "WHIR may produce smaller proofs, while Ligerito has better compatibility.",
            "choose WHIR for verification efficiency, Ligerito for flexibility.",
            "Blaze is a hybrid solution of both.",
          ]
        }
      }
    ]
  },
  {
    date: "2025-05-08",
    projects: [
      {
        "name": "Lattice-based signature aggregation",
        "url": "https://ethresear.ch/t/lattice-based-signature-aggregation/22282",
        "type": "论文",
        "tags": [
          "David Nevado",
          { en: "Lattice-based", zh: "格基" },
          { en: "Signature Aggregation", zh: "签名聚合" },
        ],
        "summary": {
          zh: "David Nevado等人在{{name}}论文中探讨了格基签名聚合技术，提出了一种在后量子时代替代BLS签名的方法，重点分析了Falcon签名的高效聚合及其验证性能。",
          en: "David Nevado et al. explore lattice-based signature aggregation techniques in the paper {{name}}, proposing a method to replace BLS signatures in the post-quantum era, with a focus on the efficient aggregation and verification performance of Falcon signatures.",
        },
        "notes": {
          zh: [
            "BLS签名在量子计算时代不安全，需后量子替代方案",
            "LaBRADOR是格基方案，可聚合Falcon签名（抗量子）",
            "10k签名聚合结果：74KB证明，5.95秒生成，2.65秒验证",
            "验证瓶颈：90%时间在串行步骤simple_reduce",
          "对比哈希基方案（如STARKs）：验证快(106ms)但证明大(1.7MB)",
          "LaBRADOR优势：小证明体积；劣势：验证慢于哈希方案",
            "未来方向：优化并行验证或结合委托证明技术"
          ],
          en: [
            "BLS signatures are insecure in the quantum computing era, requiring post-quantum alternatives.",
            "LaBRADOR is a lattice-based scheme that can aggregate Falcon signatures (quantum-resistant).",
            "10k signature aggregation results: 74KB proof, 5.95 seconds generation, 2.65 seconds verification.",
            "Verification bottleneck: 90% time spent on serial step simple_reduce.",
          "Compared to hash-based schemes (e.g., STARKs): verification is fast (106ms) but proofs are large (1.7MB).",
          "Advantages of LaBRADOR: small proof size; disadvantages: slower verification than hash schemes.",
          "Future directions: optimize parallel verification or combine with delegated proof techniques."
          ]
        }
      }
    ]
  },
  {
    date: "2025-05-09",
    projects: [
      {
        "name": "RISC Zero will generate ZK proofs for @MagicNewton",
        "url": "https://x.com/RiscZero/status/1920231237966311545",
        "type": "新闻",
        "tags": [
          "RISC0",
          "TEE",
        ],
        "summary": {
          zh: "@RiscZero 宣布将为 @MagicNewton 平台生成ZK证明，该平台通过可验证的AI代理改善加密用户体验。每个代理在TEE中运行，RISC Zero生成证明并上链，以供审计。",
          en: "@RiscZero will generate ZK proofs for @MagicNewton, a platform that improves crypto user experience through verifiable AI agents. Each agent runs in a TEE, and RISC Zero generates proofs and posts them onchain for audit."
        }
      },
      {
        "name": "Private Dating App Built with NoirLang and TACEO's coSNARKS",
        "url": "https://x.com/0xteddav/status/1920013742609232081",
        "type": "新闻",
        "tags": [
          "@0xteddav",
          "Noir",
          "coSNARKS",
        ],
        "summary": {
          zh: "@0xteddav 发布了一款独特的私人约会应用，通过隐私的匹配机制，仅在匹配成功时互相知晓，采用 @NoirLang 和 @TACEO_IO 的coSNARKS技术构建。",
          en: "@0xteddav released a unique private dating app that uses privacy-based matching mechanisms, only revealing matches when successful, built using @NoirLang and @TACEO_IO's coSNARKS technology."
        }
      }
    ]
  },
  {
    date: "2025-05-10",
    projects: [
      {
        "name": "HydraProofs: Optimally Computing All Proofs in a Vector Commitment",
        "url": "https://eprint.iacr.org/2025/813",
        "type": "论文",
        "tags": [
          "Christodoulos Pappas",
          {zh: "向量承诺", en: "Vector Commitments"},
          "GKR",
        ],
        "summary": {
          zh: "Pappas等人在{{name}}论文中提出了HydraProofs，首个能在O(N)时间内为大小为N的向量生成所有 opening 证明的向量承诺方案，并直接兼容于zkSNARKs家族，显著优化了证明者时间。",
          en: "Pappas et al. proposed HydraProofs in their paper{{name}}, the first vector commitment scheme that can generate all opening proofs for a vector of size N in O(N) time, and is directly compatible with zkSNARKs families, significantly improving prover time."
        },
        "notes": {
          zh: [
            "HydraProofs 实现 O(N) 时间生成全部 opening 证明",
            "直接兼容多项式编码的 zkSNARKs，无需电路中重建",
            "通过分段与折叠技术将 HyperEval 降至线性时间",
            "结合 GKR 实现多用户输入的有效验证",
            "在可验证秘密共享中，生成证明比秘密分发者计算更快",
            "支持联邦学习中的鲁棒聚合验证，性能开销低"
          ],
          en: [
            "HydraProofs generates all opening proofs in O(N) time",
            "Directly compatible with zkSNARKs using multilinear encodings",
            "Uses partitioning and folding to reduce HyperEval to linear time",
            "Supports efficient multi-user verification when combined with GKR",
            "In verifiable secret sharing, proving is faster than the dealer's computation",
            "Enables robust aggregation verification in federated learning with low overhead"
          ]
        }
      }
    ]
  },
  {
    date: "2025-05-11",
    projects: [
      {
        "name": "Quantum Punks",
        "url": "https://quantumpunks.org/",
        "type": "信息",
        "tags": [
          "Nicola Greco",
          {zh: "量子", en: "Quantum"},
        ],
        "summary": {
          zh: "Quantum Punks团队分享了他们对量子密码学的愿景，探讨了如何利用量子物理构建更安全的系统和独特的加密方法，以及量子密码学在保护数字权利方面的潜力。",
          en: "Quantum Punks team shares their vision of quantum cryptography, exploring how quantum physics can build more secure systems and unique cryptographic methods, and the potential of quantum cryptography in protecting digital rights."
        }
      },
      {
        "name": "The QDay Prize",
        "url": "https://www.qdayprize.org/",
        "type": "活动",
        "tags": [
          "Project Eleven (P11)",
          {zh: "量子", en: "Quantum"},
          "ECC",
        ],
        "summary": {
          zh: "Project Eleven (P11)主办的The QDay Prize竞赛将于**2026年**4月5日截止，旨在挑战使用Shor算法在量子计算机上破解最大ECC密钥，奖金为1比特币。",
          en: "Project Eleven (P11) is hosting the The QDay Prize competition, which will end on April 5, **2026**, aiming to challenge the use of Shor's algorithm on quantum computers to break the largest ECC keys, with a prize of 1 Bitcoin."
        }
      }
    ]
  },
  {
    date: "2025-05-14",
    projects: [
      {
        "name": "Valida ISA Spec, version 1.0: A zk-Optimized Instruction Set Architecture",
        "url": "https://arxiv.org/abs/2505.08114",
        "type": "论文",
        "tags": [
          "Morgan Thomas",
          "zkVM",
          "ISA",
        ],
        "summary": {
          zh: "Thomas等人在{{name}}论文中讲解了Valida指令集架构，专为zkVM实现设计，旨在优化快速高效的执行证明。",
          en: "Thomas et al. explained the Valida instruction set architecture in their paper{{name}}, designed for zkVM implementation, aiming to optimize fast and efficient proof execution."
        },
        "notes": {
          zh: [
            "专为zkVM设计的指令集架构（ISA），优化零知识证明执行效率",
            "无通用寄存器，直接通过栈偏移访问RAM，减少指令数量",
            "模块化设计，基础版本由指定芯片组构成",
            "哈佛架构，32位小端序，仅含FP和PC两个专用寄存器",
            "通过输入/输出带与外部交互，适合区块链可验证计算场景",
            "相比RISC-V，显著降低SNARK证明开销，提升性能"
          ],
          en: [
            "Instruction Set Architecture (ISA) optimized for zkVMs to enhance ZK proof efficiency",
            "No general-purpose registers; directly accesses RAM via stack offsets to reduce instruction count",
            "Modular design; base version consists of specified chipset components",
            "Harvard architecture, 32-bit little-endian, with only FP and PC as special-purpose registers",
            "Interacts externally via read-only input and write-only output tapes, ideal for blockchain verifiable computation",
            "Compared to RISC-V, significantly reduces SNARK proving overhead and improves performance"
          ]
        }
      }
    ]
  },
  {
    date: "2025-05-15",
    projects: [
      {
        "name": "The Lies Our Provers Tell Us",
        "url": "https://www.kobi.one/The-Lies-Our-Provers-Tell-Us-1f32d692802180358ae6c14fd9d09127",
        "type": "博客",
        "tags": [
          "Kobi Gurkan",
          {zh: "软件供应链", en: "Software Supply Chain"},
        ],
        "summary": {
          zh: "Kobi Gurkan在{{name}}博客中讨论了ZK证明者在软件供应链中的特定问题，强调了随着数据本地化和仅共享证明的趋势，供应链安全问题日益重要。",
          en: "Kobi Gurkan discusses specific issues in the software supply chain for ZK provers, emphasizing the increasing importance of supply chain security with the trend towards data localization and proof sharing."
        },
        "notes": {
          zh: [
            "ZK证明的隐私安全依赖可复现构建，但供应链复杂且易被篡改",
            "开源审计不足，需简化信任模型并聚焦关键环节（如构建过程）",
            "桌面程序可复现性较好，iOS因封闭生态最难验证",
            "改进方案：公开构建系统、标准化构建环境、支持验证分发",
            "TEE等技术可降低信任需求，但依赖可复现构建",
            "行业趋势：企业正推动端到端验证，需加强全链路安全性"
          ],
          en: [
            "ZK proof privacy relies on reproducible builds, but supply chains are complex and vulnerable",
            "Open-source audits are insufficient; need simplified trust models focusing on critical steps (e.g. builds)",
            "Desktop apps are more reproducible; iOS is hardest due to closed ecosystem",
            "Solutions: Open build systems, standardized environments, verifiable distribution",
            "TEE reduces trust requirements but depends on reproducible builds",
            "Industry trend: Enterprises push end-to-end verification, requiring stronger supply chain security"
          ]
        }
      }
    ]
  },
  {
    date: "2025-05-16",
    projects: [
      {
        "name": "vlayer Launches Mainnet: The Next Step in Making Smart Contracts Useful for Billions",
        "url": "https://www.vlayer.xyz/blog/vlayer-launches-mainnet-the-next-step-in-making-smart-contracts-useful-for-billions",
        "type": "新闻",
        "tags": [
          "vlayer",
          "EVM-compatible",
          "Mainnet"
        ],
        "summary": {
          zh: "vlayer宣布主网上线，旨在通过Time Travel、Teleport、Email Proofs和Web Proofs等创新功能，使智能合约对全球数十亿用户变得实用和相关。",
          en: "vlayer announced the launch of its mainnet, aiming to make smart contracts useful and relevant to billions of users through innovative features like Time Travel, Teleport, Email Proofs, and Web Proofs."
        }
      },
      {
        "name": "Fermah x Reclaim",
        "url": "https://www.fermah.xyz/blog-posts/fermah-x-reclaim",
        "type": "新闻",
        "tags": [
          "Fermah",
          "Reclaim",
          "zkTLS",
        ],
        "summary": {
          zh: "Fermah与Reclaim合作推出私有zkTLS及保密证明委托（CPD），显著提升零知识证明效率，优化Web3隐私应用性能。",
          en: "Fermah and Reclaim have launched the private zkTLS and Confidential Proof Delegation (CPD), significantly enhancing the efficiency of zero-knowledge proofs and optimizing the performance of Web3 privacy applications."
        }
      }
    ]
  },
  {
    date: "2025-05-19",
    projects: [
      {
        "name": "Verifying SP1 circuit determinism with Picus: A collaboration between Veridise and Succinct",
        "url": "https://medium.com/veridise/verifying-sp1-circuit-determinism-with-picus-a-collaboration-between-veridise-and-succinct-985c7a6dd9b5",
        "type": "博客",
        "tags": [
          "Veridise",
          "SP1",
          "Picus",
          {en: "Formal Verification", zh: "形式化验证"},
        ],
        "summary": {
          zh: "Veridise分享了与Succinct合作使用Picus工具验证SP1电路确定性的初步成果，包括成功验证多个SP1电路及识别改进点，强调了确定性在ZK电路安全中的重要性。",
          en: "Veridise shares the initial results of their collaboration with Succinct using the Picus tool to verify the determinism of SP1 circuits, including successful verification of multiple SP1 circuits and identification of improvement points, emphasizing the importance of determinism in ZK circuit security."
        },
        "notes": {
          zh: [
            "Veridise与Succinct合作，用Picus工具验证SP1电路的确定性",
            "确定性验证可排除ZK电路中因逻辑约束不足导致的漏洞",
            "开发Plonky3到LLZK的转换工具，成功验证11项基础操作",
            "当前流程存在模块化约束、输入输出标注等局限性",
            "Succinct计划优化Plonky3框架以支持形式化验证",
            "目标是将形式化验证扩展至SP1所有电路，成为开发常规环节"
          ],
          en: [
            "Veridise and Succinct collaborated to verify the determinism of SP1 circuits using the Picus tool",
            "Determinism verification can eliminate vulnerabilities in ZK circuits due to insufficient logical constraints",
            "Developed a tool to convert Plonky3 to LLZK, successfully verified 11 basic operations",
            "Current process has limitations such as modular constraints and input/output labeling",
            "Succinct plans to optimize the Plonky3 framework to support formal verification",
            "Targeting to extend formal verification to all SP1 circuits, becoming a regular development step"
          ]
        }
      }
    ]
  },
  {
    date: "2025-05-20",
    projects: [
      {
        "name": "Real-time proving is almost here",
        "url": "https://x.com/RiscZero/status/1924536174707691710",
        "type": "新闻",
        "tags": [
          "RISCZero",
          {en: "real-time proving", zh: "实时证明"},
        ],
        "summary": {
          zh: "@RiscZero 宣布将实现以太坊区块证明时间缩短至12秒以内，且构建集群的成本可低至12万美元，目前最好的性能是20秒。",
          en: "@RiscZero announced that it will reduce the Ethereum block proof time to less than 12 seconds, and the cost of building a cluster can be as low as 120,000 USD, with the best performance currently being 20 seconds."
        }
      },
      {
        "name": "Broly – Trust-minimized Bitcoin inscriptions directly from your Starknet wallet",
        "url": "https://www.starknet.io/blog/broly-trust-minimized-bitcoin-inscriptions-directly-from-your-starknet-wallet/",
        "type": "博客",
        "tags": [
          "StarkWare",
          "Bitcoin",
          "Starknet",
        ],
        "summary": {
          zh: "@StarkWareLtd Exploration团队在博客{{name}}中介绍了Broly，一个允许用户通过Starknet无需拥有BTC或直接与比特币网络交互即可创建比特币铭文的POC。",
          en: "@StarkWareLtd Exploration team introduced Broly in their blog{{name}}, a POC that allows users to create Bitcoin inscriptions on Starknet without owning BTC or directly interacting with the Bitcoin network."
        }
      }
    ]
  },
  {
    date: "2025-05-21",
    projects: [
      {
        "name": "SP1 Hypercube: Next Generation zkVM for Real-Time Ethereum Proving",
        "url": "https://blog.succinct.xyz/sp1-hypercube/",
        "type": "博客",
        "tags": [
          "Succinct",
          "zkVM",
          {en: "Real-Time Proving", zh: "实时证明"},
        ],
        "summary": {
          zh: "@SuccinctLabs 团队在博客{{name}}中介绍了其下一代zkVM SP1 Hypercube，采用全新的基于多线性多项式的证明系统架构，集群价格低至30~40万美元，对大多数以太坊L1区块可达到10s左右证明时间。",
          en: "@SuccinctLabs team introduced their next-generation zkVM SP1 Hypercube in their blog{{name}}, using a new proof system architecture based on multilinear polynomials, with a cluster price as low as $300~400k, and can achieve a proof time of about 10 seconds for most Ethereum L1 blocks."
        }
      },
      {
        "name": "vitalik.eth's tweet on ZKP real-time proving",
        "url": "https://x.com/VitalikButerin/status/1925050155922862526",
        "type": "新闻",
        "tags": [
          "Vitalik Buterin",
          {en: "Real-Time Proving", zh: "实时证明"},
        ],
        "summary": {
          zh: "@VitalikButerin 在推文中讨论了ZKP实时证明技术的当前进展，指出了包括实时证明最坏情况、正式验证缺失、证明能耗及L1 gaslimit扩展需求等关键挑战。",
          en: "@VitalikButerin discussed the current progress of ZKP real-time proving in his tweet, pointing out key challenges such as worst-case proof time, missing formal verification, proof energy consumption, and L1 gaslimit extension."
        }
      },
    ]
  }
];
const others = [
];
