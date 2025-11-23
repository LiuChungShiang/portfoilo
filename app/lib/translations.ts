export type Language = "en" | "ja" | "zh-tw";

export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            research: "Research",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            title: "劉仲翔(Liu Chung Shiang)",
            subtitle: "",
            description: "Transforming complex data into actionable insights and building intelligent solutions.",
            viewProjects: "View Projects",
            viewExperience: "View Experience",
            contactMe: "Contact Me",
        },
        about: {
            title: "About Me",
            description: "I am an international student from Taiwan, currently studying data science at graduate school with a background in foreign languages. As someone who has experienced both humanities and sciences, I bridge these disciplines. I am passionate about understanding customer needs and extracting insights using data science techniques. My goal is to become a specialist in data utilization.",
            skills: {
                dataAnalysis: "Data Analysis & Visualization",
                dataAnalysisDesc: "Python, R, SQL, Streamlit, Tableau",
                ml: "Machine Learning",
                mlDesc: "Scikit-learn, PyTorch, etc",
                causalInference: "Causal Inference",
                causalInferenceDesc: "DID, PSM, TWFE, etc",
                aiDriven: "AI-Driven Development",
                aiDrivenDesc: "Antigravity, Codex, etc",
            },
            certifications: {
                title: "Certifications",
                categories: [
                    {
                        name: "Data & IT",
                        items: [
                            "Statistics Test Grade 2",
                            "Economic Research Association (ERE) Micro/Macro A+",
                        ],
                    },
                    {
                        name: "Language",
                        items: [
                            "JLPT N1 180/180",
                            "TOEFL iBT 88",
                            "TOEIC L/R 850",
                        ],
                    },
                ],
            },
        },
        experience: {
            title: "Experience & Education",
            items: [
                {
                    year: "Apr 2026",
                    title: "Business Planning (Data Science & Digital Technology)",
                    company: "Japan Airlines Co., Ltd.",
                    description: "Joining",
                    details: "Will work on business planning utilizing data science and digital technology.",
                    image: "/images/jal.png",
                },
                {
                    year: "Mar 2026",
                    title: "M.S. in Applied Data Science",
                    company: "Sophia University Graduate School",
                    description: "Graduation",
                    details: "Specialized in machine learning, data analysis, and statistics.",
                    image: "/images/sophia_bg.jpg",
                },
                {
                    year: "Jun 2019",
                    title: "B.A. in Japanese Language and Culture",
                    company: "Fu Jen Catholic University (Taiwan)",
                    description: "Graduation",
                    details: "Majored in Japanese language and culture.",
                    image: "/images/fujen_bg_new.jpg",
                },
                {
                    year: "Mar 2018",
                    title: "College of Japanese Language and Culture",
                    company: "University of Tsukuba",
                    description: "Exchange Program Completed",
                    details: "Completed one-year exchange program.",
                    image: "/images/tsukuba_bg.jpg",
                },
            ],
        },
        projects: {
            title: "Featured Projects",
            description: "A selection of tools and analyses I've developed to solve real-world problems.",
            items: {
                tableauDashboard: {
                    title: "Tableau Dashboard",
                    description: "Interactive data visualization dashboards for business intelligence and analytics.",
                },
                recommendation: {
                    title: "Ranking and BERT-based Recommendation",
                    description: "Recommendation system utilizing ranking algorithms and BERT for personalized suggestions.",
                },
                stpPersona: {
                    title: "Data-Driven STP & Persona Creation",
                    description: "Market segmentation, targeting, and positioning analysis with persona development.",
                },
                dietRecord: {
                    title: "Diet Record Analysis",
                    description: "Data analysis tool for tracking nutritional intake and visualizing trends over time.",
                },
            },
        },
        research: {
            title: "Research",
            description: "Academic research on causal inference and empirical analysis.",
            items: [
                {
                    title: "The Effect of Housing Subsidies on Marriage Promotion: An Empirical Analysis of Marriage Support Using Difference-in-Differences Design",
                    description: "Causal inference study examining the impact of housing subsidies on marriage rates using difference-in-differences methodology.",
                    tags: ["Causal Inference", "DID", "Policy Analysis"],
                    year: "",
                },
            ],
        },
        contact: {
            title: "Get In Touch",
            description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send Message",
                sending: "Sending...",
                success: "Message sent successfully!",
                error: "Something went wrong. Please try again.",
            },
            button: "Say Hello",
        },
        footer: {
            rights: "© 2025 Liu Chung Shiang's Portfolio. All rights reserved.",
        },
    },
    ja: {
        nav: {
            home: "ホーム",
            about: "自己紹介",
            experience: "経歴",
            research: "研究実績",
            projects: "プロジェクト",
            contact: "お問い合わせ",
        },
        hero: {
            title: "劉仲翔(Liu Chung Shiang)",
            subtitle: "",
            description: "複雑なデータを実用的な洞察に変え、インテリジェントなソリューションを構築します。",
            viewProjects: "プロジェクトを見る",
            viewExperience: "経歴を見る",
            contactMe: "お問い合わせ",
        },
        about: {
            title: "私について",
            description: "外国語学部卒で、現在大学院でデータサイエンスを勉強している台湾出身の留学生です。文系と理系の分野を両方経験してきた文理融合型の人間です。顧客のニーズを理解し、データサイエンス技術を駆使してインサイトを抽出することに興味を持っています。データ活用のスペシャリストになることを目標にして頑張っています。",
            skills: {
                dataAnalysis: "データ分析と可視化",
                dataAnalysisDesc: "Python, R, SQL, Streamlit, Tableau",
                ml: "機械学習",
                mlDesc: "Scikit-learn, PyTorch, etc",
                causalInference: "因果推論",
                causalInferenceDesc: "DID, PSM, TWFE, etc",
                aiDriven: "AI駆動開発",
                aiDrivenDesc: "Antigravity, Codex, etc",
            },
            certifications: {
                title: "資格・認定",
                categories: [
                    {
                        name: "データ・IT関連",
                        items: [
                            "統計検定2級",
                            "経済学検定EREミクロ・マクロA+",
                        ],
                    },
                    {
                        name: "語学",
                        items: [
                            "JLPT N1 180/180",
                            "TOEFL iBT 88",
                            "TOEIC L/R 850",
                        ],
                    },
                ],
            },
        },
        experience: {
            title: "経歴・学歴",
            items: [
                {
                    year: "2026年4月",
                    title: "業務企画職 (データサイエンス・デジタルテクノロジーコース)",
                    company: "日本航空株式会社",
                    description: "入社",
                    details: "データサイエンスとデジタルテクノロジーを活用した業務企画に従事予定。",
                    image: "/images/jal.png",
                },
                {
                    year: "2026年3月",
                    title: "応用データサイエンス学位プログラム",
                    company: "上智大学大学院",
                    description: "卒業",
                    details: "機械学習、データ分析、統計学を専攻。",
                    image: "/images/sophia_bg.jpg",
                },
                {
                    year: "2019年6月",
                    title: "外国語学部日本語学科",
                    company: "台湾輔仁大学",
                    description: "卒業",
                    details: "日本語と日本文化を専攻。",
                    image: "/images/fujen_bg_new.jpg",
                },
                {
                    year: "2018年3月",
                    title: "日本語日本文化学類",
                    company: "筑波大学",
                    description: "交換留学修了",
                    details: "1年間の交換留学プログラムを修了。",
                    image: "/images/tsukuba_bg.jpg",
                },
            ],
        },
        projects: {
            title: "主なプロジェクト",
            description: "実世界の問題を解決するために開発したツールや分析事例の一部をご紹介します。",
            items: {
                tableauDashboard: {
                    title: "Tableauダッシュボード",
                    description: "ビジネスインテリジェンスと分析のためのインタラクティブなデータ可視化ダッシュボード。",
                },
                recommendation: {
                    title: "ランキングやBERTを用いた推薦",
                    description: "ランキングアルゴリズムとBERTを活用したパーソナライズド推薦システム。",
                },
                stpPersona: {
                    title: "データ分析に基づくSTPとペルソナ作成",
                    description: "市場セグメンテーション、ターゲティング、ポジショニング分析とペルソナ開発。",
                },
                dietRecord: {
                    title: "食事記録分析",
                    description: "栄養摂取量を追跡し、経時的な傾向を可視化するためのデータ分析ツール。",
                },
            },
        },
        research: {
            title: "研究実績",
            description: "因果推論と実証分析に関する学術研究。",
            items: [
                {
                    title: "住宅費補助の結婚促進効果　差の差分デザインを用いた結婚支援に関する実証分析",
                    description: "差の差分法を用いて住宅費補助が結婚率に与える影響を検証した因果推論研究。",
                    tags: ["因果推論", "DID", "政策分析"],
                    year: "",
                },
            ],
        },
        contact: {
            title: "お問い合わせ",
            description: "新しいプロジェクトや創造的なアイデア、ビジネスチャンスについてのご相談をいつでもお待ちしております。",
            form: {
                name: "お名前",
                email: "メールアドレス",
                message: "メッセージ",
                send: "送信する",
                sending: "送信中...",
                success: "メッセージが送信されました！",
                error: "エラーが発生しました。もう一度お試しください。",
            },
            button: "メールを送る",
        },
        footer: {
            rights: "© 2025 Liu Chung Shiang's Portfolio. All rights reserved.",
        },
    },
    "zh-tw": {
        nav: {
            home: "首頁",
            about: "關於我",
            experience: "經歷",
            research: "研究成果",
            projects: "專案",
            contact: "聯絡我",
        },
        hero: {
            title: "劉仲翔(Liu Chung Shiang)",
            subtitle: "",
            description: "將複雜的數據轉化為可行的洞察，並構建智能解決方案。",
            viewProjects: "查看專案",
            viewExperience: "查看經歷",
            contactMe: "聯絡我",
        },
        about: {
            title: "關於我",
            description: "我是來自台灣的留學生，外國語學院畢業，目前在研究所攻讀資料科學。作為一個同時經歷過文科與理科領域的文理融合型人才，我熱衷於理解客戶需求，並運用資料科學技術提取洞察。我的目標是成為數據應用領域的專家。",
            skills: {
                dataAnalysis: "數據分析與視覺化",
                dataAnalysisDesc: "Python, R, SQL, Streamlit, Tableau",
                ml: "機器學習",
                mlDesc: "Scikit-learn, PyTorch, etc",
                causalInference: "因果推論",
                causalInferenceDesc: "DID, PSM, TWFE, etc",
                aiDriven: "AI驅動開發",
                aiDrivenDesc: "Antigravity, Codex, etc",
            },
            certifications: {
                title: "證照與認證",
                categories: [
                    {
                        name: "數據與IT相關",
                        items: [
                            "統計檢定2級",
                            "經濟學檢定EREミクロ・マクロA+",
                        ],
                    },
                    {
                        name: "語言",
                        items: [
                            "JLPT N1 180/180",
                            "TOEFL iBT 88",
                            "TOEIC L/R 850",
                        ],
                    },
                ],
            },
        },
        experience: {
            title: "經歷與學歷",
            items: [
                {
                    year: "2026年4月",
                    title: "業務企劃職（資料科學與數位科技課程）",
                    company: "日本航空股份有限公司",
                    description: "入職",
                    details: "將從事運用資料科學與數位科技的業務企劃工作。",
                    image: "/images/jal.png",
                },
                {
                    year: "2026年3月",
                    title: "應用資料科學碩士學位",
                    company: "上智大學研究所",
                    description: "畢業",
                    details: "專攻機器學習、數據分析與統計學。",
                    image: "/images/sophia_bg.jpg",
                },
                {
                    year: "2019年6月",
                    title: "外國語文學院日本語文學系",
                    company: "台灣輔仁大學",
                    description: "畢業",
                    details: "主修日本語言與文化。",
                    image: "/images/fujen_bg_new.jpg",
                },
                {
                    year: "2018年3月",
                    title: "日本語日本文化學類",
                    company: "筑波大學",
                    description: "交換留學結業",
                    details: "完成為期一年的交換留學計畫。",
                    image: "/images/tsukuba_bg.jpg",
                },
            ],
        },
        projects: {
            title: "主要專案",
            description: "以下是我開發的部分工具與分析案例，用於解決實際問題。",
            items: {
                tableauDashboard: {
                    title: "Tableau儀表板",
                    description: "用於商業智慧與分析的互動式數據視覺化儀表板。",
                },
                recommendation: {
                    title: "排名與BERT推薦系統",
                    description: "運用排名演算法與BERT的個人化推薦系統。",
                },
                stpPersona: {
                    title: "基於數據分析的STP與人物誌建立",
                    description: "市場區隔、目標定位、定位分析與人物誌開發。",
                },
                dietRecord: {
                    title: "飲食記錄分析",
                    description: "追蹤營養攝取量並視覺化趨勢的數據分析工具。",
                },
            },
        },
        research: {
            title: "研究成果",
            description: "因果推論與實證分析相關的學術研究。",
            items: [
                {
                    title: "住宅補助對促進結婚的效果　運用差異中的差異設計進行婚姻支援的實證分析",
                    description: "運用差異中的差異法驗證住宅補助對結婚率影響的因果推論研究。",
                    tags: ["因果推論", "DID", "政策分析"],
                    year: "",
                },
            ],
        },
        contact: {
            title: "聯絡我",
            description: "我隨時歡迎討論新專案、創意想法或合作機會。",
            form: {
                name: "姓名",
                email: "電子郵件",
                message: "訊息",
                send: "發送訊息",
                sending: "發送中...",
                success: "訊息已成功發送！",
                error: "發生錯誤，請重試。",
            },
            button: "發送郵件",
        },
        footer: {
            rights: "© 2025 Liu Chung Shiang's Portfolio. All rights reserved.",
        },
    },
};
