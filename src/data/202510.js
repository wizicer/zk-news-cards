import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-10-01",
    projects: [
      {
        "name": "A Comparison of zkVM DSLs: Halo2, Zirgen, and Plonky3",
        "url": "https://hexens.io/blog/zkvm-dsls",
        "type": "博客",
        "tags": [
          "Hexens",
          "Halo2",
          "Plonky3",
        ],
        "summary": {
          zh: "@hexensio 团队在{{name}}博客中比较了Halo2、Zirgen和Plonky3三种zkVM DSL，分析了它们在电路架构、数据模型和约束表达方面的差异。",
          en: "@hexensio team compared Halo2, Zirgen, and Plonky3 three zkVM DSLs in their blog{{name}}, analyzing their differences in circuit architecture, data model, and constraint expression."
        },
        "notes": {
          "zh": [
            "三大DSL：Halo2（PLONKish矩阵）、Zirgen（STARK踪迹）、Plonky3（AIR直接约束）",
            "架构差异：矩阵vs状态转移vs多项式恒等式",
            "数据模型：类型化列vs寄存器组合vs无类型列",
            "公共接口：实例列vs关键字vs显式绑定",
            "约束方式：旋转门vs跨周期引用vs守卫机制",
            "核心权衡：抽象度vs控制力vs开发效率"
          ],
          "en": [
            "Three DSLs: Halo2 (PLONKish matrix), Zirgen (STARK trace), Plonky3 (AIR direct constraints)",
            "Architecture: Matrix vs state transitions vs polynomial identities",
            "Data model: Typed columns vs register composition vs typeless columns",
            "Public interface: Instance columns vs keyword vs explicit binding",
            "Constraint method: Rotation gates vs cross-cycle references vs guard mechanisms",
            "Core trade-off: Abstraction vs control vs development efficiency"
          ]
        }
        
      }
    ],
  },
  {
    date: "2025-10-03",
    projects: [
      {
        "name": "Arbitrary code execution in guest via memory safety failure in `sys_read`",
        "url": "https://github.com/risc0/risc0/security/advisories/GHSA-jqq4-c7wq-36h7",
        "type": "开源",
        "tags": [
          "RISC0",
          {zh: "漏洞", en: "Vulnerability"},
        ],
        "summary": {
          zh: "@risczero 团队在GitHub安全公告中披露了zkVM平台中的高危漏洞，涉及sys_read函数内存安全问题，可能导致任意代码执行，已发布修复版本。",
          en: "@risczero team disclosed a high-risk vulnerability in the zkVM platform, involving a memory safety issue in the sys_read function, which could lead to arbitrary code execution. The vulnerability has been fixed."
        },
        "notes": {
          "zh": [
            "漏洞允许主机通过sys_read写入guest任意内存位置，执行任意代码",
            "所有使用受影响版本的guest程序均存在风险，严重破坏ZK保证",
            "修复已应用于risc0-zkvm版本2.3.2和3.0.3，移除不安全指针运算",
            "开发者需更新Cargo.toml中相关crate版本并重建应用",
            "RISC Zero proof系统和电路未受影响，无需prover行动",
            "使用risc0-aggregation或RiscZeroSetVerifier的项目需升级至>=0.9版本"
          ],
          "en": [
            "Vulnerability allows host to write arbitrary code to guest memory via sys_read",
            "All guest programs using affected versions are at risk, breaking zk guarantees",
            "Fix has been applied to risc0-zkvm versions 2.3.2 and 3.0.3, removing unsafe pointer operations",
            "Developers need to update Cargo.toml with related crate versions and rebuild application",
            "RISC Zero proof system and circuits are not affected, no prover action needed",
            "Projects using risc0-aggregation or RiscZeroSetVerifier need to upgrade to >=0.9 version"
          ]
        }
      }
    ],
  },
  {
    date: "2025-10-04",
    projects: [
      {
        "name": "Intel and AMD trusted enclaves, the backbone of network security, fall to physical attacks",
        "url": "https://arstechnica.com/security/2025/09/intel-and-amd-trusted-enclaves-the-backbone-of-network-security-fall-to-physical-attacks/",
        "type": "新闻",
        "tags": [
          "Dan Goodin",
          "Ars Technica",
          "TEE",
        ],
        "summary": {
          "zh": "研究人员独立发布两篇论文，披露针对Intel SGX和AMD SEV-SNP的物理攻击Battering RAM和Wiretap，利用确定性加密漏洞，允许攻击者查看和操纵受保护数据。",
          "en": "Researchers independently published two papers disclosing physical attacks Battering RAM and Wiretap against Intel SGX and AMD SEV-SNP, exploiting deterministic encryption vulnerabilities, allowing attackers to view and manipulate protected data."
        },
        "notes": {
          "zh": [
            "TEE依赖确定性加密，易受重放攻击，需改硬件以增强安全",
            "Battering RAM攻击成本低于50美元，支持数据读写和篡改",
            "Wiretap攻击成本500-1000美元，仅支持被动数据读取",
            "攻击通过物理拦截器实现，物理访问可导致漏洞利用",
            "芯片商称TEE设计不防御物理攻击，但云服务仍广泛依赖",
            "区块链服务如Phala使用TEE保护智能合约，面临潜在安全风险"
          ],
          "en": [
            "TEE depends on deterministic encryption, vulnerable to replay attacks, requiring hardware changes to enhance security",
            "Battering RAM attack costs less than $50, supporting active data read and write",
            "Wiretap attack costs $500-1000, supporting passive data read only",
            "Attacks through physical interceptors, supply chain or physical access can lead to vulnerability exploitation",
            "Chip manufacturers claim TEE design does not defend against physical attacks, but cloud services still widely rely on it",
            "Blockchain services like Phala use TEE to protect smart contracts, facing potential security risks"
          ]
        }
      }
    ]
  },
  {
    date: '2025-10-08',
    projects: [
      {
        "name": "PSE September 2025 Newsletter",
        "url": "https://pse.dev/blog/pse-september-2025-newsletter",
        "type": "新闻",
        "tags": [
          "PSE",
          "Privacy"
        ],
        "summary": {
          "zh": "@PrivacyEthereum 团队发布了九月通讯，涵盖ZK-Kit进展和PSE路线图，聚焦零知识技术在去中心化和隐私保护方面的应用。",
          "en": "@PrivacyEthereum team released September 2025 newsletter, covering ZK-Kit progress and PSE roadmap, focusing on the application of zero-knowledge technology in decentralization and privacy protection."
        },
        "notes": {
          zh: [
            "ZK-Kit团队专注于零知识工具开发，提升编程密码学能力",
            "PSE路线图概述2025年及未来在零知识领域的战略方向",
            "强调去中心化和隐私保护在零知识技术中的重要性",
            "通讯内容涵盖开源项目更新和社区动态",
            "零知识证明技术正推动区块链隐私和可扩展性发展",
            "团队持续优化工具以支持开发者构建ZK应用"
          ],
          en: [
            "The ZK-Kit team focuses on developing zero-knowledge tools, enhancing programming cryptographic capabilities",
            "PSE roadmap outlines 2025 and future strategic directions in the zero-knowledge domain",
            "Emphasizing decentralization and privacy protection in zero-knowledge technology",
            "Newsletter content covers open-source project updates and community dynamics",
            "Zero-knowledge proof technology is driving blockchain privacy and scalability development",
            "The team continues to optimize tools to support developers in building ZK applications"
          ]
        }
      }
    ]
  },
  {
    date: "2025-10-09",
    projects: [
      {
        "name": "Introducing Valida zkVM 1.0: A Foundation for Verifiable Applications",
        "url": "https://www.lita.foundation/blog/introducing-valida-zkvm-1-0",
        "type": "新闻",
        "tags": [
          "Lita Team",
          "zkVM",
          "Verifiable Computing",
        ],
        "summary": {
          "zh": "@0xLita 团队发布了Valida zkVM 1.0，包括并行证明和编译器优化等特性，提升了性能和开发者体验，但强调其尚未达到生产就绪状态。",
          "en": "@0xLita team released Valida zkVM 1.0, including parallel proving and compiler optimizations, improving performance and developer experience, but emphasizing that it is not yet production-ready."
        },
        "notes": {
          zh: [
            "Valida zkVM 1.0引入并行证明，可显著加速多段工作负载",
            "编译器工具链优化包括智能分支和操作数折叠，提升代码效率",
            "新增布尔约束和程序一致性检查，强化证明正确性",
            "安全性问题：健全性审查仍在进行，不建议用于生产环境",
            "感谢Hideaki Takahashi修复关键健全性错误，推动协作开发",
            "未来计划扩展性能、语言支持和应用规模"
          ],
          en: [
            "Valida zkVM 1.0 introduces parallel proving, significantly accelerating multi-threaded workloads",
            "Compiler toolchain optimizations include smart branching and operation folding, improving code efficiency",
            "New Boolean constraints and program consistency checks strengthen proof correctness",
            "Security issue: Soundness auditing is still in progress, not recommended for production environment",
            "Thanks to Hideaki Takahashi for fixing critical soundness errors, promoting collaborative development",
            "Future plans include expanding performance, language support, and application scale"
          ]
        }
      }
    ]
  },
  {
    date: "2025-10-12",
    projects: [
      {
        "name": "SoK: Lookup Table Arguments",
        "url": "https://eprint.iacr.org/2025/1876",
        "type": "论文",
        "tags": [
          "Hossein Hafezi",
          "Lookup Arguments",
        ],
        "summary": {
          "zh": "Hafezi等人在{{name}}论文中系统化分析了查找表论证的设计，提出统一框架覆盖多种查找类型，并评估现有协议在证明成本、可组合性等方面的表现。",
          "en": "Hafezi et al. in {{name}} paper systematize the design of lookup table arguments, propose a unified framework covering various lookup types, and evaluate existing protocols in terms of proof cost, composability, etc."
        },
        "notes": {
          "zh": [
            "查找表论证广泛用于非本地操作、zk-VM和集合成员证明",
            "现有构造在假设、效率和可组合性上差异显著",
            "引入统一框架覆盖标准、投影、索引、向量和可分解查找",
            "分类协议基于证明技术和组合风格",
            "评估维度包括证明者成本、表大小依赖和递归证明兼容性",
            "提供实践选择指南并突出预处理和可分解性的优势与限制"
          ],
          "en": [
            "Lookup table arguments are widely used in non-interactive operations, zk-VM and set membership proofs",
            "Existing constructions differ in assumptions, efficiency, and composability",
            "Introduce a unified framework covering standard, projection, index, vector and decomposable lookups",
            "Classify protocols based on proof technology and composition style",
            "Evaluation metrics include prover cost, table size dependence, and recursive proof composability",
            "Provide practical guidance on selection and highlight the advantages and limitations of preprocessing and decomposability"
          ]
        }
      }
    ]
  },
  {
    date: "2025-10-13",
    projects: [
      {
        "name": "Dynark: Making Groth16 Dynamic",
        "url": "https://eprint.iacr.org/2025/1897",
        "type": "论文",
        "tags": [
          "Tianyu Zhang",
          "Dynamic",
          "Groth16",
        ],
        "summary": {
          "zh": "Zhang等人在{{name}}论文中提出了一种动态zkSNARK方案DYNARK，可在见证小变化时以次线性时间更新证明，基于Groth16协议优化效率。",
          "en": "Zhang et al. in {{name}} paper proposed a dynamic zkSNARK scheme DYNARK, which can update proofs in sublinear time when witnessing small changes, based on Groth16 protocol to optimize efficiency."
        },
        "notes": {
          zh: [
            "DYNARK支持见证小变化时的快速证明更新，减少计算开销",
            "半动态设置下更新时间为O(d)群操作，全动态为O(d√n log n)",
            "证明大小保持192字节，验证时间4.4毫秒，与Groth16一致",
            "实验表明，n=2^20时，预处理74.3秒后更新仅需3-60毫秒",
            "无需依赖配对乘积参数或其他zkSNARK，简化系统设计",
            "完全兼容现有Groth16基础设施，便于实际部署"
          ],
          en: [
            "DYNARK supports fast proof updates when witnessing small changes, reducing computational overhead",
            "Update time is O(d) group operations in semi-dynamic settings, O(d√n log n) in fully dynamic settings",
            "Proof size remains 192 bytes, verification time 4.4 milliseconds, consistent with Groth16",
            "Experiments show that with n=2^20, preprocessing takes 74.3 seconds and updates take 3-60 milliseconds",
            "Does not depend on pairing product parameters or other zkSNARKs, simplifying system design",
            "Fully compatible with existing Groth16 infrastructure, making deployment easier"
          ]
        }
      }
    ]
  },
  {
    date: "2025-10-14",
    projects: [
      {
        "name": "Shielded CSV: Private and Efficient Client-Side Validation",
        "url": "https://eprint.iacr.org/2025/068",
        "type": "论文",
        "tags": [
          "Jonas Nick",
          "Bitcoin",
          "PCD",
        ],
        "summary": {
          "zh": "Nick等人在{{name}}论文中提出Shielded CSV协议，结合PCD抽象实现高效隐私交易，仅需64字节数据写入区块链，提升比特币隐私至每秒100笔交易。",
          "en": "Nick et al. in {{name}} paper proposed Shielded CSV protocol, combining PCD abstraction to achieve efficient privacy transactions, requiring only 64 bytes of data written to the blockchain, improving Bitcoin privacy to 100 transactions per second."
        },
        "notes": {
          zh: [
            "Shielded CSV提供首个真正私有交易构造，仅需64字节nullifier写入区块链",
            "验证成本低，用户仅需单个Schnorr签名验证，非用户可忽略数据",
            "证明大小独立于交易历史，提升效率和隐私",
            "基于PCD抽象，支持折叠方案和递归STARKs等实现策略",
            "可扩展性强，未来可进一步改进框架和协议",
            "安全性高，通过ZK证明保护交易隐私，减少数据泄露风险"
          ],
          en: [
            "Shielded CSV provides the first truly private transaction construction, requiring only 64 bytes of nullifier written to the blockchain",
            "Verification cost is low, users only need a single Schnorr signature verification, non-users can ignore data",
            "Proof size is independent of transaction history, improving efficiency and privacy",
            "Based on PCD abstraction, supports folding schemes and recursive STARKs etc. implementation strategies",
            "Extremely scalable, future can further improve the framework and protocol",
            "High security, protected by ZK proofs, reducing data leakage risk"
          ]
        }
      }
    ]
  },
  {
    date: "2025-10-16",
    projects: [
      {
        "name": "Poseidon2b: A Binary Field Version of Poseidon2",
        "url": "https://eprint.iacr.org/2025/1893",
        "type": "论文",
        "tags": [
          "Lorenzo Grassi",
          "Poseidon",
          "Binius",
        ],
        "summary": {
          "zh": "Grassi等人在{{name}}论文中提出了Poseidon2b，这是一种专为二进制扩展字段设计的哈希函数，旨在继承Poseidon2的电路友好特性，并与Binius等证明系统兼容，同时分析了代数密码分析和子空间轨迹等攻击向量。",
          "en": "Grassi et al. in {{name}} paper proposed Poseidon2b, a hash function designed for binary extension fields, inheriting the circuit-friendly characteristics of Poseidon2, and compatible with Binius et al. proof systems, analyzing algebraic cryptanalysis and subspace trajectory attacks."
        },
        "notes": {
          "zh": [
            "Poseidon2b专为二进制扩展字段设计，继承电路友好特性",
            "与Binius等证明系统兼容，优化证明和验证时间",
            "重新评估Poseidon和Poseidon2的攻击在二进制字段的适用性",
            "重点关注代数密码分析和子空间轨迹等攻击向量",
            "基准测试显示在证明大小、时间和验证方面有优势",
            "安全性分析强调二进制字段特有的攻击风险"
          ],
          "en": [
            "Poseidon2b is designed for binary extension fields, inheriting the circuit-friendly characteristics",
            "Compatible with Binius et al. proof systems, optimizing proof and verification time",
            "Re-evaluating Poseidon and Poseidon2 attacks in binary extension fields",
            "Focusing on algebraic cryptanalysis and subspace trajectory attacks",
            "Benchmarking shows advantages in proof size, time, and verification",
            "Security analysis highlights the unique attack risks of binary extension fields"
          ]
        }
      }
    ]
  },
  {
    date: "2025-10-17",
    projects: [
      {
        "name": "Announcing Pico Prism",
        "url": "https://x.com/brevis_zk/status/1978430670390133237",
        "type": "新闻",
        "tags": [
          "Brevis",
          "zkVM",
        ],
        "summary": {
          "zh": "@brevis_zk 推出Pico Prism (zkVM)，性能大幅提升：10秒内交易覆盖率升至98.9%，硬件成本降50%至12.8万美元，证明时间缩短至约6秒。该方案旨在突破以太坊验证瓶颈，所有测试已开源。",
          "en": "@brevis_zk announced Pico Prism (zkVM), which achieved significant performance improvements: 98.9% transaction coverage within 10 seconds, hardware cost reduced by 50% to $128,000, proof time shortened to about 6 seconds. The scheme aims to break through Ethereum verification bottlenecks, with all benchmark open-sourced."
        },
        "images": [
          "./images/2025/10/17_pico_vs_sp1.png"
        ]
      }
    ]
  },
  {
    date: "2025-10-20",
    projects: [
      {
        "name": "A GKR Tutorial",
        "url": "https://vitalik.eth.limo/general/2025/10/19/gkr.html",
        "type": "博客",
        "tags": [
          "Vitalik Buterin",
          "GKR",
          "Sumcheck",
        ],
        "summary": {
          "zh": "@VitalikButerin 在{{name}}博客中详细讲解了GKR协议，包括其在ZK证明系统中的应用、Sumcheck协议原理以及Poseidon哈希的证明优化等内容。",
          "en": "@VitalikButerin in {{name}} blog post detailedly explained the GKR protocol, including its application in ZK proof systems, the principle of Sumcheck protocol, and the proof optimization of Poseidon hash function."
        },
        "notes": {
          "zh": [
            "GKR为批量分层计算设计，无需中间层承诺",
            "基于Sumcheck协议，递归转化验证问题",
            "专攻哈希和神经网络等结构化计算",
            "优化后理论开销<15x，实践可达个位数",
            "需结合其他系统实现零知识",
            "支持扩展优化，宽度增加时开销趋零"
          ],
          "en": [
            "GKR for batched layered computations, no intermediate commitments",
            "Uses sumcheck to recursively transform verification",
            "Specialized for hashes and neural networks",
            "Optimized overhead <15x theoretically, single-digit practically",
            "Requires ZK-SNARK/STARK for privacy",
            "Extensions enable near-zero overhead at scale"
          ]
        }
      }
    ]
  },
  {
    date: "2025-10-21",
    projects: [
      {
        "name": "High-Throughput Universally Composable Threshold FHE Decryption",
        "url": "https://eprint.iacr.org/2025/1781",
        "type": "论文",
        "tags": [
          "Guy Zyskind",
          "FHE",
          "MPC",
        ],
        "summary": {
          "zh": "Zyskind等人在{{name}}论文中提出了一种高效阈值FHE解密协议，避免噪声泛滥，通过安全MPC舍入实现UC框架下的模拟安全，在线阶段吞吐量提升约20,000倍。",
          "en": "Zyskind et al. in {{name}} paper proposed an efficient threshold FHE decryption protocol, avoiding noise proliferation, through secure MPC rounding to achieve simulation security in the UC framework, with online throughput improvement of approximately 20,000 times."
        },
        "notes": {
          "zh": [
            "协议避免噪声泛滥，减少开销和参数大小",
            "采用离线/在线设计，预处理降低在线通信和计算成本",
            "支持多种敌手模型，如不诚实多数或诚实多数",
            "在线阶段吞吐量提升约20,000倍，延迟优化达37倍",
            "技术可应用于其他MPC协议，如安全机器学习",
            "在UC框架下证明安全，增强可组合性和实用性"
          ],
          "en": [
            "Protocol avoids noise proliferation, reducing overhead and parameter size",
            "Offline/online design, preprocessing reduces online communication and computation cost",
            "Supports multiple adversary models, such as dishonest majority or honest majority",
            "Online throughput improvement of approximately 20,000 times, with a latency optimization of up to 37 times",
            "Technique can be applied to other MPC protocols, such as secure machine learning",
            "Proven secure in the UC framework, enhancing composability and practicality"
          ]
        }
      }
    ]
  }
];

const others = [
];



