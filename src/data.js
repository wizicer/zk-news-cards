const getWeekday = (dateStr) => {
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const date = new Date(dateStr);
    return weekdays[date.getDay()];
};

const oldData = [
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
];
export const newsData = [
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
