import { createUrlItem } from './util.js';

export default [
    {
        date: "2025-01-01",
        projects: [
            {
                "name": "ZKryptium",
                "url": "https://github.com/Cybersecurity-LINKS/zkryptium",
                "type": "开源",
                "tags": [ "Cybersecurity-LINKS", "BBS+", "CL2003", ],
                "summary": "Cybersecurity-LINKS团队发布了ZKryptium开源库，实现了BBS+、Blind BBS和CL2003签名方案，支持创建零知识证明。"
              },
              {
                "name": "Proof.Fun",
                "url": "https://www.proof.fun/",
                "type": "新闻",
                "tags": [ "nebrazkp" ],
                "summary": "@nebrazkp 孵化了一个发币项目，基于公共项目或论文等，重要特点是原主可通过zk证明验证身份并获得10%代币奖励。"
              }
        ]
    },
    {
        date: "2025-01-02",
        projects: [
            {
                "name": "ANON.WORLD",
                "url": "https://anon.world/",
                "type": "应用",
                "tags": [ "ANON.WORLD", "匿名社交" ],
                "summary": "@Slokh 发布了匿名社交网络 @anondotworld，使用ZKP生成匿名凭证，用户发帖时可附加多个凭证，社区由共享凭证的用户组成，成员可代表社区进行匿名操作。"
              },
              {
                "name": "If you want to learn ZK in 2025",
                "url": "https://x.com/Jeyffre/status/1874654453191815396",
                "type": "博客",
                "tags": [ "Jeffrey Scholz", "RareSkills" ],
                "summary": "@Jeyffre 分享了RareSkills ZK Book的学习方法，强调通过按顺序学习ZK，提高学习效率。"
              }
        ]
    },
    {
        date: "2025-01-04",
        projects: [
            {
                "name": "Understanding SNARKs through Quadratic Residues",
                "url": "https://x.com/thefrozenfire/status/1873445970010407084",
                "type": "博客",
                "tags": [ "Justin Martin", "Quadratic Residues", ],
                "summary": "@thefrozenfire 分享了利用二次剩余问题学习ZKP的核心思想的方法。"
              },
              {
                "name": "MicroNova: Folding-based arguments with efficient (on-chain) verification",
                "url": "https://eprint.iacr.org/2024/2099",
                "type": "论文",
                "tags": [ "Jiaxing Zhao", "Srinath Setty", "Weidong Cui", ],
                "summary": "Zhao等人在{{name}}论文中提出了一种基于折叠的递归论证MicroNova，用于生成增量计算的证明，在以太坊上的验证约消耗2.2M gas（Groth16约220k gas）。"
              }
        ]
    },
    {
        date: "2025-01-06",
        projects: [
            {
                "name": "ZK in Sui ZK in Celestia in 2024",
                "url": "https://zkv.xyz/zk-in-celestia-in-2024/",
                "type": "博客",
                "tags": [ "zkv.xyz", "Celestia", ],
                "summary": "@zkv_xyz 分享了关于2024年Celestia中ZK技术的应用调查，包括ZK IDs、隐私保护、新兴ZK用例以及ZK安全漏洞等方面的内容。"
              },
              {
                "name": "Privacy-First CBDCs: Leveraging Cryptography and Ethereum for Next-Gen Digital Currencies",
                "url": "https://aztec.network/blog/privacy-first-cbdcs-leveraging-cryptography-and-ethereum-for-next-gen-digital-currencies",
                "type": "博客",
                "tags": [ "Aztec Labs", "CBDC", "合规" ],
                "summary": "@aztecnetwork 讨论了隐私优先的CBDCs（央行数字货币），强调利用ZKPs和以太坊技术平衡创新、隐私、合规和用户信任。"
              }
        ]
    },
    {
        date: "2025-01-07",
        projects: [
            {
                "name": "zkApps on Mina and o1js",
                "url": "https://www.o1labs.org/blog/zkapps-on-mina-and-o1js",
                "type": "博客",
                "tags": [ "o1Labs", "Mina", ],
                "summary": "@o1_labs 团队分享了关于Mina和o1js的zkApps平台的最新进展，包括o1js v2.0的发布、动态数组和运行时表的引入、权限前提条件的设置、zkProgram的改进以及EdDSA的支持等内容。"
              },
              {
                "name": "Ingonyama Research Grants 2025",
                "url": "https://www.ingonyama.com/blog/ingonyama-research-grants-2025",
                "type": "新闻",
                "tags": [ "Ingonyama", "ZK", "ICICLE", "研究" ],
                "summary": "@Ingo_zk 宣布2025年研究资助计划，提供10万美元支持使用ICICLE库进行的研究，旨在通过重新实现现有文献中的算法来超越现有研究基准。"
              }
        ]
    },
    {
        date: "2025-01-09",
        projects: [
            {
                "name": "PSA: iden3's implementation of the Poseidon Hash function is broken",
                "url": "https://x.com/vdwijden/status/1877046148386451732",
                "type": "漏洞",
                "tags": [
                  "MariusVanDerWijden",
                  "Poseidon Hash",
                  "cryptography",
                  "bug"
                ],
                "summary": "@vdWijden 发现iden3的Poseidon哈希函数实现存在哈希碰撞漏洞，该实现被许多知名项目使用。"
              },
              {
                "name": "zkPi: Proving Lean Theorems in Zero-Knowledge",
                "url": "https://eprint.iacr.org/2024/267",
                "type": "论文",
                "tags": [ "Evan Laufer", "Dan Boneh", "Lean", ],
                "summary": "Laufer等人在{{name}}论文中提出了zkPi，首个用于Lean证明的zkSNARK，允许证明者在零知识下验证Lean定理的正确性。"
              },
        ]
    },
    {
        date: "2025-01-10",
        projects: [
              {
                "name": "The Era of Provable Software",
                "url": "https://writings.succinct.xyz/provable",
                "type": "博客",
                "tags": [ "Succinct", "Provable Software", "Cryptography", ],
                "summary": "@SuccinctLabs 在博客{{name}}中讨论了可证明软件时代，强调了ZK密码学的进步使得通过通用zkVM验证任意程序执行成为可能，这将推动区块链和计算领域的新应用。"
              },
              {
                "name": "Try NoirLang quest at NodeGuardians",
                "url": "https://x.com/cryptobuilder_/status/1877385090231316820",
                "type": "活动",
                "tags": [ "Lisa Akselrod", "NodeGuardians", "编程游戏" ],
                "summary": "@cryptobuilder_ 推荐尝试 @nodeguardians 的 @NoirLang 任务，通过游戏学习ZK的概念，无需了解ZK工作原理，即可学习如何证明程序并验证证据。"
              },
        ]
    },
    {
        date: "2025-01-11",
        projects: [
              {
                "name": "The zk in zkTLS",
                "url": "https://reclaimprotocol.org/blog/posts/zk-in-zktls",
                "type": "博客",
                "tags": [ "Madhavan Malolan", "Reclaim Protocol", ],
                "summary": "Madhavan Malolan在博客{{name}}中讨论了zkTLS的概念，澄清了zkTLS并非主要用于隐私保护，而是为了用户安全和数据完整性。"
              },
            {
                "name": "zkVMs and Privacy: Challenges and Opportunities",
                "url": "https://x.com/luhelminger/status/1876940316931961143",
                "type": "博客",
                "tags": [ "Lukas Helminger", "zkVMs", "zkDSL", ],
                "summary": "@luhelminger 讨论了zkVMs在2024年的主导地位及其在可扩展性用例中的应用，同时探讨了zkVMs在隐私保护方面面临的挑战和未来展望。"
              }
        ]
    },
    {
        date: "2025-01-15",
        projects: [
          {
            "name": "stwo-web-stark",
            "url": "https://github.com/Okm165/stwo-web-stark",
            "type": "开源",
            "tags": [ "Okm165", "Cairo", "WASM", ],
            "summary": "开源项目stwo-web-stark，提供使用stwo证明器证明Cairo程序的Web演示，可以在网页中完成证明、验证等操作。"
          },
          {
            "name": "A Survey of Interactive Verifiable Computing: Utilizing Randomness in Low-Degree Polynomials",
            "url": "https://eprint.iacr.org/2025/008",
            "type": "论文",
            "tags": [ "Angold Wang", "低度多项式", "GKR", ],
            "summary": "Angold Wang在{{name}}综述中审视了可验证计算，从基础复杂性理论到现代ZK-SNARKs，探讨了交互式证明系统、知识复杂性及低次多项式在错误检测和验证协议中的应用，最终落脚在GKR协议。"
          },
        ]
    },
    {
        date: "2025-01-16",
        projects: [
          {
            "name": "Why We Can't Build Perfectly Secure Multi-Party Applications (yet)",
            "url": "https://mirror.xyz/privacy-scaling-explorations.eth/nXUhkZ84ckZi_5mYRFCCKgkLVFAmM2ECdEFCQul2jPs",
            "type": "博客",
            "tags": [ "Enrico Bottazzi", "MPC", "FHE", "iO" ],
            "summary": "PSE研究员Enrico Bottazzi探讨了为何目前无法构建完全安全的多方应用程序，分析了多方计算和全同态加密等技术在安全性和活性之间的权衡。"
          },
          {
            "name": "FRI and Proximity Proofs (Part.1)",
            "url": "https://zkhack.dev/whiteboard/s2m7/",
            "type": "视频",
            "tags": [ "Dan Boneh", "FRI", "Reed-Solomon", ],
            "summary": "Dan Boneh在ZK Whiteboard Sessions中分享了FRI及其在密码学中的基础，包括线性代码、IOPs背景，以及如何将Polynomial-IOP编译为SNARK。"
          }
        ]
    },
    {
        date: "2025-01-17",
        projects: [
          {
            "name": "Binius Alpha Release & Ethereum State Proving Service",
            "url": "https://www.irreducible.com/posts/ethereum-state-proving-service",
            "urls": [
                createUrlItem("𝕏", "https://x.com/IrreducibleHW/status/1877086675907871044")
            ],
            "type": "新闻",
            "tags": [ "Irreducible Team", "Binius", "Ethereum", ],
            "summary": "@IrreducibleHW 团队宣布了Binius库及其首个应用——以太坊状态证明服务。该服务利用Reth以太坊节点，生成以太坊MPT状态树的压缩证明，支持无状态客户端解决方案。"
          },
          {
            "name": "Pick, Prove, Profit: The NIVC Singularity",
            "url": "https://blog.icme.io/pick-prove-profit-the-nivc-singularity-2/",
            "type": "博客",
            "tags": [ "NovaNet", "NIVC", "zkVM", ],
            "summary": "NovaNet团队分享了NIVC（非均匀增量可验证计算）技术，探讨了其在zkVM设计中的应用及如何通过Nebula方案提升性能，同时展望了使用NIVC替代现在GROTH16做链上验证的潜力。"
          },
        ]
    },
    {
        date: "2025-01-18",
        projects: [
            {
              "name": "探讨 Poseidon 延展性攻击，可影响零知识证明应用的安全性",
              "url": "https://mp.weixin.qq.com/s/tdJ_noFvkPvCFpMNh84_Kg",
              "type": "博客",
              "tags": [ "慢雾", "Poseidon", "延展性攻击" ],
              "summary": "慢雾团队深入揭示了Iden3密码学库中Poseidon哈希函数的延展性问题，即由于代码实现问题导致哈希碰撞及其安全性影响。"
            },
            {
              "name": "Morgana: a laconic circuit builder",
              "url": "https://eprint.iacr.org/2025/65",
              "type": "论文",
              "tags": [ "Lev Soukhanov", "sumcheck" ],
              "summary": "Soukhanov等人在{{name}}论文中提出了一种新型SNARK证明系统Morgana，其主要特点是电路key大小与电路描述成正比，而非约束数量，相比现有技术Spartan有直接加速效果。"
            },
        ]
    },
    {
        date: "2025-01-19",
        projects: [
            {
              "name": "零知识证明 - RISC0 zkVM源代码入门",
              "url": "https://mp.weixin.qq.com/s/E6GbCexZ6QNFe6_K2i_J9w",
              "type": "博客",
              "tags": [ "Star Li", "zkVM", "RISC0", "Zirgen" ],
              "summary": "Star Li 分享了RISC0 zkVM的源代码结构，包括Bonsai证明服务、Groth16证明实现、电路接口等，展示了zkVM如何通过Rust语言实现复杂的业务逻辑。"
            },
          {
            "name": "Extending Groth16 for Disjunctive Statements",
            "url": "https://eprint.iacr.org/2025/028",
            "type": "论文",
            "tags": [ "Xudong Zhu", "析取表达", "逻辑组合" ],
            "summary": "Zhu等人在{{name}}论文中提出了CompGroth16，一个Groth16的变体，旨在支持包含代数和算术组件的析取语句证明，提高了表达能力和证明效率，但验证成本变高了。"
          },
        ]
    },
    {
        date: "2025-01-20",
        projects: [
            {
              "name": "SoK: Trusted setups for powers-of-tau strings",
              "url": "https://eprint.iacr.org/2025/064",
              "type": "论文",
              "tags": [ "Faxing Wang", "τ", "可信设置", ],
              "summary": "Wang等人在{{name}}论文中系统化地分析了可信设置，区分了设置协议和仪式，并评估了不同方法的特点、优势和弱点。"
            },
            {
              "name": "Founding Zero-Knowledge Proofs of Training on Optimum Vicinity",
              "url": "https://eprint.iacr.org/2025/053",
              "type": "论文",
              "tags": [ "Gefei Tan", "机器学习", "Proof of Training", ],
              "summary": "Tan等人在{{name}}论文中提出了一种新的zkPoT方法，通过引入optimum vicinity概念，直接证明训练模型的正确性，而非整个训练过程，显著提高了性能。"
            }
        ]
    },
    {
        date: "2025-01-21",
        projects: [
            {
              "name": "MyZKP: Building Zero Knowledge Proofs from Scratch in Rust",
              "url": "https://github.com/Koukyosyumei/MyZKP",
              "type": "开源",
              "tags": [ "Koukyosyumei", "Rust", ],
              "summary": "@Koukyosyumei 发布了MyZKP开源项目，这是一个用Rust从头开始构建的零知识协议实现，旨在作为理解和应用零知识证明的教育资源。"
            },
              {
                "name": "Hylé 关于链上去中心化游戏的观点",
                "url": "https://x.com/hyle_org/status/1877354712925880779",
                "type": "信息",
                "tags": [ "Hylé", "GameFi", "DevCon 2024" ],
                "summary": "在DevCon 2024的边会New Games. New Worlds.上，@sylvechv 提出需要停止在链上运行去中心化游戏的观点，并探讨了其原因。"
              },
        ]
    },
    {
        date: "2025-01-22",
        projects: [
          {
            "name": "ZKLoRA: Efficient Zero-Knowledge Proofs for LoRA Verification",
            "url": "https://github.com/bagel-org/ZKLoRA",
            "type": "开源",
            "tags": [ "bagel-org", "LoRA", "机器学习" ],
            "summary": "bagel-org团队发布了ZKLoRA开源项目，专注于为LoRA验证提供高效的零知识证明，支持在保护LoRA权重隐私的同时验证其与基础模型的兼容性。"
          },
          {
            "name": "Aleo Specifications Now Publicly Available",
            "url": "https://provable.com/blog/aleo-specs-now-publicly-available",
            "type": "博客",
            "tags": [ "Provable", "Aleo", "Varuna", ],
            "summary": "@ProvableHQ 分享了Aleo网络的技术规格，包括Varuna证明系统（基于Marlin）、AleoVM虚拟机和AleoBFT共识算法。"
          }
        ]
    },
    {
        date: "2025-01-23",
        projects: [
            {
              "name": "Auto-Accelerated Circuits in powdrVM",
              "url": "https://www.powdr.org/blog/auto-acc-circuits",
              "type": "博客",
              "tags": [ "powdr labs", "zkVM", "电路优化", ],
              "summary": "@powdr_labs 在{{name}}博客中介绍了powdrVM的最新实验性功能：自动生成加速电路以优化Rust程序的性能，展示了如何通过静态和运行时分析选择加速块，并自动生成优化电路。"
            },
            {
              "name": "FRI and Proximity Proofs (Part.2)",
              "url": "https://www.youtube.com/watch?v=CWbx_rnj7LI",
              "type": "视频",
              "tags": [ "Dan Boneh", "ZK Hack", "FRI", ],
              "summary": "@danboneh 教授在 @__zkhack__ Whiteboard Sessions 中详细讲解了FRI协议及其分析，包括两阶段协议（提交和查询）和多种验证方法，以及FRI的变体和未来SNARK发展的潜在替代方案。"
            },
        ]
    },
    {
        date: "2025-01-24",
        projects: [
            {
              "name": "Liquefaction: Privately Liquefying Blockchain Assets",
              "url": "https://arxiv.org/abs/2412.02634",
              "type": "论文",
              "tags": [ "James Austgen", "TEE", "区块链钱包", ],
              "summary": "Austgen等人在{{name}}论文中提出了Liquefaction，一种利用TEE技术对私钥进行约束的钱包平台，展示了加密货币资产所有权模型的脆弱性及其广泛影响。"
            },
            {
              "name": "Introducing Twist and Shout",
              "url": "https://a16zcrypto.com/posts/article/introducing-twist-and-shout/",
              "urls": [
                createUrlItem("论文", "https://people.cs.georgetown.edu/jthaler/TwistShout.pdf")
              ],
              "type": "博客",
              "tags": [ "Justin Thaler", "zkVM", "Jolt", ],
              "summary": "Justin Thaler和Srinath Setty在博客{{name}}中介绍了新发表论文中的重要概念：Twist和Shout，两种新的内存检查参数，旨在确保证明者正确处理VM内存的每次读写，预计将显著提升Jolt zkVM的证明速度。"
            }
        ]
    },
    {
        date: "2025-01-25",
        projects: [
            {
              "name": "Horizen 2.0: An Advanced and Efficient EVM for Zero-Knowledge Applications",
              "url": "https://downloads.horizen.io/file/web-assets/Horizen-2.0-Whitepaper.pdf",
              "type": "论文",
              "tags": [ "Horizen Labs", "zkEVM" ],
              "summary": "@HorizenLabs 在{{name}}论文中提出了一种专为零知识应用设计的EVM链Horizen 2.0，通过预编译扩展支持多种ZK证明机制，显著提升了验证效率并降低了成本，为开发者提供了更灵活的ZK工具。"
            },
            {
              "name": "SP1 Turbo benchmark",
              "url": "https://x.com/jtguibas/status/1882145322664927336",
              "type": "新闻",
              "tags": [
                "jtguibas.eth",
                "SP1 Turbo",
                "R0",
                "benchmark"
              ],
              "summary": "@jtguibas 分享了SP1 Turbo在证明rollup工作负载方面的性能，与R0的最新1.2.1版本相比，SP1 Turbo在各种以太坊区块上的速度提高了6-7倍。"
            },
        ]
    },
    {
        date: "2025-01-27",
        projects: [
            {
              "name": "How to Prove False Statements: Practical Attacks on Fiat-Shamir",
              "url": "https://eprint.iacr.org/2025/118",
              "type": "论文",
              "tags": [ "Dmitry Khovratovich", "Fiat-Shamir", "GKR", ],
              "summary": "Khovratovich等人在{{name}}论文中揭示了Fiat-Shamir变换在实际应用中的安全漏洞，特别是针对基于GKR协议的交互式简洁论证，展示了如何为错误陈述生成接受证明。"
            },
            {
              "name": "Missing verifier checks and fiat-shamir observations",
              "url": "https://github.com/succinctlabs/sp1/security/advisories/GHSA-c873-wfhp-wx5m",
              "type": "新闻",
              "tags": [ "Succinct Labs", "Fiat-Shamir", "Plonky3" ],
              "summary": "Succinct Labs发布了关于SP1 STARK验证器的安全公告，指出在v4.0.0之前版本中存在验证器检查缺失和Fiat-Shamir观察问题，已通过v4.0.0修复。"
            },
            // {
            //   "name": "Integer Commitments, Old and New Tools",
            //   "url": "https://eprint.iacr.org/2025/081",
            //   "type": "论文",
            //   "tags": [
            //     "Iftach Haitner, Yehuda Lindell, Nikolaos Makriyannis",
            //     "Integer Commitments",
            //     "Range Proofs",
            //     "Zero-Knowledge Proofs",
            //     "RSA"
            //   ],
            //   "summary": "Haitner等人在{{name}}论文中详细介绍了基于RSA的整数承诺及相关协议，并提出了一种新的高效设置协议，用于采样承诺参数。"
            // }
        ]
    },

];