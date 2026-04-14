/**
 * 英語教科書（サンシャイン 開隆堂）セクション・ページマッピング
 * 
 * セクション別PDFのため、各学年のPDFを結合した連番ページ番号を使用。
 * globalPage = 画像ファイルの番号 (page_XXXX.png)
 * 
 * qrUrl: 教科書内QRコードのリンク先（開隆堂 音声・動画コンテンツ）
 *   - 短縮URL: https://www.kairyudo.co.jp/r7ceX_YYY
 *   - パターン: r7 = 令和7年版, ce = Central English, X = 学年, YYY = セクション略称
 */

const engData = {
    // ===== 中1 =====
    "1": {
        label: "中1 英語",
        publisher: "サンシャイン",
        imageDir: "images/eng_g1_sunshine",
        totalPages: 167,
        tocPage: "eng_g1_toc.html",
        qrBase: "https://www.kairyudo.co.jp/r7ce1_",
        sections: [
            { id: "toc",    title: "📖 目次",         start: 1,   end: 4,   pages: 4  },
            { id: "ready",  title: "Get Ready",       start: 5,   end: 19,  pages: 15, qrUrl: "https://www.kairyudo.co.jp/r7ce1_gr" },
            { id: "prog1",  title: "Program 1",       start: 20,  end: 27,  pages: 8,  qrUrl: "https://www.kairyudo.co.jp/r7ce1_pr1" },
            { id: "prog2",  title: "Program 2",       start: 28,  end: 35,  pages: 8,  qrUrl: "https://www.kairyudo.co.jp/r7ce1_pr2" },
            { id: "proj1",  title: "Our Project 1",   start: 36,  end: 43,  pages: 8,  qrUrl: "https://www.kairyudo.co.jp/r7ce1_op1" },
            { id: "prog3",  title: "Program 3",       start: 44,  end: 49,  pages: 6,  qrUrl: "https://www.kairyudo.co.jp/r7ce1_pr3" },
            { id: "prog4",  title: "Program 4",       start: 50,  end: 59,  pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce1_pr4" },
            { id: "prog5",  title: "Program 5",       start: 60,  end: 69,  pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce1_pr5" },
            { id: "prog6",  title: "Program 6",       start: 70,  end: 79,  pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce1_pr6" },
            { id: "prog7",  title: "Program 7",       start: 80,  end: 91,  pages: 12, qrUrl: "https://www.kairyudo.co.jp/r7ce1_pr7" },
            { id: "proj2",  title: "Our Project 2",   start: 92,  end: 97,  pages: 6,  qrUrl: "https://www.kairyudo.co.jp/r7ce1_op2" },
            { id: "prog8",  title: "Program 8",       start: 98,  end: 107, pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce1_pr8" },
            { id: "prog9",  title: "Program 9",       start: 108, end: 121, pages: 14, qrUrl: "https://www.kairyudo.co.jp/r7ce1_pr9" },
            { id: "prog10", title: "Program 10",      start: 122, end: 133, pages: 12, qrUrl: "https://www.kairyudo.co.jp/r7ce1_pr10" },
            { id: "proj3",  title: "Our Project 3",   start: 134, end: 139, pages: 6,  qrUrl: "https://www.kairyudo.co.jp/r7ce1_op3" },
            { id: "appendix", title: "📚 巻末資料",   start: 140, end: 167, pages: 28 },
        ],
        pageQrs: {
            "10": "https://www.kairyudo.co.jp/r7ce1_gr",
            "27": "https://www.kairyudo.co.jp/r7ce1_st1",
            "41": "https://www.kairyudo.co.jp/r7ce1_pr3",
            "42": "https://www.kairyudo.co.jp/r7ce1_pr3",
            "44": "https://www.kairyudo.co.jp/r7ce1_op1",
            "55": "https://www.kairyudo.co.jp/r7ce1_pr4",
            "65": "https://www.kairyudo.co.jp/r7ce1_pr5",
            "68": "https://www.kairyudo.co.jp/r7ce1_pr5",
            "74": "https://www.kairyudo.co.jp/r7ce1_pr6",
            "78": "https://www.kairyudo.co.jp/r7ce1_pr6",
            "80": "https://www.kairyudo.co.jp/r7ce1_pr7",
            "82": "https://www.kairyudo.co.jp/r7ce1_pr7",
            "85": "https://www.kairyudo.co.jp/r7ce1_pr7",
            "88": "https://www.kairyudo.co.jp/r7ce1_pr7",
            "92": "https://www.kairyudo.co.jp/r7ce1_op2",
            "103": "https://www.kairyudo.co.jp/r7ce1_pr8",
            "106": "https://www.kairyudo.co.jp/r7ce1_pr8",
            "128": "https://www.kairyudo.co.jp/r7ce1_pr10",
            "130": "https://www.kairyudo.co.jp/r7ce1_pr10",
            "132": "https://www.kairyudo.co.jp/r7ce1_pr10"
        }
    },

    // ===== 中2 =====
    "2": {
        label: "中2 英語",
        publisher: "サンシャイン",
        imageDir: "images/eng_g2_sunshine",
        totalPages: 159,
        tocPage: "eng_g2_toc.html",
        qrBase: "https://www.kairyudo.co.jp/r7ce2_",
        sections: [
            { id: "toc",      title: "📖 目次",         start: 1,   end: 5,   pages: 5  },
            { id: "prog1",    title: "Program 1",       start: 6,   end: 17,  pages: 12, qrUrl: "https://www.kairyudo.co.jp/r7ce2_pr1" },
            { id: "prog2",    title: "Program 2",       start: 18,  end: 29,  pages: 12, qrUrl: "https://www.kairyudo.co.jp/r7ce2_pr2" },
            { id: "prog3",    title: "Program 3",       start: 30,  end: 39,  pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce2_pr3" },
            { id: "proj4",    title: "Our Project 4",   start: 40,  end: 49,  pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce2_op4" },
            { id: "prog4",    title: "Program 4",       start: 50,  end: 63,  pages: 14, qrUrl: "https://www.kairyudo.co.jp/r7ce2_pr4" },
            { id: "prog5",    title: "Program 5",       start: 64,  end: 73,  pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce2_pr5" },
            { id: "prog6",    title: "Program 6",       start: 74,  end: 85,  pages: 12, qrUrl: "https://www.kairyudo.co.jp/r7ce2_pr6" },
            { id: "proj5",    title: "Our Project 5",   start: 86,  end: 95,  pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce2_op5" },
            { id: "prog7",    title: "Program 7",       start: 96,  end: 105, pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce2_pr7" },
            { id: "prog8",    title: "Program 8",       start: 106, end: 117, pages: 12, qrUrl: "https://www.kairyudo.co.jp/r7ce2_pr8" },
            { id: "proj6",    title: "Our Project 6",   start: 118, end: 127, pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce2_op6" },
            { id: "appendix", title: "📚 巻末資料",     start: 128, end: 159, pages: 32 },
        ],
        pageQrs: {
            "12": "https://www.kairyudo.co.jp/r7ce2_pr1",
            "22": "https://www.kairyudo.co.jp/r7ce2_pr2",
            "24": "https://www.kairyudo.co.jp/r7ce2_pr2",
            "54": "https://www.kairyudo.co.jp/r7ce2_pr4",
            "59": "https://www.kairyudo.co.jp/r7ce2_pr4",
            "90": "https://www.kairyudo.co.jp/r7ce2_op5",
            "104": "https://www.kairyudo.co.jp/r7ce2_pr7"
        }
    },

    // ===== 中3 =====
    "3": {
        label: "中3 英語",
        publisher: "サンシャイン",
        imageDir: "images/eng_g3_sunshine",
        totalPages: 159,
        tocPage: "eng_g3_toc.html",
        qrBase: "https://www.kairyudo.co.jp/r7ce3_",
        sections: [
            { id: "toc",      title: "📖 目次",            start: 1,   end: 5,   pages: 5  },
            { id: "prog1",    title: "Program 1",          start: 6,   end: 15,  pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce3_pr1" },
            { id: "prog2",    title: "Program 2",          start: 16,  end: 27,  pages: 12, qrUrl: "https://www.kairyudo.co.jp/r7ce3_pr2" },
            { id: "prog3",    title: "Program 3",          start: 28,  end: 41,  pages: 14, qrUrl: "https://www.kairyudo.co.jp/r7ce3_pr3" },
            { id: "proj7",    title: "Our Project 7",      start: 42,  end: 53,  pages: 12, qrUrl: "https://www.kairyudo.co.jp/r7ce3_op7" },
            { id: "prog4",    title: "Program 4",          start: 54,  end: 63,  pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce3_pr4" },
            { id: "prog5",    title: "Program 5",          start: 64,  end: 77,  pages: 14, qrUrl: "https://www.kairyudo.co.jp/r7ce3_pr5" },
            { id: "prog6",    title: "Program 6",          start: 78,  end: 87,  pages: 10, qrUrl: "https://www.kairyudo.co.jp/r7ce3_pr6" },
            { id: "proj8",    title: "Our Project 8",      start: 88,  end: 93,  pages: 6,  qrUrl: "https://www.kairyudo.co.jp/r7ce3_op8" },
            { id: "prog7",    title: "Program 7",          start: 94,  end: 104, pages: 11, qrUrl: "https://www.kairyudo.co.jp/r7ce3_pr7" },
            { id: "read2",    title: "Reading 2",          start: 105, end: 110, pages: 6,  qrUrl: "https://www.kairyudo.co.jp/r7ce3_r2" },
            { id: "special",  title: "Special Project",    start: 111, end: 113, pages: 3  },
            { id: "further",  title: "Further Reading",    start: 114, end: 125, pages: 12, qrUrl: "https://www.kairyudo.co.jp/r7ce3_fr" },
            { id: "appendix", title: "📚 巻末資料",        start: 126, end: 159, pages: 34 },
        ]
    }
};
