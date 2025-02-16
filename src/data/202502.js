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
