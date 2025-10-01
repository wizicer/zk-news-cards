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
];

const others = [
];



