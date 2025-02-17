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
