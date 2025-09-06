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
  }
];

const others = [
];



