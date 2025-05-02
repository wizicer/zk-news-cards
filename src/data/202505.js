import { createUrlItem } from "./util.js";

export default [
  {
    date: "2025-05-01",
    projects: [
      {
        "name": "Exploring KZG Variants for Univariate Polynomials",
        "url": "https://blog.zksecurity.xyz/posts/kzg-1/",
        "type": "博客",
        "tags": [
          "zksecurity.xyz",
          "KZG",
          "PCS",
        ],
        "summary": {
          zh: "@zksecurityXYZ 在博客{{name}}中探讨了KZG多项式承诺方案的变体，包括其基本构造和批处理技术，以及如何在zkSNARKs中应用这些技术以提高效率。",
          en: "@zksecurityXYZ explored variants of the KZG polynomial commitment scheme in blog{{name}}, including its basic construction and batch processing techniques, and how to apply these techniques in zkSNARKs to improve efficiency."
        }
      },
      {
        "name": "Episode 359: Lattice-Based Cryptography and Zero-Knowledge Systems",
        "url": "https://zeroknowledge.fm/podcast/359/",
        "type": "视频",
        "tags": [
          "Zero Knowledge Podcast",
          {zh: "格", en: "Lattice"},
        ],
        "summary": {
          zh: "ZK Podcast第359集邀请了IBM Research的研究科学家Vadim Lyubashevsky，讨论了基于格的密码学在零知识系统中的作用及其发展。",
          en: "ZK Podcast episode 359 invited IBM Research researcher Vadim Lyubashevsky to discuss the role and development of lattice-based cryptography in zero-knowledge systems."
        }
      },
    ],
  },
  {
    date: "2025-05-02",
    projects: [
      {
        "name": "Google Wallet Age & Identity Verifications",
        "url": "https://blog.google/products/google-pay/google-wallet-age-identity-verifications/",
        "type": "新闻",
        "tags": [
          "Google Wallet",
          "Digital Identity"
        ],
        "summary": {
          zh: "Google Wallet 更新，引入ZKP技术，支持英国和美国更多州的居民安全便捷地验证年龄和身份，同时扩展至50个国家。",
          en: "Google Wallet updates, introducing ZKP technology to support secure and convenient age and identity verification for residents of more UK and US states, expanding to 50 countries."
        }
      },
      {
        "name": "A New Era for Web3: Introducing Aztec Public Testnet",
        "url": "https://aztec.network/blog/a-new-era-for-web3-introducing-aztec-public-testnet",
        "type": "新闻",
        "tags": [
          "Aztec Network",
          "Noir",
          {zh: "测试网", en: "Testnet"}
        ],
        "summary": {
          zh: "@aztecnetwork 在{{name}}博客中介绍了其新推出的公共测试网，强调了PLONK证明系统和Noir编程语言在实现可编程隐私方面的突破，以及如何支持开发者构建完全隐私保护的应用程序。",
          en: "@aztecnetwork introduced its new public testnet in blog{{name}}, highlighting the breakthroughs of PLONK proof systems and Noir programming language in achieving programmable privacy, and how to support developers to build fully privacy-protected applications."
        }
      },
      {
        "name": "Folding Schemes: Why they matter and how they are not employed in the best way possible (Part 1)",
        "url": "https://hackmd.io/@srinathsetty/S1biKMlxxg",
        "type": "博客",
        "tags": [
          "srinathsetty",
          "Folding Schemes",
          "NeutronNova",
        ],
        "summary": {
          zh: "@srinathtv 在博客{{name}}中讨论了折叠方案的重要性及其在实际应用中的性能问题，特别强调了NeutronNova和Neo折叠方案的优越性。",
          en: "@srinathtv discussed the importance of folding schemes and their performance issues in practical applications in blog{{name}}, particularly highlighting the superiority of NeutronNova and Neo folding schemes."
        },
        "notes": {
          zh: [
            "折叠方案通过消除证明者工作中的明显部分来降低证明成本。",
            "递归证明组合变得 _实用且高效_。",
            "实现细节（尤其是内存检查和MSM）决定了性能。",
            "流行的椭圆曲线库经常错过优化机会，导致性能不佳。"
          ],
          en: [
            "Folding reduces prover's cost by eliminating significant parts of the prover's work.",
            "Recursive proof composition becomes _practical and efficient_.",
            "Implementation details—especially memory checking and MSM—make or break performance.",
            "Popular elliptic curve libraries often miss optimization opportunities, leaving performance on the table."
          ]
        }
      }
    ],

  }
];

const others = [
];
