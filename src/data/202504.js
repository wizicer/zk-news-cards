import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-04-01",
    projects: [
      {
        "name": "ZKProof7 Conference in Sofia",
        "url": "https://zkproof.org/events/zkproof-7-sofia/",
        "type": "活动",
        "tags": [
          "ZKProof7",
          {zh: "会议", en: "Conference"}
        ],
        "summary": {
          zh: "ZKProof社区于2025年3月23日至25日在保加利亚索菲亚举办了ZKProof7会议，聚焦ZK技术的最新进展，已发布所有会议录屏和演讲材料。",
          en: "The ZKProof community held the ZKProof7 conference in Sofia from March 23-25, focusing on the latest progress in ZK technology, with all recordings and slides now available."
        }
      },
      {
        "name": "GKR Protocol: A Step-by-Step Example",
        "url": "https://blog.lambdaclass.com/gkr-protocol-a-step-by-step-example/",
        "type": "博客",
        "tags": [
          "LambdaClass",
          "GKR",
          "Sum-Check",
        ],
        "summary": {
          zh: "@class_lambda 在博客{{name}}中详细解释了GKR协议的工作原理，通过一个具体的例子展示了如何利用交互式证明和sum-check协议来高效验证算术电路的正确性。",
          en: "@class_lambda explained the GKR protocol in a blog post{{name}}, demonstrating how to efficiently verify the correctness of arithmetic circuits using interactive proofs and sum-check protocols."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-02",
    projects: [
      {
        "name": "Plonkify: R1CS-to-Plonk transpiler",
        "url": "https://eprint.iacr.org/2025/534",
        "type": "论文",
        "tags": [
          "Pengfei Zhu",
          "R1CS",
          "Plonk",
        ],
        "summary": {
          zh: "Zhu等人在{{name}}论文中提出了Plonkify工具，能够将R1CS算术化电路转换为Plonk电路，支持普通门和自定义门，显著减少了约束数量。",
          en: "Zhu et al. proposed Plonkify in paper{{name}}, a tool that converts R1CS arithmetic circuits to Plonk circuits, supporting standard gates and custom gates, significantly reducing the number of constraints."
        }
      },
      {
        "name": "VeRange: Verification-efficient Zero-knowledge Range Arguments with Transparent Setup for Blockchain Applications and More",
        "url": "https://eprint.iacr.org/2025/528",
        "type": "论文",
        "tags": [
          "Yue Zhou",
          "Range Argument",
        ],
        "summary": {
          zh: "Zhou等人在{{name}}论文中提出了VeRange，一种验证高效的零知识范围论证方案，无需可信设置，显著降低了验证的计算开销和gas成本。",
          en: "Zhou et al. proposed VeRange in paper{{name}}, a verification-efficient zero-knowledge range argument scheme without trusted setup, significantly reducing the computational overhead and gas costs of verification."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-04",
    projects: [
      {
        "name": "Privacy Pools Mainnet Launch",
        "url": "https://x.com/0xbowio/status/1906784481496719749",
        "type": "新闻",
        "tags": [
          "0xbow.io",
          "Tornado Cash",
        ],
        "summary": {
          zh: "@0xbowio 宣布Privacy Pools主网上线，以太坊用户现可实现链上隐私，同时与非法资金分离，旨在推动隐私正常化。与Tornado Cash的最主要区别是具有资金审核机制，避免非法资金进入匿名池，增强合规性。",
          en: "@0xbowio announced the launch of Privacy Pools mainnet, allowing Ethereum users to achieve on-chain privacy while separating illegal funds, aiming to normalize privacy. The main difference from Tornado Cash is the presence of a fund audit mechanism, preventing illegal funds from entering the anonymous pool, enhancing compliance."
        }
      },
      {
        "name": "Tangram: Encryption-friendly SNARK framework under Pedersen committed engines",
        "url": "https://eprint.iacr.org/2025/540",
        "type": "论文",
        "tags": [
          "Gweonho Jeong",
          "Pedersen commitment",
        ],
        "summary": {
          zh: "Jeong等人在{{name}}论文中提出了Tangram，一个加密友好的SNARK框架，支持使用Pedersen-like密文构建系统，显著提高了加密证明的效率。",
          en: "Jeong et al. proposed Tangram in paper{{name}}, an encryption-friendly SNARK framework that supports Pedersen-like ciphertext construction, significantly improving the efficiency of encryption proofs."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-05",
    projects: [
      {
        "name": "Unlocking New Possibilities: zkTLS, TEE, and zkVM in Action",
        "url": "https://x.com/primus_labs/status/1908193205537194090",
        "type": "博客",
        "tags": [
          "@primus_labs",
          "zkTLS",
          "TEE",
        ],
        "summary": { 
          zh: "@primus_labs 、 @SuccinctLabs 和 @PhalaNetwork 共同撰写的博客{{name}}探讨了zkTLS、TEE和zkVM如何结合，为链上应用提供可验证的Web2数据，同时保护用户隐私和安全性。",
          en: "@primus_labs, @SuccinctLabs, and @PhalaNetwork co-authored the blog{{name}} discussing how zkTLS, TEE, and zkVM can be combined to provide verifiable Web2 data for blockchain applications while protecting user privacy and security."
        }
      },
      {
        "name": "Soloist: Distributed SNARKs for Rank-One Constraint System",
        "url": "https://eprint.iacr.org/2025/557",
        "type": "论文",
        "tags": [
          "Weihan Li",
          { zh: "分布式证明", en: "distributed proof" },
          "KZG",
        ],
        "summary": { 
          zh: "Li等人在{{name}}论文中提出了Soloist，一种针对R1CS的优化分布式SNARK。Soloist实现了恒定的证明大小、恒定的摊销通信复杂度和恒定的验证复杂度，显著提升了zkRollups的效率。",
          en: "Li et al. proposed Soloist in the paper{{name}}, an optimized distributed SNARK for R1CS that achieves constant proof size, constant amortized communication complexity, and constant verification complexity, significantly improving the efficiency of zkRollups."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-06",
    projects: [
      {
        "name": "Zinnia: An Expressive and Efficient Tensor-Oriented Zero-Knowledge Programming Framework",
        "url": "https://eprint.iacr.org/2025/572",
        "type": "论文",
        "tags": [
          "Zhantong Xue",
          {zh: "编译器", en: "compiler"},
          "DSL",
        ],
        "summary": {
          zh: "Xue等人在{{name}}论文中提出了Zinnia，一个面向张量的高效ZK编程框架，通过高级编程语言和符号执行方法简化ZKP程序编写，显著提升开发效率和证明速度。",
          en: "Xue et al. proposed Zinnia in the paper{{name}}, an efficient ZK programming framework for tensor-oriented applications, simplifying ZKP program development and significantly improving proof efficiency."
        }
      },
      {
        "name": "SP1-2FA: Enhancing zkVM Security with TEEs",
        "url": "https://blog.succinct.xyz/sp1-2fa/",
        "type": "新闻",
        "tags": [
          "Succinct",
          "zkVM",
          "TEE",
        ],
        "summary": {
          zh: "@SuccinctLabs 宣布推出SP1-2FA，为Succinct Prover Network增加通过可信执行环境(TEEs)的第二层保护，进一步强化zkVM的安全性。",
          en: "@SuccinctLabs announced the release of SP1-2FA, adding a second layer of protection to the Succinct Prover Network through TEEs, further enhancing the security of zkVMs."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-07",
    projects: [
      {
        "name": "Veridise develop LLZK: A new IR for ZK languages",
        "url": "https://medium.com/veridise/veridise-secures-ethereum-foundation-grant-to-develop-llzk-a-new-intermediate-representation-ir-224c0e71f4d5",
        "type": "博客",
        "tags": [
          "Veridise",
          "IR",
          "LLZK",
        ],
        "summary": {
          zh: "@VeridiseInc 获得以太坊基金会资助，开发LLZK，一种针对ZK语言的中介表示（IR），旨在统一和简化电路编译，提高ZK领域的可维护性和安全性。该框架可以将Circom、Zirgen和Gnark转换为LLZK，并作进一步分析优化。",
          en: "@VeridiseInc received an Ethereum Foundation grant to develop LLZK, an intermediate representation (IR) for ZK languages, aiming to unify and simplify circuit compilation, improve the maintainability and security of the ZK domain. The framework converts Circom, Zirgen, and Gnark to LLZK and further analyzes and optimizes it."
        }
      },
      {
        "name": "Efficient SNARKs for Boolean Circuits via Sumcheck over Tower Fields",
        "url": "https://eprint.iacr.org/2025/594",
        "type": "论文",
        "tags": [
          "Tianyi Liu", "Yupeng Zhang",
          {zh: "塔域", en: "Tower of fields"},
          "Sumcheck"
        ],
        "summary": {
          zh: "Liu等人在{{name}}论文中提出了一种针对布尔电路的高效SNARKs，通过新颖的塔式sumcheck协议和塔式零检查协议显著提高了证明者效率。",
          en: "Liu et al. proposed an efficient SNARK for Boolean circuits in the paper{{name}}, using novel tower sumcheck and tower zero-check protocols, significantly improving prover efficiency."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-08",
    projects: [
      {
        "name": "NoirHack - Deadline April 8th",
        "url": "https://www.noirhack.com/",
        "type": "活动",
        "tags": [
          "NoirHack",
          "Noir",
        ],
        "summary": {
          zh: "NoirHack是一个为期4周的完全在线项目，开发者可以掌握Noir这一通用零知识语言，并构建跨多个区块链部署的隐私保护应用。项目包括两周的学习和两周的构建，最终在5月12日进行Demo Day展示。",
          en: "NoirHack is a 4-week online project where developers can learn and build privacy-protecting applications across multiple blockchains using the Noir. The project includes two weeks of learning and two weeks of building, culminating in a Demo Day on May 12th."
        }
      },
      {
        "name": "Code Optimizations in the Landscape of Post-Quantum Cryptography",
        "url": "https://mirror.xyz/privacy-scaling-explorations.eth/BKI3tyauHIiUCYHgma-EHeSRXNTNDtLUQV9VNGQWLUg",
        "type": "博客",
        "tags": [
          "PSE",
          {zh: "后量子密码学", en: "Post-Quantum Cryptography"},
        ],
        "summary": {
          zh: "@PrivacyScaling 研究员Miha Stopar在博客{{name}}中探讨了后量子密码学中的代码优化，重点比较了基于格和基于同源的密码学在向量化方面的潜力。",
          en: "Miha Stopar, a researcher at @PrivacyScaling, discussed code optimizations in the landscape of post-quantum cryptography in the blog{{name}}, focusing on comparing the potential of lattice-based and isogeny-based cryptography in vectorization."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-09",
    projects: [
      {
        "name": "ColliderVM: Stateful Computation on Bitcoin",
        "url": "https://eprint.iacr.org/2025/591",
        "type": "论文",
        "tags": [
          "Victor I. Kolobov",
          {zh: "比特币", en: "Bitcoin"},
          "BitVM",
        ],
        "summary": {
          zh: "Kolobov等人在{{name}}论文中提出了ColliderVM，一种在比特币上执行状态计算的新方法，通过基于哈希碰撞的承诺替代传统签名存储组件，显著缩短了STARK证明验证的脚本长度。",
          en: "Kolobov et al. proposed ColliderVM in the paper{{name}}, a new method for executing stateful computations on Bitcoin, replacing traditional signature storage components with hash collision commitments, significantly reducing the length of STARK proof verification scripts."
        }
      },
      {
        "name": "zkPyTorch: A Hierarchical Optimized Compiler for Zero-Knowledge Machine Learning",
        "url": "https://eprint.iacr.org/2025/535",
        "type": "论文",
        "tags": [
          "Tiancheng Xie",
          "zkML",
          "PyTorch"
        ],
        "summary": {
          zh: "Xie等人在{{name}}论文中提出了zkPyTorch，一个将ML框架如PyTorch与ZKP引擎如Expander无缝集成的编译器，简化了ZKML的开发。通过三个关键组件自动化ML操作到优化ZKP电路的转换。",
          en: "Xie et al. proposed zkPyTorch in the paper{{name}}, a compiler that seamlessly integrates ML frameworks like PyTorch with ZKP engines like Expander, simplifying ZKML development. It automates ML operations to optimize ZKP circuits through three key components."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-10",
    projects: [
      {
        "name": "Confidential Balances: Empowering Confidentiality in the Solana Ecosystem",
        "url": "https://www.helius.dev/blog/confidential-balances",
        "type": "博客",
        "tags": [
          "Kelvin Bonilla",
          "Solana",
        ],
        "summary": { 
          zh: "Kelvin Bonilla在{{name}}博客中探讨了Solana生态系统中的Confidential Balances，这是一种通过同态加密和零知识证明技术增强令牌隐私和合规性的扩展功能。",
          en: "Kelvin Bonilla discussed Confidential Balances in the Solana ecosystem in the blog{{name}}, a privacy and compliance extension function that enhances token privacy and compliance through homomorphic encryption and zero-knowledge proofs."
        }
      },
      {
        "name": "WHIR 🌪️",
        "url": "https://github.com/WizardOfMenlo/whir",
        "type": "开源",
        "tags": [
          "Gal Arnon", "Alessandro Chiesa",
          "WHIR",
        ],
        "summary": {
          zh: "Arnon等人开源了WHIR库，基于arkworks生态系统开发，支持PCS或LDT协议运行，提供多种安全级别和配置选项，该仓库与其论文内容对应。",
          en: "Arnon et al. open-sourced the WHIR library, which is built on the arkworks ecosystem and supports running PCS or LDT protocols, providing multiple security levels and configuration options, and is implemented according to the corresponding paper."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-11",
    projects: [
      {
        "name": "A maximally simple L1 privacy roadmap",
        "url": "https://ethereum-magicians.org/t/a-maximally-simple-l1-privacy-roadmap/23459",
        "type": "博客",
        "tags": [
          "Vitalik Buterin",
          "L1",
          "FOCIL",
          "TEE",
        ],
        "summary": {
          zh: "@VitalikButerin 在{{name}}博客中分享了关于如何实际改善以太坊用户隐私状态的当前思考，提出了一个轻量级的以太坊共识变更路线图，包括支付隐私、应用内活动匿名化、链上读取隐私和网络级匿名化等关键隐私形式。",
          en: "@VitalikButerin shared his current thoughts on how to actually improve the privacy of Ethereum users in the{{name}} blog, proposing a lightweight Ethereum consensus change roadmap, including payment privacy, anonymous activities within applications, privacy on-chain, and network-level anonymity."
        }
      },
      {
        "name": "Introducing R0VM 2.0",
        "url": "https://risczero.com/blog/introducing-R0VM-2.0",
        "type": "博客",
        "tags": [
          "RISC Zero",
          "zkVM",
          {zh: "实时证明", en: "Real-Time Proving"},
        ],
        "summary": {
          zh: "@RiscZero 在{{name}}博客中介绍了R0VM 2.0，这是专为现代区块链应用设计的最快、最安全的zkVM，标志着零知识计算进入实时时代。",
          en: "@RiscZero introduced R0VM 2.0 in the{{name}} blog, which is the fastest and most secure zkVM designed for modern blockchain applications, marking the arrival of real-time zero-knowledge computing."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-13",
    projects: [
      {
        "name": "Proving CPU Executions in Small Space",
        "url": "https://eprint.iacr.org/2025/611",
        "type": "论文",
        "tags": [
          "Vineet Nair", "Justin Thaler",
          "zkVMs",
        ],
        "summary": {
          zh: "Nair等人在{{name}}论文中提出了一种减少内存占用的Jolt zkVM实现，不依赖SNARK递归，且运行时开销较低，相比现有递归技术具有优势。",
          en: "Nair et al. proposed a Jolt zkVM implementation in the{{name}} paper, which reduces memory usage and has lower runtime overhead compared to existing recursive techniques."
        }
      },
      {
        "name": "Need for zkSpeed: Accelerating HyperPlonk for Zero-Knowledge Proofs",
        "url": "https://eprint.iacr.org/2025/620",
        "type": "论文",
        "tags": [
          "Alhad Daftardar",
          "HyperPlonk",
          "ASIC",
        ],
        "summary": {
          zh: "Daftardar等人在{{name}}论文中提出了zkSpeed，一个用于加速HyperPlonk的硬件加速器，支持一次性通用设置和小证明尺寸，实现了801倍的几何平均加速比。",
          en: "Daftardar et al. proposed zkSpeed in the{{name}} paper, a hardware accelerator for HyperPlonk that supports one-time universal setup and small proof sizes, achieving a geometric mean acceleration ratio of 801."
        }
      }
    ],
  },
  {
    date: "2025-04-14",
    projects: [
      {
        "name": "Spartan: A Sum-Check-Based zkSNARK with Efficient Prover",
        "url": "https://hackmd.io/@srinathsetty/spartan",
        "type": "博客",
        "tags": [
          "Srinath Setty",
          "Sum-Check",
        ],
        "summary": {
          zh: "@srinathtv 在{{name}}博客中总结了sum-check的zkSNARK协议Spartan，具有高效的证明者性能，目前为Jolt zkVM提供了底层支持。",
          en: "@srinathtv summarized the sum-check-based zkSNARK protocol Spartan in the{{name}} blog, which has efficient prover performance and currently provides a foundation for Jolt zkVM."
        }
      },
      {
        "name": "Why I support privacy",
        "url": "https://vitalik.eth.limo/general/2025/04/14/privacy.html",
        "type": "博客",
        "tags": [
          "Vitalik Buterin",
          "Privacy",
          {zh: "去中心化", en: "Decentralization"}
        ],
        "summary": {
          zh: "@VitalikButerin 在博客{{name}}中讨论了隐私在以太坊生态系统中的重要性，强调了ZK-SNARKs和FHE等技术在保护隐私方面的作用，以及隐私对于自由、秩序和进步的关键价值。",
          en: "@VitalikButerin discussed the importance of privacy in the Ethereum ecosystem in the{{name}} blog, highlighting the role of ZK-SNARKs and FHE in protecting privacy and emphasizing the key value of privacy for freedom, order, and progress."
        }
      },
    ],
    insights: [
      {
        "url": "https://x.com/francescoswiss/status/1911754272535990605",
        "language": "zh",
        "title": "Vitalik: 为什么我支持隐私",
        "type": "reprint",
        "slogan": "重要的隐私",
        "quotes": [
        ],
        "images": [
          "./images/2025/04/14.png"
        ],
      },
      {
        "url": "https://x.com/francescoswiss/status/1911754272535990605",
        "language": "en",
        "title": "Vitalik: Why I support privacy",
        "type": "reprint",
        "slogan": "Privacy",
        "quotes": [
        ],
        "images": [
          "./images/2025/04/14.png"
        ],
      },
    ]
  },
  {
    date: "2025-04-16",
    projects: [
      {
        "name": "Halo2 soundness issues",
        "url": "https://github.com/teddav/halo2-soundness-bugs",
        "type": "开源",
        "tags": [
          "teddav",
          "Halo2",
          {en:"vulnerabilities", zh:"漏洞"}
        ],
        "summary": {
          zh: "@0xteddav 在GitHub上开源了Halo2 soundness bugs项目，展示了Halo2编写电路时的潜在漏洞，包括未约束变量和范围检查问题。",
          en: "@0xteddav opened source for the Halo2 soundness bugs project, showcasing potential vulnerabilities in Halo2 circuit writing, including unconstrained variables and range checks."
        }
      },
      {
        "name": "Proof Party | Have fun using zero-knowledge proofs with your friends.",
        "url": "https://zkp.fun/",
        "type": "活动",
        "tags": [
          "zkp.fun",
          "Privacy",
          "CTF"
        ],
        "summary": {
          zh: "@NovaNet_zkp 组织了zkp.fun活动，邀请用户通过MetaMask登录，参与ZK挑战，同时有机会获得NovaNet的奖励。",
          en: "@NovaNet_zkp organized the zkp.fun event, inviting users to log in through MetaMask, participate in ZK challenges, and potentially win rewards from NovaNet."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-17",
    projects: [
      {
        "name": "zkMarek Session 1",
        "url": "https://www.youtube.com/watch?v=_JiPcvtr8sY&list=PLj0C1OnlNNly58s-JI_bDAdCY7JLgcy5I",
        "type": "视频",
        "tags": [
          "zkMarek",
          {zh: "椭圆曲线", en: "Elliptic Curves"},
        ],
        "summary": {
          zh: "@zkMarek 发布了第一季视频，目的是以直观的方式解释椭圆曲线、ECDSA、可信设置、KZG和向量承诺、Blob、Merkle和Verkle树等主题。",
          en: "@zkMarek released the first season video, explaining elliptic curves, ECDSA, trusted setup, KZG and vector commitments, Blob, Merkle, and Verkle trees in a visual way."
        }
      },
      {
        "name": "ONPROVER: The End of Trusted Data, The Start of Verifiable Data",
        "url": "https://orochi.network/blog/ONPROVER-The-End-of-Trusted-Data-The-Start-of-Verifiable-Data",
        "type": "博客",
        "tags": [
          "Orochi Network",
          "Testnet",
          {zh: "激励", en: "Incentive"},
        ],
        "summary": {
          zh: "@OrochiNetwork 在博客{{name}}中讨论了ONPROVER的概念，并且表明testnet已经上线，并提供了如何在测试网上通过在浏览器中进行证明获得奖励的方法。",
          en: "@OrochiNetwork discussed the concept of ONPROVER in the{{name}} blog, indicating that the testnet has been launched and provided a method for earning rewards on the testnet through proofs generated in the browser."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-18",
    projects: [
      {
        "name": "ZK Learning Group: Interactive Oracle Proofs (IOPs)",
        "url": "https://www.youtube.com/watch?v=HSUcpGCajE0",
        "type": "视频",
        "tags": [
          "Daniel Szego",
          "IOP"
        ],
        "summary": {
          zh: "ZK Learning Group 发布了Daniel Szego关于Interactive Oracle Proofs (IOPs)的讲解学习视频，并以Plonk为例介绍了IOPs的实现原理。",
          en: "ZK Learning Group published a lecture on Interactive Oracle Proofs (IOPs) by Daniel Szego, introducing the implementation principles of IOPs with Plonk as an example."
        }
      },
      {
        "name": "ZK App Development Platform",
        "url": "https://platforms.ligetron.com/",
        "type": "信息",
        "tags": [
          "Ligero, Inc",
          "WASM",
          "SNARKs",
        ],
        "summary": {
          zh: "@ligero_inc 发布的ZK App Development Platform支持在Ligetron平台上构建和部署ZK Web应用，包括使用C/C++、CIRCOM或Rust编写NP语句，编译为WASM，生成和验证证明的流程。并提供了浏览器中的证明速度测试。",
          en: "@ligero_inc published the ZK App Development Platform, which supports building and deploying ZK Web applications on Ligetron, including using C/C++, CIRCOM, or Rust to write NP statements, compiling to WASM, and generating and verifying proofs. It also provides a proof speed test in the browser."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-20",
    projects: [
      {
        "name": "Every mainnet (Ethereum) block is being ZK-proven—by ZkCloud",
        "url": "https://x.com/thezkcloud/status/1912105857921282134",
        "type": "新闻",
        "tags": [
          "ZkCloud",
          "Succinct Lab",
        ],
        "summary": {
          zh: "@thezkcloud 宣布加入ETHProof的证明器队列，对每个区块进行证明。其使用 @SuccinctLabs 的RSP证明器进行证明，硬件使用ZkCloud上的云主机。",
          en: "@thezkcloud announced its participation in ETHProof's prover, proving each block. It uses @SuccinctLabs ' RSP prover and cloud hosts from ZkCloud."
        }
      },
      {
        "name": "Fairgate, RootstockLabs, and Input | Output Launch BitVMX FORCE to Advance Bitcoin's Scalability",
        "url": "https://bitvmx.org/force/press",
        "type": "新闻",
        "tags": [
          "Fairgate", "RootstockLabs", "Input | Output",
          "Bitcoin",
          "BitVMX",
        ],
        "summary": {
          zh: "@FairGateLabs 、@RootstockLabs 和 @InputOutputHK 联合组建BitVMX FORCE战略联盟，旨在通过BitVMX框架提升比特币的可扩展性和创新性，支持复杂的可争议计算操作。",
          en: "@FairGateLabs 、@RootstockLabs and @InputOutputHK jointly founded the BitVMX FORCE strategic alliance, aiming to enhance Bitcoin's scalability and innovation through the BitVMX framework, supporting complex disputeable computations."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-21",
    projects: [
      {
        "name": "Proofs of Useful Work from Arbitrary Matrix Multiplication",
        "url": "https://eprint.iacr.org/2025/685",
        "type": "论文",
        "tags": [
          "Ilan Komargodski",
          {zh: "矩阵乘法", en: "Matrix Multiplication"}
        ],
        "summary": {
          zh: "Komargodski等人在{{name}}论文中提出了一种基于任意矩阵乘法的有用工作量证明（PoUW）协议，旨在让比特币挖矿的能源浪费变为支持AI训练和推理的能源来源。该项目也准备发一条新的区块链。",
          en: "Komargodski et al. proposed a proof of useful work (PoUW) protocol based on arbitrary matrix multiplication in the{{name}} paper, aiming to convert the energy waste of Bitcoin mining into energy sources for AI training and inference. This project also plans to launch a new blockchain."
        }
      },
      {
        "name": "Efficient Foreign-Field Arithmetic in PLONK",
        "url": "https://eprint.iacr.org/2025/695",
        "type": "论文",
        "tags": [
          "Miguel Ambrona",
          "PLONK",
          {zh: "外域算术", en: "foreign-field arithmetic"}
        ],
        "summary": {
          zh: "Ambrona等人在{{name}}论文中提出了一种在PLONK中高效实现外域算术的方法，显著减少了约束数量，并验证了其在椭圆曲线模拟中的适用性。",
          en: "Ambrona et al. proposed a method for efficient foreign-field arithmetic in PLONK in the{{name}} paper, significantly reducing the number of constraints and evaluating its applicability in elliptic curve simulations."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-22",
    projects: [
      {
        "name": "Vector Commitment Design, Analysis, and Applications: A Survey",
        "url": "https://eprint.iacr.org/2025/667",
        "type": "论文",
        "tags": [
          "Vir Pathak",
          {zh: "向量承诺", en: "Vector Commitment"},
        ],
        "summary": {
          zh: "Pathak等人在{{name}}论文中系统化地分析了向量承诺（VCs）的设计、特性、属性及应用，比较了不同构造的证明/更新信息大小及复杂度，并探讨了其在去中心化和隐私保护技术中的有效性。",
          en: "Pathak et al. analyzed the design, properties, and applications of vector commitments (VCs) in the{{name}} paper, comparing the proof/commitment update information size and complexity of different constructions, and discussing their validity in decentralized and privacy protection technologies."
        }
      },
      {
        "name": "Breaking ECDSA with Two Affinely Related Nonces",
        "url": "https://eprint.iacr.org/2025/705",
        "type": "论文",
        "tags": [
          "Jamie Gilchrist",
          "ECDSA",
          {zh: "私钥安全", en: "private key security"},
        ],
        "summary": {
          zh: "Gilchrist等人在{{name}}论文中提出了一种攻击ECDSA的方法，通过两个具有仿射关系的nonce恢复私钥，无需格规约或暴力搜索。",
          en: "Gilchrist et al. proposed an attack on ECDSA in the{{name}} paper, recovering the private key using two affinely related nonces, without requiring lattice reduction or brute force search."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-23",
    projects: [
      {
        "name": "One-Step Schnorr Threshold Identification",
        "url": "https://eprint.iacr.org/2025/722",
        "type": "论文",
        "tags": [
          "Foteinos Mergoupis-Anagnou",
          {zh: "门限", en: "Threshold"},
        ],
        "summary": {
          zh: "Foteinos Mergoupis-Anagnou在{{name}}论文中提出了OSST，一种基于Schnorr的阈值零知识识别协议，无需交互且不依赖公开份额，支持在无需认证过程或基础设施支持的无许可和动态环境中廉价采用。",
          en: "Foteinos Mergoupis-Anagnou proposed OSST in the{{name}} paper, a Schnorr-based threshold zk-identification protocol, which is non-interactive and does not depend on public shares, supporting cheap adoption in untrusted and dynamic environments."
        },
        "notes": {
          zh: [
            "门限零知识识别协议让 `t` 个成员联合证明他们共同知道某个秘密",
            "此类协议避免了对每个成员公钥的注册与认证，适用于动态或去信任环境",
            "实际证明的内容举例来说，可以是 _“我们这些人联合起来，确实知道某个私钥 x”_",
            "应用场景包括匿名群体认证、去中心化身份系统、链上多签控制、IoT 协作、跨组织验证等",
            "OSST 协议是非交互式的，不依赖公开份额，支持异步通信和成员动态加入",
          ],
          en: [
            "Threshold zk identification protocol allows `t` members to jointly prove they know a secret",
            "This protocol avoids the registration and authentication of each member's public key, making it suitable for dynamic or untrusted environments",
            "The actual proof content, for example, can be _'we are proving we know the private key x'_",
            "Applications include anonymous group authentication, decentralized identity systems, on-chain multi-signature control, IoT collaboration, cross-organization verification, etc.",
            "OSST protocol is non-interactive and does not depend on public shares, supporting asynchronous communication and dynamic member joining",
          ]
        }
      },
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-26",
    projects: [
      {
        "name": "Accelerating ZK Proving with WebGPU: Techniques and Challenges",
        "url": "https://blog.zksecurity.xyz/posts/webgpu/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "WebGPU",
        ],
        "summary": {
          zh: "@zksecurityXYZ 在博客{{name}}中讨论了利用WebGPU提升ZK证明性能的方法，介绍了WebGPU本身和在实现ZKP中的挑战，并通过实验验证其与Stwo集成后的提速效果。",
          en: "@zksecurityXYZ discussed in the{{name}} blog how to accelerate ZK proving with WebGPU, introducing the challenges of WebGPU itself and in implementing ZKP, and verified its speedup with Stwo integration."
        }
      },
      {
        "name": "three new zkVMs unveiled on Ethproofs call #1",
        "url": "https://x.com/eth_proofs/status/1915801013102968865",
        "type": "新闻",
        "tags": [
          "Ethproofs",
          "zkVM",
        ],
        "summary": {
          zh: "在 @eth_proofs 的第一次电话会议中，揭晓了三款新的zkVM：@argumentxyz 的Ix（基于Lean 4）、@StarkWareLtd 的StarkV（基于RISC-V）和 @IrreducibleHW 的 zCray（受RISC-V启发）。",
          en: "@eth_proofs unveiled three new zkVMs in the first phone call: @argumentxyz's Ix (Lean 4), @StarkWareLtd's StarkV (RISC-V), and @IrreducibleHW's zCray (inspired by RISC-V)."
        }
      }
    ],
    insights: [
    ]
  },  
  {
    date: "2025-04-27",
    projects: [
      {
        "name": "The State of ZK Q1-2025",
        "url": "https://drive.google.com/file/d/1D1x5uVZSitohado_A3E36zVvm1vmzK0M/view",
        "type": "博客",
        "tags": [
          "ZKV",
          {zh: "报告", en: "Report"}
        ],
        "summary": {
          zh: "@zkv_xyz 发布了2025年第一季度的ZKV报告，分析了当前的ZKV生态系统状态，包括主要项目、技术进展和融资情况等。",
          en: "@zkv_xyz published the Q1 2025 ZKV report, analyzing the current ZKV ecosystem status, including major projects, technical progress, and funding."
        }
      },
      {
        "name": "Hypercube IR: The Foundation of Zero-Knowledge Proof System",
        "url": "https://hackmd.io/@Cysic/ByY3_L5hkl",
        "type": "博客",
        "tags": [
          "Cysic",
          "HyperCube IR",
          "FHE"
        ],
        "summary": {
          zh: "@Cysic 团队在{{name}}博客中提出了HyperCube IR，一种专为ZKP和FHE设计的中间表示，旨在解决ZKP系统开发中的高性能代码可移植性问题。",
          en: "@Cysic team proposed HyperCube IR in the{{name}} blog, an intermediate representation for ZKP and FHE, aiming to solve the problem of high-performance code portability in ZKP system development."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-28",
    projects: [
      {
        "name": "Linear-Time Accumulation Schemes",
        "url": "https://eprint.iacr.org/2025/753",
        "type": "论文",
        "tags": [
          "Benedikt Bünz", "Alessandro Chiesa",
          {zh: "累加方案", en: "accumulation schemes"}
        ],
        "summary": {
          zh: "Bünz等人在{{name}}论文中提出了WARP，首个具有线性证明者时间和对数验证者时间的累加方案。该方案基于哈希，支持无限制的累加深度，并具有后量子安全性。",
          en: "Bünz et al. proposed WARP in the{{name}} paper, the first linear-time accumulator with logarithmic verifier time. The scheme is based on hash, supports unlimited accumulation depth, and has post-quantum security."
        }
      },
      {
        "name": "ProofLab.dev",
        "url": "https://prooflab.dev/",
        "type": "新闻",
        "tags": [
          "Prooflab",
          "zkVM"
        ],
        "summary": {
          zh: "ProofLab正在开发，将提供全面、及时更新的zkVM报告和基准测试，目前已经有RISC0和SP1的基准测试数据。",
          en: "ProofLab is currently developing, will provide comprehensive, up-to-date reports and benchmarks for zkVM, currently with RISC0 and SP1 benchmarks."
        }
      }
    ],
  },
  {
    date: "2025-04-29",
    projects: [
      {
        "name": "Andreessen Horowitz leads $25 million bet on Miden, a former Meta engineer’s privacy blockchain",
        "url": "https://fortune.com/crypto/2025/04/29/miden-a16z-privacy-blockchain-polygon-labs/",
        "type": "新闻",
        "tags": [
          "Ben Weiss",
          "Investment"
        ],
        "summary": {
          zh: "Andreessen Horowitz领投2500万美元投资于Miden (zkVM)，这是一个由前Meta工程师Bobbin Threadbare共同创立的隐私区块链项目。",
          en: "Andreessen Horowitz led a $25 million investment in Miden (zkVM), a privacy blockchain project co-founded by former Meta engineer Bobbin Threadbare."
        }
      },
      {
        "name": "Diamond iO: an implementable iO construction",
        "url": "https://machina-io.com/posts/hello_world_first.html",
        "type": "博客",
        "tags": [
          "Sora Suegami",
          "iO",
        ],
        urls: [
          createUrlItem("源代码", "https://github.com/MachinaIO/diamond-io"),
          createUrlItem("论文", "https://eprint.iacr.org/2025/236")
        ],
        "summary": {
          zh: "@machina_io 团队在{{name}}博客中介绍了Diamond iO，这是一个格基iO实现，通过简化矩阵操作克服了传统iO方案的复杂性，支持有限的电路功能范围，并给出了基准测试数据。",
          en: "@machina_io team introduced Diamond iO in the{{name}} blog, a lattice-based iO implementation, overcoming the complexity of traditional iO schemes by simplifying matrix operations, supporting a limited range of circuit functions, and providing benchmark result."
        }
      }
    ],
  }
];

const others = [
];
