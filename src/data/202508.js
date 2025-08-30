import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-08-02",
    projects: [
      {
        "name": "zkForge Bootcamp 2025",
        "url": "https://zkmonk.org/bootcamp-zkForge-2025",
        "type": "活动",
        "tags": [
          "zkMonk",
          "Bootcamp",
        ],
        "summary": {
          zh: "zkMonk组织的zkForge Bootcamp 2025现已开放申请，这是一个为期8周的密集ZK应用开发训练营，由顶级导师指导，内容包括ZK基础、证明者与验证者网络、以及真实世界应用开发。",
          en: "zkMonk organized the zkForge Bootcamp 2025, which is now open for applications. It is an 8-week intensive ZK application development training camp, led by top mentors, covering ZK fundamentals, prover and verifier networks, and real-world application development."
        },
      },
      {
        "name": "ZK Mesh: July 2025 Recap",
        "url": "https://zkmesh.substack.com/p/zk-mesh-july-2025-recap",
        "type": "新闻",
        "tags": [
          "ZK Hack",
          "ZK Mesh",
          {zh: "隐私增强技术", en: "PET"}
        ],
        "summary": {
          zh: "ZK Hack 发布 ZK Mesh 7月刊，回顾了最近在隐私加密、分布式协议和零知识证明领域的最新研究进展。",
          en: "ZK Hack published ZK Mesh July 2025 Recap, reviewing recent research progress in advanced privacy-enhancing cryptography, distributed protocol development, and zero-knowledge systems research."
        },
      },
    ],
  },
  {
    date: "2025-08-03",
    projects: [
      {
        "name": "FairZK: A Scalable System to Prove Machine Learning Fairness in Zero-Knowledge",
        "url": "https://ieeexplore.ieee.org/document/11023511",
        "type": "论文",
        "tags": [
          "Tianyu Zhang",
          "Fairness",
          "zkML"
        ],
        "summary": {
          zh: "Zhang等人在{{name}}论文中提出了FairZK系统，旨在通过ZK技术验证机器学习模型的公平性，为大规模应用提供了可扩展的解决方案。",
          en: "Zhang et al. proposed FairZK in the paper{{name}}, a scalable system to prove machine learning fairness in zero-knowledge, aiming to verify the fairness of machine learning models through ZK technology, providing scalable solutions for large-scale applications."
        },
      },
      {
        "name": "CoBBL: Dynamic Constraint Generation for SNARKs",
        "url": "https://ieeexplore.ieee.org/document/11023281",
        "type": "论文",
        "tags": [
          "Kunming Jiang",
          "CoBBL",
        ],
        "summary": {
          zh: "Jiang等人在{{name}}论文中提出了CoBBL，一种为SNARKs动态生成约束的方法，旨在提高证明生成的效率和灵活性。",
          en: "Jiang et al. proposed CoBBL in the paper{{name}}, a dynamic constraint generation method for SNARKs, aiming to improve the efficiency and flexibility of proof generation."
        },
      }
    ],
  },
  {
    date: "2025-08-05",
    projects: [
      {
        "name": "The Science of Blockchain Conference 2025 (SBC'25)",
        "url": "https://www.sbc-conference.com/2025/",
        "type": "活动",
        "tags": [
          "SBC'25",
          "Stanford",
        ],
        "summary": {
          zh: "SBC'25将于2025年8月4日至6日（正在直播）在加州大学伯克利分校Martin Luther King Jr.学生联合会大楼举行，聚焦区块链生态系统的技术创新，汇集该领域的研究人员和实践者。",
          en: "SBC'25 will take place from August 4 to 6, 2025, (live-streaming) at the Martin Luther King Jr. Student Union Building of the University of California, Berkeley, focusing on blockchain ecosystem innovation and gathering researchers and practitioners in the field."
        },
        "notes": {
          zh: [
            "包含区块链、密码学、分布式系统等领域的研究和合作。",
            "SBC'25将提供现场直播和会后录像，方便远程参与者。",
            "会前研讨会涵盖DAO、去中心化与AI、区块链应用等话题。",
            "组织委员会包括斯坦福大学、康奈尔等机构的知名学者。",
            "SBC'25是区块链技术领域的重要会议。"
          ],
          en: [
            "Includes research in blockchain, cryptography, and distributed systems.",
            "SBC'25 offers live streaming and post-event recordings for remote participants.",
            "Pre-conference workshops cover topics like DAOs, decentralization and AI, blockchain applications.",
            "Organizing committee consists of renowned scholars from Stanford, Cornell, and other institutions.",
            "SBC'25 is a important conference in the blockchain technology field."
          ]
        }
      }
    ],
  },
  {
    date: "2025-08-08",
    projects: [
      {
        "name": "Deep dive into the cryptographic math behind 𝒫𝔩𝔬𝔫𝒦 zero-knowledge proofs",
        "url": "https://plonk.zksecurity.xyz/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "Plonk",
          {zh: "交互式学习", en: "Interactive Learning"}
        ],
        "summary": {
          zh: "@zksecurityXYZ 在{{name}}博客中分享了关于𝒫𝔩𝔬𝔫𝒦零知识证明的密码学数学深度解析，包括交互式示例、完整协议实现以及复杂密码学概念的可视化学习。",
          en: "@zksecurityXYZ shared a deep dive into the cryptographic math behind 𝒫𝔩𝔬𝔫𝒦 zero-knowledge proofs in blog{{name}}, including interactive examples, complete protocol implementation, and visualization of complex cryptographic concepts."
        },
        "notes": {
          zh: [
            "提供了Sage/Python代码示例和练习以帮助理解",
            "包含从电路约束到验证的完整协议实现",
            "通过图表和可视化展示复杂的密码学概念",
            "专注于𝒫𝔩𝔬𝔫𝒦零知识证明的数学基础",
            "旨在通过交互式学习加深对ZK证明的理解"
          ],
          en: [
            "Provides Sage/Python code examples and exercises",
            "Includes protocol implementation from circuit constraints to verification",
            "Visualizes complex cryptographic concepts through charts and visualizations",
            "Focuses on the mathematical foundation of 𝒫𝔩𝔬𝔫𝒦 zero-knowledge proofs",
            "Aims to deepen understanding of ZK proofs through interactive learning"
          ]
        }
      }
    ]
  },
  {
    date: "2025-08-10",
    projects: [
      {
        "name": "Applied Cryptography CMPS 297AD/396AI",
        "url": "https://appliedcryptography.page/",
        "type": "活动",
        "tags": [
          "American University of Beirut",
          "Cryptography",
        ],
        "summary": {
          zh: "美国贝鲁特大学将于2025年8月25日至12月13日举办应用密码学课程，专注于现代密码学核心理论及其在安全系统中的应用，包括零知识证明等专题。",
          en: "The American University of Beirut will host the Applied Cryptography course from August 25 to December 13, 2025, focusing on modern cryptography core theory and its application in secure systems, including zero-knowledge proofs."
        },
      },
      {
        "name": "Ethereum Attestation Service (EAS)",
        "url": "https://attest.org/",
        "type": "博客",
        "tags": [
          "EAS Team",
          "Attestation",
        ],
        "summary": {
          zh: "EAS团队分享了关于Ethereum Attestation Service的信息，讨论了EAS作为一个基础设施公共产品，支持在链上或链下进行任何事物的证明。",
          en: "EAS team shared information about Ethereum Attestation Service, discussing EAS as an infrastructure public product, supporting any thing to be proven on or off-chain."
        },
      }
    ],
  },
  {
    date: "2025-08-14",
    projects: [
      {
        "name": "Data Availability Sampling with Repair",
        "url": "https://eprint.iacr.org/2025/1414",
        "type": "论文",
        "tags": [
          "Dan Boneh",
          {zh: "数据可用性采样", en: "Data Availability Sampling"},
        ],
        "summary": {
          zh: "Boneh等人在{{name}}论文中提出了数据可用性采样（DAS）的修复框架，基于局部可纠正多重性码设计新方案，优化了存储开销和修复带宽。",
          en: "Boneh et al. proposed a repair framework for data availability sampling (DAS) in paper{{name}}, based on locally repairable codes, optimizing storage overhead and repair bandwidth."
        },
      },
      {
        "name": "New Bitcoin Whiteboard. We can do better than BitVM.",
        "url": "https://x.com/david_seroy/status/1953471306894299410",
        "type": "视频",
        "tags": [
          "David Seroy",
          "Bitcoin",
          "BitVM"
        ],
        "summary": {
          zh: "David Seroy发布了一段关于比特币的新白板视频，讨论了比特币桥接和ZK验证、对Rollups的批评回应、乐观ZK验证、BitVM的不同版本比较、混淆电路以及比特币桥接的未来Glock等内容。",
          en: "David Seroy released a new video about Bitcoin, discussing Bitcoin bridge and ZK verification, criticism of Rollups, optimistic ZK verification, different versions of BitVM, garbled circuits, and the future of Bitcoin bridge Glock."
        },
      }
    ],
  },
  {
    date: "2025-08-15",
    projects: [
      {
        "name": "Time-Space Trade-Offs for Sumcheck",
        "url": "https://eprint.iacr.org/2025/1473",
        "type": "论文",
        "tags": [
          "Anubhav Baweja",
          "Chiesa",
          "Sumcheck",
        ],
        "summary": {
          zh: "Baweja等人在{{name}}论文中研究了sumcheck协议证明者在流模型中的时间空间权衡，提出了上下界，紧密刻画了证明者可实现的效率。",
          en: "Baweja et al. studied the time-space trade-offs for sumcheck protocol provers in the stream model, proposing upper and lower bounds, tightly characterizing the efficiency of provers."
        },
      },
      {
        "name": "Interstellar: GKR Protocol based Low Prover Cost Folding Scheme for Circuit Satisfiability",
        "url": "https://eprint.iacr.org/2025/1294",
        "type": "论文",
        "tags": [
          "Jieyi Long",
          "GKR",
          "zkML",
          "zkVM"
        ],
        "summary": {
          zh: "Jieyi Long在{{name}}论文中提出了Interstellar，一种基于GKR协议的低证明者成本折叠方案，专为电路可满足性设计。通过电路插值技术，该方案显著减少了每步折叠中需要承诺的向量大小，降低了证明者开销。",
          en: "Jieyi Long proposed Interstellar, a low-prover-cost folding scheme based on GKR protocol for circuit satisfiability in paper{{name}}, significantly reducing the vector size needed for commitment in each step of folding, lowering prover overhead."
        },
      }
    ],
  },
  {
    date: "2025-08-18",
    projects: [
      {
        "name": "Jolt Achieves 6x Speedup with Twist and Shout Integration",
        "url": "https://a16zcrypto.com/posts/article/jolt-6x-speedup/",
        "type": "开源",
        "tags": [
          "a16z crypto",
          "zkVM",
          "Jolt",
        ],
        "summary": {
          zh: "@a16zcrypto 团队宣布Jolt项目整合了Twist和Shout内存检查参数，实现了显著的性能提升，包括在32核CPU上每秒超过100万RISC-V周期，证明大小约为50KB，代码库更加简洁。",
          en: "@a16zcrypto team announced that the Jolt project integrated Twist and Shout memory check parameters, achieving significant performance improvements, including over 1 million RISC-V cycles per second on a 32-core CPU, proof size of about 50KB, and a more concise codebase."
        },
      },
      {
        "name": "GKR Protocol Implementation: Deep Dive into the Code",
        "url": "https://blog.lambdaclass.com/gkr-protocol-implementation-deep-dive-into-the-code/",
        "type": "博客",
        "tags": [
          "Lambdaclass",
          "GKR",
          "Sumcheck",
        ],
        "summary": {
          zh: "@class_lambda 团队在博客{{name}}中深入探讨了GKR协议的实现细节，包括算术电路的描述与验证、证明者与验证者的实际操作，以及如何应用Fiat-Shamir变换使协议非交互式。",
          en: "@class_lambda team in blog{{name}} delved into the details of GKR protocol implementation, including arithmetic circuit description and verification, prover and verifier actual operations, and how to apply Fiat-Shamir transformation to make the protocol non-interactive."
        },
      }
    ],
  },
  {
    date: "2025-08-20",
    projects: [
      {
        "name": "FRIttata: Distributed Proof Generation of FRI-based SNARKs",
        "url": "https://eprint.iacr.org/2025/1285",
        "type": "论文",
        "tags": [
          "Hua Xu",
          {zh: "分布式计算", en: "distributed computing"},
          "FRI"
        ],
        "summary": {
          zh: "Xu等人在{{name}}论文中提出了FRIttata，首个既透明又后量子安全的水平可扩展SNARK系统，通过基于FRI的双变量多项式承诺方案，实现了分布式证明生成。",
          en: "Xu et al. proposed FRIttata, the first transparent and post-quantum secure horizontally scalable SNARK system, using a double-variable polynomial commitment scheme based on FRI, achieving distributed proof generation."
        },
      },
      {
        "name": "Collaborative zkSNARKs with Sublinear Prover Time and Constant Proof Size",
        "url": "https://eprint.iacr.org/2025/1388",
        "type": "论文",
        "tags": [
          "Zhiyong Fang",
          "CoSNARK",
        ],
        "summary": {
          zh: "Fang等人在{{name}}论文中提出了一种新的协作式zkSNARK方案，具有$O(\\frac{C}{n}\\log\\frac{C}{n})$证明者时间和$O(1)$证明大小，显著提高了效率。",
          en: "Fang et al. proposed a new collaborative zkSNARK scheme in paper{{name}}, with $O(\\frac{C}{n}\\log\\frac{C}{n})$ prover time and $O(1)$ proof size, significantly improving efficiency."
        },
      }
    ],
  },
  {
    date: "2025-08-21",
    projects: [
      {
        "name": "WHIR for Ethereum zk-s[nt]arks",
        "url": "https://ethresear.ch/t/whir-for-ethereum/22938",
        "type": "博客",
        "tags": [
          "Thomas Coratger",
          "Reed-Solomon codes",
        ],
        "summary": {
          zh: "Coratger 等人在{{name}}博客中介绍了WHIR，一种递归的、基于哈希的接近性测试协议，并讨论由其支撑的以太坊高效证明系统。",
          en: "Coratger et al. introduced WHIR, a recursive, hash-based proximity testing protocol, and discussed the Ethereum efficient proof system supported by it in the{{name}} blog."
        },
      },
      {
        "name": "whir-p3",
        "url": "https://github.com/tcoratger/whir-p3",
        "type": "开源",
        "tags": [
          "tcoratger",
          "Plonky3",
          "Rust"
        ],
        "summary": {
          zh: "@tcoratger 发布了whir-p3开源项目，基于Plonky3库构建WHIR，支持ZK证明生成和验证，使用Rust语言实现。",
          en: "@tcoratger released whir-p3 open source project, based on Plonky3 library to build WHIR, supporting ZK proof generation and verification, using Rust language."
        },
      },
    ],
  },
  {
    date: "2025-08-25",
    projects: [
      {
        "name": "Linear algebra over field extensions",
        "url": "https://lmao.bearblog.dev/linear-algebra-field-extensions/",
        "type": "博客",
        "tags": [
          "Guillermo Angeris",
          "Linear Algebra",
          "Field Extensions",
        ],
        "summary": {
          zh: "Guillermo Angeris在{{name}}博客中讨论了在ZK证明中使用不同有限域的线性代数操作，包括基础域和扩展域之间的矩阵向量乘法优化。",
          en: "Guillermo Angeris discussed linear algebra over field extensions in blog{{name}}, including matrix vector multiplication between base and extension fields in ZK proofs."
        },
      },
      {
        "name": "ZK Catalog by L2BEAT",
        "url": "https://l2beat.com/zk-catalog",
        "type": "工具",
        "tags": [
          "L2BEAT",
          "Proof Systems"
        ],
        "summary": {
          zh: "L2BEAT分享了ZK Catalog，展示了使用ZK的区块链项目的ZK特性，及其技术栈、曲线选择以及风险分析等。",
          en: "L2BEAT shared the ZK Catalog, showcasing the ZK features of blockchain projects, their technology stack, curve selection, and risk analysis."
        },
      }
    ],
  },
  {
    date: "2025-08-28",
    projects: [
      {
        "name": "Sumcheck, Good Lookups, Good Jolt, Good Particularly for Zero-Knowledge Machine Learning",
        "url": "https://blog.icme.io/sumcheck-good-lookups-good-jolt-good-particularly-for-zero-knowledge-machine-learning/",
        "type": "博客",
        "tags": [
          "ICME team",
          "zkML",
          "JOLT",
          "sumcheck",
        ],
        "summary": {
          zh: "ICME团队分享了zkML-JOLT（Atlas）如何通过sumcheck协议和查找表优化，将zkML速度提升3-7倍，专注于神经网络推理中的稀疏性和非线性的高效处理。",
          en: "ICME team shared how zkML-JOLT (Atlas) achieves a 3-7x speedup in zkML by using sumcheck protocol and lookup arguments, focusing on efficient processing of sparsity and non-linearity in neural network inference."
        },
      },
      {
        "name": "JOLT Atlas",
        "url": "https://github.com/ICME-Lab/jolt-atlas",
        "type": "开源",
        "tags": [
          "ICME-Lab",
          "zkML",
          "JOLT",
          "ONNX",
        ],
        "summary": {
          zh: "ICME-Lab团队开源了JOLT Atlas，这是一个基于JOLT证明系统的zkML框架，支持从ONNX模型进行ML推理验证，通过查找参数简化证明过程。",
          en: "ICME-Lab team released JOLT Atlas, a zkML framework based on JOLT proof system, supporting ML inference verification from ONNX models, simplifying proof process through lookup arguments."
        },
      },
    ],
  },
  {
    date: "2025-08-30",
    projects: [
      {
        "name": "Constraint-Friendly Map-to-Elliptic-Curve-Group Relations and Their Applications",
        "url": "https://eprint.iacr.org/2025/1503",
        "type": "论文",
        "tags": [
          "Jens Groth",
          "Multiset hashing"
        ],
        "summary": {
          zh: "Groth等人在{{name}}论文中提出了一种约束友好的映射到椭圆曲线群关系，绕过加密哈希函数需求，在ZKP中实现高效证明，减少约束和加速证明时间。",
          en: "Groth et al. proposed a constraint-friendly mapping to elliptic curve group relations in paper{{name}}, avoiding encryption hash functions, achieving efficient proofs in ZKP, reducing constraints and accelerating proof time."
        },
        "notes": {
          zh: [
            "提出约束高效的映射关系，替代传统哈希到曲线方法",
            "在EC-GGM中分析安全性，支持非确定性映射",
            "实现约束减少23倍，证明时间加速50-100倍",
            "适用于zkVM内存检查和BLS签名等ZKP场景",
            "开源实现基于Noir/Barretenberg，提升实际应用效率",
            "为ZKP和约束编程提供更优的密码学原语"
          ],
          en: [
            "Propose constraint-friendly mapping to elliptic curve group relations, replacing traditional hash to curve method",
            "Analyze security in EC-GGM, support non-deterministic mapping",
            "Achieve constraint reduction by 23x, proof time acceleration by 50-100x",
            "Suitable for zkVM memory checks and BLS signature ZKP scenarios",
            "Open-source implementation based on Noir/Barretenberg, enhancing practical application efficiency",
            "Provide better cryptographic primitives for ZKP and constraint programming"
          ]
        }
      },
    ],
  }
];
const others = [
];


