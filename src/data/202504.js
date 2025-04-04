import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-04-01",
    projects: [
      {
        "name": "ZKProof7 Conference in Sofia",
        "url": "https://zkproof.org/events/zkproof-7-sofia/",
        "type": "活动",
        "tags": [
          "ZKProof7",
          {zh: "会议", en: "Conference"}
        ],
        "summary": {
          zh: "ZKProof社区于2025年3月23日至25日在保加利亚索菲亚举办了ZKProof7会议，聚焦ZK技术的最新进展，已发布所有会议录屏和演讲材料。",
          en: "The ZKProof community held the ZKProof7 conference in Sofia from March 23-25, focusing on the latest progress in ZK technology, with all recordings and slides now available."
        }
      },
      {
        "name": "GKR Protocol: A Step-by-Step Example",
        "url": "https://blog.lambdaclass.com/gkr-protocol-a-step-by-step-example/",
        "type": "博客",
        "tags": [
          "LambdaClass",
          "GKR",
          "Sum-Check",
        ],
        "summary": {
          zh: "@class_lambda 在博客{{name}}中详细解释了GKR协议的工作原理，通过一个具体的例子展示了如何利用交互式证明和sum-check协议来高效验证算术电路的正确性。",
          en: "@class_lambda explained the GKR protocol in a blog post{{name}}, demonstrating how to efficiently verify the correctness of arithmetic circuits using interactive proofs and sum-check protocols."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-02",
    projects: [
      {
        "name": "Plonkify: R1CS-to-Plonk transpiler",
        "url": "https://eprint.iacr.org/2025/534",
        "type": "论文",
        "tags": [
          "Pengfei Zhu",
          "R1CS",
          "Plonk",
        ],
        "summary": {
          zh: "Zhu等人在{{name}}论文中提出了Plonkify工具，能够将R1CS算术化电路转换为Plonk电路，支持普通门和自定义门，显著减少了约束数量。",
          en: "Zhu et al. proposed Plonkify in paper{{name}}, a tool that converts R1CS arithmetic circuits to Plonk circuits, supporting standard gates and custom gates, significantly reducing the number of constraints."
        }
      },
      {
        "name": "VeRange: Verification-efficient Zero-knowledge Range Arguments with Transparent Setup for Blockchain Applications and More",
        "url": "https://eprint.iacr.org/2025/528",
        "type": "论文",
        "tags": [
          "Yue Zhou",
          "Range Argument",
        ],
        "summary": {
          zh: "Zhou等人在{{name}}论文中提出了VeRange，一种验证高效的零知识范围论证方案，无需可信设置，显著降低了验证的计算开销和gas成本。",
          en: "Zhou et al. proposed VeRange in paper{{name}}, a verification-efficient zero-knowledge range argument scheme without trusted setup, significantly reducing the computational overhead and gas costs of verification."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-04",
    projects: [
      {
        "name": "Privacy Pools Mainnet Launch",
        "url": "https://x.com/0xbowio/status/1906784481496719749",
        "type": "新闻",
        "tags": [
          "0xbow.io",
          "Tornado Cash",
        ],
        "summary": {
          zh: "@0xbowio 宣布Privacy Pools主网上线，以太坊用户现可实现链上隐私，同时与非法资金分离，旨在推动隐私正常化。与Tornado Cash的最主要区别是具有资金审核机制，避免非法资金进入匿名池，增强合规性。",
          en: "@0xbowio announced the launch of Privacy Pools mainnet, allowing Ethereum users to achieve on-chain privacy while separating illegal funds, aiming to normalize privacy. The main difference from Tornado Cash is the presence of a fund audit mechanism, preventing illegal funds from entering the anonymous pool, enhancing compliance."
        }
      },
      {
        "name": "Tangram: Encryption-friendly SNARK framework under Pedersen committed engines",
        "url": "https://eprint.iacr.org/2025/540",
        "type": "论文",
        "tags": [
          "Gweonho Jeong",
          "Pedersen commitment",
        ],
        "summary": {
          zh: "Jeong等人在{{name}}论文中提出了Tangram，一个加密友好的SNARK框架，支持使用Pedersen-like密文构建系统，显著提高了加密证明的效率。",
          en: "Jeong et al. proposed Tangram in paper{{name}}, an encryption-friendly SNARK framework that supports Pedersen-like ciphertext construction, significantly improving the efficiency of encryption proofs."
        }
      }
    ],
    insights: [
    ]
  }
];

const others = [
];
