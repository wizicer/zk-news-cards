import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-09-01",
    projects: [
      {
        "name": "Data Matching in Unequal Worlds and Applications to Smart Contracts",
        "url": "https://eprint.iacr.org/2025/1500",
        "type": "论文",
        "tags": [
          "Dmitry Khovratovich",
          "Hash",
          "Groth16"
        ],
        "summary": {
          zh: "Khovratovich等人在{{name}}论文中提出了一种混合压缩方法，用于优化Groth16框架中长语句的证明成本，结合不同哈希函数以提高智能合约和证明电路的效率。",
          en: "Khovratovich et al. proposed a hybrid compression method in the paper{{name}}, optimizing Groth16 framework proof costs for long statements by combining different hash functions to improve smart contract and proof circuit efficiency."
        },
        "notes": {
          zh: [
            "提出 Hybrid Compression，电路和合约可用不同哈希。",
            "合约用 SHA-256，电路用 Poseidon，通过 UHF 保证一致。",
            "提出 joint UHF-hardness 假设确保安全性。",
            "将问题建模为“不等世界下的数据匹配”协议。",
            "实验表明 gas 和证明时间均接近最优。",
            "解决哈希困境，实现高效链上验证。"
          ],
          en: [
            "Proposes Hybrid Compression allowing different hashes in circuit and contract.",
            "Contract uses SHA-256, circuit uses Poseidon, consistency via UHF.",
            "Introduces joint UHF-hardness assumption for security.",
            "Models problem as 'Data Matching in Unequal Worlds' protocol.",
            "Benchmarks show near-optimal gas and proving time.",
            "Resolves hash dilemma for efficient on-chain verification."
          ]
        }
      }
    ],
  },
  {
    date: "2025-09-02",
    projects: [
      {
        "name": "UltraGroth Protocol Explained",
        "url": "https://hackmd.io/@ZamDimon/SkFGEXbKgx",
        "type": "博客",
        "tags": [
          "ZamDimon",
          "Groth16",
          "Lookup Checks",
        ],
        "summary": {
          zh: "@ZamDimon 在博客{{name}}中讨论了UltraGroth协议，包括如何通过修改Groth16来支持查找检查，从而优化非本地操作和减少约束数量。",
          en: "@ZamDimon discussed the UltraGroth protocol in the blog{{name}}, explaining how to modify Groth16 to support lookup checks, optimizing non-local operations and reducing constraint numbers."
        },
        "notes": {
          "zh": [
            "UltraGroth是Groth16的改进版，支持查找表优化",
            "保持Groth16验证高效性（3点3配对），仅增加1个G1点和1次配对",
            "通过安全随机数采样实现高效非本地操作（如位运算、范围检查）",
            "大幅降低电路约束（如ReLU从线性降至亚线性复杂度）",
            "已在实际项目Bionetta中应用，安全可靠",
            "为复杂ZK电路提供高效证明方案"
          ],
          "en": [
            "UltraGroth enhances Groth16 with lookup table support",
            "Maintains Groth16's efficient verification (3 points, 3 pairings), adds only 1 G1 point and 1 pairing",
            "Enables efficient non-native operations via secure randomness sampling",
            "Significantly reduces circuit constraints (e.g., ReLU from linear to sublinear)",
            "Proven in production with Bionetta, secure and reliable",
            "Provides efficient proving for complex ZK circuits"
          ]
        }
      }
    ],
  },
  {
    date: "2025-09-06",
    projects: [
      {
        "name": "Glock: Garbled Locks for Bitcoin",
        "url": "https://eprint.iacr.org/2025/1485",
        "type": "论文",
        "tags": [
          "Liam Eagen",
          {zh: "混淆电路", en: "Garbled Circuits"},
          "Bitcoin",
        ],
        "summary": {
          zh: "Eagen等人在{{name}}论文中提出了一种基于混淆电路的乐观智能合约协议Glock，用于比特币，通过泄露秘密和生成签名作为欺诈证明，并减少对Grug技术的依赖。",
          en: "Eagen et al. proposed a novel optimistic smart contract protocol Glock for Bitcoin in their paper{{name}}, using Garbled Circuits to leak secrets and generate signatures as fraud proofs, reducing dependency on Grug technology."
        },
        "notes": {
          zh: [
            "Glock使用混淆电路泄露秘密并生成签名作为欺诈证明",
            "首次提出无需Grug技术的实际构造，提高安全性",
            "结合Cut-and-Choose、VSS和Adaptor Signatures实现恶意安全",
            "优化SNARK Pari以减小证明大小，降低链上验证成本",
            "与Delbrag和BitVM3为独立并行工作，提供替代方案",
            "减少通信和计算复杂度，适用于比特币网络"
          ],
          en: [
            "Glock uses garbled circuits to leak secrets and generate signatures as fraud proofs",
            "First practical construction without the need for Grug technology, enhancing security",
            "Achieves malicious security by combining Cut-and-Choose, VSS, and Adaptor Signatures",
            "Optimizes SNARK pari to reduce proof size and lower on-chain verification costs",
            "Works independently and in parallel with Delbrag and BitVM3, providing alternatives",
            "Reduces communication and computational complexity, suitable for the Bitcoin network"
          ]
        }
      }
    ]
  },
  {
    date: "2025-09-07",
    projects: [
      {
        "name": "Zero-Knowledge Proof Frameworks: A Systematic Survey",
        "url": "https://arxiv.org/abs/2502.07063v3",
        "type": "论文",
        "tags": [
          "Nojan Sheybani",
          "Benchmark"
        ],
        "summary": {
          "zh": "Sheybani等人在{{name}}论文中对25个通用ZKP框架进行了系统调查和评估，包括性能测试和Docker容器支持，旨在降低开发者入门门槛。",
          "en": "Sheybani et al. surveyed 25 ZKP frameworks in their paper{{name}}, including performance testing and Docker container support, aimed at reducing developer entry barriers."
        },
        "notes": {
          "zh": [
            "系统调查25个ZKP框架，涵盖SNARK、STARK、MPCitH、VOLE。",
            "评估指标：性能、可用性、可访问性，并提供Docker复现。",
            "SNARK最成熟，推荐Arkworks、Gnark；PLONK推荐Gnark-KZG、Noir。",
            "STARK适合后量子安全，推荐RISC Zero。",
            "VOLE-ZK适合IoT与分布式学习；MPCitH框架有限。",
            "未来方向：高层API、互操作、硬件加速。"
          ],
          "en": [
            "Surveyed 25 ZKP frameworks: SNARK, STARK, MPCitH, VOLE.",
            "Metrics: performance, usability, accessibility; Docker for reproducibility.",
            "SNARK most mature: Arkworks, Gnark; PLONK: Gnark-KZG, Noir.",
            "STARKs for post-quantum apps, RISC Zero recommended.",
            "VOLE-ZK fits IoT/distributed learning; MPCitH limited options.",
            "Future: high-level APIs, interoperability, hardware acceleration."
          ]
        }
      }
    ]
  },
  {
    date: "2025-09-08",
    projects: [
      {
        "name": "Multilinear Polynomials Survival Kit",
        "url": "https://blog.lambdaclass.com/multilinear-polynomials-survival-kit/",
        "type": "博客",
        "tags": [
          "LambdaClass",
          "Sum-Check",
        ],
        "summary": {
          zh: "@class_lambda 团队在博客{{name}}中分享了多线性多项式的基本性质，包括定义、插值方法和张量积操作，为理解Sum-Check协议优化提供基础。",
          en: "@class_lambda team shared the basic properties of multilinear polynomials in blog{{name}}, including definitions, interpolation methods, and tensor product operations, providing a foundation for understanding Sum-Check protocol optimization."
        },
        "notes": {
          zh: [
            "多线性多项式是ZKP中Sum-Check协议的关键组件，用于高效计算和验证",
            "插值方法允许任意函数在布尔超立方体上被多线性多项式表示，简化计算",
            "张量积操作提供多项式乘法的向量空间抽象，优化内存和时间使用",
            "坐标计算基于拉格朗日基，直接通过函数求值获得，提升效率",
            "这些性质有助于加速Sum-Check证明，减少ZKP系统的开销",
            "文章为理解更复杂的ZKP协议（如GKR）提供了数学基础"
          ],
          en: [
            "Multilinear polynomials are key components of the Sum-Check protocol in ZKP, used for efficient computation and verification",
            "Interpolation methods allow any function to be represented by multilinear polynomials on Boolean hypercubes, simplifying calculations",
            "Tensor product operations provide a vector space abstraction for polynomial multiplication, optimizing memory and time usage",
            "Coordinate calculations based on Lagrange basis, directly through function evaluation, improving efficiency",
            "These properties help accelerate Sum-Check proofs, reducing ZKP system overhead",
            "The article provides a mathematical foundation for understanding more complex ZKP protocols (e.g., GKR)"
          ]
        }
      }
    ]
  },
  {
    date: "2025-09-09",
    projects: [
      {
        "name": "Jolt Book",
        "url": "https://jolt.a16zcrypto.com/",
        "type": "工具",
        "tags": [
          "a16z crypto",
          "zkVM",
        ],
        "summary": {
          zh: "@a16zcrypto 团队分享了Jolt zkVM的设计，包括基于sumcheck和查找参数的高性能RISC-V实现，以及其简单性和速度优势。",
          en: "@a16zcrypto team shared the design of Jolt zkVM, including a high-performance RISC-V implementation based on sumcheck and lookup arguments, as well as its simplicity and speed advantages."
        },
        "notes": {
          zh: [
            "Jolt zkVM基于sumcheck和查找参数设计，强调性能和简单性",
            "使用Spartan和Dory作为底层证明系统，优化R1CS约束",
            "支持RISC-V架构，适用于高效虚拟机器证明",
            "开源项目包括相关论文和博客文章，提供详细文档",
            "性能达到state-of-the-art水平，特别在CPU上表现突出",
            "设计围绕Just One Lookup Table理念，简化实现复杂度"
          ],
          en: [
            "Jolt zkVM is designed based on sumcheck and lookup arguments, emphasizing performance and simplicity",
            "Uses Spartan and Dory as underlying proof systems to optimize R1CS constraints",
            "Supports RISC-V architecture for efficient virtual machine proofs",
            "Open-source project including related papers and blog articles, providing detailed documentation",
            "Performance reaches state-of-the-art levels, particularly outstanding on CPU",
            "Design centered around the Just One Lookup Table concept, simplifying implementation complexity"
          ]
        }
      }
    ]
  },
  {
    date: "2025-09-10",
    projects: [
      {
        "name": "Optimizing Backend Verification in zk-Rollup Architectures",
        "url": "https://eprint.iacr.org/2025/1390",
        "type": "论文",
        "tags": [
          "Mehdi Beriane",
          "BLS12-381",
        ],
        "summary": {
          "zh": "Beriane 等人在{{name}}论文中提出了一种优化zk-Rollup架构后端验证的方法，通过多项式聚合和标量分解等技术显著降低了链上验证成本。",
          "en": "Beriane et al. proposed an optimization method for zk-Rollup architecture backend verification in their paper{{name}}, using polynomial aggregation and scalar decomposition techniques to significantly reduce on-chain verification costs."
        },
        "notes": {
          "zh": [
            "针对zk-Rollup链上验证成本高的问题提出优化方案",
            "核心优化：G1指数运算从40次降至31次，单次验证省108k Gas",
            "采用动态重心插值法替代FFT，稀疏多项式求值Gas降92-95%",
            "提出证明聚合策略，减少预编译调用且保持128位安全性",
            "实验效果：总验证成本从857.2k Gas降至748.45k Gas",
            "优化兼容Pectra升级，为高效链上验证提供技术蓝图"
          ],
          "en": [
            "Proposes optimizations for high on-chain verification costs in zk-Rollups",
            "Key optimization: Reduces G1 exponentiations from 40 to 31, saving 108k Gas per verification",
            "Replaces FFT with dynamic barycentric interpolation, cutting Gas by 92-95% for sparse polynomials",
            "Introduces proof aggregation to minimize precompile calls while maintaining 128-bit security",
            "Experimental results: Total verification cost reduced from 857.2k to 748.45k Gas",
            "Optimizations are compatible with Pectra upgrade and provide blueprint for efficient on-chain verification"
          ]
        }
      }
    ]
  },
  {
    date: "2025-09-11",
    projects: [
      {
        "name": "Reinventing Irreducible",
        "url": "https://www.irreducible.com/posts/reinventing-irreducible",
        "type": "博客",
        "tags": [
          "Irreducible Team",
          "zkSNARK",
          "Binius",
          "zkVM",
          "Privacy",
          "Open Source"
        ],
        "summary": {
          zh: "@IrreducibleHW 团队在{{name}}博客中讨论了公司转型，从硬件转向软件，专注于Binius证明系统和本地证明，以推动可验证互联网的发展。",
          en: "@IrreducibleHW discussed company transformation in their blog{{name}}, moving from hardware to software, focusing on Binius proof system and local proofs, to drive the development of verifiable internet."
        },
        "notes": {
          "zh": [
            "战略转型：从硬件转向软件，专注证明系统开发",
            "技术重点：推出CPU优化的Binius64证明系统",
            "放弃硬件：因市场需求不足和GPU生态优势",
            "聚焦隐私：支持本地设备验证的隐私应用",
            "许可策略：证明器AGPL，验证器Apache",
            "愿景：用零知识证明构建可验证的互联网"
          ],
          "en": [
            "Strategic pivot: From hardware to software, focused on proof systems",
            "Technical focus: CPU-optimized Binius64 proof system",
            "Hardware abandoned: Due to weak demand and GPU ecosystem advantages",
            "Privacy focus: Local verification for privacy applications",
            "Licensing: Prover AGPL, verifier Apache",
            "Vision: Building verifiable internet with ZK proofs"
          ]
        }
      }
    ]
  },
  {
    date: "2025-09-18",
    projects: [
      {
        "name": "Announcing Binius64",
        "url": "https://www.irreducible.com/posts/announcing-binius64",
        "type": "博客",
        "tags": [
          "Irreducible Team",
          "Binius64",
        ],
        "summary": {
          zh: "@IrreducibleHW 在博客{{name}}中分享了Binius64的发布，讨论了其针对CPU性能的优化、与Binius V0的区别以及性能基准测试结果。",
          en: "@IrreducibleHW shared the release of Binius64 in their blog{{name}}, discussing CPU performance optimization, differences from Binius V0, and performance benchmark results."
        },
        "notes": {
          "zh": [
            "推出Binius64：新一代CPU优化的零知识证明系统",
            "原生64位支持，硬件友好约束（位运算/整数乘法）",
            "性能较GPU加速zkVM快5倍（多线程CPU）",
            "暂不支持零知识，计划2025年底实现",
            "专注隐私支付、匿名凭证等应用场景",
            "已开源，将改进验证简洁性和开发体验"
          ],
          "en": [
            "Launched Binius64: CPU-optimized ZK proof system",
            "Native 64-bit support with hardware-friendly constraints",
            "5x faster than GPU zkVMs (multi-threaded CPU)",
            "Zero-knowledge coming by end-2025",
            "Focus: private payments, anonymous credentials",
            "Open-sourced, improving verification & developer experience"
          ]
        }
        
      }
    ]
  },
  {
    date: "2025-09-19",
    projects: [
      {
        "name": "PSE Roadmap: 2025 and Beyond",
        "url": "https://ethereum-magicians.org/t/pse-roadmap-2025-and-beyond/25423",
        "type": "博客",
        "tags": [
          "PSE team",
          "Privacy",
          "Roadmap"
        ],
        "summary": {
          "zh": "PSE团队 (@PrivacyEthereum) 分享了{{name}}博文，讨论了Ethereum隐私路线图，包括私有写入、读取和证明等关键领域，以推动隐私成为应用层的一等公民。",
          "en": "PSE team (@PrivacyEthereum) shared their blog{{name}}, discussing the Ethereum privacy roadmap, including private writes, reads, and proving, to drive privacy as a first-class citizen in the application layer."
        },
        "notes": {
          "zh": [
            "PSE转型为以太坊隐私守护者，推动隐私成为默认特性",
            "聚焦三大领域：私有写入、私有读取和私有证明",
            "目标：私有操作与公有操作同等廉价便捷",
            "短期重点：隐私转账、投票协议和机构隐私方案",
            "通过协作共建生态，推进隐私解决方案落地",
            "愿景：支撑全球数字商业的价值互联网"
          ],
          "en": [
            "PSE transforms into Privacy Stewards for Ethereum to make privacy default",
            "Focus on three areas: Private writes, reads and proving",
            "Goal: Make private operations as cheap as public ones",
            "Short-term: Private transfers, voting protocols, institutional solutions",
            "Build ecosystem through collaboration for privacy solutions",
            "Vision: Enable global digital commerce and value internet"
          ]
        }
      }
    ]
  },
  {
    date: "2025-09-23",
    projects: [
      {
        "name": "From Evaluation to Enhancement: Large Language Models for Zero-Knowledge Proof Code Generation",
        "url": "https://arxiv.org/abs/2509.11708",
        "type": "论文",
        "tags": [
          "Zhantong Xue",
          "Circom",
          "Noir"
        ],
        "summary": {
          "zh": "Xue等人在{{name}}论文中提出了ZK-Eval评估框架和ZK-Coder增强框架，用于评估和改进LLM在ZK代码生成中的能力，显著提升Circom和Noir程序的正确率。",
          "en": "In the paper{{name}}, Xue et al. propose the ZK-Eval evaluation framework and the ZK-Coder enhancement framework to assess and improve LLM capabilities in ZK code generation, significantly boosting the correctness of Circom and Noir programs."
        },
        "notes": {
          "zh": [
            "ZKP 编程困难且易错，LLM 在该领域缺乏系统评估。",
            "ZK-Eval 基准涵盖语言知识、gadget 能力和端到端生成。",
            "LLM 语法掌握好，但 gadget 与语义正确性差，Circom 更难。",
            "ZK-Coder 结合约束 sketch、检索和交互修复提升生成质量。",
            "在 Circom/Noir 上成功率从 <30% 提升至 80–90%。",
            "修复循环最关键，挑战在电路效率与数据稀缺。"
          ],
          "en": [
            "ZKP programming is hard and error-prone; LLMs lack systematic evaluation.",
            "ZK-Eval benchmark covers language, gadget, and end-to-end generation.",
            "LLMs handle syntax well but fail on gadgets and semantics; Circom is harder.",
            "ZK-Coder uses sketching, retrieval, and repair to improve reliability.",
            "Success rates on Circom/Noir rise from <30% to 80–90%.",
            "Repair loop is crucial; challenges remain in efficiency and data scarcity."
          ]
        }
      }
    ]
  },
  {
    date: "2025-09-25",
    projects: [
      {
        "name": "Zinc: Succinct Arguments with Small Arithmetization Overheads from IOPs of Proximity to the Integers",
        "url": "https://eprint.iacr.org/2025/316",
        "type": "论文",
        "tags": [
          "Albert Garreta",
          "Nethermind Research",
        ],
        "summary": {
          "zh": "来自 @NethermindEth 的 Garreta等人在{{name}}论文中提出了一种基于哈希的简洁论证方案Zinc，通过整数上的IOPs减少算术化开销，支持任意模数的环运算。",
          "en": "@NethermindEth's Garreta et al. proposed Zinc, a hash-based succinct argument scheme that reduces arithmetization overheads using IOPs of proximity to integers, supporting ring operations with arbitrary moduli."
        },
        "notes": {
          zh: [
            "Zinc旨在减少ZK证明中的算术化开销，可降低数量级成本",
            "支持任意模数的环运算，包括非质数和多模数场景",
            "方案基于哈希和代码，无需隐藏阶群，增强安全性",
            "核心组件包括Zinc-PIOP框架和Zip多项式承诺",
            "利用有理数上的查找论证确保见证整数性",
            "适用于整数算术应用，提升ZK证明的实用效率"
          ],
          "en": [
            "Zinc aims to reduce arithmetization overheads in ZK proofs, lowering costs by orders of magnitude.",
            "Supports ring operations with arbitrary moduli, including non-prime and multi-modulus scenarios.",
            "Based on hash and code, no hidden order is required, enhancing security.",
            "Core components include the Zinc-PIOP framework and Zip polynomial commitments.",
            "Utilizes rational number-based lookup arguments to ensure proof integrity.",
            "Suitable for integer arithmetic applications, improving the practical efficiency of ZK proofs."
          ]
        }
      }
    ]
  },
  {
    date: "2025-09-26",
    projects: [
      {
        "name": "Programmable Cryptography: Four Easy Pieces",
        "url": "https://github.com/0xPARC/0xparc-intro-book/releases/tag/v2.0.0",
        "type": "信息",
        "tags": [
          "0xPARC",
          "Textbook",
          "Education"
        ],
        "summary": {
          "zh": "@0xPARC 团队发布了可编程密码学教材{{name}}的v2.0.0版本，包括更新内容和错误修复，支持ZK等密码学技术的学习。",
          "en": "@0xPARC team released the v2.0.0 version of the programmable cryptography textbook{{name}}, including updates and bug fixes, supporting learning of ZK and other cryptographic technologies."
        },
        "notes": {
          "zh": [
            "提出可编程密码学框架：2PC、SNARKs、FHE、ORAM。",
            "2PC：Yao电路与OT实现安全计算。",
            "SNARK基础：椭圆曲线与多项式承诺。",
            "SNARK实例：PLONK的算术化与约束检查。",
            "FHE：基于LWE的全同态加密与bootstrapping。",
            "ORAM：Path ORAM隐藏访问模式。"
          ],
          "en": [
            "Defines programmable cryptography with 2PC, SNARKs, FHE, ORAM.",
            "2PC: Secure computation via Yao’s circuits and OT.",
            "SNARK basics: elliptic curves and polynomial commitments.",
            "SNARK example: PLONK with arithmetization and constraints.",
            "FHE: LWE-based homomorphic encryption and bootstrapping.",
            "ORAM: Path ORAM to hide access patterns."
          ]
        }
        
      }
    ]
  },
  {
    date: "2025-09-28",
    projects: [
      {
        "name": "Scalable zkSNARKs for Matrix Computations: A Generic Framework for Verifiable Deep Learning",
        "url": "https://eprint.iacr.org/2025/1646",
        "type": "论文",
        "tags": [
          "Mingshu Cong",
          "zkML",
        ],
        "summary": {
          "zh": "Cong等人在{{name}}论文中提出了一种可扩展的zkSNARK框架，用于矩阵计算，实现线性证明时间、对数级证明大小和验证时间，同时保护架构隐私。",
          "en": "Cong et al. proposed a scalable zkSNARK framework for matrix computations, achieving linear proving time, logarithmic proof size, and verification time, while preserving architecture privacy."
        },
        "notes": {
          "zh": [
            "提出通用 zkSNARK 框架，将神经网络建模为矩阵计算 DAG。",
            "设计双层结构：LiteBullet 保持线性 prover，PoP 压缩证明并隐藏架构。",
            "LiteBullet 基于 folding 内积证明，避免多项式扩展与 sumcheck。",
            "Evalyn 接口统一不同矩阵与非线性操作，支持异构 NN。",
            "批处理与查表提升非线性函数和矩阵承诺效率。",
            "实现 O(Mn²) prover 与 O(log(Mn)) proof/验证复杂度，并开源实现。"
          ],
          "en": [
            "Proposes a generic zkSNARK framework modeling neural networks as matrix-computation DAGs.",
            "Introduces a dual-layer design: LiteBullet ensures linear proving, PoP compresses proofs and hides structure.",
            "LiteBullet uses folding-based inner product arguments, avoiding polynomial expansion and sumcheck.",
            "The Evalyn interface unifies diverse matrix and nonlinear operations, supporting heterogeneous NNs.",
            "Batching and lookup tables improve efficiency for nonlinear functions and matrix commitments.",
            "Achieves O(Mn²) prover and O(log(Mn)) proof/verification complexity, with an open-source implementation."
          ]
        }
        
      }
    ]
  },
  {
    date: "2025-09-30",
    projects: [
      {
        "name": "SP1 and zkVMs: A Security Auditor's Guide",
        "url": "https://blog.sigmaprime.io/sp1-zkvm-security-guide.html",
        "type": "博客",
        "tags": [
          "Sigma Prime",
          "zkVM",
          {zh:"审计", en:"Auditing"}
        ],
        "summary": {
          "zh": "Sigma Prime在{{name}}博客中分享了SP1 zkVM的安全审计指南，包括架构概述、输入验证、主机与客机代码分离以及常见漏洞缓解策略等内容。",
          "en": "Sigma Prime shared a security audit guide for SP1 zkVM on their blog{{name}}, covering architecture overview, input validation, host-guest code separation, and common vulnerability mitigation strategies."
        },
        "notes": {
          zh: [
            "所有输入数据均不可信，必须在客机程序中验证",
            "仅客机代码执行被证明，主机代码行为不受加密保证",
            "SP1使用32位RISC-V，需注意整数溢出和指针算术问题",
            "第三方依赖可能引入OS调用或64位假设，需审查和适配",
            "安全审计应聚焦输入验证和逻辑分离，防止恶意输入",
            "使用标准Rust工具链，但需注意zkVM环境限制"
          ],
          en: [
            "All input data is untrusted and must be validated in the guest program.",
            "Only guest code execution is proven, host code behavior is not guaranteed by encryption.",
            "SP1 uses 32-bit RISC-V, attention needed for integer overflow and pointer arithmetic.",
            "Third-party dependencies may introduce OS calls or 64-bit assumptions, requiring review and adaptation.",
            "Security audits should focus on input validation and logic separation to prevent malicious inputs.",
            "Uses standard Rust toolchain, but attention needed for zkVM environment constraints."
          ]
        }
      }
    ]
  }
];

const others = [
];



