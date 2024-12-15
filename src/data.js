const getWeekday = (dateStr) => {
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const date = new Date(dateStr);
    return weekdays[date.getDay()];
};

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
                summary: "Baweja等人在论文中提出了Scribe，一种低内存SNARK，通过利用磁盘存储在廉价设备上高效证明大称述，显著减少内存需求并优化I/O成本。"
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
                summary: "Hylé博客讨论了zkChess，一个使用zkEmail和RISC0构建的邮件可验证游戏引擎，探讨了zkEmail的酷炫之处及其在加密领域的应用。"
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
                "summary": "ZKV分享了关于Sui上的ZK技术应用，讨论了隐私保护和安全漏洞等关键问题。涉及到zkLogin登录和Kelp账户恢复等应用。"
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
                "summary": "Succinct团队在ZK-Residency项目中分享了关于zkVM的详细指南，比较了SP1、RISC0、Jolt、Nexus、Delphinus和Powdr等zkVM在多种加密算法上的表现。"
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
                "summary": "Crypblizz分享了对隐私增强技术（PETs）的深入探讨，涵盖了MPC、FHE、TEE和ZK等技术的历史、演变及其在Web3行业中的重要性。"
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
