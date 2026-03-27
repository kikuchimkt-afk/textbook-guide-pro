const guideData = {
    // ===== 第1章「式の計算」(p.12〜p.35) =====

    "12": {
        title: "p.12 第1章 式の計算 — 世界一周道路をつくろう・話しあおう",
        content: `
            <h2>章導入「世界一周道路をつくろう」</h2>
            <div class="explanation-block">
                <strong>話しあおう</strong><br>
                地表から1m離して世界一周道路をつくったとき，赤道の長さとの差はどのくらいでしょうか。<br><br>
                選択肢：<br>
                ア バドミントンコートの横幅（約6m）<br>
                イ 太陽の塔の高さ（約70m）<br>
                ウ しまなみ海道（約70km）<br>
                エ 新幹線 新大阪−鹿児島中央（約911km）<br>
                オ 月の半径（約1700km）<br><br>
                <span class="ans">答え：ア（約6m）</strong><br>
                <small>💡 地球の半径が何であろうと，差は $2\\pi \\approx 6.28$ mになります！（p.13で証明）</small>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a01201" target="_blank" rel="noopener" class="qr-link-btn">動画：世界一周道路</a></div>
        `
    },

    "13": {
        title: "p.13 1節 式の計算 — 世界一周道路の証明",
        content: `
            <h2>1節 式の計算 — 世界一周道路の差</h2>
            <div class="explanation-block">
                <strong>けいたさんの方法（数値計算）</strong><br>
                赤道の長さ：$2\\pi \\times 6378000$ (m)<br>
                一周道路の長さ：$2\\pi \\times (6378000 + 1)$ (m)<br>
                差：$2\\pi \\times (6378000 + 1) - 2\\pi \\times 6378000$<br>
                $= 12756002\\pi - 12756000\\pi = 2\\pi$ → 約6m
            </div>
            <div class="explanation-block">
                <strong>かりんさんの方法（文字式）</strong><br>
                地球の半径を $r$ m とすると：<br>
                赤道の長さ：$2\\pi r$ (m)<br>
                一周道路の長さ：$2\\pi(r+1)$ (m)<br>
                差：$2\\pi(r+1) - 2\\pi r = 2\\pi r + 2\\pi - 2\\pi r = 2\\pi$<br><br>
                <strong>💡 半径 $r$ が消えた！長さの差は半径に関係なく，常に $2\\pi \\approx 6.28$ m</strong>
            </div>
        `
    },

    "14": {
        title: "p.14 ①式の加法，減法 — ひろげよう・例1・問1",
        content: `
            <h2>ひろげよう の解答</h2>
            <div class="explanation-block">
                <strong>次の数量を表す式を書きましょう。</strong><br><br>
                (1) 1個50円の球根 $a$ 個の代金 → <strong>$50a$ 円</strong><br>
                (2) 縦 $x$ m，横 $y$ m の花だんの面積 → <span class="ans">$xy$ ㎡</strong><br>
                (3) 1辺が $p$ cm の正方形のタイルの面積 → <span class="ans">$p^2$ cm²</strong><br>
                (4) 1000円で $c$ 円のプランターを買ったときのおつり → <span class="ans">$(1000 - c)$ 円</strong><br>
                (5) 1本 $a$ 円の苗10本と1本 $b$ 円の苗4本を買ったときの代金 → <span class="ans">$(10a + 4b)$ 円</strong>
            </div>
            <h2>問1 の解説</h2>
            <div class="explanation-block">
                <strong>問1　多項式 $6a - b + 5$ の項をいいなさい。また，$a$，$b$ の係数をそれぞれいいなさい。</strong><br><br>
                $6a - b + 5 = 6a + (-b) + 5$<br><br>
                <strong>項：</strong>　$6a$，$-b$，$5$<br>
                <span class="ans">$a$ の係数：</strong>　$6$<br>
                <span class="ans">$b$ の係数：</strong>　$-1$<br>
                <small>（「$-b$」は「$-1 \\times b$」と同じなので，係数は $-1$ です！）</small>
            </div>
        `
    },

    "15": {
        title: "p.15 例2・問2・問3 — 次数・同類項",
        content: `
            <h2>問2 の解説</h2>
            <div class="explanation-block">
                <strong>問2　次の多項式は何次式ですか。</strong><br><br>
                各項の次数のうち<strong>最も大きいもの</strong>がその多項式の次数です。<br><br>
                <strong>(1) $-x^2 + 4y + 3$</strong><br>
                　$-x^2$ の次数＝2 → <span class="ans">2次式</span><br><br>
                <strong>(2) $a - b + 5$</span><br>
                　$a$ の次数＝1 → <span class="ans">1次式</span><br><br>
                <strong>(3) $xy - 2$</span><br>
                　$xy$ の次数＝2（$x$が1個，$y$が1個で合計2個） → <span class="ans">2次式</span>
            </div>
            <h2>問3 の解説</h2>
            <div class="explanation-block">
                <strong>問3　次の式の同類項をいいなさい。</strong><br><br>
                <strong>(1) $4a + 5b - 6c + 7a - 8c$</span><br>
                　・$4a$ と $7a$（$a$ の項）<br>
                　・$-6c$ と $-8c$（$c$ の項）<br><br>
                <strong>(2) $xy + x - 5xy - 2x$</span><br>
                　・$xy$ と $-5xy$（$xy$ の項）<br>
                　・$x$ と $-2x$（$x$ の項）
            </div>
        `
    },

    "16": {
        title: "p.16 問4・問5・ひろげよう — 同類項まとめ・多項式の加法",
        content: `
            <h2>問4 の解説</h2>
            <div class="explanation-block">
                <strong>問4　次の式の同類項をまとめなさい。</strong><br><br>
                <strong>(1) $3a - 6b + 8a + b$</span><br>
                $= (3a + 8a) + (-6b + b) =$ <span class="ans">$11a - 5b$</span><br><br>
                <strong>(2) $3x - 7y - x + 2y$</span><br>
                $= (3x - x) + (-7y + 2y) =$ <span class="ans">$2x - 5y$</span><br><br>
                <strong>(3) $x^2 - 4x + 2 + 3x$</span><br>
                ⚠️ $x^2$ と $x$ は次数が違うので同類項ではない！<br>
                $= x^2 + (-4x + 3x) + 2 =$ <span class="ans">$x^2 - x + 2$</span><br><br>
                <strong>(4) $y^2 - 3y - 3y^2 + 2y$</span><br>
                $= (y^2 - 3y^2) + (-3y + 2y) =$ <span class="ans">$-2y^2 - y$</span>
            </div>
            <h2>問5 の解説</h2>
            <div class="explanation-block">
                <strong>問5　次の2つの多項式をたしなさい。</strong><br><br>
                <strong>(1) $4x - 7y$ と $x + 5y$</span><br>
                $(4x - 7y) + (x + 5y) = 4x - 7y + x + 5y =$ <span class="ans">$5x - 2y$</span><br><br>
                <strong>(2) $5a - 2b$ と $-a - 3b$</span><br>
                $(5a - 2b) + (-a - 3b) = 5a - 2b - a - 3b =$ <span class="ans">$4a - 5b$</span>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a01677" target="_blank" rel="noopener" class="qr-link-btn">補充問題 3・4</a></div>
        `
    },

    "17": {
        title: "p.17 問6・問7・説明しよう・練習問題① — 多項式の減法・筆算",
        content: `
            <h2>問6 の解説</h2>
            <p style="color:#c0392b;font-weight:bold">⚠️ 引く式のかっこをはずすとき，<strong>すべての項の符号が逆になる！</strong></p>
            <div class="explanation-block">
                <strong>問6　左の式から右の式をひきなさい。</strong><br><br>
                <strong>(1) $5x + 2y$ から $3x + y$</span><br>
                $(5x + 2y) - (3x + y) = 5x + 2y - 3x - y =$ <span class="ans">$2x + y$</span><br><br>
                <strong>(2) $3a - 6b$ から $2a - 4b$</span><br>
                $(3a - 6b) - (2a - 4b) = 3a - 6b - 2a + 4b =$ <span class="ans">$a - 2b$</span>
            </div>
            <h2>問7 の解説（縦に並べた計算）</h2>
            <div class="explanation-block">
                <strong>(1)</strong> $2x-3y$ + $4x+5y$ = <strong>$6x + 2y$</strong><br>
                <strong>(2)</strong> $x+y$ + $x-y$ = <strong>$2x$</strong><br>
                <strong>(3)</strong> $5x-2y$ − $x-3y$ = <strong>$4x + y$</strong><br>
                <strong>(4)</strong> $6x+y$ − $6x-y-8$ = <strong>$2y + 8$</strong>
            </div>
            <h2>「説明しよう」の解説</h2>
            <div class="explanation-block">
                ✕ 誤答例：$3x - 2y + 5x + 4y = 8x + 2y = 10xy$<br><br>
                <p style="color:#c0392b;font-weight:bold">⚠️ $8x + 2y = 10xy$ は<strong>間違い</strong>！</p>
                $8x$ は「$x$ の項」，$2y$ は「$y$ の項」→ 同類項ではないのでまとめられません。<br>
                $xy$ は $x \\times y$ を意味するので，$8x + 2y$ とは全く別のもの。<br>
                <strong>$8x + 2y$ のままが最終的な答えです！</strong>
            </div>
            <h2>練習問題① の解説</h2>
            <div class="explanation-block">
                <strong>①　$8x - 7y$ と $-2x + 5y$ について</strong><br><br>
                <strong>(1) 2つの式をたしなさい。</strong><br>
                $(8x - 7y) + (-2x + 5y) = 8x - 7y - 2x + 5y =$ <span class="ans">$6x - 2y$</strong><br><br>
                <strong>(2) 左の式から右の式をひきなさい。</strong><br>
                $(8x - 7y) - (-2x + 5y) = 8x - 7y + 2x - 5y =$ <span class="ans">$10x - 12y$</span>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a01777" target="_blank" rel="noopener" class="qr-link-btn">補充問題 4</a></div>
        `
    },

    "18": {
        title: "p.18 ②いろいろな多項式の計算 — 例1〜3・問1",
        content: `
            <h2>問1 の解説</h2>
            <p>分配法則 $m(a + b) = ma + mb$ を使って計算します。</p>
            <div class="explanation-block">
                <strong>(1) $7(5x + 4y)$</span> $= 35x + 28y$<br><br>
                <strong>(2) $-4(2a - 3b)$</span> $= -8a + 12b$<br><br>
                <strong>(3) $(12x - 16y) \\times \\dfrac{1}{4}$</span> $= 3x - 4y$<br><br>
                <strong>(4) $(-8x + 6y) \\div 2$</span> $= -4x + 3y$<br><br>
                <strong>(5) $(5a - 15b) \\div (-5)$</span> $= -a + 3b$<br><br>
                <strong>(6) $(14a - 7b) \\div \\left(-\\dfrac{7}{2}\\right)$</span><br>
                $= (14a - 7b) \\times \\left(-\\dfrac{2}{7}\\right) =$ <span class="ans">$-4a + 2b$</span>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a01877" target="_blank" rel="noopener" class="qr-link-btn">補充問題 5</a></div>
        `
    },

    "19": {
        title: "p.19 問2・問3・問4 — かっこを含む式・分数係数・分数の形",
        content: `
            <h2>問2 の解説</h2>
            <div class="explanation-block">
                <strong>(1) $2(3x - y) + 3(x + 2y)$</span><br>
                $= 6x - 2y + 3x + 6y =$ <span class="ans">$9x + 4y$</span><br><br>
                <strong>(2) $3(5a - b) - 2(2a - 2b)$</span><br>
                $= 15a - 3b - 4a + 4b =$ <span class="ans">$11a + b$</span><br><br>
                <strong>(3) $4(a + 1) + 2(2a + b - 3)$</span><br>
                $= 4a + 4 + 4a + 2b - 6 =$ <span class="ans">$8a + 2b - 2$</span><br><br>
                <strong>(4) $6(4x + y - 2) - 7(x - 2y + 1)$</span><br>
                $= 24x + 6y - 12 - 7x + 14y - 7 =$ <span class="ans">$17x + 20y - 19$</span>
            </div>
            <h2>問3 の解説（分数係数）</h2>
            <div class="explanation-block">
                <strong>(1) $\\dfrac{1}{3}(x - 2y) + \\dfrac{1}{5}(-x + 3y)$</span><br>
                通分（15）：$= \\dfrac{5(x-2y) + 3(-x+3y)}{15} = \\dfrac{5x-10y-3x+9y}{15} =$ <span class="ans">$\\dfrac{2x - y}{15}$</span><br><br>
                <strong>(2) $\\dfrac{1}{4}(3x - y) - \\dfrac{1}{2}(5x - 3y)$</span><br>
                通分（4）：$= \\dfrac{3x - y - 2(5x - 3y)}{4} = \\dfrac{3x - y - 10x + 6y}{4} =$ <span class="ans">$\\dfrac{-7x + 5y}{4}$</span>
            </div>
            <h2>問4 の解説（分数の形の計算）</h2>
            <div class="explanation-block">
                <strong>(1) $\\dfrac{x + 5y}{6} + \\dfrac{-4x + 3y}{9}$</span><br>
                通分（18）：$= \\dfrac{3(x+5y) + 2(-4x+3y)}{18} = \\dfrac{3x+15y-8x+6y}{18} =$ <span class="ans">$\\dfrac{-5x + 21y}{18}$</span><br><br>
                <strong>(2) $\\dfrac{3a - 5b}{4} - \\dfrac{a - 7b}{8}$</span><br>
                通分（8）：$= \\dfrac{2(3a-5b) - (a-7b)}{8} = \\dfrac{6a-10b-a+7b}{8} =$ <span class="ans">$\\dfrac{5a - 3b}{8}$</span>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a01977" target="_blank" rel="noopener" class="qr-link-btn">補充問題 5・6</a></div>
        `
    },

    "20": {
        title: "p.20 例題1・問5・練習問題② — 式の値",
        content: `
            <h2>問5 の解説</h2>
            <div class="explanation-block">
                <strong>問5　$a = -\\dfrac{1}{6},\\ b = 3$ のとき</strong><br>
                <small>🔑 先に式を整理してから代入！</small><br><br>
                <strong>(1) $2a - 3b + 5b - 8a$</span><br>
                整理：$= -6a + 2b$<br>
                代入：$= -6 \\times (-\\dfrac{1}{6}) + 2 \\times 3 = 1 + 6 =$ <span class="ans">$7$</span><br><br>
                <strong>(2) $5(4a - 3b) - 4(2a - 5b)$</span><br>
                整理：$= 20a - 15b - 8a + 20b = 12a + 5b$<br>
                代入：$= 12 \\times (-\\dfrac{1}{6}) + 5 \\times 3 = -2 + 15 =$ <span class="ans">$13$</span>
            </div>
            <h2>練習問題② の解説</h2>
            <div class="explanation-block">
                <strong>① 次の計算をしなさい。</strong><br><br>
                (1) $\\dfrac{2}{5}(10x + 25y) =$ <span class="ans">$4x + 10y$</span><br>
                (2) $(8a - 12b) \\div 4 =$ <span class="ans">$2a - 3b$</span><br>
                (3) $(2x - 4y) \\div \\dfrac{2}{3} = (2x-4y) \\times \\dfrac{3}{2} =$ <span class="ans">$3x - 6y$</span><br>
                (4) $7(a - b) - (4a + 6b) = 7a - 7b - 4a - 6b =$ <span class="ans">$3a - 13b$</span><br>
                (5) $-4(x + 2y) + 3(x + 5y) = -4x - 8y + 3x + 15y =$ <span class="ans">$-x + 7y$</span><br>
                (6) $3(4x - \\dfrac{1}{3}y) - 6(2x - 3y) = 12x - y - 12x + 18y =$ <span class="ans">$17y$</span>
            </div>
            <div class="explanation-block">
                <strong>② 次の計算をしなさい。</strong><br><br>
                (1) $\\dfrac{1}{5}(2x + 3y) + \\dfrac{1}{3}(5x - 2y - 1) = \\dfrac{6x+9y+25x-10y-5}{15} =$ <span class="ans">$\\dfrac{31x - y - 5}{15}$</span><br><br>
                (2) $\\dfrac{5x - 2y}{3} - \\dfrac{-3x + 7y}{4} = \\dfrac{20x-8y+9x-21y}{12} =$ <span class="ans">$\\dfrac{29x - 29y}{12}$</span>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a02077" target="_blank" rel="noopener" class="qr-link-btn">補充問題 7</a></div>
        `
    },

    "21": {
        title: "p.21 ③単項式の乗法，除法 — ひろげよう・例1・問1・例2",
        content: `
            <h2>問1 の解説（単項式の掛け算）</h2>
            <p>係数は係数どうし，文字は文字どうしかけます。</p>
            <div class="explanation-block">
                (1) $(-4x) \\times 5y =$ <span class="ans">$-20xy$</span><br>
                (2) $(-7y) \\times (-3x) =$ <span class="ans">$21xy$</span><br>
                (3) $\\dfrac{5}{9}a \\times (-3b) =$ <span class="ans">$-\\dfrac{5}{3}ab$</span><br>
                (4) $\\dfrac{1}{2}x \\times \\dfrac{3}{4}x =$ <span class="ans">$\\dfrac{3}{8}x^2$</span><br>
                (5) $3ab \\times b =$ <span class="ans">$3ab^2$</span><br>
                (6) $(-x) \\times (-8xy) =$ <span class="ans">$8x^2y$</span>
            </div>
        `
    },

    "22": {
        title: "p.22 問2・問3・問4 — 累乗・単項式の除法・分数を含む除法",
        content: `
            <h2>問2 の解説（累乗を含む乗法）</h2>
            <div class="explanation-block">
                (1) $(-7a)^2 = \\color{#e74c3c}{49a^2}$<br>
                (2) $\\dfrac{1}{3}x \\times (3x)^2 = \\dfrac{1}{3}x \\times 9x^2 =$ <span class="ans">$3x^3$</span><br>
                (3) $-(4x)^2 =$ <span class="ans">$-16x^2$</span>　<small>（符号がつく前に累乗！）</small><br>
                (4) $(-a)^2 \\times 3a = a^2 \\times 3a =$ <span class="ans">$3a^3$</span>
            </div>
            <h2>問3 の解説（単項式の除法）</h2>
            <div class="explanation-block">
                (1) $(-6ab) \\div 2a =$ <span class="ans">$-3b$</span><br>
                (2) $8x^2 \\div x =$ <span class="ans">$8x$</span><br>
                (3) $(-9x^2y) \\div (-3y) =$ <span class="ans">$3x^2$</span><br>
                (4) $5a^2 \\div (-10a^2) =$ <span class="ans">$-\\dfrac{1}{2}$</span>
            </div>
            <h2>問4 の解説（分数を含む除法）</h2>
            <div class="explanation-block">
                <small>÷ は逆数のかけ算に変換！</small><br><br>
                (1) $7x^2 \\div (-\\dfrac{7}{4}x) =$ <span class="ans">$-4x$</span><br>
                (2) $-\\dfrac{5}{18}ab \\div (-\\dfrac{10}{9}b) =$ <span class="ans">$\\dfrac{a}{4}$</span><br>
                (3) $-\\dfrac{1}{5}x^3y \\div \\dfrac{1}{5}x =$ <span class="ans">$-x^2y$</span><br>
                (4) $\\dfrac{2}{3}y^2 \\div \\dfrac{3}{2}y^2 =$ <span class="ans">$\\dfrac{4}{9}$</span>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a02201" target="_blank" rel="noopener" class="qr-link-btn">補充問題 8</a><a href="https://k-qr.com/5m2a02277" target="_blank" rel="noopener" class="qr-link-btn">補充問題 9</a></div>
        `
    },

    "23": {
        title: "p.23 問5・話しあおう・練習問題③ — 3つの式の乗除",
        content: `
            <h2>問5 の解説</h2>
            <div class="explanation-block">
                (1) $2a \\times 3ab \\times 4b =$ <span class="ans">$24a^2b^2$</span><br>
                (2) $-5xy \\times 7y \\times (-2x) =$ <span class="ans">$70x^2y^2$</span><br>
                (3) $4a \\times 9b \\div (-8a) =$ <span class="ans">$-\\dfrac{9b}{2}$</span><br>
                (4) $8x^2 \\div (-4x) \\times (-3x) =$ <span class="ans">$6x^2$</span><br>
                (5) $6ab \\times (-7a) \\div 14b =$ <span class="ans">$-3a^2$</span><br>
                (6) $16xy^2 \\div 4y \\div (-2x) =$ <span class="ans">$-2y$</span>
            </div>
            <h2>「話しあおう」の解説</h2>
            <div class="explanation-block">
                <strong>誤答例(1)：</strong> $18ab \\div 3a \\times 2b = 18ab \\div 6ab = 3$<br>
                ⚠️ <strong>左から順に計算する！</strong> $18ab \\div 3a = 6b$，$6b \\times 2b = 12b^2$<br><br>
                <strong>誤答例(2)：</strong> $4xy \\div (-\\dfrac{2}{3}x) = 4xy \\times (-\\dfrac{3}{2}x) = -6x^2y$<br>
                ⚠️ 逆数に変換するとき，<strong>分子に $x$ がくるのではなく分母に！</strong><br>
                正しくは $4xy \\times (-\\dfrac{3}{2x}) = -\\dfrac{12xy}{2x} =$ <span class="ans">$-6y$</span>
            </div>
            <h2>練習問題③ の解説</h2>
            <div class="explanation-block">
                <strong>①</strong><br>
                (1) $5x \\times (-2x) =$ <span class="ans">$-10x^2$</span><br>
                (2) $12m \\div 2m =$ <span class="ans">$6$</span><br>
                (3) $(-4x)^2 =$ <span class="ans">$16x^2$</span><br>
                (4) $\\dfrac{2}{3}xy \\times \\dfrac{1}{4}x =$ <span class="ans">$\\dfrac{1}{6}x^2y$</span><br>
                (5) $\\dfrac{2}{5}x \\times (-10y^2) =$ <span class="ans">$-4xy^2$</span><br>
                (6) $\\dfrac{5}{6}x^3 \\div (-\\dfrac{10}{3}x) =$ <span class="ans">$-\\dfrac{x^2}{4}$</span>
            </div>
            <div class="explanation-block">
                <strong>②</strong> $x = -2,\\ y = \\dfrac{1}{3}$ のとき<br><br>
                (1) $3x^2 \\div 2x \\times 4y = 6xy = 6 \\times (-2) \\times \\dfrac{1}{3} =$ <span class="ans">$-4$</span><br>
                (2) $6x^2y \\div 3x \\div (-2y) = -x = -(-2) =$ <span class="ans">$2$</span>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a02377" target="_blank" rel="noopener" class="qr-link-btn">補充問題 10</a></div>
        `
    },

    "24": {
        title: "p.24 2節 文字式の利用 — カレンダーの問題・話しあおう",
        content: `
            <h2>2節「文字式の利用」</h2>
            <div class="explanation-block">
                <strong>「話しあおう」</strong><br>
                カレンダーで横に並んだ3つの数の和に，どんな性質があるか予想しましょう。<br><br>
                例：$7 + 8 + 9 = 24 = 3 \\times 8$<br>
                　　$13 + 14 + 15 = 42 = 3 \\times 14$<br><br>
                予想：<strong>「連続する3つの整数の和は，常に3の倍数（真ん中の数の3倍）」</strong>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a02401" target="_blank" rel="noopener" class="qr-link-btn">動画：3つの数の和のひみつ</a></div>
        `
    },

    "25": {
        title: "p.25 文字式の利用① — 連続3整数の和の証明",
        content: `
            <h2>Q の証明</h2>
            <div class="explanation-block">
                <strong>連続する3つの整数の和は，3の倍数になることを説明しなさい。</strong><br><br>
                最も小さい数を $n$ とすると：<br>
                $n + (n+1) + (n+2) = 3n + 3 = 3(n+1)$<br><br>
                $n+1$ は整数なので，$3(n+1)$ は3の倍数。　■<br><br>
                💡 さらに $n+1$ は真ん中の数なので，<strong>「真ん中の数の3倍」</strong>でもある！
            </div>
        `
    },

    "26": {
        title: "p.26 深める例・説明しよう — 連続5整数・偶数と奇数の和",
        content: `
            <h2>「説明しよう」の解説</h2>
            <div class="explanation-block">
                <strong>連続する5つの整数の和の性質を予想し，説明しなさい。</strong><br><br>
                予想：$3+4+5+6+7 = 25 = 5 \\times 5$ → 5の倍数<br><br>
                最も小さい数を $n$ とすると：<br>
                $n + (n+1) + (n+2) + (n+3) + (n+4) = 5n + 10 = 5(n+2)$<br>
                $n+2$ は整数なので $5(n+2)$ は5の倍数。<br>
                また $n+2$ は真ん中の数なので，<strong>真ん中の数の5倍</strong>でもある。　■
            </div>
            <div class="explanation-block">
                <strong>偶数・奇数の文字式での表し方</strong><br>
                ・偶数 → $m$ を整数とすると <strong>$2m$</strong><br>
                ・奇数 → $n$ を整数とすると <strong>$2n + 1$</strong>
            </div>
        `
    },

    "27": {
        title: "p.27 例題1・問1・話しあおう — 偶数と奇数の和の証明",
        content: `
            <h2>問1 の解説</h2>
            <div class="explanation-block">
                <strong>問1　奇数と奇数の和は偶数になります。その理由を説明しなさい。</strong><br><br>
                $m$，$n$ を整数とすると，2つの奇数は $2m+1$，$2n+1$<br>
                $(2m+1) + (2n+1) = 2m + 2n + 2 = 2(m + n + 1)$<br><br>
                $m+n+1$ は整数なので，$2(m+n+1)$ は偶数。　■
            </div>
            <h2>「話しあおう」の解説</h2>
            <div class="explanation-block">
                <strong>誤答例の問題点</strong><br>
                2つの奇数をどちらも $2n+1$ で表すと，「<strong>同じ奇数の2倍</strong>」になってしまう。<br>
                <strong>異なる2つの奇数は，必ず別の文字 $m$ と $n$ を使って区別すること！</strong>
            </div>
        `
    },

    "28": {
        title: "p.28 2けたの整数の問題 — ひろげよう・例題2",
        content: `
            <h2>2けたの整数の表し方</h2>
            <div class="explanation-block">
                十の位の数を $a$，一の位の数を $b$ とすると：<br>
                ・2けたの正の整数 ＝ $10a + b$<br>
                ・入れかえた数　　 ＝ $10b + a$<br><br>
                <strong>例題2 の確認（和が11の倍数）</strong><br>
                $(10a + b) + (10b + a) = 11a + 11b = 11(a + b)$<br>
                $a+b$ は整数なので $11(a+b)$ は11の倍数。　■
            </div>
        `
    },

    "29": {
        title: "p.29 説明しよう・等式の変形 — 差は9の倍数・ひろげよう",
        content: `
            <h2>「説明しよう」の解説</h2>
            <div class="explanation-block">
                <strong>2けたの整数と入れかえた数の差の性質</strong><br><br>
                $(10a + b) - (10b + a) = 9a - 9b = 9(a - b)$<br>
                $a-b$ は整数なので $9(a-b)$ は9の倍数。<br>
                差は「<strong>十の位と一の位の差の9倍</strong>」。　■
            </div>
            <div class="explanation-block">
                <strong>等式の変形（ひろげよう）</strong><br>
                トラック（2つの半円＋長方形）で周の長さが200mのとき：<br>
                $2x + 2\\pi r = 200$ …①<br>
                この式を $x$ について解くと：$x = 100 - \\pi r$
            </div>
        `
    },

    "30": {
        title: "p.30 問2・問3・練習問題④ — 等式の変形",
        content: `
            <h2>問2 の解説</h2>
            <div class="explanation-block">
                <strong>半径を15m，20mにすると，直線部分ABの長さは？</strong><br>
                $x = 100 - \\pi r$ に代入：<br>
                $r = 15$：$x = 100 - 15\\pi \\approx 100 - 47.1 =$ <strong>$52.9$ m</strong><br>
                $r = 20$：$x = 100 - 20\\pi \\approx 100 - 62.8 =$ <span class="ans">$37.2$ m</strong>
            </div>
            <h2>問3 の解説</h2>
            <div class="explanation-block">
                <strong>(1) $y = ax$ → $a$ について</strong>：$a = \\dfrac{y}{x}$<br><br>
                <strong>(2) $\\ell = 2\\pi r$ → $r$ について</strong>：$r = \\dfrac{\\ell}{2\\pi}$<br><br>
                <strong>(3) $x + y = 6$ → $x$ について</strong>：$x = 6 - y$<br><br>
                <strong>(4) $2x - y = 3$ → $y$ について</strong>：$y = 2x - 3$
            </div>
            <h2>練習問題④ の解説</h2>
            <div class="explanation-block">
                <strong>① 等式を解きなさい。</strong><br><br>
                <strong>(1) $\\ell = 2(a + b)$ → $a$ について</strong><br>
                $\\ell = 2a + 2b$ → $2a = \\ell - 2b$ → $a =$ <span class="ans">$\\dfrac{\\ell - 2b}{2}$</strong><br><br>
                <strong>(2) $4x + 2y = 1$ → $y$ について</strong><br>
                $2y = 1 - 4x$ → $y =$ <span class="ans">$\\dfrac{1 - 4x}{2}$</span>
            </div>
            <div class="explanation-block">
                <strong>② $\\triangle ABC$ で $S_1 : S_2 = a : b$ の証明</strong><br><br>
                頂点Aから辺BCへの垂線の長さを $h$ とすると：<br>
                $S_1 = \\dfrac{1}{2}ah$，$S_2 = \\dfrac{1}{2}bh$<br>
                $\\dfrac{S_1}{S_2} = \\dfrac{a}{b}$ → <span class="ans">$S_1 : S_2 = a : b$</span>　■<br><br>
                $S_1$ について解くと：$bS_1 = aS_2$ → $S_1 =$ <span class="ans">$\\dfrac{aS_2}{b}$</span>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a03077" target="_blank" rel="noopener" class="qr-link-btn">補充問題 11</a></div>
        `
    },

    "31": {
        title: "p.31 数学ライブラリー — 倍数の見分け方",
        content: `
            <h2>倍数の見分け方</h2>
            <div class="explanation-block">
                <strong>各倍数の判定法：</strong><br><br>
                ・<strong>2の倍数</strong>……一の位の数が偶数<br>
                ・<strong>3の倍数</strong>……各位の数の和が3の倍数<br>
                ・<strong>4の倍数</strong>……下2けたの数が00か4の倍数<br>
                ・<strong>5の倍数</strong>……一の位の数が0または5<br>
                ・<strong>6の倍数</strong>……偶数であり，かつ各位の数の和が3の倍数<br>
                ・<strong>8の倍数</strong>……下3けたの数が000か8の倍数<br>
                ・<strong>9の倍数</strong>……各位の数の和が9の倍数<br>
                ・<strong>11の倍数</strong>……奇数番目の数の和と偶数番目の数の和の差が11の倍数
            </div>
            <div class="explanation-block">
                <strong>例：435が3の倍数であることの確認</strong><br>
                $4 + 3 + 5 = 12$　→　12は3の倍数なので，435は3の倍数
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a03101" target="_blank" rel="noopener" class="qr-link-btn">倍数の見分け方</a></div>
        `
    },
    "32": {
        title: "p.32 章末問題「学びをたしかめよう」① — 問題1〜5",
        content: `
            <h2>1　次の多項式は何次式ですか。</h2>
            <div class="explanation-block">
                (1) $ab + c - d$　→ $ab$ の次数＝2 → <span class="ans">2次式</span><br>
                (2) $x^2y - xy + 1$　→ $x^2y$ の次数＝3 → <span class="ans">3次式</span>
            </div>
            <h2>2　次の式の同類項をまとめなさい。</h2>
            <div class="explanation-block">
                (1) $3x - 7y + 4x =$ <span class="ans">$7x - 7y$</span><br>
                (2) $8a - b - 7a + 2b =$ <span class="ans">$a + b$</span><br>
                (3) $-5x + 9y + 3x - 8y =$ <span class="ans">$-2x + y$</span><br>
                (4) $3x^2 - 5x - 2x^2 + x =$ <span class="ans">$x^2 - 4x$</span>
            </div>
            <h2>3　次の2つの多項式をたしなさい。また，左の式から右の式をひきなさい。</h2>
            <div class="explanation-block">
                <strong>(1) $3a + 2b$，$a - 4b$</span><br>
                和：$(3a+2b)+(a-4b) =$ <span class="ans">$4a - 2b$</span><br>
                差：$(3a+2b)-(a-4b) = 3a+2b-a+4b =$ <span class="ans">$2a + 6b$</span><br><br>
                <strong>(2) $x - 4y$，$-2x + 3y$</span><br>
                和：$(x-4y)+(-2x+3y) =$ <span class="ans">$-x - y$</span><br>
                差：$(x-4y)-(-2x+3y) = x-4y+2x-3y =$ <span class="ans">$3x - 7y$</span>
            </div>
            <h2>4　次の計算をしなさい。（縦に並べた計算）</h2>
            <div class="explanation-block">
                (1) $(3x+4y) + (2x-2y) =$ <span class="ans">$5x + 2y$</span><br>
                (2) $(a-2b) - (-a-3b) = a-2b+a+3b =$ <span class="ans">$2a + b$</span><br>
                (3) $7x + (3x-6y) =$ <span class="ans">$10x - 6y$</span><br>
                (4) $(4a+6b) - (a+6b-5) = 4a+6b-a-6b+5 =$ <span class="ans">$3a + 5$</span>
            </div>
            <h2>5　次の計算をしなさい。</h2>
            <div class="explanation-block">
                (1) $5(4a - 5b) =$ <span class="ans">$20a - 25b$</span><br>
                (2) $-3(4x - 9y) =$ <span class="ans">$-12x + 27y$</span><br>
                (3) $(-28x + 21y) \\div 7 =$ <span class="ans">$-4x + 3y$</span><br>
                (4) $(36a - 24b) \\div (-4) =$ <span class="ans">$-9a + 6b$</span><br>
                (5) $5x + 2(x - 2y) = 5x + 2x - 4y =$ <span class="ans">$7x - 4y$</span><br>
                (6) $2(2x - y) + (5x - y) = 4x - 2y + 5x - y =$ <span class="ans">$9x - 3y$</span><br>
                (7) $3(x + y) - 3(x - y) = 3x + 3y - 3x + 3y =$ <span class="ans">$6y$</span><br>
                (8) $5(4a + b) - 6(5a - b + 3) = 20a + 5b - 30a + 6b - 18 =$ <span class="ans">$-10a + 11b - 18$</span><br>
                (9) $\\dfrac{1}{2}(4x - y) + \\dfrac{1}{3}(x + 2y) = \\dfrac{12x-3y+2x+4y}{6} =$ <span class="ans">$\\dfrac{14x + y}{6}$</span><br>
                (10) $\\dfrac{3a-4b}{4} - \\dfrac{a-b}{2} = \\dfrac{3a-4b-2(a-b)}{4} = \\dfrac{3a-4b-2a+2b}{4} =$ <span class="ans">$\\dfrac{a - 2b}{4}$</span>
            </div>
        `
    },

    "33": {
        title: "p.33 章末問題「学びをたしかめよう」② — 問題6〜9",
        content: `
            <h2>6　$a = 3,\\ b = -\\dfrac{1}{2}$ のとき</h2>
            <div class="explanation-block">
                <strong>(1) $2a - 7b - a + 3b$</span><br>
                整理：$= a - 4b$<br>
                代入：$= 3 - 4 \\times (-\\dfrac{1}{2}) = 3 + 2 =$ <span class="ans">$5$</span><br><br>
                <strong>(2) $3(a - 2b) - (5a + 2b)$</span><br>
                整理：$= 3a - 6b - 5a - 2b = -2a - 8b$<br>
                代入：$= -2(3) - 8(-\\dfrac{1}{2}) = -6 + 4 =$ <span class="ans">$-2$</span>
            </div>
            <h2>7　次の計算をしなさい。</h2>
            <div class="explanation-block">
                (1) $2a \\times (-9b) =$ <span class="ans">$-18ab$</span><br>
                (2) $(-6x) \\times (-3y) =$ <span class="ans">$18xy$</span><br>
                (3) $(-2a)^2 =$ <span class="ans">$4a^2$</span><br>
                (4) $(-4x)^2 \\times y =$ <span class="ans">$16x^2y$</span><br>
                (5) $12ab \\div 3b =$ <span class="ans">$4a$</span><br>
                (6) $3x^2 \\div x =$ <span class="ans">$3x$</span><br>
                (7) $-\\dfrac{2}{5}x^2 \\div \\dfrac{3}{2}x = -\\dfrac{2}{5}x^2 \\times \\dfrac{2}{3x} =$ <span class="ans">$-\\dfrac{4x}{15}$</span><br>
                (8) $8x^3 \\div \\dfrac{2}{7}x = 8x^3 \\times \\dfrac{7}{2x} =$ <span class="ans">$28x^2$</span><br>
                (9) $5a \\times 2ab \\times 3b =$ <span class="ans">$30a^2b^2$</span><br>
                (10) $14x^2 \\div (-7x) \\times (-2x) = (-2x) \\times (-2x) =$ <span class="ans">$4x^2$</span><br>
                (11) $7a^2 \\times 6b \\div 3a = \\dfrac{42a^2b}{3a} =$ <span class="ans">$14ab$</span><br>
                (12) $18x^2y \\div 3xy \\div (-2x) = \\dfrac{18x^2y}{3xy \\times (-2x)} = \\dfrac{18x^2y}{-6x^2y} =$ <span class="ans">$-3$</span>
            </div>
            <h2>8　偶数と偶数の和は偶数になります。</h2>
            <div class="explanation-block">
                <strong>その理由を，文字式を使って説明しなさい。</strong><br><br>
                $m$，$n$ を整数とすると，2つの偶数は $2m$，$2n$ と表せる。<br>
                $2m + 2n = 2(m + n)$<br>
                $m + n$ は整数なので，$2(m+n)$ は偶数。　■
            </div>
            <h2>9　等式 $7x + y = 4$ を解きなさい。</h2>
            <div class="explanation-block">
                <strong>$y$ について解く：</strong><br>
                $y = 4 - 7x$　→　<span class="ans">$y = 4 - 7x$</strong><br><br>
                <strong>$x$ について解く：</strong><br>
                $7x = 4 - y$　→　<span class="ans">$x = \\dfrac{4 - y}{7}$</strong>
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a03301" target="_blank" rel="noopener" class="qr-link-btn">学習したこと・解答</a></div>
        `
    },

    "34": {
        title: "p.34 章末問題「学びを身につけよう」① — 問題1〜4",
        content: `
            <h2>1　次の計算をしなさい。</h2>
            <div class="explanation-block">
                (1) $0.7x + y - (-1.4x + y) = 0.7x + y + 1.4x - y =$ <span class="ans">$2.1x$</span><br><br>
                (2) $-x^2y \\div 2x \\div (-3y) = \\dfrac{-x^2y}{-6xy} =$ <span class="ans">$\\dfrac{x}{6}$</span><br><br>
                (3) $m - 10n - 6(2m - n) = m - 10n - 12m + 6n =$ <span class="ans">$-11m - 4n$</span><br><br>
                (4) $(-a)^2 \\times 2a = a^2 \\times 2a =$ <span class="ans">$2a^3$</span><br><br>
                (5) $\\dfrac{5x-3y}{2} - \\dfrac{8x-4y}{3} + x = \\color{#e74c3c}{\\dfrac{3(5x-3y)-2(8x-4y)+6x}{6}}$<br>
                $= \\dfrac{15x-9y-16x+8y+6x}{6} =$ <span class="ans">$\\dfrac{5x - y}{6}$</span><br><br>
                (6) $\\dfrac{2}{5}a^2 \\div \\dfrac{3}{10}b \\times (-6ab) = \\dfrac{2}{5}a^2 \\times \\dfrac{10}{3b} \\times (-6ab) = \\dfrac{-120a^3b}{15b} =$ <span class="ans">$-8a^3$</span><br><br>
                (7) $(-xy) \\times (-10xy^2) \\div 5x^2 = \\dfrac{10x^2y^3}{5x^2} =$ <span class="ans">$2y^3$</span><br><br>
                (8) $3x^2 + 3x + 1 - (4x + 2x^2) = 3x^2 + 3x + 1 - 4x - 2x^2 =$ <span class="ans">$x^2 - x + 1$</span><br><br>
                (9) $(25x - 3y + 6) - (5x - 10y + 6) = 25x - 3y + 6 - 5x + 10y - 6 =$ <span class="ans">$20x + 7y$</span><br><br>
                (10) $(0.8x - 0.5y - 0.3) + (0.2x + 0.5y + 2) =$ <span class="ans">$x + 1.7$</span>
            </div>
            <h2>2　$x = 0.8,\\ y = 2.5$ のとき</h2>
            <div class="explanation-block">
                <strong>(1) $-2(6x - 2y) + 2(x + 3y)$</span><br>
                整理：$= -12x + 4y + 2x + 6y = -10x + 10y$<br>
                代入：$= -10(0.8) + 10(2.5) = -8 + 25 =$ <span class="ans">$17$</span><br><br>
                <strong>(2) $-14xy^2 \\div 2xy \\times (-5x)$</span><br>
                整理：$-14xy^2 \\div 2xy = -7y$，$-7y \\times (-5x) = 35xy$<br>
                代入：$= 35 \\times 0.8 \\times 2.5 =$ <span class="ans">$70$</span>
            </div>
            <h2>3　次の等式を解きなさい。</h2>
            <div class="explanation-block">
                (1) $-a + 2b = 5$ {$a$}　→　$-a = 5 - 2b$　→ <span class="ans">$a = 2b - 5$</span><br><br>
                (2) $12x + 3y = 11$ {$y$}　→　$3y = 11 - 12x$　→ <span class="ans">$y = \\dfrac{11 - 12x}{3}$</span><br><br>
                (3) $S = \\dfrac{1}{2}ah$ {$h$}　→　$2S = ah$　→ <span class="ans">$h = \\dfrac{2S}{a}$</span><br><br>
                (4) $m = \\dfrac{a + b}{2}$ {$b$}　→　$2m = a + b$　→ <span class="ans">$b = 2m - a$</span>
            </div>
            <h2>4　連続する3つの偶数の和が中央の偶数の3倍になることを説明</h2>
            <div class="explanation-block">
                <strong>(1) □にあてはまる式を $n$ を使って表しなさい。</strong><br>
                連続する3つの偶数：$2n$，$2n+2$，$2n+4$<br>
                和を $3 \\times (□)$ の形にする → □＝<strong>$2n + 2$</strong><br><br>
                <strong>(2) 説明しなさい。</strong><br>
                $2n + (2n+2) + (2n+4) = 6n + 6 = 3(2n + 2)$<br>
                $2n+2$ は中央の偶数であり整数なので，和は中央の偶数の3倍。　■
            </div>
        `
    },

    "35": {
        title: "p.35 章末問題「学びを身につけよう」② — 問題5〜8",
        content: `
            <h2>5　カレンダーで四角形で囲んだ4つの数の和</h2>
            <div class="explanation-block">
                左上の数を $n$ とすると，4つの数は：<br>
                $n$，$n+1$，$n+7$，$n+8$<br><br>
                和：$n + (n+1) + (n+7) + (n+8) = 4n + 16 = 4(n + 4)$<br>
                $n+4$ は整数なので $4(n+4)$ は4の倍数。　■
            </div>
            <h2>6　3けたの正の整数で，百の位と一の位の和が十の位になっている数</h2>
            <div class="explanation-block">
                百の位を $a$，十の位を $b$，一の位を $c$ とすると：<br>
                条件：$a + c = b$<br><br>
                $100a + 10b + c = 100a + 10(a + c) + c$<br>
                $= 100a + 10a + 10c + c = 110a + 11c = 11(10a + c)$<br>
                $10a + c$ は整数なので $11(10a+c)$ は11の倍数。　■
            </div>
            <h2>7　円の中の2つの半円（AからBまでの道のり）</h2>
            <div class="explanation-block">
                円Pの直径を $2r$ cmとすると，円Qの直径は $(12-2r)$ cm<br><br>
                <strong>ア（大きい半円の弧）：</strong><br>
                $= \\dfrac{1}{2} \\times 2\\pi \\times 6 = 6\\pi$ cm<br><br>
                <strong>イ（小さい2つの半円の弧）：</strong><br>
                $= \\dfrac{1}{2} \\times 2\\pi \\times r + \\dfrac{1}{2} \\times 2\\pi \\times (6-r)$<br>
                $= \\pi r + \\pi(6-r) = \\pi r + 6\\pi - \\pi r = 6\\pi$ cm<br><br>
                <strong>どちらも $6\\pi$ cm で同じ長さ！</strong>（$r$ が消えるのがポイント）
            </div>
            <h2>8　円柱AとBの比較</h2>
            <div class="explanation-block">
                円柱A：半径 $r$，高さ $h$<br>
                円柱B：半径 $2r$，高さ $\\dfrac{h}{2}$<br><br>
                <strong>体積：</strong><br>
                $V_A = \\pi r^2 h$，　$V_B = \\pi(2r)^2 \\cdot \\dfrac{h}{2} = \\dfrac{4\\pi r^2 h}{2} = 2\\pi r^2 h$<br><br>
                <strong>底面積：</strong><br>
                $S_A = \\pi r^2$，　$S_B = \\pi(2r)^2 = 4\\pi r^2$<br><br>
                <strong>側面積：</strong><br>
                $L_A = 2\\pi r h$，　$L_B = 2\\pi(2r) \\cdot \\dfrac{h}{2} = 2\\pi rh$<br><br>
                <strong>正しいものをすべて選ぶ：</strong><br>
                (ア) どちらの体積も同じ → ✕（$V_B = 2V_A$）<br>
                <strong>(イ) 円柱Bの体積は円柱Aの体積の2倍 → ○</strong><br>
                (ウ) 円柱Aの体積は円柱Bの体積の3倍 → ✕<br>
                <strong>(エ) 円柱Bの底面積は円柱Aの底面積の4倍 → ○</strong><br>
                (オ) 側面積の大小はrとhによって変わる → ✕（常に同じ $2\\pi rh$）
            </div>
            <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a03501" target="_blank" rel="noopener" class="qr-link-btn">考え方・解答・解説動画</a></div>
        `
    }
};

// 36ページ以降のプレースホルダー
for (let i = 36; i <= 234; i++) {
    guideData[i.toString()] = {
        title: `p.${i} の学習`,
        content: `<div class="empty-state">第2章以降のオリジナル解説は現在準備中です。</div>`
    };
}
