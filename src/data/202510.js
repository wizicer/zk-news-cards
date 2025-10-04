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
  }
];

const others = [
];



