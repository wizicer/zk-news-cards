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
  }
];
const others = [
];

