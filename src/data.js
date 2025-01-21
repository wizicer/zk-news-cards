const getWeekday = (dateStr) => {
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const date = new Date(dateStr);
    return weekdays[date.getDay()];
};

const createUrlItem = (name, url) => ({ name, url });

export const newsData = [
    {
        date: "2024-12-08",
        projects: [
            {
                name: "Aligned Foundation Genesis Airdrop",
                url: "https://genesis.alignedfoundation.org",
                type: "新闻",
                icon: "✈️",
                tags: ["Aligned Foundation", "空投", "Github"],
                summary: "Aligned Foundation感谢Ethereum和ZK领域的工程师和研究人员，并邀请他们通过其网站检查空投资格。"
            },
            {
                name: "Scribe: Low-memory SNARKs via Read-Write Streaming",
                url: "https://eprint.iacr.org/2024/1970",
                type: "论文",
                tags: ["University of Pennsylvania", "低内存"],
                summary: "Baweja等人在论文{{name}}中提出了Scribe，一种低内存SNARK，通过利用磁盘存储在廉价设备上高效证明大称述，显著减少内存需求并优化I/O成本。"
            }
        ]
    },
    {
        date: "2024-12-09",
        projects: [
            {
                name: "Zeam: Ethereum beam client in Zig",
                url: "https://github.com/blockblaz/zeam",
                type: "开源",
                tags: ["Blockblaz", "Ethereum", "Github"],
                summary: "Blockblaz团队发布了Zeam开源项目，这是Zig实现的Beam客户端的生产级实现，旨在通过ZK-VMs大规模扩展和去中心化以太坊共识协议。"
            },
            {
                name: "Play-by-email provable games",
                url: "https://blog.hyle.eu/podcast-1-matteo-zkchess/",
                type: "博客",
                tags: ["Hylé", "Matteo", "zkEmail", "RISC0"],
                summary: "Hylé博客{{name}}讨论了zkChess，一个使用zkEmail和RISC0构建的邮件可验证游戏引擎，探讨了zkEmail的酷炫之处及其在加密领域的应用。"
            }
        ]
    },
    {
        date: "2024-12-10",
        projects: [
            {
                name: "Zero-Knowledge Magic for Cheap",
                url: "https://medium.com/@tekkac/zero-knowledge-magic-on-starknet-56ac2453234f",
                type: "博客",
                tags: ["Starknet", "Circom", "Garaga"],
                summary: "Tekkac在博客中介绍了如何在Starknet上使用零知识证明，并详细说明了使用Circom和Garaga进行证明生成和验证的过程。"
            },
            {
                name: "Will ZK Eat The Modular Stack?",
                url: "https://equilibrium.co/writing/will-zk-eat-the-modular-stack",
                type: "博客",
                tags: ["Equilibrium", "模块化", "应用"],
                summary: "Hannes在博客中探讨了ZK与模块化堆栈的关系，讨论了区块链如何扩展当前计算范式，并分析了ZK和模块化在提高效率和扩展性方面的潜力。"
            }
        ]
    },
    {
        date: "2024-12-11",
        projects: [
            {
                name: "zkP2P 协议解析",
                url: "https://www.youtube.com/watch?v=DLZDl1WBuns",
                type: "视频",
                tags: ["fanka", "zkP2P"],
                summary: "fanka在视频分享了zkP2P协议解析，并提供了相关资料链接。"
            },
            {
                name: "Range Checks using Polygon Plonky3 + Puzzle V-3",
                url: "https://www.youtube.com/watch?v=c8y7l3Ee70g",
                type: "视频",
                tags: ["ZK Hack", "Dominik Schmidt", "Plonky3", "Puzzle V-3"],
                summary: "ZK Hack举办了一场关于使用Plonky3进行范围检查的工作坊，由Polygon Miden的Dominik Schmidt主讲，介绍了ZK概念和工具，并启动了Puzzle V-3竞赛。"
            }
        ]
    },
    {
        date: "2024-12-12",
        projects: [
            {
                name: "awesome-zkvm",
                url: "https://github.com/rkdud007/awesome-zkvm",
                type: "开源",
                tags: ["rkdud007", "awesome", "zkVM"],
                summary: "rkdud007发布了awesome-zkvm开源zkVM列表，涵盖了多个项目和资源，支持并行证明和GPU证明的横向对比等功能。"
            },
            {
                name: "An Update on Folding", 
                url: "https://www.youtube.com/watch?v=4alOna5X3ro",
                type: "视频",
                tags: ["ZK Hack", "Albert Garreta", "Folding"],
                summary: "视频详细介绍了折叠方案的定义、特性、应用及其在Nova方案后的进展，特别是Hypernova的定义和协议。"
            }
        ]
    },
    {
        date: "2024-12-13",
        projects: [
            {
                "name": "Lagrange Introduces the Infinite Proving Layer: Expanding Decentralized Proving to ZK Rollups",
                "url": "https://www.lagrange.dev/blog/infinite-proving-layer",
                "type": "新闻",
                "tags": ["Lagrange", "ZK Rollups"],
                "summary": "Lagrange推出了Infinite Proving Layer，扩展了其ZK Prover Network，为ZK rollups提供证明生成。"
            },
            {
                "name": "ZK in Sui",
                "url": "https://zkv.xyz/zk-in-sui/",
                "type": "博客",
                "tags": ["ZKV",  "Sui", "zkLogin", "Kelp"],
                "summary": "ZKV分享了{{name}}关于Sui上的ZK技术应用，讨论了隐私保护和安全漏洞等关键问题。涉及到zkLogin登录和Kelp账户恢复等应用。"
              }
        ]
    },
    {
        date: "2024-12-14",
        projects: [
            {
                "name": "Your definitive guide to zkVMs",
                "url": "https://x.com/kautukkundan/status/1867589273446232368",
                "type": "博客",
                "tags": ["Succinct", "zkVM",],
                "summary": "Succinct团队在ZK-Residency项目中分享了{{name}}关于zkVM的详细指南，比较了SP1、RISC0、Jolt、Nexus、Delphinus和Powdr等zkVM在多种加密算法上的表现。"
              },
              {
                "name": "Joining Tools For Humanity to Build a Better World",
                "url": "https://x.com/realdanielshorr/status/1867235849026638198",
                "type": "新闻",
                "tags": ["Daniel Shorr", "Humanity"],
                "summary": "Daniel Shorr宣布加入Tools for Humanity，致力于构建全球最大的真实人类网络，通过zkAI技术实现隐私和安全的认证。"
              }
        ]
    },
    {
        date: "2024-12-15",
        projects: [
            {
                "name": "Crypto Companions: The PET ecosystem (MPC / FHE / TEE & ZK)",
                "url": "https://mirror.xyz/crypblizz.eth/AJLi9mL_7C8LkSYGlkaDbGfXaXFVtOGU_1eDs-_JDNA",
                "type": "博客",
                "tags": ["Crypblizz", "PETs"],
                "summary": "Crypblizz分享了{{name}}对隐私增强技术（PETs）的深入探讨，涵盖了MPC、FHE、TEE和ZK等技术的历史、演变及其在Web3行业中的重要性。"
              },
              {
                "name": "zkLogin for Base blockchain",
                "url": "https://github.com/shield-labs-xyz/zklogin",
                "type": "开源",
                "tags": ["shield-labs", "zkLogin", "Base"],
                "summary": "shield-labs团队发布了zkLogin开源项目，允许用户在Base(兼容EVM)上使用Google/Apple账户进行自托管登录。"
              }
        ]
    },
    {
        date: "2024-12-16",
        projects: [
            {
                "name": "A primer on hybrid Merkle trees",
                "url": "https://x.com/m2magician/status/1867605074954137635",
                "type": "博客",
                "tags": ["NPLabs", "Merkle Trees", "Plonky3"],
                "summary": "NPLabs团队分享了{{name}}关于hybrid Merkle Trees的技术介绍，探讨了其在plonky3和递归证明中的应用，提供了详细的技术入门指南。"
              },
              {
                "name": "Anonymous credentials from ECDSA",
                "url": "https://eprint.iacr.org/2024/2010",
                "type": "论文",
                "tags": ["Google", "ECDSA"],
                "summary": "Frigo和shelat在论文{{name}}中提出了一种基于ECDSA的新匿名凭证方案，通过高效的zk证明解决了SHA256和文档解析问题，无需更改现有发行者流程或设备，适用于隐私保护的数字身份应用。"
              }
        ]
    },
    {
        date: "2024-12-17",
        projects: [
            {
                "name": "OpenVM: A Performant and Modular zkVM Framework",
                "url": "https://github.com/openvm-org/openvm",
                "type": "开源",
                "tags": ["Axiom", "Scroll", "zkVM"],
                "summary": "Axiom, Scroll等团队发布了OpenVM开源项目，这是一个优先考虑模块化和可扩展性的zkVM框架，支持开发者添加自定义操作码、电路和证明系统。"
              },
              {
                "name": "PoneglyphDB: Efficient Non-interactive Zero-Knowledge Proofs for Arbitrary SQL-Query Verification",
                "url": "https://arxiv.org/abs/2411.15031",
                "type": "论文",
                "tags": ["Binbin Gu", "Unversity of California", "SQL"],
                "summary": "Gu等人在{{name}}论文中提出了PoneglyphDB，通过非交互式零知识证明（ZKP）支持数据保密性和查询处理的可验证性。"
              }
        ]
    },
    {
        date: "2024-12-18",
        projects: [
            {
                "name": "Announcing Valida 0.7.0",
                "url": "https://www.lita.foundation/blog/announcing-valida-0-7-0",
                "type": "新闻",
                "tags": [ "Lita Team", "WASM", "zkVM"],
                "summary": "Lita团队发布了Valida 0.7.0更新，首次支持WASM编译器工具链，并增强了zkVM堆栈的开发体验。"
              },
              {
                "name": "Mira: Generic Accumulation Scheme for Special-Sound Protocols",
                "url": "https://blog.beal.io/posts/mira/",
                "type": "博客",
                "tags": ["Josh Beal", "accumulation", "Folding"],
                "summary": "Josh Beal在博客{{name}}中提出了一种通用的累积方案，适用于特殊可靠性的协议（类Protostar），显著提高了配对基论证的折叠效率。"
              }
        ]
    },
    {
        date: "2024-12-20",
        projects: [
            {
                "name": "zkVM 专列开票",
                "url": "https://mp.weixin.qq.com/s/GLvncEzit0rTGSH5wFAvTw",
                "type": "活动",
                "tags": [ "Antalpha Lab", "zkVM"],
                "summary": "Antalpha Lab发布zkVM的课程安排，从2024年12月30日开始的4周时间，欢迎感兴趣的同学报名。"
              },
              {
                "name": "On the gas efficiency of the WHIR polynomial commitment scheme",
                "url": "https://ethresear.ch/t/on-the-gas-efficiency-of-the-whir-polynomial-commitment-scheme/21301",
                "urls": [
                    createUrlItem("代码", "https://github.com/privacy-scaling-explorations/sol-whir")
                ],
                "type": "博客",
                "tags": [ "Pierre", "PSE", "WHIR", ],
                "summary": "Pierre等人在博客{{name}}中分析了WHIR多项式承诺方案的gas效率，开源了EVM验证器原型，展示了其在不同参数设置下的gas成本优化。TLDR，现在可做到1.3M gas。"
              }
        ]
    },
    {
        date: "2024-12-22",
        projects: [
            {
                "name": "Community Privacy Residency",
                "url": "https://community-privacy.github.io/",
                "type": "活动",
                "tags": [
                  "Community Privacy",
                  "Taipei",
                ],
                "summary": "Community Privacy组织了一个为期2-4周的驻地项目，专注于研究、共同设计、原型设计和构建社区隐私的开源应用。项目将于2025年2月22日至3月22日在台北举行。"
              },
              {
                "name": "Hash-based PCD from the BOIL accumulator",
                "url": "https://hackmd.io/@nil-research/SJj8V9-Bke",
                "urls": [
                    createUrlItem("论文", "https://eprint.iacr.org/2024/1993")
                ],
                "type": "博客",
                "tags": [
                  "nil-research",
                  "BOIL",
                  "accumulation"
                ],
                "summary": "nil-research在{{name}}博客中对他们的论文BOIL进行解读，是一种用Reed-Solomon码实现了高效的累积方案，适用于任意基于哈希的SNARK。"
              }
        ]
    },
    {
        date: "2024-12-23",
        projects: [
            {
                "name": "Wait, Why Do We Need Consensus Again?",
                "url": "https://pod.network/blog/wait-why-do-we-need-consensus-again",
                "type": "博客",
                "tags": [
                  "POD.NETWORK",
                  "Consensus",
                  "Blockchain",
                  "Decentralization",
                  "Double-Spending"
                ],
                "summary": "POD.NETWORK讨论了区块链中共识的必要性，指出共识并非构建去中心化支付的必需，通过无共识协议可以实现更快的交易确认。"
              },
        ]
    },
    {
        date: "2024-12-25",
        projects: [
            {
                "name": "Bypassing the characteristic bound in logUp",
                "url": "https://eprint.iacr.org/2024/2067",
                "type": "论文",
                "tags": [ "Liam Eagen", "Ulrich Haböck", "Polygon Lab", "GKR" ],
                "summary": "Liam Eagen和Ulrich Haböck在{{name}}学术笔记中提出了一种方法，通过抽象极点多重性的概念，绕过了logUp中的特征界限，并适用于Papini和Haböck的GKR变体，解锁了二进制域上的分数分解查找。"
              },
              {
                "name": "Zero Knowledge Podcast Episodes 346",
                "url": "https://zeroknowledge.fm/346-2/",
                "type": "视频",
                "tags": [ "ZK Podcast Team", "ZK", "MPC", "TEE", "ZKML" ],
                "summary": "Zero Knowledge Podcast发布了346集，Anna与Dan Boneh讨论了最新的ZK研究，包括基于格的SNARKs、ZK在内容来源证明中的应用、ZK在FHE环境中的更新以及ZK在ML中的进展。"
              }
        ]
    },
    {
        date: "2024-12-29",
        projects: [
            {
                "name": "ZK101 - 零知识学习零知识",
                "url": "https://www.zk101.io/",
                "type": "开源",
                "tags": [ "Box", "zk101", "Tutorial" ],
                "summary": "Box等人发布了ZK101开源教育平台，旨在使零知识证明技术易于理解和学习，包括从基础到高级的课程、实践案例和代码示例。"
              },
              {
                "name": "LatticeFold: A Lattice-based Folding Scheme and its Applications to Succinct Proof Systems",
                "url": "https://github.com/NethermindEth/latticefold",
                "type": "开源",
                "tags": [ "Nethermind", "Lattice-based", "Rust" ],
                "summary": "Nethermind开源了LatticeFold，这是一个基于LatticeFold方案概念验证实现，包含非交互式折叠方案实现、Ajtai承诺方案、R1CS/CCS结构等。"
              }
        ]
    },
    {
        date: "2024-12-30",
        projects: [
            {
                "name": "Zero Knowledge Memory-Checking Techniques for Stacks and Queues",
                "url": "https://eprint.iacr.org/2024/2084",
                "type": "论文",
                "tags": [ "Alexander Frolov", "Memory Checking", ],
                "summary": "Alexander Frolov在{{name}}论文中提出了针对栈和队列的零知识内存检查技术，优化了RAM方案，减少了乘法门和辅助值的需求。"
              },
              {
                "name": "MyZKP: Building Zero Knowledge Proof from Scratch in Rust",
                "url": "https://koukyosyumei.github.io/MyZKP/index.html",
                "type": "开源",
                "tags": [ "koukyosyumei", "Rust" ],
                "summary": "koukyosyumei发布了MyZKP开源项目，这是一个用Rust从头开始构建的零知识证明库，旨在作为理解和应用零知识证明的教育资源。"
              }
        ]
    },
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
].map(item => {
    const [year, month, day] = item.date.split('-');
    return {
        ...item,
        year,
        month,
        day,
        weekday: getWeekday(item.date)
    };
});
