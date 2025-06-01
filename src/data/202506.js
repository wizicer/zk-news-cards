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
];
const others = [
];

