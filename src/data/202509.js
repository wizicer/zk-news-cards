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
  }
];

const others = [
];



