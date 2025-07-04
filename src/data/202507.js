import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-07-01",
    projects: [
      {
        "name": "Diving Deep into Binius M3 Arithmetization Using Merkle Tree",
        "url": "https://blog.lambdaclass.com/diving-deep-into-binius-m3-arithmetization-using-merkle-tree/",
        "type": "博客",
        "tags": [
          "LambdaClass",
          "Binius",
          {zh: "M3算术化", en: "M3 Arithmetization"},
        ],
        "summary": {
          zh: "@class_lambda 在博客{{name}}中深入探讨了Binius框架下的M3算术化过程，特别是通过Merkle树的具体实现，详细解释了约束系统、表格和通道的表示与处理方式。",
          en: "@class_lambda discussed the M3 arithmetization process in Binius in blog{{name}}, particularly through the Merkle tree implementation, explaining the representation and processing of constraints, tables, and channels."
        },
        "notes": {
          zh: [
            "M3算术化通过表格和通道而非传统的执行轨迹来构建和验证复杂计算。",
            "MerkleTreeCS包含5个表格和3个通道，确保验证正确。",
            "不同表格分别处理不同情况下的Merkle路径验证。",
            "通道负责数据流动和验证过程中的关键通信。",
            "M3算术化不依赖全局执行轨迹，而通过通道平衡来验证。",
            "通过具体示例展示了如何构建Merkle树和验证路径。"
          ],
          en: [
            "M3 arithmetization uses tables and channels instead of traditional execution traces to build and verify complex calculations.",
            "MerkleTreeCS contains 5 tables and 3 channels to ensure verification correctness.",
            "Tables handle different cases of Merkle path verification.",
            "Channels are responsible for data flow and key communication during the verification process.",
            "M3 arithmetization does not depend on global execution traces but verifies through channel balance.",
            "Through specific examples, it shows how to build a Merkle tree and verify paths."
          ]
        }
      }
    ],
  },
  {
    date: "2025-07-03",
    projects: [
      {
        "name": "Unboxing Indistinguishability Obfuscation: A Practical Guide",
        "url": "https://machina-io.com/posts/unboxing.html",
        "type": "博客",
        "tags": [
          "Enrico Bottazzi",
          "iO",
        ],
        "summary": {
          zh: "Enrico Bottazzi等人在博客{{name}}中分享了关于不可区分性混淆(iO)的实践指南，包括从基础概念到构建非交互条件签名生成器的全过程。",
          en: "Enrico Bottazzi et al. shared a practical guide to indistinguishability obfuscation (iO) in blog{{name}}, covering the entire process from basic concepts to building non-interactive conditional signature printer."
        },
        "notes": {
          zh: [
            "iO被视为函数加密(FE)的扩展，可在密文中动态注入输入。",
            "构建iO的核心原语包括矩阵乘法、BGG+编码和格陷门。",
            "当前iO构造的主要效率瓶颈在于递归使用FE。",
            "通过非黑盒方式使用FE可以替换递归FE为简单的矩阵乘法，提高效率。",
            "iO技术有望解锁之前不可能的应用场景。",
            "文章旨在填补iO领域高深技术论文与初学者之间的空白。"
          ],
          en: [
            "iO is considered an extension of functional encryption (FE), allowing dynamic inputs to be injected into ciphertexts.",
            "The core primitives for building iO include matrix multiplication, BGG+ encoding, and lattice gates.",
            "The main efficiency bottleneck in current iO constructions is the recursive use of FE.",
            "Using FE in a non-black-box way can replace recursive FE with simple matrix multiplication, improving efficiency.",
            "iO technology is expected to unlock previously impossible application scenarios.",
            "This blog aims to be beginner-friendly."
          ]
        }
      }
    ],
  },
  {
    date: "2025-07-04",
    projects: [
      {
        "name": "Proof of Geolocation",
        "url": "https://x.com/aurobindo_arman/status/1940513543423668618",
        "type": "开源",
        "tags": [
          "Arman Aurobindo",
          {zh: "地理位置", en: "Geolocation"},
          "Mobile Proving"
        ],
        "summary": {
          zh: "@aurobindo_arman 使用 @zkmopro 和 @ZKVProtocol 构建了一个地理位置证明开源项目，支持在不泄露GPS坐标的情况下证明距离参考点的范围。",
          en: "@aurobindo_arman used @zkmopro and @ZKVProtocol to build a geolocation proof open-source project, supporting distance proofs without disclosing GPS coordinates."
        }
      },
      {
        "name": "Roc Camera: Capture verifiably real moments in the age of AI",
        "url": "https://roc.camera/",
        "type": "新闻",
        "tags": [
          "Roc Camera",
          {zh: "摄影", en: "Photography"},
          "TEE"
        ],
        "summary": {
          zh: "Roc Camera推出了一款能够捕捉可验证真实瞬间的相机，通过结合传感器、设备端零知识证明和防篡改的TEE环境，确保照片的真实性。",
          en: "Roc Camera launched a camera that can capture verifiably real moments, combining sensors, device-end zero-knowledge proofs, and tamper-proof TEE environments to ensure the authenticity of photos."
        }
      },
    ],
  }
];
const others = [
];


