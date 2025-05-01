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
];

const others = [
];
