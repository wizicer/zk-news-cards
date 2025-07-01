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
];
const others = [
];


