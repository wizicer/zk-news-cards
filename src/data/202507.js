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
  },
  {
    date: "2025-07-06",
    projects: [
      {
        "name": "Opening up ZKP technology to promote privacy in age assurance",
        "url": "https://blog.google/technology/safety-security/opening-up-zero-knowledge-proof-technology-to-promote-privacy-in-age-assurance/",
        "type": "开源",
        "tags": [
          "Alan Stapelberg",
          "Google",
          "Age Assurance",
        ],
        "summary": {
          zh: "Google开源了其ZKP库，旨在支持欧盟年龄验证，使开发者和企业能够更容易地构建隐私增强应用和数字ID解决方案。",
          en: "Google open-sourced its ZKP library, aiming to support age verification in the EU, making it easier for developers and companies to build privacy-enhancing applications and digital ID solutions."
        }
      },
      {
        "name": "Exploring Onchain Identity with ZK: A Discussion with Self and Celo",
        "url": "https://zeroknowledge.fm/podcast/366/",
        "type": "视频",
        "tags": [
          "Zero Knowledge Podcast",
          "Identity",
        ],
        "summary": {
          zh: "ZK Podcast第366集邀请 @selfprotocol 的Florent Tavernier和 @Celo 的Marek Olszewski，探讨了如何利用ZK技术将身份上链、Sybil保护机制及OpenPassport的起源。",
          en: "ZK Podcast episode 366 invited @selfprotocol 's Florent Tavernier and @Celo 's Marek Olszewski to discuss how to use ZK technology to on-chain identity, Sybil protection mechanism, and the origin of OpenPassport."
        }
      }
    ],
  },
  {
    date: "2025-07-07",
    projects: [
      {
        "name": "ZK Hack Berlin Wraps Up Successfully",
        "url": "https://x.com/__zkhack__/status/1937497743464788015",
        "type": "活动",
        "tags": [
          "@__zkhack__",
          "ZK Hack",
        ],
        "summary": {
          zh: "@__zkhack__ 在柏林成功举办了第5届ZK Hack活动，作为BerBlockWeek的一部分，活动圆满结束，在这个推上做了总结。",
          en: "@__zkhack__ held the 5th ZK Hack in Berlin as part of BerBlockWeek, and the event was successfully concluded with a summary on this tweet."
        },
        "notes": {
          zh: [
            "ZeroHour（冠军）：在仅有64KB内存的PineTime智能手表上实现客户端零知识证明生成，突破硬件限制，由@leonardoalt和@georgwiese开发",
            "ZK-AntiCheat（亚军）：基于NoirLang和Aztec Network开发的首个隐私保护反作弊引擎，将游戏内存数据形成默克尔树并证明，由@pop_eax开发",
            "God's Hand（季军）：利用NoirLang和ZKPassport构建的救灾透明度解决方案，解决灾害救援中的问责问题，由@gabrielaxyeth开发"
          ],
          en: [
            "ZeroHour (1st): Generates ZK proofs on a 64KB smartwatch, breaking hardware limits (by @leonardoalt & @georgwiese)",
            "ZK-AntiCheat (2nd): First privacy-preserving anti-cheat engine using NoirLang/Aztec (by @pop_eax)",
            "God's Hand (3rd): ZK solution for transparent disaster relief using NoirLang/ZKPassport (by @gabrielaxyeth)"
          ]
        }
      }
    ],
  },
  {
    date: "2025-07-08",
    projects: [
      {
        "name": "SnarkSentinel: AI-Powered ZK Auditing Tool",
        "url": "https://blog.zksecurity.xyz/posts/snarksentinel/",
        "type": "博客",
        "tags": [
          "zkSecurity",
          "Auditing",
          "Circom",
        ],
        "summary": {
          zh: "@zksecurityXYZ 团队分享了他们开发的AI驱动的ZK审计工具SnarkSentinel，探讨了AI在发现零知识电路和应用中的漏洞方面的潜力，以及人类审计师与AI合作的未来。",
          en: "@zksecurityXYZ team shared their AI-powered ZK audit tool SnarkSentinel, discussing the potential of AI in identifying vulnerabilities in ZK circuits and applications, and the future of human auditors working with AI."
        },
        "notes": {
          zh: [
            "AI在审计ZK电路中的应用展示了识别已知漏洞的潜力。",
            "SnarkSentinel工具在比较规范与实现方面表现出色。",
            "AI审计工具面临识别低级别加密漏洞的挑战。",
            "使用Circom语言的代码库是SnarkSentinel的首个目标。",
            "团队采用了RAG和代理技术来提高AI的审计效率。",
            "未来的审计可能会更加依赖人类与AI的合作。"
          ],
          en: [
            "AI in ZK circuit auditing shows potential for identifying known vulnerabilities.",
            "SnarkSentinel performs well in comparing specifications and implementations.",
            "AI audit tools face challenges in identifying low-level encryption vulnerabilities.",
            "The codebase using Circom language is SnarkSentinel's first target.",
            "The team adopted RAG and proxy technologies to improve AI audit efficiency.",
            "Future audits may increasingly rely on human-AI collaboration."
          ]
        }
      }
    ]
  },
  {
    date: "2025-07-10",
    projects: [
      {
        "name": "Halo2 Query Collision Bug",
        "url": "https://blog.zksecurity.xyz/posts/halo2-query-collision/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "Halo2",
        ],
        "summary": {
          zh: "@zksecurityXYZ 在博客{{name}}中揭示了Halo2中的一个重要安全性问题——查询碰撞漏洞，影响了包括Zcash和PSE在内的多个实现，并讨论了其修复方法。",
          en: "@zksecurityXYZ revealed an important security issue in Halo2 -- Query Collision Bug, affecting multiple implementations including Zcash and PSE, and discussed its fix.",
        },
        "notes": {
          zh: [
            "查询碰撞漏洞允许恶意证明者通过重复查询同一多项式在同一评估点来伪造证明。",
            "该漏洞影响多个广泛使用的Halo2版本，包括Zcash和PSE。",
            "修复方法包括在多点开放参数中检测并拒绝查询碰撞。",
            "目前没有已知的生产电路受到此漏洞的影响。",
            "相关团队已经迅速响应并修复了此漏洞。"
          ],
          en: [
            "It allows malicious provers to forge proofs by repeatedly querying the same polynomial at the same evaluation point.",
            "The vulnerability affects multiple widely used Halo2 versions, including Zcash and PSE.",
            "Fix methods include detecting and rejecting query collisions in multi-point opening parameters.",
            "Currently, no known production circuits are affected by this vulnerability.",
            "The relevant teams have quickly responded and fixed this vulnerability."
          ]
        }
      }
    ]
  },
  {
    date: "2025-07-13",
    projects: [
      {
        "name": "Hobbit: Space-Efficient zkSNARK with Optimal Prover Time",
        "url": "https://eprint.iacr.org/2025/1214",
        "type": "论文",
        "tags": [
          "Christodoulos Pappas",
        ],
        "summary": {
          zh: "港科大的Pappas和Papadopoulos在{{name}}论文中提出了Hobbit，一种空间高效的zkSNARK，实现了证明者时间的最优性$O(|C|)$，同时保持透明性和后量子安全性。",
          en: "Christodoulos Pappas and Dimitrios Papadopoulos proposed Hobbit, a space-efficient zkSNARK, achieving optimal prover time $O(|C|)$, while maintaining transparency and post-quantum security."
        }
      },
      {
        "name": "Linear Prover IOPs in Log Star Rounds",
        "url": "https://eprint.iacr.org/2025/1269",
        "type": "论文",
        "tags": [
          "Noor Athamnah",
          "IOP",
        ],
        "summary": {
          zh: "Athamnah等人在{{name}}论文中提出了一种针对布尔电路的高效线性证明者IOP，仅需$O(\\log^*(S))$轮，显著降低了证明者的计算瓶颈。",
          en: "Athamnah et al. proposed a linear prover IOP for Boolean circuits in their paper {{name}}, achieving $O(\\log^*(S))$ rounds, significantly reducing the prover's computational bottleneck."
        }
      }
    ]
  }
];
const others = [
];


