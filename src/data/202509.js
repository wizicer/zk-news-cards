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
];

const others = [
];



