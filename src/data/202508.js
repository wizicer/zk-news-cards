import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-08-02",
    projects: [
      {
        "name": "zkForge Bootcamp 2025",
        "url": "https://zkmonk.org/bootcamp-zkForge-2025",
        "type": "活动",
        "tags": [
          "zkMonk",
          "Bootcamp",
        ],
        "summary": {
          zh: "zkMonk组织的zkForge Bootcamp 2025现已开放申请，这是一个为期8周的密集ZK应用开发训练营，由顶级导师指导，内容包括ZK基础、证明者与验证者网络、以及真实世界应用开发。",
          en: "zkMonk organized the zkForge Bootcamp 2025, which is now open for applications. It is an 8-week intensive ZK application development training camp, led by top mentors, covering ZK fundamentals, prover and verifier networks, and real-world application development."
        },
      },
      {
        "name": "ZK Mesh: July 2025 Recap",
        "url": "https://zkmesh.substack.com/p/zk-mesh-july-2025-recap",
        "type": "新闻",
        "tags": [
          "ZK Hack",
          "ZK Mesh",
          {zh: "隐私增强技术", en: "PET"}
        ],
        "summary": {
          zh: "ZK Hack 发布 ZK Mesh 7月刊，回顾了最近在隐私加密、分布式协议和零知识证明领域的最新研究进展。",
          en: "ZK Hack published ZK Mesh July 2025 Recap, reviewing recent research progress in advanced privacy-enhancing cryptography, distributed protocol development, and zero-knowledge systems research."
        },
      },
    ],
  },
  {
    date: "2025-08-03",
    projects: [
      {
        "name": "FairZK: A Scalable System to Prove Machine Learning Fairness in Zero-Knowledge",
        "url": "https://ieeexplore.ieee.org/document/11023511",
        "type": "论文",
        "tags": [
          "Tianyu Zhang",
          "Fairness",
          "zkML"
        ],
        "summary": {
          zh: "Zhang等人在{{name}}论文中提出了FairZK系统，旨在通过ZK技术验证机器学习模型的公平性，为大规模应用提供了可扩展的解决方案。",
          en: "Zhang et al. proposed FairZK in the paper{{name}}, a scalable system to prove machine learning fairness in zero-knowledge, aiming to verify the fairness of machine learning models through ZK technology, providing scalable solutions for large-scale applications."
        },
      },
      {
        "name": "CoBBL: Dynamic Constraint Generation for SNARKs",
        "url": "https://ieeexplore.ieee.org/document/11023281",
        "type": "论文",
        "tags": [
          "Kunming Jiang",
          "CoBBL",
        ],
        "summary": {
          zh: "Jiang等人在{{name}}论文中提出了CoBBL，一种为SNARKs动态生成约束的方法，旨在提高证明生成的效率和灵活性。",
          en: "Jiang et al. proposed CoBBL in the paper{{name}}, a dynamic constraint generation method for SNARKs, aiming to improve the efficiency and flexibility of proof generation."
        },
      }
    ],
  },
  {
    date: "2025-08-05",
    projects: [
      {
        "name": "The Science of Blockchain Conference 2025 (SBC'25)",
        "url": "https://www.sbc-conference.com/2025/",
        "type": "活动",
        "tags": [
          "SBC'25",
          "Stanford",
        ],
        "summary": {
          zh: "SBC'25将于2025年8月4日至6日（正在直播）在加州大学伯克利分校Martin Luther King Jr.学生联合会大楼举行，聚焦区块链生态系统的技术创新，汇集该领域的研究人员和实践者。",
          en: "SBC'25 will take place from August 4 to 6, 2025, (live-streaming) at the Martin Luther King Jr. Student Union Building of the University of California, Berkeley, focusing on blockchain ecosystem innovation and gathering researchers and practitioners in the field."
        },
        "notes": {
          zh: [
            "包含区块链、密码学、分布式系统等领域的研究和合作。",
            "SBC'25将提供现场直播和会后录像，方便远程参与者。",
            "会前研讨会涵盖DAO、去中心化与AI、区块链应用等话题。",
            "组织委员会包括斯坦福大学、康奈尔等机构的知名学者。",
            "SBC'25是区块链技术领域的重要会议。"
          ],
          en: [
            "Includes research in blockchain, cryptography, and distributed systems.",
            "SBC'25 offers live streaming and post-event recordings for remote participants.",
            "Pre-conference workshops cover topics like DAOs, decentralization and AI, blockchain applications.",
            "Organizing committee consists of renowned scholars from Stanford, Cornell, and other institutions.",
            "SBC'25 is a important conference in the blockchain technology field."
          ]
        }
      }
    ],
  },
  {
    date: "2025-08-08",
    projects: [
      {
        "name": "Deep dive into the cryptographic math behind 𝒫𝔩𝔬𝔫𝒦 zero-knowledge proofs",
        "url": "https://plonk.zksecurity.xyz/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "Plonk",
          {zh: "交互式学习", en: "Interactive Learning"}
        ],
        "summary": {
          zh: "@zksecurityXYZ 在{{name}}博客中分享了关于𝒫𝔩𝔬𝔫𝒦零知识证明的密码学数学深度解析，包括交互式示例、完整协议实现以及复杂密码学概念的可视化学习。",
          en: "@zksecurityXYZ shared a deep dive into the cryptographic math behind 𝒫𝔩𝔬𝔫𝒦 zero-knowledge proofs in blog{{name}}, including interactive examples, complete protocol implementation, and visualization of complex cryptographic concepts."
        },
        "notes": {
          zh: [
            "提供了Sage/Python代码示例和练习以帮助理解",
            "包含从电路约束到验证的完整协议实现",
            "通过图表和可视化展示复杂的密码学概念",
            "专注于𝒫𝔩𝔬𝔫𝒦零知识证明的数学基础",
            "旨在通过交互式学习加深对ZK证明的理解"
          ],
          en: [
            "Provides Sage/Python code examples and exercises",
            "Includes protocol implementation from circuit constraints to verification",
            "Visualizes complex cryptographic concepts through charts and visualizations",
            "Focuses on the mathematical foundation of 𝒫𝔩𝔬𝔫𝒦 zero-knowledge proofs",
            "Aims to deepen understanding of ZK proofs through interactive learning"
          ]
        }
      }
    ]
  },
  {
    date: "2025-08-10",
    projects: [
      {
        "name": "Applied Cryptography CMPS 297AD/396AI",
        "url": "https://appliedcryptography.page/",
        "type": "活动",
        "tags": [
          "American University of Beirut",
          "Cryptography",
        ],
        "summary": {
          zh: "美国贝鲁特大学将于2025年8月25日至12月13日举办应用密码学课程，专注于现代密码学核心理论及其在安全系统中的应用，包括零知识证明等专题。",
          en: "The American University of Beirut will host the Applied Cryptography course from August 25 to December 13, 2025, focusing on modern cryptography core theory and its application in secure systems, including zero-knowledge proofs."
        },
      },
      {
        "name": "Ethereum Attestation Service (EAS)",
        "url": "https://attest.org/",
        "type": "博客",
        "tags": [
          "EAS Team",
          "Attestation",
        ],
        "summary": {
          zh: "EAS团队分享了关于Ethereum Attestation Service的信息，讨论了EAS作为一个基础设施公共产品，支持在链上或链下进行任何事物的证明。",
          en: "EAS team shared information about Ethereum Attestation Service, discussing EAS as an infrastructure public product, supporting any thing to be proven on or off-chain."
        },
      }
    ],
  },
  {
    date: "2025-08-14",
    projects: [
      {
        "name": "Data Availability Sampling with Repair",
        "url": "https://eprint.iacr.org/2025/1414",
        "type": "论文",
        "tags": [
          "Dan Boneh",
          {zh: "数据可用性采样", en: "Data Availability Sampling"},
        ],
        "summary": {
          zh: "Boneh等人在{{name}}论文中提出了数据可用性采样（DAS）的修复框架，基于局部可纠正多重性码设计新方案，优化了存储开销和修复带宽。",
          en: "Boneh et al. proposed a repair framework for data availability sampling (DAS) in paper{{name}}, based on locally repairable codes, optimizing storage overhead and repair bandwidth."
        },
      },
      {
        "name": "New Bitcoin Whiteboard. We can do better than BitVM.",
        "url": "https://x.com/david_seroy/status/1953471306894299410",
        "type": "视频",
        "tags": [
          "David Seroy",
          "Bitcoin",
          "BitVM"
        ],
        "summary": {
          zh: "David Seroy发布了一段关于比特币的新白板视频，讨论了比特币桥接和ZK验证、对Rollups的批评回应、乐观ZK验证、BitVM的不同版本比较、混淆电路以及比特币桥接的未来Glock等内容。",
          en: "David Seroy released a new video about Bitcoin, discussing Bitcoin bridge and ZK verification, criticism of Rollups, optimistic ZK verification, different versions of BitVM, garbled circuits, and the future of Bitcoin bridge Glock."
        },
      }
    ],
  },
  {
    date: "2025-08-15",
    projects: [
      {
        "name": "Time-Space Trade-Offs for Sumcheck",
        "url": "https://eprint.iacr.org/2025/1473",
        "type": "论文",
        "tags": [
          "Anubhav Baweja",
          "Chiesa",
          "Sumcheck",
        ],
        "summary": {
          zh: "Baweja等人在{{name}}论文中研究了sumcheck协议证明者在流模型中的时间空间权衡，提出了上下界，紧密刻画了证明者可实现的效率。",
          en: "Baweja et al. studied the time-space trade-offs for sumcheck protocol provers in the stream model, proposing upper and lower bounds, tightly characterizing the efficiency of provers."
        },
      },
      {
        "name": "Interstellar: GKR Protocol based Low Prover Cost Folding Scheme for Circuit Satisfiability",
        "url": "https://eprint.iacr.org/2025/1294",
        "type": "论文",
        "tags": [
          "Jieyi Long",
          "GKR",
          "zkML",
          "zkVM"
        ],
        "summary": {
          zh: "Jieyi Long在{{name}}论文中提出了Interstellar，一种基于GKR协议的低证明者成本折叠方案，专为电路可满足性设计。通过电路插值技术，该方案显著减少了每步折叠中需要承诺的向量大小，降低了证明者开销。",
          en: "Jieyi Long proposed Interstellar, a low-prover-cost folding scheme based on GKR protocol for circuit satisfiability in paper{{name}}, significantly reducing the vector size needed for commitment in each step of folding, lowering prover overhead."
        },
      }
    ],
  }
];
const others = [
];


