import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-06-01",
    projects: [
      {
        "name": "Highlights of libZK, the Google Wallet ZKP",
        "url": "https://nmohnblatt.github.io/libzk-highlights/",
        "type": "博客",
        "tags": [
          "@nmohnblatt",
          "GKR",
          "Ligero"
        ],
        "summary": {
          zh: "Nicolas 在{{name}}博客中分享了libZK证明系统的亮点，包括其快速证明者设计、双电路算术化及实现技巧，旨在为ZK社区提供学习资源。",
          en: "Nicolas shared highlights of libZK, the Google Wallet ZKP system, in blog{{name}}, including its fast prover design, dual-circuit arithmeticization, and implementation techniques, aimed at providing learning resources for the ZK community."
        },
        "notes": {
          zh: [
            "Google Wallet 使用 libZK 实现 ZKP 隐私年龄验证",
            "GKR + Ligero 组合提升 20 倍证明速度",
            "交互式证明组合简化安全证明",
            "双电路设计：分别处理 ECDSA 和 SHA-256/CBOR",
            "非标准域 FFT 优化计算效率",
            "硬件技术优化降低电路深度"
          ],
          en: [
            "Google Wallet uses libZK to implement ZKP age verification",
            "GKR + Ligero combination boosts proof speed by 20x",
            "Interactive proof combination simplifies security proofs",
            "Dual-circuit design: handles ECDSA and SHA-256/CBOR separately",
            "Non-standard domain FFT optimizes calculation efficiency",
            "Hardware technology optimization reduces circuit depth"
          ]
        }
      }
    ],
  },
  {
    date: "2025-06-03",
    projects: [
      {
        "name": "Missing final polynomial degree check in FRI verifier",
        "url": "https://github.com/Plonky3/Plonky3/security/advisories/GHSA-f69f-5fx9-w9r9",
        "type": "新闻",
        "tags": [
          "dlubarov",
          "Plonky3",
          "FRI",
          {zh: "漏洞", en: "Vulnerability"},
        ],
        "urls": [
          createUrlItem("𝕏", "https://x.com/dlubarov/status/1929723510622244941"),
        ],
        "summary": {
          zh: "Plonky3项目披露了一个高严重性安全漏洞，影响ad4fd24之前的版本，FRI验证器缺少最终多项式度检查，可能被恶意证明者利用。",
          en: "Plonky3 project disclosed a high severity security vulnerability, affecting versions before ad4fd24, where the FRI verifier lacked a final polynomial degree check, potentially exploitable by malicious provers."
        }
      },
      {
        "name": "Cryptography 10 Years Later: Obfuscation, Proof Systems, and Secure Computation Boot Camp Videos",
        "url": "https://simons.berkeley.edu/workshops/cryptography-10-years-later-obfuscation-proof-systems-secure-computation-boot-camp/videos",
        "type": "视频",
        "tags": [
          "Simons Institute",
          "Cryptography",
          {zh: "混淆", en: "Obfuscation"},
        ],
        "urls": [
          createUrlItem("YouTube", "https://www.youtube.com/playlist?list=PLgKuh-lKre12vDccuxf_xgO27_b1zLrhk"),
        ],
        "summary": {
          zh: "Simons Institute发布了关于密码学十年后发展的系列视频，涵盖了混淆、证明系统和安全计算等前沿话题，深入探讨了这些技术的进展和未来方向。",
          en: "Simons Institute released a series of videos on the future of cryptography, covering topics such as obfuscation, proof systems, and secure computation, delving into the progress and future directions of these technologies."
        }
      }
    ],
  },
  {
    date: "2025-06-04",
    projects: [
      {
        "name": "Zero Knowledge Proofs for the Uninitiated",
        "url": "https://blog.reclaimprotocol.org/posts/zk-for-the-uninitiated",
        "type": "博客",
        "tags": [
          "Madhavan Malolan",
          "Reclaim Protocol",
          {zh: "初学者", en: "Beginner"},
        ],
        "summary": {
          zh: "@reclaimprotocol 的 Madhavan Malolan 在博客{{name}}中为零知识证明的初学者提供了入门介绍，解释了ZKP如何在不泄露数据的情况下验证计算的正确性，并探讨了其在隐私保护中的应用。",
          en: "@reclaimprotocol 's Madhavan Malolan provided an introduction for beginners to zero-knowledge proofs in blog{{name}}, explaining how ZKP verifies the correctness of calculations without disclosing data and exploring its applications in privacy protection."
        }
      },
      {
        "name": "Introducing ZKsync Prividium: Private Blockchain Infra Built for Institutions",
        "url": "https://zksync.mirror.xyz/-22Hu5ugeOtchnp1ut44Zehfh5yolKlu9nubFdJLMD0",
        "type": "新闻",
        "tags": [
          "ZKsync",
          "Prividium",
          {zh: "合规性", en: "Compliance"},
        ],
        "summary": {
          zh: "@zksync 团队推出了ZKsync Prividium，这是一个专为机构设计的私有区块链基础设施，提供企业级隐私、内置合规性以及与以太坊的无缝连接。",
          en: "@zksync team launched ZKsync Prividium, a private blockchain infrastructure built for institutions, providing enterprise-level privacy, built-in compliance, and seamless integration with Ethereum."
        }
      }
    ],
  },
  {
    date: "2025-06-05",
    projects: [
      {
        "name": "Capture Hidden Trends - Use Cases for Private and Decentralized ML Training",
        "url": "https://yuriko.io/posts/capture-hidden-trends/",
        "type": "博客",
        "tags": [
          "Yuriko",
          "Decentralized AI",
          "zkML"
        ],
        "summary": {
          zh: "Yuriko在博客{{name}}中探讨了隐私保护和去中心化机器学习训练的潜在用例，包括如何利用ZK证明在不暴露私人数据集的情况下协作训练模型。",
          en: "Yuriko in blog{{name}} explored potential use cases for private and decentralized machine learning training, including how to use ZK proofs to collaboratively train models without exposing private datasets."
        },
        "notes": {
          zh: [
            "去中心化ML训练：多方协作建模，保护数据隐私",
            "传统数据科学存在结构性偏见，忽视弱势群体数据",
            "应用：健康分析、边缘群体模型、隐私推荐、生物识别",
            "模型合并技术可分析交叉身份特征",
            "技术优势：可验证训练，优化边缘计算效率",
            "社会价值：通过协作挖掘被忽视的社会模式"
          ],
          en: [
            "Decentralized ML training: Multi-party collaboration, data privacy protection",
            "Traditional data science has structural biases, ignoring vulnerable groups' data",
            "Applications: Health analysis, edge group modeling, privacy recommendation, biometric recognition",
            "Model merging technology can analyze cross-identity features",
            "Technical advantages: Verifiable training, optimized edge computing efficiency",
            "Social value: Discovering overlooked social patterns through collaboration"
          ]
        }
      }
    ],
  },
  {
    date: "2025-06-06",
    projects: [
      {
        "name": "Malicious Security in Collaborative zk-SNARKs: More than Meets the Eye",
        "url": "https://eprint.iacr.org/2025/1026",
        "type": "论文",
        "tags": [
          "Sanjam Garg",
          "MPC",
          "coSNARKs"
        ],
        "summary": {
          zh: "Garg等人在{{name}}论文中分析了协作zk-SNARKs中的恶意安全问题，揭示了现有设计模板中的两个陷阱，可能导致输入隐私泄露，并提出了缓解策略。",
          en: "Garg et al. analyzed malicious security in collaborative zk-SNARKs in paper{{name}}, revealing two traps in existing design templates that could lead to input privacy leaks and proposed countermeasures."
        },
        "notes": {
          zh: [
            "协作zk-SNARK (coSNARKs)设计存在隐私泄露风险，如无效见证可能暴露诚实方输入",
            "直接套用恶意安全编译器（MPC协议）可能导致整体安全性失效",
            "在诚实多数假设下，可省略安全检查以提升效率",
            "首次实现半诚实MPC协议达成恶意安全的非平凡案例",
            "优化方案减少证明生成开销，适用于多种zk-SNARK方案",
            "研究结论具有普适性，可能拓展至其他密码学协作协议"
          ],
          en: [
            "Collaborative zk-SNARK (coSNARKs) design has privacy leakage risks, such as invalid witnesses exposing honest party inputs",
            "Directly applying malicious security compilers (MPC) may render the entire system insecure",
            "Under the assumption of honest majority, traditional compilers' security checks can be omitted to improve efficiency",
            "First implementation of semi-honest MPC protocol to achieve malicious security in non-trivial cases",
            "Optimization scheme reduces proof generation overhead, applicable to various zk-SNARK schemes",
            "Positive results are general and may have applications beyond collaborative zkSNARKs"
          ]
        }
      }
    ],
  },
  {
    date: "2025-06-07",
    projects: [
      {
        "name": "On the Adaptive Security of Key-Unique Threshold Signatures",
        "url": "https://eprint.iacr.org/2025/943",
        "type": "论文",
        "tags": [
          "Elizabeth Crites",
          "Threshold Signatures",
        ],
        "summary": {
          zh: "Crites等人在{{name}}论文中探讨了阈值签名自适应安全性的安全假设，提出了两种不可能性结果，强调了实现密钥唯一阈值签名自适应安全的挑战。",
          en: "Crites et al. explored the security assumptions of adaptive security in threshold signatures in paper{{name}}, presenting two impossibility results and emphasizing the challenges of achieving adaptive security for unique-key threshold signatures."
        }
      },
      {
        "name": "Polocolo: A ZK-Friendly Hash Function Based on S-boxes Using Power Residues",
        "url": "https://eprint.iacr.org/2025/926",
        "type": "论文",
        "tags": [
          "Jincheol Ha",
          "Hash function",
          "Lookup argument",
        ],
        "summary": {
          zh: "Ha等人在{{name}}论文中提出了一种基于Power Residues的ZK友好哈希函数Polocolo，通过减少Plonk门数量，比现有最先进的ZK友好哈希函数更高效。",
          en: "Ha et al. proposed a ZK-friendly hash function Polocolo based on Power Residues in paper{{name}}, reducing the number of Plonk gates and outperforming the most advanced ZK-friendly hash functions."
        }
      }
    ],
  },
  {
    date: "2025-06-08",
    projects: [
      {
        "name": "Greyhound: A Lattice-Based Polynomial Commitment Scheme",
        "url": "https://blog.zksecurity.xyz/posts/greyhound/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          {zh: "格基", en: "Lattice-based"},
        ],
        "summary": {
          zh: "@zksecurityXYZ 在{{name}}博客中讨论了Greyhound，一种基于格的证明系统，旨在抵抗量子计算机威胁，并详细解释了其工作原理和优势。",
          en: "@zksecurityXYZ discussed Greyhound, a lattice-based proof system, in blog{{name}}, explaining its working principles and advantages."
        },
        "notes": {
          zh: [
            "Greyhound 是首个高效的格基 PCS，证明大小约 50KB",
            "基于 Ajtai 承诺和 M-SIS 问题，线性证明者和亚线性验证者",
            "通过矩阵分块和基分解技术优化，与现有 PCS 兼容",
            "结合 LaBRADOR 压缩，实现对数级证明大小和次线性验证",
            "专为后量子时代设计",
            "已有 Rust 实现（LattiRust）和硬件库 ICICLE 支持"
          ] ,
          en: [
            "Greyhound is the first efficient lattice-based PCS, with proof sizes around 50KB",
            "Based on Ajtai commitment and M-SIS problem, linear prover and sublinear verifier",
            "Optimized through matrix partitioning and basis decomposition, compatible with existing PCS",
            "Combined with LaBRADOR compression, achieving logarithmic proof size and sublinear verification",
            "Designed for the post-quantum era",
            "Already has Rust implementation (LattiRust) and hardware library ICICLE support"
          ]
        }
      }
    ],
  },
  {
    date: "2025-06-11",
    projects: [
      {
        "name": "A Deep Dive into Logjumps: a Faster Modular Reduction Algorithm",
        "url": "https://baincapitalcrypto.com/a-deep-dive-into-logjumps-a-faster-modular-reduction-algorithm/",
        "type": "论文",
        "tags": [
          "Koh Wei Jie",
          {zh: "模约简", en: "Modular Reduction"}
        ],
        "summary": {
          zh: "Koh Wei Jie在{{name}}论文中提出了Logjumps技术，这是一种针对大素数域上模约减的新方法，相比Montgomery约减提供了更高效的解决方案。",
          en: "Koh Wei Jie proposed Logjumps in paper{{name}}, a new method for modular reduction in large prime fields, which is more efficient than Montgomery reduction."
        }
      },
      {
        "name": "PSE May 2025 newsletter",
        "url": "https://pse.dev/en/blog/pse-may-2025-newsletter",
        "type": "新闻",
        "tags": [
          "PSE",
          {zh: "后量子密码学", en: "Post-Quantum Cryptography"},
        ],
        "summary": {
          zh: "PSE发布了2025年5月的通讯，涵盖了后量子密码学、私有证明委托、客户端证明等多个领域的最新动态和项目进展。",
          en: "PSE released the May 2025 newsletter, covering the latest developments and project progress in post-quantum cryptography, private proof delegation, client-side proving, and other fields."
        }
      }
    ],
  },
  {
    date: "2025-06-13",
    projects: [
      {
        "name": "Proof of Residency",
        "url": "https://github.com/rutefig/proof-of-residency",
        "type": "开源",
        "tags": [
          "rutefig",
          "Decentralized Validation"
        ],
        "summary": {
          zh: "rutefig团队开源了Proof of Residency项目，利用加密技术生成可验证的居住证明，同时保护用户隐私，仅公开验证居住国家(葡萄牙)而隐藏具体地址。",
          en: "rutefig team open-sourced the Proof of Residency project, using encryption technology to generate verifiable residency proofs while protecting user privacy, only disclosing the validated country of residence (Portugal) while hiding specific addresses."
        }
      },
      {
        "name": "ZKsync Airbender",
        "url": "https://github.com/matter-labs/zksync-airbender",
        "type": "开源",
        "tags": [
          "matter-labs",
          "RISC-V",
          "ZKsync",
        ],
        "summary": {
          zh: "@the_matter_labs 开源了ZKsync Airbender，包含RISC-V编译和证明工具，支持电路实现、模拟器及证明生成与验证功能。",
          en: "@the_matter_labs open-sourced ZKsync Airbender, containing RISC-V compilation and proof tools, supporting circuit implementation, simulator, and proof generation and verification."
        }
      }
    ],
  },
  {
    date: "2025-06-15",
    projects: [
      {
        "name": "The Fields Powering Binius",
        "url": "https://blog.lambdaclass.com/the-fields-powering-binius/",
        "type": "博客",
        "tags": [
          "LambdaClass",
          "zkVM",
          "Binius",
        ],
        "summary": {
          zh: "@class_lambda 在博客{{name}}中探讨了Binius证明系统的数学基础，重点介绍了布尔超立方体和二进制塔的概念，以及如何在电路级别操作中利用这些概念进行字段元素的加法和乘法。",
          en: "@class_lambda discussed the mathematical foundations of the Binius proof system in blog{{name}}, focusing on Boolean hypercubes and binary towers, and how to utilize these concepts at the circuit level for field element addition and multiplication."
        }
      },
      {
        "name": "Whitepaper Alert: Exploring Keccak Hashes in Zero-Knowledge with GKR",
        "url": "https://vlayer.xyz/blog/whitepaper-alert-exploring-keccak-hashes-in-zero-knowledge-with-gkr",
        "type": "论文",
        "tags": [
          "vlayer",
          "Keccak",
          "GKR",
        ],
        "summary": {
          zh: "@vlayer_xyz 团队在{{name}}论文中探讨了使用GKR协议在零知识证明中验证Keccak哈希的方法，为处理以太坊原生操作提供了高效、可扩展的解决方案。",
          en: "@vlayer_xyz team explored using GKR protocol in zero-knowledge proofs to verify Keccak hashes in paper{{name}}, providing an efficient and scalable solution for processing Ethereum native operations."
        }
      }
    ],
  },
  {
    date: "2025-06-16",
    projects: [
      {
        "name": "A Framework for Compiling Custom Languages as Efficiently Verifiable Virtual Machines",
        "url": "https://eprint.iacr.org/2025/1110",
        "type": "论文",
        "tags": [
          "Assimakis A. Kattis",
          "zkVM",
          "Nock",
        ],
        "summary": {
          zh: "Kattis等人在{{name}}论文中提出了一种将自定义语言编译为高效IOP的框架，特别针对zkVM设计。他们定义了可遍历语言子类，并展示了如何高效编译为电路，以Nock编程语言为例验证了框架的有效性。",
          en: "Kattis et al. proposed a framework for compiling custom languages as efficiently verifiable virtual machines in paper{{name}}, targeting zkVM design. They defined traversable language subclasses and demonstrated how to efficiently compile to circuits, verifying the framework's effectiveness with the Nock programming language."
        }
      },
      {
        "name": "ML-KEM – Post-Quantum Key Encapsulation (Kyber)",
        "url": "https://dev.ingonyama.com/api/cpp/lattice/pqc_ml_kem",
        "type": "开源",
        "tags": [
          "Ingonyama",
          "ML-KEM",
        ],
        "summary": {
          zh: "@Ingo_zk 发布了ML-KEM的C++ API实现，支持Kyber512、Kyber768和Kyber1024参数集，提供密钥生成、封装和解封装功能，优化了后量子密码学的应用。",
          en: "@Ingo_zk released the C++ API implementation of ML-KEM, supporting Kyber512, Kyber768, and Kyber1024, providing key generation, encapsulation, and decapsulation functions, optimizing the application of post-quantum cryptography."
        }
      }
    ],
  },
  {
    date: "2025-06-17",
    projects: [
      {
        "name": "Spartan: A Framework for Building zkSNARK Schemes",
        "url": "https://alinush.github.io/spartan",
        "type": "博客",
        "tags": [
          "alinush",
          "Spartan",
          "sumcheck",
        ],
        "summary": {
          zh: "alinush在{{name}}博客中介绍了Spartan框架，用于构建基于sumcheck协议和稀疏多线性多项式承诺方案的zkSNARK方案，直接处理R1CS矩阵，优化证明时间。",
          en: "alinush introduced the Spartan framework in blog{{name}}, a framework for building zkSNARK schemes based on sumcheck protocol and sparse multilinear PCS, directly processing R1CS matrix, optimizing proving time."
        },
        "notes": {
          zh: [
            "基于 sumcheck 和稀疏 MLE PCS，直接处理 R1CS 矩阵",
            "证明时间与矩阵非零项数线性相关，优于传统 QAP 方案",
            "核心优势包括可公开委托计算和线性时间证明生成",
            "通过编译器实现稀疏矩阵高效处理，降低存储和计算开销",
            "验证流程依赖两次 sumcheck 和稀疏 MLE 的随机点求值",
            "适用于稀疏/结构化电路，部分计算可转移至验证者"
          ],
          en: [
            "Based on sumcheck and sparse MLE PCS, directly processing R1CS matrix",
            "Proof time linearly related to non-zero matrix items, superior to traditional QAP scheme",
            "Core advantages include public delegation of computation and linear time proof generation",
            "Efficient sparse matrix processing through compiler, reducing storage and computational overhead",
            "Verification process depends on two sumcheck and sparse MLE random point evaluations",
            "Suitable for sparse/structured circuits, some calculations can be transferred to verifier"
          ]
        }
      }
    ],
  },
  {
    date: "2025-06-18",
    projects: [
      {
        "name": "The Hyli testnet is live",
        "url": "https://blog.hyli.org/the-hyli-testnet-is-live/",
        "type": "新闻",
        "tags": [
          "Hyli",
          "testnet",
          "Autobahn",
          "Noir"
        ],
        "summary": {
          zh: "@hyli_org 团队宣布其测试网上线，分为学习和构建两个阶段，旨在通过游戏化体验展示ZK证明的可能性，并邀请开发者参与构建应用。",
          en: "@hyli_org team announced the launch of its testnet, divided into learning and building stages, aiming to demonstrate the possibilities of ZK proofs through gamified experiences and inviting developers to participate in building applications."
        }
      },
      {
        "name": "Speeding Up Sum-Check Proving",
        "url": "https://eprint.iacr.org/2025/1117",
        "type": "论文",
        "tags": [
          "Suyash Bagad",
          "Justin Thaler",
          "sum-check",
          "Jolt"
        ],
        "summary": {
          zh: "Bagad等人在{{name}}论文中提出了两种优化方法，显著加速了sum-check证明过程，特别是在Jolt zkVM等应用中，实现了2-3倍的性能提升。",
          en: "Bagad et al. proposed two optimization methods in paper{{name}}, significantly accelerating the sum-check proving process, particularly in applications such as Jolt zkVM, achieving a 2-3x performance boost."
        }
      }
    ],
  },
  {
    date: "2025-06-20",
    projects: [
      {
        "name": "Benchmarking zkVMs: Current State and Prospects",
        "url": "https://fenbushicapital.medium.com/benchmarking-zkvms-current-state-and-prospects-ba859b44f560",
        "type": "博客",
        "tags": [
          {zh: "分布式资本", en: "Fenbushi Capital"},
          "zkVM",
          "Benchmark",
        ],
        "summary": {
          zh: "@fenbushi Capital在{{name}}博客中讨论了zkVM的当前状态和前景，包括对八种zkVM实现的标准化测试和性能评估。",
          en: "@fenbushi Capital discussed the current state and prospects of zkVM in blog{{name}}, including standardized testing and performance evaluation of eight zkVM implementations."
        }
      },
      {
        "name": "Jordi Baylina: Independent ZisK with 7 devs, Remain Polygon co-founder / advisor",
        "url": "https://x.com/jbaylina/status/1935307486421987576",
        "type": "新闻",
        "tags": [
          "Jordi Baylina",
          "Polygon",
          "ZisK",
        ],
        "summary": {
          zh: "@jbaylina 宣布与7名核心开发者从Polygon分拆，独立推进ZisK项目，同时仍担任Polygon联合创始人及顾问，主要精力转向 @ziskvm。",
          en: "@jbaylina announced the spin-off from Polygon with a core team of 7 developers to continue the ZisK project independently, remaining co-founder and advisor at Polygon, and shifting main focus to @ziskvm."
        }
      }
    ],
  },
  {
    date: "2025-06-22",
    projects: [
      {
        "name": "zkPDF: Unlocking Verifiable Data in the World's Most Popular Document Format",
        "url": "https://pse.dev/blog/zkpdf-unlocking-verifiable-data",
        "type": "博客",
        "tags": [
          "PSE",
          "zkpdf",
        ],
        "summary": {
          zh: "@PrivacyScaling 团队在{{name}}博客中介绍了zkPDF，这是一套允许从数字签名PDF中证明事实而不泄露整个文档的零知识电路和工具。",
          en: "@PrivacyScaling team introduced zkPDF in blog{{name}}, a circuit and toolset that allows proving facts about a PDF without disclosing the entire document."
        },
        "notes": {
          zh: [
            "zkPDF：用零知识证明验证PDF内容，无需公开全文",
            "技术突破：解决PDF大文件哈希和复杂解析的ZK验证难题",
            "方案：基于SP1 ZKVM和自研Rust解析器，支持多语言",
            "性能：百KB级PDF验证30-50秒，已可实用",
            "应用：身份文件、电子合同、银行证明等隐私验证",
            "未来：客户端轻量化、TEE加速、更多功能支持"
          ],
          en: [
            "zkPDF: Verify PDF content with ZK proofs without full disclosure",
            "Breakthrough: Solves ZK verification challenges for large PDFs",
            "Solution: SP1 ZKVM + custom Rust parser with multilingual support",
            "Performance: 30-50s verification for 100KB+ PDFs, production-ready",
            "Use cases: ID docs, e-contracts, bank statements - privacy-preserving verification",
            "Future: Client-side proving, TEE acceleration, extended features"
          ]
        }
      },
    ],
  },
  {
    date: "2025-06-23",
    projects: [
      {
        "name": "GKR: Sumcheck's best friend",
        "url": "https://blog.electisec.com/gkr",
        "type": "博客",
        "tags": [
          "ElectiSec",
          "GKR",
          "Sumcheck",
        ],
        "summary": {
          zh: "ElectiSec在{{name}}博客中讨论了GKR协议及其设计思路，作者提供了实践代码，帮助读者更好地理解GKR协议的工作原理。",
          en: "ElectiSec discussed the GKR protocol and its design principles in blog{{name}}, providing practical code to help readers better understand how the GKR protocol works."
        }
      },
      {
        "name": "How @Aptos confidential transfers work",
        "url": "https://x.com/alinush407/status/1930653240800018448",
        "type": "新闻",
        "tags": [
          "Aptos Labs",
          "Confidential Transfers",
        ],
        "summary": {
          zh: "@alinush407 介绍了 @Aptos 的机密转账功能，允许用户加密余额和转账金额，仅发送方、接收方和指定审计员可见，利用加法同态加密技术更新加密余额。",
          en: "@alinush407 introduced @Aptos' confidential transfers, allowing users to encrypt balances and transfer amounts, making them visible only to the sender, receiver, and specified auditors, using additive homomorphic encryption to update encrypted balances."
        }
      }
    ],
  },
  {
    date: "2025-06-24",
    projects: [
      {
        "name": "Understanding Lasso: A Novel Lookup Argument Protocol",
        "url": "https://eprint.iacr.org/2025/1169",
        "type": "论文",
        "tags": [
          "Oleg Fomenko",
          "Lasso",
          "Jolt",
        ],
        "summary": {
          zh: "Fomenko等人在{{name}}论文中提供了对Lasso查找参数协议的深入和易于理解的概述，该协议是Jolt ZK-VM的基础组件，涵盖了sum-check协议、多线性多项式及其扩展、Spark承诺等核心原理。",
          en: "Fomenko et al. provided a deep and easy-to-understand overview of the Lasso protocol in paper{{name}}, which is the foundation component of Jolt ZK-VM, covering sum-check protocols, multilinear polynomials and their extensions, Spark commitments, etc."
        }
      },
      {
        "name": "Major RISC-V zkVM breakthrough!",
        "url": "https://x.com/eth_proofs/status/1937083157519458687",
        "type": "新闻",
        "tags": [
          "@ziskvm",
          "zkVM",
          "AOT compilation",
        ],
        "summary": {
          zh: "@ziskvm 团队实现了RISC-V zkVM的重大突破，通过AOT编译技术将trace生成速度提升至1.5GHz，比现有技术快10倍，且项目完全开源。",
          en: "@ziskvm team achieved a major breakthrough in RISC-V zkVM, significantly improving trace generation speed to 1.5GHz, 10x faster than existing technology, and the project is fully open source."
        },
      }
    ],
  },
  {
    date: "2025-06-26",
    projects: [
      {
        "name": "Circom Pitfalls: Common Anti-Patterns and How to Avoid Them",
        "url": "https://blog.zksecurity.xyz/posts/circom-pitfalls-1/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "Circom",
          "Security",
        ],
        "summary": {
          zh: "@zksecurityXYZ 在{{name}}博客中讨论了Circom编程中的常见反模式，重点介绍了断言(assert)不添加约束、提示(<--)不受约束以及有限域算术导致的别名攻击等问题。",
          en: "@zksecurityXYZ discussed common anti-patterns in Circom programming in blog{{name}}, focusing on non-constraint operator assert and <--, and alias attacks caused by finite field arithmetic."
        },
        "notes": {
          zh: [
            "assert不添加R1CS约束，仅用于模板参数的安全检查。",
            "使用`<--`操作符时，必须手动添加约束以防止安全漏洞。",
            "有限域算术可能导致别名攻击，特别是在编码数字时。",
            "Bits2Num_strict和Num2Bits_strict可以用来防止别名攻击。",
            "开发者应避免将assert用于信号，而应仅用于模板参数。",
            "分离计算和约束可提高性能，但须确保所有计算都被适当约束。"
          ],
          en: [
            "assert would not generate constraints, only used for template parameter security checks.",
            "Manual constraints must be added when using the <-- operator to prevent security vulnerabilities.",
            "Finite field arithmetic may cause alias attacks, especially when encoding numbers.",
            "Bits2Num_strict and Num2Bits_strict can be used to prevent alias attacks.",
            "Developers should avoid using assert for signals and should only use it for template parameters.",
            "Separating computation and constraints can improve performance, but all calculations must be appropriately constrained."
          ]
        }
      }
    ],
  },
  {
    date: "2025-06-27",
    projects: [
      {
        "name": "Solana Phantom Challenge Bug",
        "url": "https://blog.zksecurity.xyz/posts/solana-phantom-challenge-bug/",
        "type": "博客",
        "tags": [
          "zkSecurity",
          "Solana",
          "ElGamal Proof",
        ],
        "summary": {
          zh: "@zksecurityXYZ 团队在博客{{name}}中详细分析了Solana的ZK ElGamal Proof Program中的一个关键安全性漏洞，该漏洞允许恶意证明者伪造sigma OR证明，绕过费用验证。",
          en: "@zksecurityXYZ team analyzed a critical security vulnerability in Solana's ZK ElGamal Proof Program in blog{{name}}, allowing malicious provers to forge sigma OR proofs, bypassing fee verification."
        }
      },
      {
        "name": "Folding Schemes in the Lattice Setting: Pay-per-bit and NTTs",
        "url": "https://blog.icme.io/folding-schemes-in-the-lattice-setting-pay-per-bit-and-ntts/?ref=icme-newsletter",
        "type": "博客",
        "tags": [
          "ICME",
          "Lattice",
          "Ajtai commitments",
        ],
        "summary": {
          zh: "ICME在{{name}}博客中探讨了基于格的折叠方案LatticeFold和Neo，比较了它们在处理Ajtai承诺和避免NTTs方面的不同策略，以及Neo如何实现按位付费的承诺方案。",
          en: "ICME discussed folding schemes in the lattice setting in blog{{name}}, comparing LatticeFold and Neo, and how Neo implements a pay-per-bit commitment scheme."
        }
      }
    ],
  }
];
const others = [
];

