import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-06-01",
    projects: [
      {
        "name": "Highlights of libZK, the Google Wallet ZKP",
        "url": "https://nmohnblatt.github.io/libzk-highlights/",
        "type": "博客",
        "tags": [
          "@nmohnblatt",
          "GKR",
          "Ligero"
        ],
        "summary": {
          zh: "Nicolas 在{{name}}博客中分享了libZK证明系统的亮点，包括其快速证明者设计、双电路算术化及实现技巧，旨在为ZK社区提供学习资源。",
          en: "Nicolas shared highlights of libZK, the Google Wallet ZKP system, in blog{{name}}, including its fast prover design, dual-circuit arithmeticization, and implementation techniques, aimed at providing learning resources for the ZK community."
        },
        "notes": {
          zh: [
            "Google Wallet 使用 libZK 实现 ZKP 隐私年龄验证",
            "GKR + Ligero 组合提升 20 倍证明速度",
            "交互式证明组合简化安全证明",
            "双电路设计：分别处理 ECDSA 和 SHA-256/CBOR",
            "非标准域 FFT 优化计算效率",
            "硬件技术优化降低电路深度"
          ],
          en: [
            "Google Wallet uses libZK to implement ZKP age verification",
            "GKR + Ligero combination boosts proof speed by 20x",
            "Interactive proof combination simplifies security proofs",
            "Dual-circuit design: handles ECDSA and SHA-256/CBOR separately",
            "Non-standard domain FFT optimizes calculation efficiency",
            "Hardware technology optimization reduces circuit depth"
          ]
        }
      }
    ],
  },
  {
    date: "2025-06-03",
    projects: [
      {
        "name": "Missing final polynomial degree check in FRI verifier",
        "url": "https://github.com/Plonky3/Plonky3/security/advisories/GHSA-f69f-5fx9-w9r9",
        "type": "新闻",
        "tags": [
          "dlubarov",
          "Plonky3",
          "FRI",
          {zh: "漏洞", en: "Vulnerability"},
        ],
        "urls": [
          createUrlItem("𝕏", "https://x.com/dlubarov/status/1929723510622244941"),
        ],
        "summary": {
          zh: "Plonky3项目披露了一个高严重性安全漏洞，影响ad4fd24之前的版本，FRI验证器缺少最终多项式度检查，可能被恶意证明者利用。",
          en: "Plonky3 project disclosed a high severity security vulnerability, affecting versions before ad4fd24, where the FRI verifier lacked a final polynomial degree check, potentially exploitable by malicious provers."
        }
      },
      {
        "name": "Cryptography 10 Years Later: Obfuscation, Proof Systems, and Secure Computation Boot Camp Videos",
        "url": "https://simons.berkeley.edu/workshops/cryptography-10-years-later-obfuscation-proof-systems-secure-computation-boot-camp/videos",
        "type": "视频",
        "tags": [
          "Simons Institute",
          "Cryptography",
          {zh: "混淆", en: "Obfuscation"},
        ],
        "urls": [
          createUrlItem("YouTube", "https://www.youtube.com/playlist?list=PLgKuh-lKre12vDccuxf_xgO27_b1zLrhk"),
        ],
        "summary": {
          zh: "Simons Institute发布了关于密码学十年后发展的系列视频，涵盖了混淆、证明系统和安全计算等前沿话题，深入探讨了这些技术的进展和未来方向。",
          en: "Simons Institute released a series of videos on the future of cryptography, covering topics such as obfuscation, proof systems, and secure computation, delving into the progress and future directions of these technologies."
        }
      }
    ],
  },
  {
    date: "2025-06-04",
    projects: [
      {
        "name": "Zero Knowledge Proofs for the Uninitiated",
        "url": "https://blog.reclaimprotocol.org/posts/zk-for-the-uninitiated",
        "type": "博客",
        "tags": [
          "Madhavan Malolan",
          "Reclaim Protocol",
          {zh: "初学者", en: "Beginner"},
        ],
        "summary": {
          zh: "@reclaimprotocol 的 Madhavan Malolan 在博客{{name}}中为零知识证明的初学者提供了入门介绍，解释了ZKP如何在不泄露数据的情况下验证计算的正确性，并探讨了其在隐私保护中的应用。",
          en: "@reclaimprotocol 's Madhavan Malolan provided an introduction for beginners to zero-knowledge proofs in blog{{name}}, explaining how ZKP verifies the correctness of calculations without disclosing data and exploring its applications in privacy protection."
        }
      },
      {
        "name": "Introducing ZKsync Prividium: Private Blockchain Infra Built for Institutions",
        "url": "https://zksync.mirror.xyz/-22Hu5ugeOtchnp1ut44Zehfh5yolKlu9nubFdJLMD0",
        "type": "新闻",
        "tags": [
          "ZKsync",
          "Prividium",
          {zh: "合规性", en: "Compliance"},
        ],
        "summary": {
          zh: "@zksync 团队推出了ZKsync Prividium，这是一个专为机构设计的私有区块链基础设施，提供企业级隐私、内置合规性以及与以太坊的无缝连接。",
          en: "@zksync team launched ZKsync Prividium, a private blockchain infrastructure built for institutions, providing enterprise-level privacy, built-in compliance, and seamless integration with Ethereum."
        }
      }
    ],
  },
  {
    date: "2025-06-05",
    projects: [
      {
        "name": "Capture Hidden Trends - Use Cases for Private and Decentralized ML Training",
        "url": "https://yuriko.io/posts/capture-hidden-trends/",
        "type": "博客",
        "tags": [
          "Yuriko",
          "Decentralized AI",
          "zkML"
        ],
        "summary": {
          zh: "Yuriko在博客{{name}}中探讨了隐私保护和去中心化机器学习训练的潜在用例，包括如何利用ZK证明在不暴露私人数据集的情况下协作训练模型。",
          en: "Yuriko in blog{{name}} explored potential use cases for private and decentralized machine learning training, including how to use ZK proofs to collaboratively train models without exposing private datasets."
        },
        "notes": {
          zh: [
            "去中心化ML训练：多方协作建模，保护数据隐私",
            "传统数据科学存在结构性偏见，忽视弱势群体数据",
            "应用：健康分析、边缘群体模型、隐私推荐、生物识别",
            "模型合并技术可分析交叉身份特征",
            "技术优势：可验证训练，优化边缘计算效率",
            "社会价值：通过协作挖掘被忽视的社会模式"
          ],
          en: [
            "Decentralized ML training: Multi-party collaboration, data privacy protection",
            "Traditional data science has structural biases, ignoring vulnerable groups' data",
            "Applications: Health analysis, edge group modeling, privacy recommendation, biometric recognition",
            "Model merging technology can analyze cross-identity features",
            "Technical advantages: Verifiable training, optimized edge computing efficiency",
            "Social value: Discovering overlooked social patterns through collaboration"
          ]
        }
      }
    ],
  }
];
const others = [
];

