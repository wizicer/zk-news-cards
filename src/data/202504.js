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
  },
  {
    date: "2025-04-05",
    projects: [
      {
        "name": "Unlocking New Possibilities: zkTLS, TEE, and zkVM in Action",
        "url": "https://x.com/primus_labs/status/1908193205537194090",
        "type": "博客",
        "tags": [
          "@primus_labs",
          "zkTLS",
          "TEE",
        ],
        "summary": { 
          zh: "@primus_labs 、 @SuccinctLabs 和 @PhalaNetwork 共同撰写的博客{{name}}探讨了zkTLS、TEE和zkVM如何结合，为链上应用提供可验证的Web2数据，同时保护用户隐私和安全性。",
          en: "@primus_labs, @SuccinctLabs, and @PhalaNetwork co-authored the blog{{name}} discussing how zkTLS, TEE, and zkVM can be combined to provide verifiable Web2 data for blockchain applications while protecting user privacy and security."
        }
      },
      {
        "name": "Soloist: Distributed SNARKs for Rank-One Constraint System",
        "url": "https://eprint.iacr.org/2025/557",
        "type": "论文",
        "tags": [
          "Weihan Li",
          { zh: "分布式证明", en: "distributed proof" },
          "KZG",
        ],
        "summary": { 
          zh: "Li等人在{{name}}论文中提出了Soloist，一种针对R1CS的优化分布式SNARK。Soloist实现了恒定的证明大小、恒定的摊销通信复杂度和恒定的验证复杂度，显著提升了zkRollups的效率。",
          en: "Li et al. proposed Soloist in the paper{{name}}, an optimized distributed SNARK for R1CS that achieves constant proof size, constant amortized communication complexity, and constant verification complexity, significantly improving the efficiency of zkRollups."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-06",
    projects: [
      {
        "name": "Zinnia: An Expressive and Efficient Tensor-Oriented Zero-Knowledge Programming Framework",
        "url": "https://eprint.iacr.org/2025/572",
        "type": "论文",
        "tags": [
          "Zhantong Xue",
          {zh: "编译器", en: "compiler"},
          "DSL",
        ],
        "summary": {
          zh: "Xue等人在{{name}}论文中提出了Zinnia，一个面向张量的高效ZK编程框架，通过高级编程语言和符号执行方法简化ZKP程序编写，显著提升开发效率和证明速度。",
          en: "Xue et al. proposed Zinnia in the paper{{name}}, an efficient ZK programming framework for tensor-oriented applications, simplifying ZKP program development and significantly improving proof efficiency."
        }
      },
      {
        "name": "SP1-2FA: Enhancing zkVM Security with TEEs",
        "url": "https://blog.succinct.xyz/sp1-2fa/",
        "type": "新闻",
        "tags": [
          "Succinct",
          "zkVM",
          "TEE",
        ],
        "summary": {
          zh: "@SuccinctLabs 宣布推出SP1-2FA，为Succinct Prover Network增加通过可信执行环境(TEEs)的第二层保护，进一步强化zkVM的安全性。",
          en: "@SuccinctLabs announced the release of SP1-2FA, adding a second layer of protection to the Succinct Prover Network through TEEs, further enhancing the security of zkVMs."
        }
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-04-07",
    projects: [
      {
        "name": "Veridise develop LLZK: A new IR for ZK languages",
        "url": "https://medium.com/veridise/veridise-secures-ethereum-foundation-grant-to-develop-llzk-a-new-intermediate-representation-ir-224c0e71f4d5",
        "type": "博客",
        "tags": [
          "Veridise",
          "IR",
          "LLZK",
        ],
        "summary": {
          zh: "@VeridiseInc 获得以太坊基金会资助，开发LLZK，一种针对ZK语言的中介表示（IR），旨在统一和简化电路编译，提高ZK领域的可维护性和安全性。该框架可以将Circom、Zirgen和Gnark转换为LLZK，并作进一步分析优化。",
          en: "@VeridiseInc received an Ethereum Foundation grant to develop LLZK, an intermediate representation (IR) for ZK languages, aiming to unify and simplify circuit compilation, improve the maintainability and security of the ZK domain. The framework converts Circom, Zirgen, and Gnark to LLZK and further analyzes and optimizes it."
        }
      },
      {
        "name": "Efficient SNARKs for Boolean Circuits via Sumcheck over Tower Fields",
        "url": "https://eprint.iacr.org/2025/594",
        "type": "论文",
        "tags": [
          "Tianyi Liu", "Yupeng Zhang",
          {zh: "塔域", en: "Tower of fields"},
          "Sumcheck"
        ],
        "summary": {
          zh: "Liu等人在{{name}}论文中提出了一种针对布尔电路的高效SNARKs，通过新颖的塔式sumcheck协议和塔式零检查协议显著提高了证明者效率。",
          en: "Liu et al. proposed an efficient SNARK for Boolean circuits in the paper{{name}}, using novel tower sumcheck and tower zero-check protocols, significantly improving prover efficiency."
        }
      }
    ],
    insights: [
    ]
  }
];

const others = [
];
