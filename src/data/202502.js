import { createUrlItem } from "./util";

export default [
  {
    date: "2025-02-16",
    projects: [
      {
        "name": "Introducing the Nexus Layer 1: A planetary-scale supercomputer",
        "url": "https://x.com/nexuslabs/status/1890111367023395272",
        "type": "新闻",
        "tags": [
          "NexusLabs",
          "Layer 1",
          "Testnet"
        ],
        "summary": "@NexusLabs 宣布推出Nexus Layer 1，一个行星级超级计算机，并宣布Testnet II将于2025年2月18日北京时间 13:00 开始。"
      },
      {
        "name": "Introducing Pico: A Modular and Performant zkVM",
        "url": "https://blog.brevis.network/2025/02/11/introducing-pico-a-modular-and-performant-zkvm/",
        "type": "博客",
        "tags": [
          "Brevis",
          "zkVM",
          "RISC-V"
        ],
        "urls": [
            createUrlItem("源代码", "https://github.com/brevis-network/pico")
        ],
        "summary": "@brevis_zk 团队在博客{{name}}中介绍了Pico，一个提供模块化和高效率的zkVM，基于RISC-V架构。性能测试显示其运行速度比RISC0、OpenVM和SP1都高出一倍以上。"
      }
    ],
    insights: [
      {
        "title": "Commitment Schemes 承诺方案",
        "type": "reprint",
        "slogan": "密码学中的保险柜",
        "url": "https://x.com/zkillustrated/status/1887157412894757066",
        "images": [
          "./images/2025-02-16.png"
        ],
      }
    ]
  },
  {
    date: "2025-02-17",
    projects: [
      {
        "name": "LatticeFold+: Faster, Simpler, Shorter Lattice-Based Folding for Succinct Proof Systems",
        "url": "https://eprint.iacr.org/2025/247",
        "type": "论文",
        "tags": [
          "Dan Boneh", "Binyi Chen",
          "格密码"
        ],
        "summary": "@danboneh 和 @Charles_Chen533 在{{name}}论文中提出了LatticeFold+，通过两种新技术进行改进：1）开发了更高效的代数范围证明；2）利用双承诺和基于sumcheck的转换简化验证电路。这些改进使证明者速度提升五到十倍，验证电路更简单，证明更短。"
      },
      {
        "name": "AIR-ICICLE : Plonky3 on ICICLE, part 1",
        "url": "https://hackmd.io/@Ingonyama/air-icicle",
        "type": "开源",
        "tags": [
          "Ingonyama",
          "Plonky3",
          "ICICLE",
        ],
        "summary": "@Ingo_zk 团队开源了AIR-ICICLE项目，集成了Plonky3框架与ICICLE库，支持用户编写AIR电路并生成踪迹数据，优化了STARK证明生成流程。"
      }
    ],
    insights: [
      {
        "title": "穿越幻灭谷",
        "type": "reprint",
        "slogan": "穿越幻灭谷",
        "url": "https://x.com/ballsyalchemist/status/1887627046190522681",
        "quotes": [
          "曾经，零知识证明被誉为安全、可扩展性和隐私的“圣杯”，但如今已跌至低谷。不过，这或许意味着未来它将迎来真正的上升期，走向更稳健的发展。"
        ],
        "images": [
          "./images/2025-02-17.png"
        ],
      }
    ]
  },
  {
    date: "2025-02-18",
    projects: [
      {
        "name": "On the Power of Polynomial Preprocessing",
        "url": "https://eprint.iacr.org/2025/238",
        "type": "论文",
        "tags": [
          "Matteo Campanelli",
          "Sublinear",
          "UC",
        ],
        "summary": "Campanelli等人在{{name}}论文中研究了具有次线性证明时间的密码学证明系统。作者提出了一种基于向量承诺和快速多项式评估预处理技术的简单多项式承诺构造。主要应用包括构建“索引高效”的SNARKs，使证明者在预处理后对索引大小具有次线性复杂度，并首次实现了对非结构化表的次线性证明者查找论证。"
      },
      {
        "name": "Introducing bugs.zksecurity.xyz",
        "url": "https://www.zksecurity.xyz/blog/posts/zkbugs-website/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "Vulnerabilities",
        ],
        "summary": "@zksecurityXYZ 团队在博客{{name}}中分享了zkBugs网站的启动，该网站致力于记录和分析ZK电路中的历史漏洞，包括漏洞目录、复现报告、安全工具列表和工具评估等内容。"
      }
    ],
    insights: [
      {
        "title": "如何在饭桌上一分钟说清楚零知识证明",
        "type": "original",
        "slogan": "用筷子讲ZKP",
        "images": [
          "./images/2025-02-18.drawio.svg"
        ],
      }
    ]
  },
  {
    date: "2025-02-19",
    projects: [
      {
        "name": "Nexus Layer 1 Testnet II",
        "url": "https://x.com/NexusLabs/status/1892068785231888741",
        "type": "活动",
        "tags": [
          "NexusLabs",
          "Testnet"
        ],
        "summary": "@NexusLabs 推出Nexus Layer 1，已经可以在浏览器上“挖矿”了，这个帖子让大家填自己的地址，已经收集到26k个回复。"
      },
      {
        "name": "THE MODULAR BLOCKCHAIN FOR ZK PROOF VERIFICATION",
        "url": "https://zkverify.io/",
        "type": "新闻",
        "tags": [
          "zkVerify",
          "ZK Proofs",
          "Blockchain Efficiency",
          "Cost Reduction"
        ],
        "summary": "zkVerify ( @ZKVProtocol ) 是 @HorizenLabs 开发的一个高性能、公开、去中心化的区块链，专注于零知识证明的验证。它提供模块化和可组合的方式，供 ZK 应用验证证明。"
      }
    ],
    insights: [
      {
        "title": "ZKP电路 = 计算 + 约束",
        "type": "original",
        "slogan": "ZKP电路的组成",
        "images": [
          "./images/2025/02/19.drawio.svg"
        ],
      }
    ]
  },
  {
    date: "2025-02-20",
    projects: [
      {
        "name": "Aleo Mainnet Inflation Bug Discovery and Fix",
        "url": "https://www.zksecurity.xyz/blog/posts/aleo-bug/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "Aleo",
          "Bug Fix"
        ],
        "summary": "@zksecurityXYZ 团队通过博客{{name}}分享了在Aleo主网中发现的一个通胀漏洞，详细描述了漏洞的背景、可能的利用方式以及修复过程。"
      },
      {
        "name": "You should not build Tornado Cash with FHE",
        "url": "https://www.leku.blog/tornado/",
        "type": "博客",
        "tags": [
          "Leku",
          "Tornado Cash",
          "FHE",
        ],
        "summary": "Leku在{{name}}博客中讨论了使用FHE构建Tornado Cash的可行性，比较了ZK和FHE在隐私保护应用中的差异，并指出FHE在匿名性、金额隐私和安全性方面表现不如ZK版本。"
      },
      {
        "name": "Sindri: A Platform for Zero-Knowledge Proof Development",
        "url": "https://sindri.app/",
        "type": "新闻",
        "tags": [
          "Sindri",
          "开发平台",
          "zkSNARK"
        ],
        "summary": "@SindriLabs 为开发者提供了一个云平台，专注于零知识证明的开发，支持zkSNARK等技术，旨在简化ZKP应用的创建和部署过程。"
      },
      {
        "name": "SuiOverflow 2025 Hackathon",
        "url": "https://x.com/SuiNetwork/status/1889851281059225898",
        "type": "活动",
        "tags": [
          "SuiNetwork",
          "Hackathon",
        ],
        "summary": "@SuiNetwork 宣布了SuiOverflow 2025黑客马拉松，提供超过$500,000的奖金，涵盖DeFi、AI、密码学技术等8个赛道，鼓励开发者基于Sui平台进行创新。ZK相关的项目也可以参与。"
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-02-21",
    projects: [
      {
        "name": "Khatam: Reducing the Communication Complexity of Code-Based SNARKs",
        "url": "https://eprint.iacr.org/2024/1843",
        "type": "论文",
        "tags": [
          "Hadas Zeilberger",
          "基于编码",
          "多线性PC"
        ],
        "summary": "Hadas Zeilberger在{{name}}论文中提出了一种降低基于编码的SNARKs通信复杂性的方法，利用线性码的“相关一致性”性质，证明当向量𝜋𝐿 + 𝑟𝜋𝑅接近某个码字时，𝜋𝐿、𝜋𝑅和𝜋𝐿 + 𝑟𝜋𝑅在特定位置上也与码字一致。这一性质能显著降低了通信复杂性。"
      },
      {
        "name": "Neo: Lattice-based folding scheme for CCS over small fields and pay-per-bit commitments",
        "url": "https://eprint.iacr.org/2025/294",
        "type": "论文",
        "tags": [
          "Wilson Nguyen", "Srinath Setty",
          "格",
          "折叠",
        ],
        "summary": "Wilson Nguyen和Srinath Setty在{{name}}论文中提出了Neo，一种新的基于格的折叠方案，适用于CCS。Neo通过适应HyperNova的折叠方案到格设置，解决了LatticeFold的局限性，提供了后量子安全性，并引入了按位付费的承诺成本。"
      },
    ],
    insights: [
    ]
  },
  {
    date: "2025-02-22",
    projects: [
      {
        "name": "Ethproofs: Progressing towards fully SNARKing the L1",
        "url": "https://ethproofs.org/",
        "type": "开源",
        "tags": [
          "ethproofs.org",
          "Ethereum",
        ],
        "urls": [
            createUrlItem("源代码", "https://github.com/ethproofs/ethproofs")
        ],
        "summary": "ethproofs.org 是以太坊区块证明浏览器，汇总各 zkVM 团队数据（目前包括 @succinctlabs 和 @snarkify_zkp 的数据），提供区块证明的全面概览。"
      },
      {
        "name": "MPC-in-the-Head: A Novel Approach to Zero-Knowledge Proofs",
        "url": "https://www.zksecurity.xyz/blog/posts/mpcith-intro/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "ZK",
          "MPC",
        ],
        "summary": "@zksecurityXYZ 在博客{{name}}中探讨了MPC-in-the-Head转换，这是一种从任何MPC协议构建零知识证明系统的方法，并讨论了其在开发后量子签名方案中的应用。"
      }
    ],
    insights: [
    ]
  },
  {
    date: "2025-02-23",
    projects: [
      {
        "name": "NoirCon 1 is coming to Denver",
        "url": "https://lu.ma/38g79n99",
        "type": "活动",
        "tags": [
          "Aztec",
          "Noir",
          "AI",
          "Denver"
        ],
        "summary": "@NoirLang 主办的 NoirCon 1 将于 Denver 举行，包括AI与隐私应用的技术深度探讨和隐私优先开发的真实案例研究。"
      },
      {
        "name": "Understanding the Math Behind ZKPs",
        "url": "https://zkintro.com/articles/understanding-math-behind-zkps",
        "type": "博客",
        "tags": [
          "zkintro.com",
          "数学基础"
        ],
        "summary": "zkintro 分享了关于ZKP数学基础的博客{{name}}，旨在为高中学生或STEM毕业生提供直观理解，包括电路、功能完备性、承诺、秘密共享和sigma协议等关键概念。"
      }
    ],
    insights: [
      {
        "title": "完备性 与 可靠性",
        "type": "original",
        "slogan": "完备且可靠的ZKP",
        "images": [
          "./images/2025/02/23.drawio.svg"
        ],
      }
    ]
  },
  {
    date: "2025-02-24",
    projects: [
      {
        "name": "Trustless Attestation Verification",
        "url": "https://github.com/tiktok-privacy-innovation/trustless-attestation-verification",
        "type": "开源",
        "tags": [
          "tiktok",
          "TEE",
          "远程认证"
        ],
        "summary": "@tiktok_us 团队的开源项目{{name}}，旨在解决TEE环境需要信任远程认证(RA)服务，他们利用ZKP创建无需信任第三方的认证系统，电路用Circom编写， 支持Groth16。"
      },
      {
        "name": "2024，从零知识证明到AI！",
        "url": "https://mp.weixin.qq.com/s/mo7azkzhOv1rsObKm3afsA",
        "type": "博客",
        "tags": [
          "Star Li",
          "AI",
          "zkHack V"
        ],
        "summary": "Star Li在博客{{name}}中分享了从零知识证明到AI的转变，包括他们的成绩回顾，以及转向AI的心路和方式。"
      }
    ],
    insights: [
      {
        "title": "可信执行环境 TEE (Trusted Execution Environment)",
        "type": "original",
        "slogan": "硬件保证的可信环境",
        "images": [
          "./images/2025/02/24.drawio.svg"
        ],
      }
    ]
  }
];

const others = [
  {
    name: "Integer Commitments, Old and New Tools",
    url: "https://eprint.iacr.org/2025/081",
    type: "论文",
    tags: [
      "Iftach Haitner, Yehuda Lindell, Nikolaos Makriyannis",
      "Integer Commitments",
      "Range Proofs",
      "Zero-Knowledge Proofs",
      "RSA",
    ],
    summary:
      "Haitner等人在{{name}}论文中详细介绍了基于RSA的整数承诺及相关协议，并提出了一种新的高效设置协议，用于采样承诺参数。",
  },
];
