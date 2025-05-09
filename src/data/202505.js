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
  }
];
const others = [
];
