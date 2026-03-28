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

// ===== 第2章「連立方程式」(p.36〜p.57) =====

guideData["36"] = {
    title: "p.36 第2章 連立方程式 — 班の数はいくつ？・話しあおう",
    content: `
        <h2>章導入「班の数はいくつ？」</h2>
        <div class="explanation-block">
            <strong>話しあおう</strong><br>
            36人を，3人班と4人班に分けるには，どのような分け方があるでしょうか。<br><br>
            <span class="ans">考えられる分け方：</span><br>
            ・3人班 0班，4人班 9班（$0 \\times 3 + 9 \\times 4 = 36$）<br>
            ・3人班 4班，4人班 6班（$4 \\times 3 + 6 \\times 4 = 36$）<br>
            ・3人班 8班，4人班 3班（$8 \\times 3 + 3 \\times 4 = 36$）<br>
            ・3人班 12班，4人班 0班（$12 \\times 3 + 0 \\times 4 = 36$）<br><br>
            <small>💡 4人班の数を $x$ 班，3人班の数を $y$ 班とすると，$4x + 3y = 36$ という式で表せます。</small>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a03601" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

guideData["37"] = {
    title: "p.37 1節 連立方程式 — 導入",
    content: `
        <h2>1節 連立方程式</h2>
        <div class="explanation-block">
            <strong>班分けの場面から</strong><br>
            点字体験は4人班，車いす体験は3人班でおこないます。<br>
            クラスの36人全員がどちらかの班にいるように分けます。<br><br>
            さらに「あわせて10班にしてください」という条件が加わると，<br>
            2つの文字をふくむ方程式について学びましょう。
        </div>
    `
};

guideData["38"] = {
    title: "p.38 ①連立方程式とその解 — ひろげよう・問1",
    content: `
        <h2>ひろげよう の解説</h2>
        <div class="explanation-block">
            4人班の数を $x$ 班，3人班の数を $y$ 班とすると，<br>
            クラスの人数が36人であることから：<br>
            $4x + 3y = 36$ ……①<br><br>
            このような2つの文字をふくむ一次方程式を<strong>二元一次方程式</strong>といいます。
        </div>
        <h2>問1 の解説</h2>
        <div class="explanation-block">
            <strong>問1　$x$ の値が 0, 1, 2, …… のとき，二元一次方程式①を成り立たせる $y$ の値を求めなさい。</strong><br><br>
            $4x + 3y = 36$ → $y = \\dfrac{36 - 4x}{3}$<br><br>
            <table style="border-collapse:collapse;text-align:center;margin:10px 0">
            <tr><td style="border:1px solid #888;padding:4px 12px">$x$</td><td style="border:1px solid #888;padding:4px 12px">0</td><td style="border:1px solid #888;padding:4px 12px">1</td><td style="border:1px solid #888;padding:4px 12px">2</td><td style="border:1px solid #888;padding:4px 12px">3</td><td style="border:1px solid #888;padding:4px 12px">4</td><td style="border:1px solid #888;padding:4px 12px">5</td><td style="border:1px solid #888;padding:4px 12px">6</td><td style="border:1px solid #888;padding:4px 12px">7</td><td style="border:1px solid #888;padding:4px 12px">8</td></tr>
            <tr><td style="border:1px solid #888;padding:4px 12px">$y$</td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$12$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$\\dfrac{32}{3}$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$\\dfrac{28}{3}$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$8$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$\\dfrac{20}{3}$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$\\dfrac{16}{3}$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$4$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$\\dfrac{8}{3}$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$\\dfrac{4}{3}$</span></td></tr>
            </table>
            <small>💡 二元一次方程式の解は1つだけではありません。無限に存在します。</small>
        </div>
    `
};

guideData["39"] = {
    title: "p.39 問2・問3 — 連立方程式とその解の定義",
    content: `
        <h2>問2 の解説</h2>
        <div class="explanation-block">
            <strong>問2　$x + y = 10$ ……② について，$x$ の値が 0, 1, 2, …… のとき $y$ の値を求めなさい。</strong><br><br>
            $y = 10 - x$ なので：<br>
            <table style="border-collapse:collapse;text-align:center;margin:10px 0">
            <tr><td style="border:1px solid #888;padding:4px 12px">$x$</td><td style="border:1px solid #888;padding:4px 12px">0</td><td style="border:1px solid #888;padding:4px 12px">1</td><td style="border:1px solid #888;padding:4px 12px">2</td><td style="border:1px solid #888;padding:4px 12px">3</td><td style="border:1px solid #888;padding:4px 12px">4</td><td style="border:1px solid #888;padding:4px 12px">5</td><td style="border:1px solid #888;padding:4px 12px">6</td><td style="border:1px solid #888;padding:4px 12px">7</td><td style="border:1px solid #888;padding:4px 12px">8</td></tr>
            <tr><td style="border:1px solid #888;padding:4px 12px">$y$</td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$10$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$9$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$8$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$7$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$6$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$5$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$4$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$3$</span></td><td style="border:1px solid #888;padding:4px 12px"><span class="ans">$2$</span></td></tr>
            </table>
        </div>
        <h2>問3 の解説</h2>
        <div class="explanation-block">
            <strong>問3　①と②の両方を成り立たせる $x$, $y$ の値の組を見つけなさい。</strong><br><br>
            問1と問2の表を比べると，<strong>両方を同時に満たす</strong>のは：<br>
            <span class="ans">$x = 6,\\ y = 4$ → $(x, y) = (6, 4)$</span><br><br>
            確認：$4 \\times 6 + 3 \\times 4 = 24 + 12 = 36$ ✓<br>
            　　　$6 + 4 = 10$ ✓<br><br>
            💡 このように2つの方程式を組にしたものを<strong>連立方程式</strong>といい，<br>
            両方を成り立たせる文字の値の組を<strong>連立方程式の解</strong>といいます。
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a03977" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["40"] = {
    title: "p.40 例1・問4・練習問題① — 連立方程式の解の確認",
    content: `
        <h2>問4 の解説</h2>
        <div class="explanation-block">
            <strong>問4　$(x, y) = (3, 4)$ が解である連立方程式を選びなさい。</strong><br><br>
            <strong>(ア)</strong> $x + y = 7$：$3 + 4 = 7$ ✓<br>
            　　$x + 2y = 8$：$3 + 8 = 11 \\neq 8$ ✗ → <strong>解ではない</strong><br><br>
            <strong>(イ)</strong> $3x - y = 4$：$9 - 4 = 5 \\neq 4$ ✗ → <strong>解ではない</strong><br><br>
            <strong>(ウ)</strong> $4x - y = 8$：$12 - 4 = 8$ ✓<br>
            　　$-x + 3y = 9$：$-3 + 12 = 9$ ✓ → <span class="ans">ウが正解</span>
        </div>
        <h2>練習問題① の解説</h2>
        <div class="explanation-block">
            <strong>①　二元一次方程式 $x + y = 3$ の解について，正しいものを選びなさい。</strong><br><br>
            (ア) $(1, 2)$ の1組だけが解 → ✗（$(0, 3)$ も解）<br>
            (イ) 整数 $x$, $y$ の組だけが解 → ✗（$(0.5, 2.5)$ も解）<br>
            <span class="ans">(ウ) $x + y = 3$ を成り立たせる $x$, $y$ の値の組のすべてが解 → ○</span><br>
            (エ) 解はない → ✗<br><br>
            <small>💡 二元一次方程式の解は無限にあります！整数以外の解もあります。</small>
        </div>
    `
};

guideData["41"] = {
    title: "p.41 ②連立方程式の解き方 — 加減法・ひろげよう",
    content: `
        <h2>②連立方程式の解き方 — 加減法</h2>
        <div class="explanation-block">
            <strong>ひろげよう</strong><br>
            鉛筆3本とノート1冊の代金は250円，鉛筆1本とノート1冊の代金は150円。<br>
            鉛筆1本，ノート1冊の値段はそれぞれいくらでしょうか。<br><br>
            鉛筆1本を $x$ 円，ノート1冊を $y$ 円とすると：<br>
            $\\begin{cases} 3x + y = 250 & \\cdots① \\\\ x + y = 150 & \\cdots② \\end{cases}$<br><br>
            ①の左辺から②の左辺をひいた結果と，①の右辺から②の右辺をひいた結果は等しいので：<br>
            $3x + y = 250$<br>
            $-)\\ x + y = 150$<br>
            $\\overline{\\quad 2x \\quad\\ = 100}$ ……③<br><br>
            $x = 50$<br>
            ②に代入：$50 + y = 150$ → $y = 100$<br><br>
            <span class="ans">$(x, y) = (50, 100)$ → 鉛筆1本 50円，ノート1冊 100円</span><br><br>
            💡 $y$ をふくむ連立方程式から，$y$ をふくまない方程式③を導くことを，<br>
            <strong>$y$ を消去する</strong>といいます。
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a04101" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

guideData["42"] = {
    title: "p.42 問1・例1・問2 — 加減法（ひく・たす）",
    content: `
        <h2>問1 の解説（左辺どうし，右辺どうしをひいて解く）</h2>
        <div class="explanation-block">
            <strong>(1)</strong> $\\begin{cases} x + y = 5 & \\cdots① \\\\ x - 3y = -3 & \\cdots② \\end{cases}$<br><br>
            ①−②：$(x+y)-(x-3y) = 5-(-3)$<br>
            $4y = 8$ → $y = 2$<br>
            ①に代入：$x + 2 = 5$ → <span class="ans">$(x, y) = (3, 2)$</span><br><br>
            <strong>(2)</strong> $\\begin{cases} 2x - y = -1 & \\cdots① \\\\ 4x - y = -3 & \\cdots② \\end{cases}$<br><br>
            ①−②：$(2x-y)-(4x-y) = -1-(-3)$<br>
            $-2x = 2$ → $x = -1$<br>
            ①に代入：$-2 - y = -1$ → <span class="ans">$(x, y) = (-1, 1)$</span>
        </div>
        <h2>問2 の解説（左辺どうし，右辺どうしをたして解く）</h2>
        <div class="explanation-block">
            <strong>(1)</strong> $\\begin{cases} x - y = 8 & \\cdots① \\\\ 3x + y = 4 & \\cdots② \\end{cases}$<br><br>
            ①＋②：$4x = 12$ → $x = 3$<br>
            ①に代入：$3 - y = 8$ → <span class="ans">$(x, y) = (3, -5)$</span><br><br>
            <strong>(2)</strong> $\\begin{cases} 3x + 2y = 5 & \\cdots① \\\\ -3x + 5y = 2 & \\cdots② \\end{cases}$<br><br>
            ①＋②：$7y = 7$ → $y = 1$<br>
            ①に代入：$3x + 2 = 5$ → <span class="ans">$(x, y) = (1, 1)$</span>
        </div>
    `
};

guideData["43"] = {
    title: "p.43 問3・例2・問4 — 加減法（係数をそろえる）",
    content: `
        <h2>問3 の解説（加減法で解く）</h2>
        <div class="explanation-block">
            <strong>(1)</strong> $\\begin{cases} 6x - y = 22 & \\cdots① \\\\ 6x + 5y = -2 & \\cdots② \\end{cases}$<br>
            ①−②：$-6y = 24$ → $y = -4$<br>
            ①に代入：$6x + 4 = 22$ → <span class="ans">$(x, y) = (3, -4)$</span><br><br>
            <strong>(2)</strong> $\\begin{cases} 3x - 2y = 19 & \\cdots① \\\\ 5x + 2y = 21 & \\cdots② \\end{cases}$<br>
            ①＋②：$8x = 40$ → $x = 5$<br>
            ①に代入：$15 - 2y = 19$ → <span class="ans">$(x, y) = (5, -2)$</span><br><br>
            <strong>(3)</strong> $\\begin{cases} x + y = 2 & \\cdots① \\\\ -x + y = -1 & \\cdots② \\end{cases}$<br>
            ①＋②：$2y = 1$ → $y = \\dfrac{1}{2}$<br>
            ①に代入：$x = \\dfrac{3}{2}$ → <span class="ans">$(x, y) = \\left(\\dfrac{3}{2},\\ \\dfrac{1}{2}\\right)$</span>
        </div>
        <h2>問4 の解説（どちらかの式を何倍かして係数をそろえる）</h2>
        <div class="explanation-block">
            <strong>(1)</strong> $\\begin{cases} x + 4y = 7 & \\cdots① \\\\ 7x + 15y = 36 & \\cdots② \\end{cases}$<br>
            ①×7：$7x + 28y = 49$ ……①'<br>
            ①'−②：$13y = 13$ → $y = 1$<br>
            ①に代入：$x + 4 = 7$ → <span class="ans">$(x, y) = (3, 1)$</span><br><br>
            <strong>(2)</strong> $\\begin{cases} 5x + 3y = -1 & \\cdots① \\\\ 2x - y = 4 & \\cdots② \\end{cases}$<br>
            ②×3：$6x - 3y = 12$ ……②'<br>
            ①＋②'：$11x = 11$ → $x = 1$<br>
            ②に代入：$2 - y = 4$ → <span class="ans">$(x, y) = (1, -2)$</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a04377" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["44"] = {
    title: "p.44 例題1・問5・代入法・例3 — 両方の式を何倍かする解き方，代入法",
    content: `
        <h2>問5 の解説（両方の式を何倍かして係数をそろえる）</h2>
        <div class="explanation-block">
            <strong>(1)</strong> $\\begin{cases} 3x + 2y = 8 & \\cdots① \\\\ 5x - 3y = 7 & \\cdots② \\end{cases}$<br>
            ①×3＋②×2：$9x + 6y + 10x - 6y = 24 + 14$<br>
            $19x = 38$ → $x = 2$，$y = 1$ → <span class="ans">$(x, y) = (2, 1)$</span><br><br>
            <strong>(2)</strong> $\\begin{cases} 6x + 4y = 2 & \\cdots① \\\\ 7x - 3y = -13 & \\cdots② \\end{cases}$<br>
            ①×3＋②×4：$18x + 12y + 28x - 12y = 6 - 52$<br>
            $46x = -46$ → $x = -1$，$y = 2$ → <span class="ans">$(x, y) = (-1, 2)$</span><br><br>
            <strong>(3)</strong> $\\begin{cases} 9x - 2y = 11 & \\cdots① \\\\ 4x - 5y = 9 & \\cdots② \\end{cases}$<br>
            ①×5−②×2：$45x - 10y - 8x + 10y = 55 - 18$<br>
            $37x = 37$ → $x = 1$，$y = -1$ → <span class="ans">$(x, y) = (1, -1)$</span>
        </div>
        <h2>代入法 — 例3 の確認</h2>
        <div class="explanation-block">
            <strong>代入法</strong>：代入によって1つの文字を消去する方法<br><br>
            例3：$\\begin{cases} y = x - 2 & \\cdots① \\\\ 5x + 3y = 18 & \\cdots② \\end{cases}$<br><br>
            ②の $y$ に①の $x - 2$ を代入：<br>
            $5x + 3(x - 2) = 18$<br>
            $8x - 6 = 18$ → $x = 3$<br>
            ①に代入：$y = 3 - 2 = 1$<br>
            <span class="ans">$(x, y) = (3, 1)$</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a04477" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["45"] = {
    title: "p.45 問6・例題2・問7・話しあおう — 代入法",
    content: `
        <h2>問6 の解説（代入法で解く）</h2>
        <div class="explanation-block">
            <strong>(1)</strong> $\\begin{cases} 9x - 2y = 12 & \\cdots① \\\\ y = 3x & \\cdots② \\end{cases}$<br>
            ①に②を代入：$9x - 2(3x) = 12$ → $3x = 12$ → $x = 4$<br>
            $y = 12$ → <span class="ans">$(x, y) = (4, 12)$</span><br><br>
            <strong>(2)</strong> $\\begin{cases} x = -5y + 4 & \\cdots① \\\\ 2x + y = -1 & \\cdots② \\end{cases}$<br>
            ②に①を代入：$2(-5y+4) + y = -1$ → $-9y + 8 = -1$ → $y = 1$<br>
            $x = -5 + 4 = -1$ → <span class="ans">$(x, y) = (-1, 1)$</span>
        </div>
        <h2>問7 の解説（式を変形して代入）</h2>
        <div class="explanation-block">
            <strong>(1)</strong> $\\begin{cases} y - x = 4 & \\cdots① \\\\ 5x - 3y = 2 & \\cdots② \\end{cases}$<br>
            ①から $y = x + 4$ → ②に代入：$5x - 3(x+4) = 2$ → $2x = 14$ → $x = 7$<br>
            $y = 11$ → <span class="ans">$(x, y) = (7, 11)$</span><br><br>
            <strong>(2)</strong> $\\begin{cases} 3x + 2y = -11 & \\cdots① \\\\ 3y - x = 0 & \\cdots② \\end{cases}$<br>
            ②から $x = 3y$ → ①に代入：$9y + 2y = -11$ → $y = -1$<br>
            $x = -3$ → <span class="ans">$(x, y) = (-3, -1)$</span>
        </div>
        <h2>「話しあおう」の解説</h2>
        <div class="explanation-block">
            $\\begin{cases} y = 4x - 11 & \\cdots① \\\\ 8x - 3y = 25 & \\cdots② \\end{cases}$<br><br>
            <strong>代入法：</strong>①を②に代入：$8x - 3(4x - 11) = 25$<br>
            $8x - 12x + 33 = 25$ → $-4x = -8$ → $x = 2$<br>
            $y = 8 - 11 = -3$ → <span class="ans">$(x, y) = (2, -3)$</span><br><br>
            <small>💡 ①を3倍して加減法で解くこともできます。どちらでもOK！</small>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a04577" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["46"] = {
    title: "p.46 例題3・問8 — かっこがある連立方程式",
    content: `
        <h2>問8 の解説（かっこがある連立方程式）</h2>
        <p style="color:#c0392b;font-weight:bold">⚠️ まず<strong>かっこをはずして整理</strong>してから解く！</p>
        <div class="explanation-block">
            <strong>(1)</strong> $\\begin{cases} 4x + 7y = 39 & \\cdots① \\\\ 2(x - y) = 3x + 3y & \\cdots② \\end{cases}$<br>
            ②を整理：$2x - 2y = 3x + 3y$ → $-x - 5y = 0$ → $x = -5y$<br>
            ①に代入：$4(-5y) + 7y = 39$ → $-13y = 39$ → $y = -3$<br>
            $x = 15$ → <span class="ans">$(x, y) = (15, -3)$</span><br><br>
            <strong>(2)</strong> $\\begin{cases} 3(x + y) = 2x - 1 & \\cdots① \\\\ x + y = -5 & \\cdots② \\end{cases}$<br>
            ①：$3x + 3y = 2x - 1$ → $x + 3y = -1$ ①'<br>
            ②から $x = -5 - y$ → ①'に代入：$-5 - y + 3y = -1$ → $2y = 4$ → $y = 2$<br>
            $x = -7$ → <span class="ans">$(x, y) = (-7, 2)$</span><br><br>
            <strong>(3)</strong> $\\begin{cases} 3(x + 2y) = 5(x - 4) & \\cdots① \\\\ x + 3y = -2 & \\cdots② \\end{cases}$<br>
            ①：$3x + 6y = 5x - 20$ → $-2x + 6y = -20$ → $x - 3y = 10$ ①'<br>
            ②＋①'：$2x = 8$ → $x = 4$，$y = -2$ → <span class="ans">$(x, y) = (4, -2)$</span><br><br>
            <strong>(4)</strong> $\\begin{cases} 2x - (x + 7y) = 13 & \\cdots① \\\\ 2(x + 3y) - 5y = -4 & \\cdots② \\end{cases}$<br>
            ①：$x - 7y = 13$ ①'　　②：$2x + y = -4$ ②'<br>
            ①'×2−②'：$-15y = 30$ → $y = -2$<br>
            $x + 14 = 13$ → $x = -1$ → <span class="ans">$(x, y) = (-1, -2)$</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a04677" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["47"] = {
    title: "p.47 例題4・問9・話しあおう — 分数・小数係数の連立方程式",
    content: `
        <h2>問9 の解説（分数係数）</h2>
        <p style="color:#c0392b;font-weight:bold">⚠️ 分数は<strong>分母をはらって整数係数</strong>にしてから解く！</p>
        <div class="explanation-block">
            <strong>(1)</strong> $\\begin{cases} \\dfrac{x}{4} - \\dfrac{y}{5} = 1 & \\cdots① \\\\ 3x + 4y = -52 & \\cdots② \\end{cases}$<br>
            ①×20：$5x - 4y = 20$ ①'<br>
            ①'＋②：$8x = -32$ → $x = -4$，$y = -10$ → <span class="ans">$(x, y) = (-4, -10)$</span><br><br>
            <strong>(2)</strong> $\\begin{cases} 4x + y = 10 & \\cdots① \\\\ \\dfrac{2}{3}x + \\dfrac{y}{7} = 2 & \\cdots② \\end{cases}$<br>
            ②×21：$14x + 3y = 42$ ②'<br>
            ①×3：$12x + 3y = 30$<br>
            ②'−①×3：$2x = 12$ → $x = 6$，$y = -14$ → <span class="ans">$(x, y) = (6, -14)$</span><br><br>
            <strong>(3)</strong> $\\begin{cases} x + y = 11 & \\cdots① \\\\ \\dfrac{8}{100}x + \\dfrac{9}{100}y = 1 & \\cdots② \\end{cases}$<br>
            ②×100：$8x + 9y = 100$ ②'<br>
            ①×8：$8x + 8y = 88$<br>
            ②'−①×8：$y = 12$，$x = -1$ → <span class="ans">$(x, y) = (-1, 12)$</span><br><br>
            <strong>(4)</strong> $\\begin{cases} \\dfrac{x}{2} - \\dfrac{y}{4} = 1 & \\cdots① \\\\ \\dfrac{x}{3} + \\dfrac{y}{2} = 2 & \\cdots② \\end{cases}$<br>
            ①×4：$2x - y = 4$　　②×6：$2x + 3y = 12$<br>
            ②'−①'：$4y = 8$ → $y = 2$，$x = 3$ → <span class="ans">$(x, y) = (3, 2)$</span>
        </div>
        <h2>「話しあおう」の解説（小数係数）</h2>
        <div class="explanation-block">
            <strong>(1)</strong> $\\begin{cases} 0.3x + 0.4y = 0.5 \\\\ x - 2y = -5 \\end{cases}$<br>
            ①×10：$3x + 4y = 5$，②×3で加減法 → <span class="ans">$(x, y) = (-1, 2)$</span><br><br>
            <strong>(2)</strong> $\\begin{cases} 0.1x + 0.04y = 15 \\\\ 3x - 2y = 50 \\end{cases}$<br>
            ①×100：$10x + 4y = 1500$ → <span class="ans">$(x, y) = (100, 125)$</span><br><br>
            <strong>(3)</strong> $\\begin{cases} y = -x + 2 \\\\ 0.5x + y = 2.5 \\end{cases}$<br>
            代入法 → <span class="ans">$(x, y) = (-1, 3)$</span><br><br>
            <strong>(4)</strong> $\\begin{cases} -20x + 10y = 10 \\\\ 500x = 200(y - 3) \\end{cases}$<br>
            ①÷10：$-2x + y = 1$，②：$5x - 2y = -6$ → <span class="ans">$(x, y) = (-4, -7)$</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a04777" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["48"] = {
    title: "p.48 例題5・問10・練習問題② — A＝B＝C 型の方程式",
    content: `
        <h2>問10 の解説（A＝B＝C 型）</h2>
        <div class="explanation-block">
            <strong>A＝B＝C の形：2つの方程式を取り出して連立方程式にして解く！</strong><br><br>
            <strong>(1)</strong> $5x + 2y = 4 = -x - y + 3$<br>
            $\\begin{cases} 5x + 2y = 4 & \\cdots① \\\\ -x - y + 3 = 4 & \\cdots② \\end{cases}$<br>
            ②：$x + y = -1$ → ①−②×2：$3x = 6$ → $x = 2$，$y = -3$<br>
            → <span class="ans">$(x, y) = (2, -3)$</span><br><br>
            <strong>(2)</strong> $2x + y = x - 5y + 8 = 3x - y$<br>
            $\\begin{cases} 2x + y = 3x - y & \\cdots(A=C) \\\\ x - 5y + 8 = 3x - y & \\cdots(B=C) \\end{cases}$<br>
            A=C：$-x + 2y = 0$ → $x = 2y$ ①<br>
            B=C：$-2x - 4y = -8$ → $x + 2y = 4$ ②<br>
            ①を②に代入：$4y = 4$ → $y = 1$，$x = 2$ → <span class="ans">$(x, y) = (2, 1)$</span>
        </div>
        <h2>練習問題② の解説</h2>
        <div class="explanation-block">
            <strong>① 次の連立方程式を解きなさい。</strong><br><br>
            (1) $\\begin{cases} 4x + y = 4 \\\\ x + y = -5 \\end{cases}$ → ①−②：$3x = 9$ → <span class="ans">$(x, y) = (3, -8)$</span><br><br>
            (2) $\\begin{cases} 2x + 5y = 18 \\\\ x = 2y \\end{cases}$ → 代入：$4y + 5y = 18$ → <span class="ans">$(x, y) = (4, 2)$</span><br><br>
            (3) $\\begin{cases} 4x - 5y = 3 \\\\ 5y = 8x - 11 \\end{cases}$ → ②：$8x - 5y = 11$，②−①：$4x = 8$ → <span class="ans">$(x, y) = (2, 1)$</span><br><br>
            (4) $\\begin{cases} y = 3x - 2 \\\\ y = 2x + 3 \\end{cases}$ → $3x - 2 = 2x + 3$ → <span class="ans">$(x, y) = (5, 13)$</span><br><br>
            (5) $\\begin{cases} 3x + 2y = 2 \\\\ \\frac{5}{4}x - \\frac{y}{5} = 6 \\end{cases}$ → ②×20：$25x - 4y = 120$<br>
            ①×2＋②'：$31x = 124$ → <span class="ans">$(x, y) = (4, -5)$</span><br><br>
            (6) $\\begin{cases} x - 3y = 19 \\\\ 0.2x - 0.5y = 3 \\end{cases}$ → ②×10：$2x - 5y = 30$<br>
            ①×2−②'：$-y = 8$ → <span class="ans">$(x, y) = (-5, -8)$</span>
        </div>
        <div class="explanation-block">
            <strong>② 方程式 $\\dfrac{x}{3} + \\dfrac{y}{2} = x + y = 2$ を解きなさい。</strong><br><br>
            $\\begin{cases} x + y = 2 & \\cdots① \\\\ \\dfrac{x}{3} + \\dfrac{y}{2} = 2 & \\cdots② \\end{cases}$<br>
            ②×6：$2x + 3y = 12$<br>
            ①×2：$2x + 2y = 4$<br>
            ②'−①'：$y = 8$，$x = -6$<br>
            → <span class="ans">$(x, y) = (-6, 8)$</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a04877" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["49"] = {
    title: "p.49 2節 連立方程式の利用 — 導入・話しあおう",
    content: `
        <h2>2節 連立方程式の利用</h2>
        <div class="explanation-block">
            <strong>2点シュートと3点シュートの本数は？</strong><br><br>
            松山選手は，2点シュートと3点シュートにより，19得点をあげる大活躍でした。<br><br>
            <strong>話しあおう</strong><br>
            上の記事から，松山選手が決めた2点シュートと3点シュートの本数がわかるでしょうか。<br><br>
            <span class="ans">得点の情報だけでは本数は1通りに決まりません。<br>
            「あわせて8本決めた」という情報が加わると，連立方程式で解けます！</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a04901" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

guideData["50"] = {
    title: "p.50 ①連立方程式の利用 — バスケ問題（ステップ1・2）",
    content: `
        <h2>①連立方程式の利用</h2>
        <div class="explanation-block">
            <strong>Q　2点シュートと3点シュートをあわせて8本決めたときの得点の合計は19点でした。<br>
            2点シュートと3点シュートを決めた本数を，それぞれ求めなさい。</strong><br><br>
            <strong>ステップ1：</strong>数量の関係を見つける<br>
            ・本数の関係：（2点シュートの本数）＋（3点シュートの本数）＝ 8<br>
            ・得点の関係：（2点シュートの得点）＋（3点シュートの得点）＝ 19<br><br>
            <strong>ステップ2：</strong>文字で表して連立方程式をつくる<br>
            2点シュートを $x$ 本，3点シュートを $y$ 本とすると：<br>
            $\\begin{cases} x + y = 8 & \\cdots① \\\\ 2x + 3y = 19 & \\cdots② \\end{cases}$
        </div>
    `
};

guideData["51"] = {
    title: "p.51 連立方程式の利用 — バスケ問題（解答・深める例）",
    content: `
        <h2>バスケ問題の解答</h2>
        <div class="explanation-block">
            $\\begin{cases} x + y = 8 & \\cdots① \\\\ 2x + 3y = 19 & \\cdots② \\end{cases}$<br><br>
            ①×3−②：$3x + 3y - 2x - 3y = 24 - 19$<br>
            $x = 5$<br>
            ①に代入：$5 + y = 8$ → $y = 3$<br><br>
            確認：2点シュート5本と3点シュート3本のとき，<br>
            本数 $5 + 3 = 8$ ✓，得点 $10 + 9 = 19$ ✓<br><br>
            <span class="ans">2点シュート 5本，3点シュート 3本</span>
        </div>
        <h2>深める例 ■1 の解説</h2>
        <div class="explanation-block">
            <strong>2点シュートであげた得点を $x$ 点，3点シュートであげた得点を $y$ 点とすると：</strong><br><br>
            $\\begin{cases} x + y = 19 & \\cdots① \\\\ \\dfrac{x}{2} + \\dfrac{y}{3} = 8 & \\cdots② \\end{cases}$<br><br>
            ②×6：$3x + 2y = 48$<br>
            ①×2：$2x + 2y = 38$<br>
            引く：$x = 10$，$y = 9$<br><br>
            <span class="ans">2点シュートの得点 10点（→ 5本），3点シュートの得点 9点（→ 3本）</span>
        </div>
    `
};

guideData["52"] = {
    title: "p.52 例題1・問1 — 代金の問題",
    content: `
        <h2>問1 の解説</h2>
        <div class="explanation-block">
            <strong>問1　1個130円のプリンと1個100円のゼリーをあわせて10個買い，1120円払いました。<br>
            買ったプリンとゼリーの個数を，それぞれ求めなさい。</strong><br><br>
            プリンを $x$ 個，ゼリーを $y$ 個とすると：<br>
            $\\begin{cases} x + y = 10 & \\cdots① \\\\ 130x + 100y = 1120 & \\cdots② \\end{cases}$<br><br>
            ①×100：$100x + 100y = 1000$<br>
            ②−①×100：$30x = 120$ → $x = 4$<br>
            $y = 6$<br><br>
            確認：$4 + 6 = 10$ ✓，$130 \\times 4 + 100 \\times 6 = 520 + 600 = 1120$ ✓<br><br>
            <span class="ans">プリン 4個，ゼリー 6個</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a05277" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["53"] = {
    title: "p.53 例題2・問2 — 割合の問題",
    content: `
        <h2>問2 の解説</h2>
        <div class="explanation-block">
            <strong>問2　ある自動販売機では，先月は，お茶とスポーツドリンクが，あわせて400本売れました。<br>
            今月は，先月とくらべて，お茶は80%，スポーツドリンクは90%売れたので，売れた本数は，あわせて345本でした。<br>
            先月売れたお茶とスポーツドリンクの本数を，それぞれ求めなさい。</strong><br><br>
            先月のお茶を $x$ 本，スポーツドリンクを $y$ 本とすると：<br>
            $\\begin{cases} x + y = 400 & \\cdots① \\\\ 0.8x + 0.9y = 345 & \\cdots② \\end{cases}$<br><br>
            ②×10：$8x + 9y = 3450$ ②'<br>
            ①×8：$8x + 8y = 3200$<br>
            ②'−①×8：$y = 250$，$x = 150$<br><br>
            確認：$150 + 250 = 400$ ✓<br>
            今月：$0.8 \\times 150 + 0.9 \\times 250 = 120 + 225 = 345$ ✓<br><br>
            <span class="ans">先月：お茶 150本，スポーツドリンク 250本</span><br>
            <small>💡 今月売れたのは，お茶 120本，スポーツドリンク 225本です。</small>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a05377" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["54"] = {
    title: "p.54 例題3・話しあおう — 速さ・時間・道のりの問題",
    content: `
        <h2>例題3 の確認（速さ・時間・道のり）</h2>
        <div class="explanation-block">
            全長50kmのコースを，自転車では時速20km，走りでは時速10kmで，全体を3時間で完走。<br><br>
            自転車で進んだ道のりを $x$ km，走った道のりを $y$ km とすると：<br>
            $\\begin{cases} x + y = 50 & \\cdots① \\\\ \\dfrac{x}{20} + \\dfrac{y}{10} = 3 & \\cdots② \\end{cases}$<br><br>
            ②×20：$x + 2y = 60$ ②'<br>
            ②'−①：$y = 10$，$x = 40$<br><br>
            <span class="ans">自転車で進んだ道のり 40km，走った道のり 10km</span>
        </div>
        <h2>「話しあおう」の解説</h2>
        <div class="explanation-block">
            <strong>「全体を2時間で完走しました」に条件を変えると？</strong><br><br>
            $\\begin{cases} x + y = 50 & \\cdots① \\\\ \\dfrac{x}{20} + \\dfrac{y}{10} = 2 & \\cdots② \\end{cases}$<br><br>
            ②×20：$x + 2y = 40$ ②'<br>
            ②'−①：$y = -10$，$x = 60$<br><br>
            <span class="ans">$y = -10$ km → 道のりが負の値になり，問題にあっていない！</span><br><br>
            <small>⚠️ 連立方程式を使って問題を解くとき，その解が問題にあっているかどうか確かめる必要があります。</small>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a05401" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

guideData["55"] = {
    title: "p.55 問3・練習問題①②③ — 文章題",
    content: `
        <h2>問3 の解説</h2>
        <div class="explanation-block">
            <strong>問3　A地点からB地点を経てC地点まで，92kmの道のりを自動車で行くのに，A,B間を時速40km，B,C間を時速50kmで進むと，2時間かかりました。</strong><br><br>
            A,B間を $x$ km，B,C間を $y$ km とすると：<br>
            $\\begin{cases} x + y = 92 & \\cdots① \\\\ \\dfrac{x}{40} + \\dfrac{y}{50} = 2 & \\cdots② \\end{cases}$<br><br>
            ②×200：$5x + 4y = 400$ ②'<br>
            ①×4：$4x + 4y = 368$<br>
            ②'−①×4：$x = 32$，$y = 60$<br><br>
            <span class="ans">A,B間 32km，B,C間 60km</span>
        </div>
        <h2>練習問題 の解説</h2>
        <div class="explanation-block">
            <strong>① 2つの数の和が100で，一方の数が他方の数の2倍より10大きい</strong><br>
            $\\begin{cases} x + y = 100 \\\\ x = 2y + 10 \\end{cases}$<br>
            代入：$2y + 10 + y = 100$ → $3y = 90$ → $y = 30$，$x = 70$<br>
            <span class="ans">70 と 30</span>
        </div>
        <div class="explanation-block">
            <strong>② 古紙960kg（段ボール220kg＋新聞紙＋雑誌），交換金額6640円</strong><br>
            新聞紙 $x$ kg，雑誌 $y$ kg とすると：<br>
            $\\begin{cases} x + y = 740 & \\text{（960 − 220）} \\\\ 7x + 6y + 1760 = 6640 \\end{cases}$<br>
            整理：$7x + 6y = 4880$<br>
            ①×6から：$x = 440$，$y = 300$<br>
            <span class="ans">新聞紙 440kg，雑誌 300kg</span>
        </div>
        <div class="explanation-block">
            <strong>③ シャツと帽子の合計（定価）3100円，20%引き・30%引きで代金2300円</strong><br>
            $\\begin{cases} x + y = 3100 \\\\ 0.8x + 0.7y = 2300 \\end{cases}$<br>
            ②×10：$8x + 7y = 23000$<br>
            ①×7から：$x = 1300$，$y = 1800$<br>
            <span class="ans">シャツ 1300円，帽子 1800円</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a05577" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["56"] = {
    title: "p.56 章末問題「学びをたしかめよう」① — 問題1〜5",
    content: `
        <h2>1　二元一次方程式 $x + 2y = 9$ の $y$ の値</h2>
        <div class="explanation-block">
            $y = \\dfrac{9 - x}{2}$ より：<br>
            $x = -2$：<span class="ans">$y = \\dfrac{11}{2}$</span>，
            $x = -1$：<span class="ans">$y = 5$</span>，
            $x = 0$：<span class="ans">$y = \\dfrac{9}{2}$</span>，
            $x = 1$：<span class="ans">$y = 4$</span>，<br>
            $x = 2$：<span class="ans">$y = \\dfrac{7}{2}$</span>，
            $x = 3$：<span class="ans">$y = 3$</span>
        </div>
        <h2>2　$(4, 2)$ が解である連立方程式をすべて選ぶ</h2>
        <div class="explanation-block">
            (ア) $x+y=6$：$6$ ✓，$2x+y=10$：$10$ ✓ → <span class="ans">○</span><br>
            (イ) $x+3y=-2$：$10 \\neq -2$ → ✗<br>
            (ウ) $x=2y$：$4=4$ ✓，$y-x=-2$：$-2$ ✓ → <span class="ans">○</span><br>
            (エ) $x+2y=10$：$8 \\neq 10$ → ✗<br>
            <span class="ans">答え：ア，ウ</span>
        </div>
        <h2>3　加減法で解く</h2>
        <div class="explanation-block">
            (1) $x+4y=16$，$x+y=13$ → ①−②：$3y=3$ → <span class="ans">$(12, 1)$</span><br>
            (2) $5x-y=11$，$3x+2y=4$ → ①×2+②：$13x=26$ → <span class="ans">$(2, -1)$</span><br>
            (3) $3x-2y=1$，$6x-5y=-2$ → ①×2−②：$y=4$ → <span class="ans">$(3, 4)$</span><br>
            (4) $2x+3y=-2$，$3x-2y=-3$ → ①×2+②×3：$13x=-13$ → <span class="ans">$(-1, 0)$</span>
        </div>
        <h2>4　代入法で解く</h2>
        <div class="explanation-block">
            (1) $y=2x$，$x+y=12$ → $3x=12$ → <span class="ans">$(4, 8)$</span><br>
            (2) $2x-y=6$，$x=y-3$ → $2(y-3)-y=6$ → <span class="ans">$(9, 12)$</span><br>
            (3) $x+y=6$，$x-3y=2$ → $6-y-3y=2$ → <span class="ans">$(5, 1)$</span><br>
            (4) $5x+2y=8$，$y-x=-3$ → $y=x-3$ → $7x=14$ → <span class="ans">$(2, -1)$</span>
        </div>
        <h2>5　いろいろな連立方程式</h2>
        <div class="explanation-block">
            (1) $3x-7y=5$，$5x-(x+7y)=2$ → ②：$4x-7y=2$<br>
            ①−②：$-x=3$ → <span class="ans">$(-3, -2)$</span><br><br>
            (2) $x+2(y-1)=3$，$x-3y=0$ → ①：$x+2y=5$，②：$x=3y$<br>
            代入：$5y=5$ → <span class="ans">$(3, 1)$</span><br><br>
            (3) $x-y=4$，$\\dfrac{x}{10}-\\dfrac{3y}{10}=2$ → ②×10：$x-3y=20$<br>
            ①−②'：$2y=-16$ → <span class="ans">$(-4, -8)$</span><br><br>
            (4) $0.5x+0.4y=1.3$，$x-2y=-3$ → ①×10：$5x+4y=13$<br>
            ②×2+①'：$7x=7$ → <span class="ans">$(1, 2)$</span>
        </div>
    `
};

guideData["58"] = {
    title: "p.58 章末問題「学びを身につけよう」① — 1〜4",
    content: `
        <h2>1　次の連立方程式を解きなさい</h2>
        <div class="explanation-block">
            (1) $\\begin{cases} x+y=8 \\\\ x-y=-2 \\end{cases}$ → ①+②より $2x=6, x=3$。<span class="ans">$(3, 5)$</span><br><br>
            (2) $\\begin{cases} 2x+6y=3 \\\\ 6x+3y=4 \\end{cases}$ → ②×2−①より $10x=5, x=\\frac{1}{2}$。<span class="ans">$(\\frac{1}{2}, \\frac{1}{3})$</span><br><br>
            (3) $\\begin{cases} 4x-3y=50 \\\\ 3x-2y=50 \\end{cases}$ → ①×2−②×3より $-x=-50, x=50$。<span class="ans">$(50, 50)$</span><br><br>
            (4) $\\begin{cases} y=3x-5 \\\\ x+y=7 \\end{cases}$ → $x+(3x-5)=7$。<span class="ans">$(3, 4)$</span><br><br>
            (5) $\\begin{cases} y=2x+3 \\\\ y=6x-1 \\end{cases}$ → $2x+3=6x-1$。<span class="ans">$(1, 5)$</span><br><br>
            (6) $\\begin{cases} 10=5a+b \\\\ 1=2a+b \\end{cases}$ → ①−②より $9=3a, a=3$。<span class="ans">$(a, b) = (3, -5)$</span><br><br>
            (7) $\\begin{cases} 3(x-2y)=y-17 \\\\ 6x+5y=4 \\end{cases}$ → ①を整理 $3x-7y=-17$。<span class="ans">$(-1, 2)$</span><br><br>
            (8) $\\begin{cases} 3x-2y=3 \\\\ \\frac{1}{2}x+\\frac{3}{4}y=7 \\end{cases}$ → ②×4より $2x+3y=28$。<span class="ans">$(5, 6)$</span><br><br>
            (9) $\\begin{cases} 0.5x-0.3y=1 \\\\ x=3y+2 \\end{cases}$ → ①×10より $5x-3y=10$。<span class="ans">$(2, 0)$</span><br><br>
            (10) $\\begin{cases} 5x+2y=2(x+2y)+8 \\\\ \\frac{x}{4}+\\frac{y}{3}=\\frac{1}{6} \\end{cases}$ → 整理して $\\{ 3x-2y=8, 3x+4y=2 \\}$。<span class="ans">$(2, -1)$</span>
        </div>
        <h2>2　次の方程式を解きなさい</h2>
        <div class="explanation-block">
            (1) $4x-y-7 = 3x+2y = -1$ → $\\{ 4x-y=6, 3x+2y=-1 \\}$。<span class="ans">$(x, y) = (1, -2)$</span><br>
            (2) $\\frac{x+y}{4} = \\frac{x+1}{3} = 1$ → $\\{ x+y=4, x+1=3 \\}$。<span class="ans">$(x, y) = (2, 2)$</span><br>
            (3) $3x+2y=5+3y=2x+11$ → $\\{ 3x+2y=2x+11, 5+3y=2x+11 \\}$。<span class="ans">$(x, y) = (3, 4)$</span>
        </div>
        <h2>3　a, b の値</h2>
        <div class="explanation-block">
            $x=-3, y=5$ を代入すると<br>
            $\\begin{cases} -3a+30=6 \\\\ 9+5b=34 \\end{cases}$ → <span class="ans">$a=8, b=5$</span>
        </div>
        <h2>4　2けたの正の整数</h2>
        <div class="explanation-block">
            十の位を $x$、一の位を $y$ とすると<br>
            $\\begin{cases} 10x+y = 4(x+y)+3 \\\\ 10y+x = 10x+y+9 \\end{cases}$<br>
            整理して $\\{ 2x-y=1, -x+y=1 \\}$ → $x=2, y=3$<br>
            <span class="ans">もとの整数: 23</span>
        </div>
    `
};

guideData["59"] = {
    title: "p.59 章末問題「学びを身につけよう」② — 5〜7",
    content: `
        <h2>5　生徒数の問題</h2>
        <div class="explanation-block">
            昨年の自転車通学を $x$ 人、それ以外を $y$ 人とすると<br>
            $\\begin{cases} x + y = 90 \\\\ 1.1x + 0.8y = 87 \\end{cases}$<br>
            ②×10より $11x + 8y = 870$<br>
            ①×8で $8x + 8y = 720$ を引くと $3x=150$ → $x=50, y=40$<br>
            <span class="ans">昨年の自転車通学 50人、それ以外の通学 40人</span>
        </div>
        <h2>6　列車の速さと長さ</h2>
        <div class="explanation-block">
            列車の長さを $x$ m、速さを秒速 $y$ m とすると<br>
            ・鉄橋（渡り始めてから終わりまで）：$1260 + x = 60y$<br>
            ・トンネル（入り始めてから出るまで）：$2010 + x = 90y$<br>
            引くと $30y = 750$ → 秒速 $y = 25$ m。代入して $x = 240$ m。<br>
            秒速25m ＝ 時速90km。<br>
            <span class="ans">列車の長さ 240m、時速 90km</span>
        </div>
        <h2>7　勘者御伽双紙（碁石の問題）</h2>
        <div class="explanation-block">
            (い)の袋に入れた回数を $x$ 回、(ろ)の袋に入れた回数を $y$ 回とすると<br>
            「はい」という回数：$x + y = 13$<br>
            碁石の総数：$2x + y = 21$<br>
            引くと $x = 8, y = 5$<br>
            碁石の数は (い)が $2 \\times 8 = 16$ 個、(ろ)が $1 \\times 5 = 5$ 個。<br>
            <span class="ans">(い)の袋 16個、(ろ)の袋 5個</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a05901" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

// ======================== 第3章 ========================
guideData["60"] = {
    title: "p.60 第3章 章導入「水面の高さはどう変わるかな？」",
    content: `
        <h2>第3章 一次関数</h2>
        <div class="explanation-block">
            <strong>水面の高さはどう変わるかな？</strong><br><br>
            1日目は、からの水そうに水を入れます。<br>
            1分間に2cmの割合で水面が高くなります。<br><br>
            (1) $x$ の値が1増えると、$y$ の値はどうなるでしょうか。<br>
            <span class="ans">$y$ の値は2増える。</span><br><br>
            (2) $x$ の値が2倍、3倍、4倍になると、$y$ の値はどうなるでしょうか。<br>
            <span class="ans">$y$ の値も2倍、3倍、4倍になる。</span><br><br>
            (3) $x$ と $y$ の関係を式に表しましょう。<br>
            <span class="ans">$y = 2x$</span><br><br>
            <div class="tip">
                <strong>ふりかえり：</strong> $y = ax$ で表されるとき、$y$ は $x$ に比例するといいます。
            </div>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a06001" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

guideData["61"] = {
    title: "p.61 1節 一次関数とグラフ — 水そうの問題(2日目)",
    content: `
        <h2>1節 一次関数とグラフ</h2>
        <div class="explanation-block">
            <strong>話しあおう：2日目の朝、水そうに水を入れる</strong><br><br>
            2日目は、すでに底から 8cm の高さまで水がはいっています。<br>
            ここから1分間に 2cm の割合で水を入れます。<br><br>
            水を入れてからの時間 $x$ 分と、高さ $y$ cm の関係についてどんなことがいえるでしょうか。<br><br>
            表を完成させると：<br>
            $x$: 0, 1, 2, 3, 4, ...<br>
            $y$: 8, 10, 12, 14, 16, ...<br><br>
            <span class="ans">・$x$ が1増えるごとに、$y$ は2ずつ増える。<br>
            ・前ページ（1日目）の高さに、常に 8cm をたした値になっている。</span>
        </div>
    `
};

guideData["62"] = {
    title: "p.62 一次関数の定義・式の意味",
    content: `
        <h2>1　一次関数</h2>
        <div class="explanation-block">
            <strong>1日目と2日目の関係</strong><br><br>
            1日目：$y = 2x$<br>
            2日目：$y = 2x + 8$<br><br>
            同じ $x$ の値に対応する $y$ の値は、1日目より2日目の方が常に8大きくなっています。<br><br>
            <div class="formula-box">
                $y$ が $x$ の関数で、<br>
                <div style="text-align: center; font-size: 1.2em; font-weight: bold; margin: 10px 0;">
                $y = ax + b$ ($a, b$ は定数)
                </div>
                のようになるとき、<strong>$y$ は $x$ の一関数である</strong>といいます。<br>
                <small>（$y$ が $x$ の一次式で表される）</small>
            </div>
        </div>
    `
};

guideData["63"] = {
    title: "p.63 比例との関係・問1・例1",
    content: `
        <h2>比例は一次関数の特別な場合</h2>
        <div class="explanation-block">
            一次関数 $y = ax + b$ で、$b = 0$ の場合、$y = ax$ となり比例になります。<br>
            つまり、比例は一次関数の特別な場合です。
        </div>
        <h2>問1　一次関数の判別</h2>
        <div class="explanation-block">
            次の式で一次関数であるものをすべて選びなさい。<br>
            (ア) $y = 8x - 1$ → 一次関数。$x$に比例する部分は $8x$<br>
            (イ) $y = \\dfrac{4}{x}$ → 反比例（一次関数ではない）<br>
            (ウ) $y = \\dfrac{1}{3}x$ → 一次関数（比例）。$x$に比例する部分は $\\frac{1}{3}x$<br>
            (エ) $y = 5 - 7x$ → 一次関数（$y = -7x + 5$）。$x$に比例する部分は $-7x$<br>
            <span class="ans">答え：(ア), (ウ), (エ)</span>
        </div>
        <h2>例1・問2　高度と気温の関係</h2>
        <div class="explanation-block">
            例1：高度が1km増すごとに気温が6℃低くなる。<br>
            地上($0km$)の気温が 20℃ のとき：$y = 20 - 6x$（$y = -6x + 20$）<br><br>
            <strong>問2</strong> 地上からの高度が次のときの気温を求めなさい。<br>
            (1) 1km → $20 - 6 \\times 1$<span class="ans">$ = 14$℃</span><br>
            (2) 4km → $20 - 6 \\times 4$<span class="ans">$ = -4$℃</span><br>
            (3) 8.8km → $20 - 6 \\times 8.8 = 20 - 52.8$<span class="ans">$ = -32.8$℃</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a06377" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["64"] = {
    title: "p.64 練習問題・数学ライブラリー",
    content: `
        <h2>練習問題</h2>
        <div class="explanation-block">
            <strong>1　一次関数であるものを選ぶ</strong><br>
            (ア) $y = -8x + 3$ → <span class="ans">一次関数（○）</span><br>
            (イ) $y = -\\dfrac{12}{x}$ → ✗<br>
            (ウ) $y = \\dfrac{3}{2}(x - 2) = \\dfrac{3}{2}x - 3$ → <span class="ans">一次関数（○）</span><br><br>
            
            <strong>2　文章題から一次関数を選ぶ</strong><br>
            (ア) 300gから $x$ g使った残り $y$ g：$y = 300 - x$<br>
            (イ) 10kmの道のりを時速 $x$ km：$y = \\dfrac{10}{x}$<br>
            (ウ) 時速4kmで $x$ 時間：$y = 4x$<br>
            (エ) 縦 $x$、横4cmの長方形の周囲：$y = 2(x + 4) = 2x + 8$<br>
            (オ) 半径 $x$ の球の表面積：$y = 4\\pi x^2$<br>
            <span class="ans">答え：(ア), (ウ), (エ)</span>
        </div>
        <h2>数学ライブラリー：雷さまはどこ？</h2>
        <div class="explanation-block">
            音の速さ $y$ (m/s) は気温 $x$ (℃) の一次関数：$y = 0.6x + 331$<br>
            気温15℃のとき、$y = 0.6 \\times 15 + 331 = 340$ m/s。<br>
            雷光から10秒後に音が聞こえたら、$340 \\times 10 = 3400$ m 離れている。
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a06401" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

guideData["65"] = {
    title: "p.65 2 一次関数の値の変化",
    content: `
        <h2>2　一次関数の値の変化</h2>
        <div class="explanation-block">
            <strong>ひろげよう：</strong> $y = 2x + 1$ の表を完成させ、増加量を比べる。<br>
            $x$が1から4に増える（増加量3）とき、$y$は3から9に増える（増加量6）。<br>
            $y$の増加量 ÷ $x$の増加量 = $6 \\div 3 = 2$<br>
            常に、$y$の増加量は$x$の増加量の2倍になる。<br><br>
            <strong>問1</strong> $x$ が5から9に変わるとき：<br>
            $x=5$ のとき $y=11$<br>
            $x=9$ のとき $y=19$<br>
            $x$の増加量は $9 - 5 = 4$、$y$の増加量は $19 - 11 = 8$。<br>
            <span class="ans">$y$の増加量は$x$の増加量の 2倍 になります。</span>
        </div>
        <h2>変化の割合</h2>
        <div class="explanation-block">
            $x$の増加量に対する $y$の増加量の割合を <strong>変化の割合</strong> といいます。<br>
            <div class="formula-box">
                変化の割合 $= \\dfrac{y\\text{の増加量}}{x\\text{の増加量}}$
            </div>
            一次関数 $y = ax + b$ では、変化の割合は常に一定で $a$ に等しい。
        </div>
    `
};

guideData["66"] = {
    title: "p.66 a<0の場合の変化の割合・問2",
    content: `
        <h2>a < 0 の場合の変化の割合</h2>
        <div class="explanation-block">
            <strong>ひろげよう：</strong> $y = -2x + 7$ について。<br>
            (1) $x$ が1から4まで変わるとき：<br>
            $x=1$ で $y=5$、$x=4$ で $y=-1$。<br>
            $x$の増加量は3、$y$の増加量は $-1 - 5 = -6$。<br>
            変化の割合 $= \\dfrac{-6}{3} = -2$<br>
            いずれの区間でも変化の割合は一定で $-2$ になる。
        </div>
        <h2>結論</h2>
        <div class="explanation-block">
            一次関数 $y = ax + b$ では、変化の割合は常に $a$ に等しい。<br>
            ・$a > 0$ のとき、$x$が増加すると$y$も増加する。<br>
            ・$a < 0$ のとき、$x$が増加すると$y$は減少する。
        </div>
        <h2>問2　変化の割合から増加量を求める</h2>
        <div class="explanation-block">
            一次関数 $y = \\dfrac{2}{3}x + 5$ について、$y$の増加量を求めなさい。<br>
            変化の割合 $a = \\dfrac{2}{3}$。<br>
            (1) $x$の増加量が1のとき：<br>
            <span class="ans">$y$の増加量 = $\\dfrac{2}{3} \\times 1 = \\dfrac{2}{3}$</span><br>
            (2) $x$の増加量が3のとき：<br>
            <span class="ans">$y$の増加量 = $\\dfrac{2}{3} \\times 3 = 2$</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a06677" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["67"] = {
    title: "p.67 比例・反比例の変化の割合、練習問題",
    content: `
        <h2>ふりかえり：反比例の変化の割合</h2>
        <div class="explanation-block">
            反比例 $y = \\dfrac{6}{x}$ において：<br>
            ・$x$ が1から2へ変わるとき $\\dfrac{3 - 6}{2 - 1} = -3$<br>
            ・$x$ が2から3へ変わるとき $\\dfrac{2 - 3}{3 - 2} = -1$<br>
            <span class="ans">反比例では、調べる区間によって変化の割合が異なり、一定ではありません。</span>
        </div>
        <h2>練習問題</h2>
        <div class="explanation-block">
            <strong>1　yの増加量と変化の割合</strong><br>
            $x$ が2から6へ（+4）。$y$ が-5から3へ（+8）。<br>
            <span class="ans">変化の割合 $= \\dfrac{8}{4} = 2$</span><br><br>
            <strong>2　yは増加するか、減少するか</strong><br>
            (1) $y = 7x + 2$：$a=7 > 0$ なので <span class="ans">増加する（変化の割合7）</span><br>
            (2) $y = -3x + 4$：$a=-3 < 0$ なので <span class="ans">減少する（変化の割合-3）</span><br>
            (3) $y = \\dfrac{1}{5}x - 6$：$a=\\dfrac{1}{5} > 0$ なので <span class="ans">増加する（変化の割合$\\dfrac{1}{5}$）</span><br><br>
            <strong>3　xの増加量からyの増加量を求める</strong><br>
            $y = -\\dfrac{3}{4}x + 1$ で、$x$の増加量が8のとき。<br>
            <span class="ans">$y$の増加量 $= -\\dfrac{3}{4} \\times 8 = -6$</span>
        </div>
    `
};

guideData["68"] = {
    title: "p.68 ③一次関数のグラフ — ひろげよう",
    content: `
        <h2>③一次関数のグラフ</h2>
        <div class="explanation-block">
            <strong>ひろげよう：</strong> $y = 2x + 3$ について、表を完成させましょう。<br>
            $x$: -3, -2, -1, 0, 1, 2, 3<br>
            $y$: -3, -1, 1, 3, 5, 7, 9<br><br>
            <strong>比較：</strong> $y = 2x$ の値くらべると、対応する $y$ の値はいつでも $y=2x+3$ の方が <strong>3だけ大きく</strong> なっています。
        </div>
        <h2>グラフから予想されること</h2>
        <div class="explanation-block">
            このことから、一次関数 $y = 2x + 3$ のグラフは、比例のグラフ $y = 2x$ に <strong>平行な直線</strong> になることが予想されます。
        </div>
        <div class="graph-container">
            <div id="graph-68" class="jxgbox"></div>
            <div class="graph-caption">赤：$y = 2x + 3$　青：$y = 2x$</div>
        </div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-68', {
            boundingbox: [-5, 10, 5, -5], width: 300, height: 300
        });
        if (!b) return;
        // y = 2x (青・破線)
        GraphHelper.drawLine(b, 2, 0, { color: '#3498db', dash: 2, label: 'y=2x', labelX: 1.5 });
        // y = 2x + 3 (赤・実線)
        GraphHelper.drawLine(b, 2, 3, { color: '#e74c3c', label: 'y=2x+3', labelX: 1.5 });
        // 切片の点
        GraphHelper.drawPoint(b, 0, 3, { name: '(0, 3)', color: '#e74c3c' });
        GraphHelper.drawPoint(b, 0, 0, { name: 'O', color: '#3498db', size: 0 });
    }
};

guideData["69"] = {
    title: "p.69 グラフの平行移動と切片・問1・問2",
    content: `
        <h2>グラフの平行移動</h2>
        <div class="explanation-block">
            一次関数 $y = 2x + 3$ のグラフは、比例のグラフ $y = 2x$ を、<strong>上方に （$y$軸の正の方向に）3だけ平行移動</strong> した直線になります。<br>
            このため、$y$軸上の点 $(0, 3)$ を通ります。
        </div>
        <h2>切片（せっぺん）</h2>
        <div class="explanation-block">
            直線 $y = ax + b$ と $y$軸との交点 $(0, b)$ の $y$座標 $b$ を、この直線の <strong>切片</strong> といいます。<br>
            （グラフは直線 $y = ax$ に平行で、切片 $b$ の点を通ります）
        </div>
        <div class="graph-container">
            <div id="graph-69" class="jxgbox"></div>
            <div class="graph-caption">青破線：$y=2x$　赤：$y=2x+3$（+3移動）　緑：$y=2x-2$（-2移動）</div>
        </div>
        <h2>問1　グラフをかきなさい</h2>
        <div class="explanation-block">
            <span class="ans">(1) $y = 2x - 2$： $y = 2x$ の直線を下（$y$軸負方向）に2平行移動</span><br>
            <span class="ans">(2) $y = -2x + 4$： $y = -2x$ の直線を上（$y$軸正方向）に4平行移動</span><br>
            <span class="ans">(3) $y = -2x - 3$： $y = -2x$ の直線を下（$y$軸負方向）に3平行移動</span>
        </div>
        <h2>問2　切片をいいなさい</h2>
        <div class="explanation-block">
            (1) $y = -3x + 5$ → 切片 <span class="ans">$5$</span><br>
            (2) $y = 2x - 4$ → 切片 <span class="ans">$-4$</span><br>
            (3) $y = -5x$ → 切片 <span class="ans">$0$</span>
        </div>
    
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a06901" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-69', {
            boundingbox: [-5, 10, 5, -6], width: 300, height: 300
        });
        if (!b) return;
        GraphHelper.drawLine(b, 2, 0, { color: '#3498db', dash: 2, label: 'y=2x', labelX: 2 });
        GraphHelper.drawLine(b, 2, 3, { color: '#e74c3c', label: 'y=2x+3', labelX: -2.5 });
        GraphHelper.drawLine(b, 2, -2, { color: '#2ecc71', label: 'y=2x-2', labelX: 2.5 });
        GraphHelper.drawPoint(b, 0, 3, { name: '(0,3)', color: '#e74c3c' });
        GraphHelper.drawPoint(b, 0, -2, { name: '(0,-2)', color: '#2ecc71' });
    }
};

guideData["70"] = {
    title: "p.70 aの値とグラフの関係・直線の傾き",
    content: `
        <h2>ひろげよう：aの値とグラフの関係</h2>
        <div class="explanation-block">
            $y = x + 2, y = 2x + 2, y = 3x + 2$<br>
            これらはすべて切片が 2 で、点 $(0, 2)$ を通る直線です。<br>
            $a$ の値が 1, 2, 3 と大きくなるほど、<strong>グラフがより起き上がった（急な）形</strong> になっています。<br>
            $a$ の値によって、直線の傾きぐあいが決まります。
        </div>
        <div class="graph-container">
            <div id="graph-70" class="jxgbox"></div>
            <div class="graph-caption">切片2が同じで傾きが異なる3本の直線</div>
        </div>
        <h2>直線の傾き</h2>
        <div class="explanation-block">
            直線 $y = ax + b$ で、$a$ の値を、この直線の <strong>傾き</strong> といいます。<br>
            $a$（傾き）は、$x$の増加量が1のときの $y$の増加量を示しています。<br><br>
            例：$y = 3x + 2$ の場合、傾きは3。<br>
            グラフ上で右へ1進むと、上へ3進む（右上がり）ことを示しています。
        </div>
    
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a07001" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-70', {
            boundingbox: [-4, 8, 4, -4], width: 280, height: 280
        });
        if (!b) return;
        GraphHelper.drawLine(b, 1, 2, { color: '#2ecc71', label: 'y=x+2', labelX: 2 });
        GraphHelper.drawLine(b, 2, 2, { color: '#3498db', label: 'y=2x+2', labelX: 1.5 });
        GraphHelper.drawLine(b, 3, 2, { color: '#e74c3c', label: 'y=3x+2', labelX: 1 });
        GraphHelper.drawPoint(b, 0, 2, { name: '(0, 2)', color: '#333' });
    }
};

guideData["71"] = {
    title: "p.71 例1 (a<0の傾き)・問3",
    content: `
        <h2>例1　傾きが負（a < 0）の直線</h2>
        <div class="explanation-block">
            直線 $y = -2x + 1$ の場合、傾きは $-2$ です。<br>
            これは、グラフ上で <strong>右へ1進むと、下へ2進む</strong>（-$y$方向へ2進む）ことを示します。<br>
            このため、直線は <strong>右下がり</strong> になります。
        </div>
        <h2>まとめ：グラフの形</h2>
        <div class="explanation-block">
            ・$a > 0$（正の数）： グラフは <strong>右上がり</strong><br>
            ・$a < 0$（負の数）： グラフは <strong>右下がり</strong><br>
            <br>
            <div class="tip">
                変化の割合 ＝ 直線の傾き ＝ $a$
            </div>
        </div>
        <div class="graph-container">
            <div id="graph-71" class="jxgbox"></div>
            <div class="graph-caption">赤（右上がり）：$y=2x+1$　青（右下がり）：$y=-2x+1$</div>
        </div>
        <h2>問3　傾き・切片とグラフの形</h2>
        <div class="explanation-block">
            (1) $y = 3x - 4$<br>
            <span class="ans">傾き $3$、切片 $-4$、右上がり</span><br>
            (2) $y = -x + 6$<br>
            <span class="ans">傾き $-1$、切片 $6$、右下がり</span><br>
            (3) $y = \\\\dfrac{4}{5}x - 1$<br>
            <span class="ans">傾き $\\\\dfrac{4}{5}$、切片 $-1$、右上がり</span><br>
            (4) $y = -\\\\dfrac{3}{2}x + 1$<br>
            <span class="ans">傾き $-\\\\dfrac{3}{2}$、切片 $1$、右下がり</span>
        </div>
    
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a07177" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-71', {
            boundingbox: [-5, 6, 5, -6], width: 280, height: 280
        });
        if (!b) return;
        GraphHelper.drawLine(b, 2, 1, { color: '#e74c3c', label: 'y=2x+1', labelX: 1.5 });
        GraphHelper.drawLine(b, -2, 1, { color: '#3498db', label: 'y=-2x+1', labelX: -2 });
        GraphHelper.drawPoint(b, 0, 1, { name: '(0,1)', color: '#333' });
        GraphHelper.drawSlopeGuide(b, 0, 1, 1, 2, { color: '#e74c3c', hLabel: '1', vLabel: '2' });
        GraphHelper.drawSlopeGuide(b, 0, 1, 1, -2, { color: '#3498db', hLabel: '1', vLabel: '-2' });
    }
};


guideData["72"] = {
    title: "p.72 例2・問4 — 一次関数のグラフのかき方",
    content: `
        <h2>例2　グラフのかき方</h2>
        <div class="explanation-block">
            <strong>手順：</strong> まず切片を取り、そこから開始して傾きの分だけ移動する点を取り、直線をひく。<br><br>
            (1) $y = 3x - 4$<br>
            ・切片 $-4$ より、点 $(0, -4)$ をとる。<br>
            ・傾き $3$ より、右へ1、上へ3進んだ点 $(1, -1)$ をとる。<br><br>
            (2) $y = -\\dfrac{3}{2}x + 1$<br>
            ・切片 $1$ より、点 $(0, 1)$ をとる。<br>
            ・傾き $-\\dfrac{3}{2}$ より、右へ2、下へ3進んだ点 $(2, -2)$ をとる。
        </div>
        <div class="graph-container">
            <div id="graph-72" class="jxgbox"></div>
            <div class="graph-caption">赤：$y = 3x - 4$　青：$y = -\\frac{3}{2}x + 1$</div>
        </div>
        <h2>問4　グラフをかきなさい</h2>
        <div class="explanation-block">
            (1) $y = x - 3$ → <span class="ans">切片 $-3$、傾き $1$ の直線</span><br>
            (2) $y = 3x + 5$ → <span class="ans">切片 $5$、傾き $3$ の直線</span><br>
            (3) $y = \\dfrac{1}{4}x + 1$ → <span class="ans">切片 $1$、傾き $\\frac{1}{4}$ (右4上1)の直線</span><br>
            (4) $y = -2x + 3$ → <span class="ans">切片 $3$、傾き $-2$ の直線</span><br>
            (5) $y = -\\dfrac{2}{3}x - 4$ → <span class="ans">切片 $-4$、傾き $-\\frac{2}{3}$ (右3下2)の直線</span>
        </div>
    
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a07277" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-72', {
            boundingbox: [-5, 6, 5, -6], width: 300, height: 300
        });
        if (!b) return;
        // y = 3x - 4
        GraphHelper.drawLine(b, 3, -4, { color: '#e74c3c' });
        GraphHelper.drawPoint(b, 0, -4, { name: '(0,-4)', color: '#e74c3c' });
        GraphHelper.drawPoint(b, 1, -1, { name: '(1,-1)', color: '#e74c3c' });
        GraphHelper.drawSlopeGuide(b, 0, -4, 1, 3, { color: '#e74c3c', hLabel: '1', vLabel: '3' });
        // y = -3/2 x + 1
        GraphHelper.drawLine(b, -1.5, 1, { color: '#3498db' });
        GraphHelper.drawPoint(b, 0, 1, { name: '(0,1)', color: '#3498db' });
        GraphHelper.drawPoint(b, 2, -2, { name: '(2,-2)', color: '#3498db' });
        GraphHelper.drawSlopeGuide(b, 0, 1, 2, -3, { color: '#3498db', hLabel: '2', vLabel: '-3' });
    }
};

guideData["73"] = {
    title: "p.73 例3・問5・問6 — xの変域とyの変域",
    content: `
        <h2>例3　xの変域に制限があるときのグラフ</h2>
        <div class="explanation-block">
            一次関数 $y = 2x + 2$ で、$-3 \\leqq x \\leqq 2$ のとき。<br>
            ・$x = -3$ のとき $y = -4$<br>
            ・$x = 2$ のとき $y = 6$<br>
            グラフは線分になり、$y$の変域は <span class="ans">$-4 \\leqq y \\leqq 6$</span> になります。
        </div>
        <div class="graph-container">
            <div id="graph-73" class="jxgbox"></div>
            <div class="graph-caption">$y = 2x + 2$（$-3 \\leqq x \\leqq 2$）</div>
        </div>
        <h2>問5　変域を求めなさい</h2>
        <div class="explanation-block">
            一次関数 $y = x - 1$ について。<br>
            (1) $3 \\leqq x \\leqq 5$<br>
            $x=3 \\rightarrow y=2$、$x=5 \\rightarrow y=4$。右上がりなのでそのまま対応。<br>
            <span class="ans">答え： $2 \\leqq y \\leqq 4$</span><br><br>
            (2) $-4 \\leqq x \\leqq 2$<br>
            $x=-4 \\rightarrow y=-5$、$x=2 \\rightarrow y=1$。<br>
            <span class="ans">答え： $-5 \\leqq y \\leqq 1$</span>
        </div>
        <h2>問6　傾きが負のときの変域</h2>
        <div class="explanation-block">
            一次関数 $y = -\\dfrac{3}{2}x + 4$ について。<br>
            (1) $4 \\leqq x \\leqq 6$<br>
            $x=4$ のとき $y=-2$、$x=6$ のとき $y=-5$。<br>
            傾きが負（右下がり）なので、$x$が大きいとき$y$は小さくなる。<br>
            <span class="ans">答え： $-5 \\leqq y \\leqq -2$</span><br><br>
            (2) $-2 \\leqq x \\leqq 2$<br>
            $x=-2$ のとき $y=7$、$x=2$ のとき $y=1$。<br>
            <span class="ans">答え： $1 \\leqq y \\leqq 7$</span>
        </div>
    
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a07377" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-73', {
            boundingbox: [-5, 8, 5, -6], width: 280, height: 280
        });
        if (!b) return;
        // 元の直線（破線、薄い）
        GraphHelper.drawLine(b, 2, 2, { color: '#ccc', dash: 2, width: 1.5 });
        // 変域制限付き線分
        GraphHelper.drawLine(b, 2, 2, { color: '#e74c3c', domain: [-3, 2] });
    }
};

guideData["74"] = {
    title: "p.74 数学ライブラリー「AEDの重要性がわかるグラフ」",
    content: `
        <h2>数学ライブラリー：AEDの重要性</h2>
        <div class="explanation-block">
            AEDを使用するまでの時間 $x$ (分)と救命の可能性 $y$ (%) のグラフ。<br>
            ・心停止から1分で使えば救命率は約90%。<br>
            ・5分たつと約50%まで低下。<br>
            ・9分（救急車の全国平均到着時間）では10%以下に。<br><br>
            グラフの傾きが負（右下がり）であることから、時間がたつほど右へ進み、救命率が下方向へ急激に低下することが読み取れます。<br>
            <span class="ans">一刻も早くAEDを使用することがとても大切です！</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a07401" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

guideData["75"] = {
    title: "p.75 ④一次関数の式を求めること・問1",
    content: `
        <h2>④一次関数の式を求めること（グラフから）</h2>
        <div class="explanation-block">
            <strong>ひろげよう：</strong> グラフから一次関数の式を求めるには、<strong>切片</strong>と<strong>傾き</strong>を読み取ります。<br>
            ・グラフが $y$軸と交わる点は $(0, -1)$ だから、切片は $-1$<br>
            ・右へ2進むと上へ3進むから、傾きは $\\dfrac{3}{2}$<br>
            したがって、式は <span class="ans">$y = \\dfrac{3}{2}x - 1$</span> となります。
        </div>
        <div class="graph-container">
            <div id="graph-75" class="jxgbox"></div>
            <div class="graph-caption">グラフから式を読み取る：$y = \\frac{3}{2}x - 1$</div>
        </div>
        <h2>問1　グラフから式を求める</h2>
        <div class="explanation-block">
            (1) 切片は $1$、右へ1進むと上へ2進む（傾き $2$）<br>
            <span class="ans">$y = 2x + 1$</span><br><br>
            (2) 切片は $3$、右へ1進むと下へ1進む（傾き $-1$）<br>
            <span class="ans">$y = -x + 3$</span><br><br>
            (3) 切片は $-2$、右へ3進むと上へ1進む（傾き $\\dfrac{1}{3}$）<br>
            <span class="ans">$y = \\dfrac{1}{3}x - 2$</span>
        </div>
    
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a07577" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-75', {
            boundingbox: [-5, 5, 5, -5], width: 280, height: 280
        });
        if (!b) return;
        GraphHelper.drawLine(b, 1.5, -1, { color: '#e74c3c' });
        GraphHelper.drawPoint(b, 0, -1, { name: '(0,-1)', color: '#e74c3c' });
        GraphHelper.drawPoint(b, 2, 2, { name: '(2, 2)', color: '#e74c3c' });
        GraphHelper.drawSlopeGuide(b, 0, -1, 2, 3, { color: '#3498db', hLabel: '2', vLabel: '3' });
    }
};

guideData["76"] = {
    title: "p.76 傾きと1点の座標から式を求める・問2",
    content: `
        <h2>例題1　傾きと1点の座標から式を求める</h2>
        <div class="explanation-block">
            傾きが $\\dfrac{3}{5}$ だから、式を $y = \\dfrac{3}{5}x + b$ とします。<br>
            グラフが点 $(5, 1)$ を通るから、$x=5, y=1$ を代入すると、<br>
            $1 = \\dfrac{3}{5} \\times 5 + b$<br>
            $1 = 3 + b$<br>
            $b = -2$<br>
            よって、式は <span class="ans">$y = \\dfrac{3}{5}x - 2$</span>
        </div>
        <h2>問2　傾きと1点から式を求める</h2>
        <div class="explanation-block">
            傾きが $-3$ だから、$y = -3x + b$ とします。<br>
            点 $(1, 2)$ を通るから、$x=1, y=2$ を代入すると、<br>
            $2 = -3 \\times 1 + b$<br>
            $2 = -3 + b$<br>
            $b = 5$<br>
            よって、式は <span class="ans">$y = -3x + 5$</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a07677" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["77"] = {
    title: "p.77 例題2・問3・問4 — 2点の座標から式を求める",
    content: `
        <h2>例題2　2点の座標から式を求める</h2>
        <div class="explanation-block">
            点 $(1, 2), (5, -6)$ を通る直線の式：<br>
            <strong>【解き方① 傾きを先に求める】</strong><br>
            傾き $a = \\dfrac{-6 - 2}{5 - 1} = \\dfrac{-8}{4} = -2$<br>
            $y = -2x + b$ に $(1, 2)$ を代入して、$2 = -2 + b \\rightarrow b = 4$<br><br>
            <strong>【解き方② 連立方程式で解く】</strong><br>
            $y = ax + b$ に2点の座標を代入して、<br>
            $\\begin{cases} 2 = a + b \\dots① \\\\ -6 = 5a + b \\dots② \\end{cases}$<br>
            これを解いて $a = -2, b = 4$。<br><br>
            どちらの解き方でも、式は <span class="ans">$y = -2x + 4$</span>
        </div>
        <h2>問3　2点の座標から式を求める</h2>
        <div class="explanation-block">
            2点 $(-1, -4), (3, 8)$ を通る。<br>
            傾き $a = \\dfrac{8 - (-4)}{3 - (-1)} = \\dfrac{12}{4} = 3$<br>
            $y = 3x + b$ に $(3, 8)$ を代入し、$8 = 9 + b \\rightarrow b = -1$<br>
            <span class="ans">$y = 3x - 1$</span>
        </div>
        <h2>問4　対応表の値から式を求める</h2>
        <div class="explanation-block">
            条件より、グラフは2点 $(-2, -1), (4, 8)$ を通る。<br>
            傾き $a = \\dfrac{8 - (-1)}{4 - (-2)} = \\dfrac{9}{6} = \\dfrac{3}{2}$<br>
            $y = \\dfrac{3}{2}x + b$ に $(4, 8)$ を代入し、$8 = 6 + b \\rightarrow b = 2$<br>
            <span class="ans">$y = \\dfrac{3}{2}x + 2$</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a07777" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["78"] = {
    title: "p.78 まとめよう・練習問題",
    content: `
        <h2>まとめよう</h2>
        <div class="explanation-block">
            一次関数 $y = 2x - 1$ の表、式、グラフの関係性。<br>
            表、式、グラフのどれか1つがわかれば、そこから他の表現をすべて求めることができます。
        </div>
        <h2>練習問題</h2>
        <div class="explanation-block">
            <strong>1　次の一次関数の式を求めなさい。</strong><br><br>
            (1) グラフが点 $(2, -1)$ を通り、傾き3<br>
            $y = 3x + b \\rightarrow -1 = 6 + b \\rightarrow b = -7$<br>
            <span class="ans">$y = 3x - 7$</span><br><br>
            (2) 変化の割合が $-5$ (傾き $-5$) で、$x=2$ のとき $y=3$<br>
            $y = -5x + b \\rightarrow 3 = -10 + b \\rightarrow b = 13$<br>
            <span class="ans">$y = -5x + 13$</span><br><br>
            (3) $x=-3$ のとき $y=2$、$x$ の増加量3のとき $y$ の増加量5<br>
            傾き $a = \\dfrac{5}{3}$。<br>
            $y = \\dfrac{5}{3}x + b \\rightarrow 2 = -5 + b \\rightarrow b = 7$<br>
            <span class="ans">$y = \\dfrac{5}{3}x + 7$</span><br><br>
            (4) 点 $(0, 5)$ を通り（切片5）、$y = \\dfrac{2}{3}x$ に平行（傾き $\\dfrac{2}{3}$）<br>
            <span class="ans">$y = \\dfrac{2}{3}x + 5$</span><br><br>
            (5) 点 $(0, -2)$（切片 $-2$）と $(4, 1)$ を通る<br>
            $1 = 4a - 2 \\rightarrow 4a = 3 \\rightarrow a = \\dfrac{3}{4}$<br>
            <span class="ans">$y = \\dfrac{3}{4}x - 2$</span><br><br>
            (6) $x = -2$ のとき $y = 2$、$x = 2$ のとき $y = 8$<br>
            2点 $(-2, 2), (2, 8)$ を通る。傾き $\\dfrac{8-2}{2-(-2)} = \\dfrac{6}{4} = \\dfrac{3}{2}$<br>
            $8 = \\dfrac{3}{2} \\times 2 + b \\rightarrow 8 = 3 + b \\rightarrow b = 5$<br>
            <span class="ans">$y = \\dfrac{3}{2}x + 5$</span>
        </div>
    `
};

guideData["79"] = {
    title: "p.79 2節 一次関数と方程式 — 点はどのように並んでいるかな？",
    content: `
        <h2>2節 一次関数と方程式</h2>
        <div class="explanation-block">
            <strong>点はどのように並んでいるかな？</strong><br>
            二元一次方程式 $2x + y = 5 \\dots①$<br><br>
            (1) 次の $x$ と $y$ の値の組が、方程式①の解となるように、□に値を書き入れましょう。<br>
            <span class="ans"> $(-1, 7), (0, 5), (0.5, 4)$</span><br>
            <span class="ans"> $(1, 3), (2.5, 0), (3, -1)$</span><br><br>
            
            (2) (1) の組を座標とする点をかき入れるとどうなるか。<br>
            <strong>話しあおう：</strong> かいた図からどんなことがわかるでしょうか。<br>
            <span class="ans">点は一直線上に並んでいる。</span><br>
            （つまり、二元一次方程式の解の組 $(x, y)$ を座標平面上にとると、一次関数のグラフと同じように直線になることが予想できます）
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a07901" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

guideData["80"] = {
    title: "p.80 1 方程式とグラフ・問1",
    content: `
        <h2>1　方程式とグラフ</h2>
        <div class="explanation-block">
            <strong>ひろげよう：</strong> 二元一次方程式 $2x + y = 5$<br>
            この方程式を $y$ について解くと、<br>
            $y = -2x + 5$<br>
            となり、一次関数の式になります。<br>
            この方程式の解を座標とする点の全体は、直線になります。<br>
            この直線を「方程式 $2x + y = 5$ のグラフ」といいます。
        </div>
        <div class="graph-container">
            <div id="graph-80" class="jxgbox"></div>
            <div class="graph-caption">$2x + y = 5$ → $y = -2x + 5$ のグラフ</div>
        </div>
        <h2>問1　方程式をyについて解いてグラフを書く</h2>
        <div class="explanation-block">
            (1) $x - 2y = 6$<br>
            $-2y = -x + 6 \\rightarrow$ <span class="ans">$y = \\dfrac{1}{2}x - 3$</span><br>
            （切片 $-3$、右に2進んで上へ1進む直線）<br><br>
            (2) $4x + 3y = 0$<br>
            $3y = -4x \\rightarrow$ <span class="ans">$y = -\\dfrac{4}{3}x$</span><br>
            （原点を通り、右に3進んで下へ4進む直線）
        </div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-80', {
            boundingbox: [-2, 7, 5, -3], width: 280, height: 280
        });
        if (!b) return;
        GraphHelper.drawLine(b, -2, 5, { color: '#e74c3c' });
        GraphHelper.drawPoint(b, 0, 5, { name: '(0,5)', color: '#e74c3c' });
        GraphHelper.drawPoint(b, 2.5, 0, { name: '(2.5,0)', color: '#e74c3c' });
    }
};

guideData["81"] = {
    title: "p.81 例1・問2 — 2点を求めてグラフをかく",
    content: `
        <h2>例1　2点を求めてグラフをかく</h2>
        <div class="explanation-block">
            方程式 $2x - 3y = 12$ について、グラフ上にある簡単な（整数の）2点を求めます。<br>
            ・$x = 0$ のとき、$-3y = 12 \\rightarrow y = -4$ （点 $(0, -4)$）<br>
            ・$y = 0$ のとき、$2x = 12 \\rightarrow x = 6$ （点 $(6, 0)$）<br>
            この2点を結ぶ直線がグラフになります。
        </div>
        <h2>問2　グラフをかきなさい</h2>
        <div class="explanation-block">
            (1) $x - y = 5$<br>
            <span class="ans">$y$ について解くと $y = x - 5$。点 $(0, -5)$ と $(5, 0)$ を通る直線。</span><br><br>
            (2) $x + 2y = -2$<br>
            <span class="ans">$y$ について解くと $y = -\\dfrac{1}{2}x - 1$。点 $(0, -1)$ と $(-2, 0)$ を通る直線。</span>
        </div>
        <div class="graph-container">
            <div id="graph-81" class="jxgbox"></div>
            <div class="graph-caption">赤：$x-y=5$（$y=x-5$）　青：$x+2y=-2$（$y=-\\frac{1}{2}x-1$）</div>
        </div>
        <h2>説明しよう</h2>
        <div class="explanation-block">
            $x - 3y = 7$ で、$x=0$ や $y=0$ では分数になってしまいます。<br>
            <span class="ans">$x$ について解き、$x = 3y + 7$ とすると、$y$ に簡単な整数（$y=0, -1, -2$ など）を代入することで、$x$ が整数になる点を簡単に見つけることができます。<br>
            例：$y = -1$ のとき $x = 4$ $(4, -1)$、$y = -2$ のとき $x = 1$ $(1, -2)$</span>
        </div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-81', {
            boundingbox: [-6, 6, 6, -6], width: 280, height: 280
        });
        if (!b) return;
        // (1) x - y = 5 → y = x - 5
        GraphHelper.drawLine(b, 1, -5, { color: '#e74c3c', label: '(1)', labelX: 3 });
        // (2) x + 2y = -2 → y = -1/2 x - 1
        GraphHelper.drawLine(b, -0.5, -1, { color: '#3498db', label: '(2)', labelX: -4 });
    }
};

guideData["82"] = {
    title: "p.82 y=k, x=h のグラフ・問3",
    content: `
        <h2>y=k のグラフ</h2>
        <div class="explanation-block">
            $y = 3$ のグラフは、$x$ の値がどんな値をとっても、$y$ 座標がつねに 3 になる点の集まりです。<br>
            したがって、<strong>点 $(0, 3)$ を通り、$x$軸に平行な直線</strong> になります。
        </div>
        <h2>問3　グラフをかきなさい</h2>
        <div class="explanation-block">
            (1) $y = 2$<br>
            <span class="ans">点 $(0, 2)$ を通り、$x$軸に平行な直線。</span><br><br>
            (2) $2y = -6 \\rightarrow y = -3$<br>
            <span class="ans">点 $(0, -3)$ を通り、$x$軸に平行な直線。</span>
        </div>
        <h2>ひろげよう：x=h のグラフ</h2>
        <div class="explanation-block">
            方程式 $x = 2$ のグラフは、どんなグラフになるでしょうか。<br>
            <span class="ans">$y$ の値がどんな値をとっても、$x$ 座標はつねに 2 なので、点 $(2, 0)$ を通り、$y$軸に平行な直線になります。</span>
        </div>
        <div class="graph-container">
            <div id="graph-82" class="jxgbox"></div>
            <div class="graph-caption">赤（横）：$y=3$　青（縦）：$x=2$</div>
        </div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-82', {
            boundingbox: [-4, 5, 5, -4], width: 280, height: 280
        });
        if (!b) return;
        // y = 3 （水平線）
        b.create('functiongraph', [function(x){ return 3; }], {
            strokeColor: '#e74c3c', strokeWidth: 2.5, fixed: true, highlight: false
        });
        b.create('text', [3.5, 3.5, 'y=3'], { fontSize: 13, color: '#e74c3c', fixed: true, highlight: false });
        // x = 2 （垂直線）
        b.create('line', [[2, 0], [2, 1]], {
            straightFirst: true, straightLast: true,
            strokeColor: '#3498db', strokeWidth: 2.5, fixed: true, highlight: false,
            point1: { visible: false }, point2: { visible: false }
        });
        b.create('text', [2.4, -2.5, 'x=2'], { fontSize: 13, color: '#3498db', fixed: true, highlight: false });
    }
};

guideData["83"] = {
    title: "p.83 x=h のグラフ・問4・問5・練習問題",
    content: `
        <h2>問4　グラフをかきなさい</h2>
        <div class="explanation-block">
            (1) $x = -2$ <span class="ans">→ 点 $(-2, 0)$ を通り、$y$軸に平行な直線。</span><br>
            (2) $3x = 12 \\rightarrow x = 4$ <span class="ans">→ 点 $(4, 0)$ を通り、$y$軸に平行な直線。</span>
        </div>
        <h2>問5　x=0, y=0 はどんな直線？</h2>
        <div class="explanation-block">
            ・$x = 0$ は <span class="ans">$y$軸</span><br>
            ・$y = 0$ は <span class="ans">$x$軸</span> を表しています。
        </div>
        <h2>練習問題</h2>
        <div class="explanation-block">
            <strong>1　次の方程式のグラフをかきなさい。</strong><br>
            (1) $3x - 4y = 12 \\rightarrow -4y = -3x + 12 \\rightarrow$ <span class="ans">$y = \\dfrac{3}{4}x - 3$</span><br>
            (2) $4x + y - 2 = 0 \\rightarrow$ <span class="ans">$y = -4x + 2$</span><br>
            (3) $3x = 2y \\rightarrow$ <span class="ans">$y = \\dfrac{3}{2}x$</span><br>
            (4) $4y - 16 = 0 \\rightarrow y = 4$ <span class="ans">（$(0, 4)$を通る水平な直線）</span><br>
            (5) $6 + 2x = 0 \\rightarrow x = -3$ <span class="ans">（$(-3, 0)$を通る垂直な直線）</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a08377" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `
};

guideData["84"] = {
    title: "p.84 2 連立方程式とグラフ",
    content: `
        <h2>2　連立方程式とグラフ</h2>
        <div class="explanation-block">
            <strong>ひろげよう：</strong><br>
            2つの方程式 $x + y = 7$ と $2x + y = 10$ をそれぞれグラフにすると、2本の直線 $l, m$ になります。<br><br>
            この2直線の交点 P $(3, 4)$ は、どちらの直線上にもあるので、2つの式を両方とも成り立たせます。<br>
            つまり、交点の座標は、<strong>連立方程式の解</strong> と一致します。<br><br>
            <div class="tip">
                連立方程式の解は、2つの方程式のグラフ（2直線）の <strong>交点の座標</strong> になります。
            </div>
        </div>
        <div class="graph-container">
            <div id="graph-84" class="jxgbox"></div>
            <div class="graph-caption">$l: x+y=7$　$m: 2x+y=10$　交点 P$(3, 4)$</div>
        </div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-84', {
            boundingbox: [-1, 11, 8, -1], width: 300, height: 300
        });
        if (!b) return;
        // l: x + y = 7 → y = -x + 7
        GraphHelper.drawLine(b, -1, 7, { color: '#3498db', label: 'ℓ', labelX: 1 });
        // m: 2x + y = 10 → y = -2x + 10
        GraphHelper.drawLine(b, -2, 10, { color: '#e74c3c', label: 'm', labelX: 1 });
        // 交点 P(3, 4)
        GraphHelper.drawPoint(b, 3, 4, { name: 'P(3, 4)', color: '#333', size: 4 });
    }
};

guideData["85"] = {
    title: "p.85 問1・例題1・問2 — 連立方程式の解と交点",
    content: `
        <h2>問1　グラフを使って解く</h2>
        <div class="explanation-block">
            $\\begin{cases} x + 2y = 2 \\rightarrow y = -\\dfrac{1}{2}x + 1 \\\\ 2x + y = -2 \\rightarrow y = -2x - 2 \\end{cases}$<br>
            グラフをかいて交点を読み取ると <span class="ans">$(-2, 2)$</span> になります。<br>
            （計算で解いても $x = -2, y = 2$ となり、一致します）
        </div>
        <h2>例題1　2直線の交点の座標の求め方</h2>
        <div class="explanation-block">
            直線 $l: y = -2x + 3$<br>
            直線 $m: y = x + 1$<br>
            交点を求めるには、この2式を連立方程式として解きます。<br>
            $-2x + 3 = x + 1 \\rightarrow 3x = 2 \\rightarrow x = \\dfrac{2}{3}$<br>
            $y = \\dfrac{2}{3} + 1 = \\dfrac{5}{3}$。<br>
            <span class="ans">交点 P $\\left(\\dfrac{2}{3}, \\dfrac{5}{3}\\right)$</span>
        </div>
        <div class="graph-container">
            <div id="graph-85" class="jxgbox"></div>
            <div class="graph-caption">$l: y=-2x+3$　$m: y=x+1$　交点 P</div>
        </div>
        <h2>問2　交点の座標を求める</h2>
        <div class="explanation-block">
            グラフより、2直線の式を読み取ります。<br>
            直線 $l$ は点 $(0, 4), (1, 1)$ などを通る $\\rightarrow y = -3x + 4$<br>
            直線 $m$ は点 $(-4, 0), (0, -1)$ を通る $\\rightarrow y = -\\dfrac{1}{4}x - 1$<br>
            連立して解くと、$-3x + 4 = -\\dfrac{1}{4}x - 1$<br>
            両辺を4倍：$-12x + 16 = -x - 4 \\rightarrow 11x = 20 \\rightarrow x = \\dfrac{20}{11}$<br>
            $y = -3 \\times \\dfrac{20}{11} + 4 = \\dfrac{-60 + 44}{11} = -\\dfrac{16}{11}$<br>
            <span class="ans">よって交点 P は $\\left(\\dfrac{20}{11}, -\\dfrac{16}{11}\\right)$</span>
        </div>
        <div class="graph-container">
            <div id="graph-85b" class="jxgbox"></div>
            <div class="graph-caption">$l: y=-3x+4$　$m: y=-\\frac{1}{4}x-1$　交点 P</div>
        </div>
    
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a08577" target="_blank" rel="noopener" class="qr-link-btn">📝 補充問題</a></div>
    `,
    onRender: function() {
        // 例題1のグラフ
        var b = GraphHelper.createBoard('graph-85', {
            boundingbox: [-3, 5, 4, -3], width: 280, height: 280
        });
        if (!b) return;
        GraphHelper.drawLine(b, -2, 3, { color: '#3498db', label: 'ℓ', labelX: -1 });
        GraphHelper.drawLine(b, 1, 1, { color: '#e74c3c', label: 'm', labelX: 2 });
        GraphHelper.drawPoint(b, 2/3, 5/3, { name: 'P', color: '#333', size: 4 });
        // 問2のグラフ
        var b2 = GraphHelper.createBoard('graph-85b', {
            boundingbox: [-5, 5, 5, -5], width: 280, height: 280
        });
        if (!b2) return;
        GraphHelper.drawLine(b2, -3, 4, { color: '#3498db', label: 'ℓ', labelX: 0.5 });
        GraphHelper.drawLine(b2, -0.25, -1, { color: '#e74c3c', label: 'm', labelX: -4 });
        GraphHelper.drawPoint(b2, 20/11, -16/11, { name: 'P', color: '#333', size: 4 });
    }
};

guideData["86"] = {
    title: "p.86 3節 一次関数の利用 — 導入",
    content: `
        <h2>3節 一次関数の利用</h2>
        <div class="explanation-block">
            <strong>2人が出会う地点はどこかな？</strong><br>
            けいたさんが、家から5km離れたオリバーさんの家に向かいます。<br>
            途中の図書館で本を借りてから向かいます。<br><br>
            グラフの折れ線は：<br>
            ・$0 \\sim 30$分：3km進む（図書館へ）<br>
            ・$30 \\sim 60$分：距離が変わらない（図書館に滞在）<br>
            ・$60 \\sim 90$分：さらに2km進んで5km地点に到着（オリバーさんの家へ）
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a08601" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

guideData["87"] = {
    title: "p.87 一次関数の利用・問1",
    content: `
        <h2>1　一次関数の利用</h2>
        <div class="explanation-block">
            <strong>問1　グラフから読み取る</strong><br><br>
            (1) A、B、Cはどれを表していますか？<br>
            <span class="ans">A地点：けいたさんの家（0km）<br>
            B地点：図書館（3km）<br>
            C地点：オリバーさんの家（5km）</span><br><br>
            (2) 図書館に着く前とあとでは、進む速さはどちらが速いですか。<br>
            着く前：30分で3km（分速0.1km）<br>
            出たあと：30分で2km（分速0.067km）<br>
            <span class="ans">図書館に着く前の方が速い。</span><br><br>
            (3) 15分後、オリバーさんの家までの道のりは何kmですか。<br>
            15分後は1.5km地点にいます（グラフの $x=15$ のときの $y$ の値）。<br>
            目的地の5kmまでは、$5 - 1.5 = 3.5$<br>
            <span class="ans">3.5km</span><br><br>
            (4) B地点を出発してから30分後、オリバーさんの家までの道のりは何kmですか。<br>
            B地点（図書館）を出発するのはグラフの60分時点。その30分後なので $x=90$。<br>
            $y=5$ で、すでにオリバーさんの家に着いています。<br>
            <span class="ans">道のりは 0km</span>
        </div>
    `
};

guideData["88"] = {
    title: "p.88 一次関数の利用・問2・問3",
    content: `
        <h2>問2　オリバーさんの移動とグラフ</h2>
        <div class="explanation-block">
            オリバーさんは午前10時（図の $x=60$ 分）に出発し、5分で1km（時速12km）進みます。<br>
            グラフは点 $(60, 5)$ から始まり、15分で3km進む直線を引きます（点 $(75, 2)$ など）。<br><br>
            (2) 式は傾きが $-\\dfrac{1}{5}$ だから $y = -\\dfrac{1}{5}x + b$。<br>
            $(60, 5)$ を代入して $5 = -12 + b \\rightarrow b = 17$<br>
            <span class="ans">式：$y = -\\dfrac{1}{5}x + 17$</span><br><br>
            (3) けいたさんは60分以降、点 $(60, 3)$ と $(90, 5)$ を結ぶ直線上にいます。<br>
            傾きは $\\dfrac{2}{30} = \\dfrac{1}{15}$。式は $y = \\dfrac{1}{15}x - 1$。<br>
            交点を求めると： $-\\dfrac{1}{5}x + 17 = \\dfrac{1}{15}x - 1 \\rightarrow 18 = \\dfrac{4}{15}x \\rightarrow x = 67.5$<br>
            $67.5$分 は 67分30秒。このとき $y = 3.5$。<br>
            <span class="ans">出会うのは 午前10時7分30秒、けいたさんの家から 3.5km の地点</span>
        </div>
        <h2>説明しよう・問3</h2>
        <div class="explanation-block">
            <strong>説明しよう：</strong> 9時30分に出発した場合。<br>
            $x=30$ で出発（家から1kmを5分で進む速さ）。<br>
            けいたさんは 30分から60分の間、図書館 ($y=3$) にいます。<br>
            オリバーさんは $x=40$ のときに $y=3$ になるので、<br>
            <span class="ans">(イ) 図書館。そこで出会います。</span><br><br>
            <strong>問3：図書館の前に出会うには？</strong><br>
            けいたさんが図書館に着く $x=30, y=3$ の時点で、オリバーさんがすでに出発して到着していなければなりません。<br>
            点 $(30, 3)$ を通るようなオリバーさんの動きを逆算すると、$b = 9$ となり $y = 5$ になるのは $x=20$。<br>
            <span class="ans">午前9時20分より前に出発しなければならない。</span>
        </div>
    `
};

guideData["89"] = {
    title: "p.89 変化のようすから予想する問題（ダムの貯水量）",
    content: `
        <h2>ダムの貯水量を予想しよう</h2>
        <div class="explanation-block">
            <strong>問題：</strong> ダムの貯水量が減ってきており、650万 $m^3$ になるのが何月何日になるかを予想します。<br><br>
            表を見て、減少量を確認します。<br>
            ・7/31 → 8/1: $-27$<br>
            ・8/1 → 8/2: $-22$<br>
            ・8/2 → 8/3: $-26$<br>
            ・8/3 → 8/4: $-27$<br>
            ・8/4 → 8/5: $-19$<br><br>
            1日あたりの減少量はおよそ定数とみなすことができるため、<strong>一次関数</strong> として見通しを立てて推測することができます。
        </div>
    `
};

guideData["90"] = {
    title: "p.90 ダムの貯水量・説明しよう（水温）",
    content: `
        <h2>ステップ2：一次関数で解決</h2>
        <div class="explanation-block">
            1. 2点 $(0, 975)$、$ (3, 900)$ を通る直線とする。<br>
            傾き $a = \\dfrac{900 - 975}{3 - 0} = -25$<br>
            <span class="ans">式：$y = -25x + 975$</span><br><br>
            
            2. 貯水量が 650万 $m^3$ になるのは：<br>
            $650 = -25x + 975 \\rightarrow 25x = 325 \\rightarrow x = 13$<br>
            7月31日から13日後なので、<br>
            <span class="ans">推測：8月13日</span>
        </div>
        <h2>説明しよう：水温の変化</h2>
        <div class="explanation-block">
            水温の変化を一次関数とみなして推測します。<br>
            $(0, 20.0)$ から $(1, 25.8)$, $(2, 32.8)\\dots$ と変化しています。<br>
            例えば点 $(0, 20.0)$ と点 $(5, 52.2)$ を通る直線とみなすと：<br>
            傾き $a = \\dfrac{52.2 - 20.0}{5} = 6.44$<br>
            $y = 6.44x + 20$<br>
            $y=72$ になるのは、$72 = 6.44x + 20 \\rightarrow 52 = 6.44x \\rightarrow x \\approx 8.07$<br>
            <span class="ans">およそ 8分後 になると推測できます。</span><br>
            （抽出する点によって多少計算結果は変わりますが、約8分と見積もれます）
        </div>
    `
};

guideData["91"] = {
    title: "p.91 動く点と面積の変化",
    content: `
        <h2>動く点と面積の変化</h2>
        <div class="explanation-block">
            <strong>ひろげよう：</strong> 長方形 ABCD（底辺4, 高さ3）の周上を、Pが毎秒1cmでAからDまで動く。<br>
            $\\triangle\text{APD}$ の面積 $y$ を $x$ の式で表します。<br><br>
            <strong>問4</strong> （ア）点PがAB上を動くとき（$0 \\leqq x \\leqq 3$）<br>
            高さが1秒に1ずつ増えるので、$y = \\dfrac{1}{2} \\times 4 \\times x$<br>
            <span class="ans">式：$y = 2x$、変域：$0 \\leqq x \\leqq 3$</span><br><br>
            
            <strong>問5</strong> （イ）点PがBC上（$3 \\leqq x \\leqq 7$）、（ウ）点PがCD上（$7 \\leqq x \\leqq 10$）<br>
            （イ）底辺4、高さは常に3（ABの長さ）。$y = \\dfrac{1}{2} \\times 4 \\times 3$<br>
            <span class="ans">式：$y = 6$、変域：$3 \\leqq x \\leqq 7$</span><br>
            （ウ）底辺4、高さはPD $=(10 - x)$（残りの距離）。$y = \\dfrac{1}{2} \\times 4 \\times (10 - x)$<br>
            <span class="ans">式：$y = -2x + 20$、変域：$7 \\leqq x \\leqq 10$</span><br><br>

            <strong>問6</strong> $\\triangle\text{APD}$ の面積が 4 $cm^2$ になるのは？<br>
            ・AB上のとき：$4 = 2x \\rightarrow x = 2$<br>
            ・CD上のとき：$4 = -2x + 20 \\rightarrow 2x = 16 \\rightarrow x = 8$<br>
            <span class="ans">2秒後 と 8秒後</span>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a09101" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `
};

guideData["92"] = {
    title: "p.92 3章 章末問題「学びをたしかめよう」①",
    content: `
        <h2>1 一次関数であるものを選ぶ</h2>
        <div class="explanation-block">
            (ア) 残り $y=500-x$（一次関数）<br>
            (イ) 長方形 $xy=30 \\rightarrow y=\\dfrac{30}{x}$（反比例）<br>
            (ウ) 周の長さ $y=3x$（一次関数）<br>
            <span class="ans">答え：(ア), (ウ)</span>
        </div>
        <h2>2 増加量を求める</h2>
        <div class="explanation-block">
            一次関数 $y = 3x + 5$（傾き3）<br>
            (1) $x$の増加量が2 $\\rightarrow$ <span class="ans">$2 \\times 3 = 6$</span><br>
            (2) $x$の増加量が5 $\\rightarrow$ <span class="ans">$5 \\times 3 = 15$</span>
        </div>
        <h2>3 グラフをかく</h2>
        <div class="explanation-block">
            (1) $\\boldsymbol{y = x - 5}$ $\\leftarrow$ <span class="ans">切片 $-5$、傾き $1$ の直線</span><br>
            (2) $\\boldsymbol{y = -3x + 4}$ $\\leftarrow$ <span class="ans">切片 $4$、傾き $-3$ の直線</span><br>
            (3) $\\boldsymbol{y = \\dfrac{1}{2}x + 1}$ $\\leftarrow$ <span class="ans">切片 $1$、傾き $\\dfrac{1}{2}$（右に2、上に1）の直線</span>
        </div>
        <h2>4 変域を求める</h2>
        <div class="explanation-block">
            $y = -\\dfrac{2}{3}x + 3$ について、$-6 \\leqq x \\leqq 3$<br>
            $x = -6$ のとき $y = -\\dfrac{2}{3}(-6) + 3 = 4 + 3 = 7$<br>
            $x = 3$ のとき $y = -\\dfrac{2}{3}(3) + 3 = -2 + 3 = 1$<br>
            <span class="ans">答え：$1 \\leqq y \\leqq 7$</span>
        </div>
        <div class="graph-container">
            <div id="graph-92" class="jxgbox"></div>
            <div class="graph-caption">(1) $y=x-5$　(2) $y=-3x+4$　(3) $y=\\frac{1}{2}x+1$</div>
        </div>
    `,
    onRender: function() {
        var b = GraphHelper.createBoard('graph-92', {
            boundingbox: [-6, 6, 6, -6], width: 300, height: 300
        });
        if (!b) return;
        // (1) y = x - 5
        GraphHelper.drawLine(b, 1, -5, { color: '#e74c3c', label: '(1)', labelX: 4 });
        // (2) y = -3x + 4
        GraphHelper.drawLine(b, -3, 4, { color: '#3498db', label: '(2)', labelX: -1 });
        // (3) y = 1/2 x + 1
        GraphHelper.drawLine(b, 0.5, 1, { color: '#2ecc71', label: '(3)', labelX: 3 });
    }
};

guideData["93"] = {
    title: "p.93 3章 章末問題「学びをたしかめよう」②",
    content: `
        <h2>5 一次関数の式を求める</h2>
        <div class="explanation-block">
            (1) 傾き5、切片7<br>
            <span class="ans">$y = 5x + 7$</span><br><br>
            (2) 傾き $-1$ で、点 $(2, 3)$ を通る<br>
            $y = -x + b \\rightarrow 3 = -2 + b \\rightarrow b = 5$<br>
            <span class="ans">$y = -x + 5$</span><br><br>
            (3) 2点 $(-2, -4), (1, 5)$ を通る<br>
            傾き $a = \\dfrac{5 - (-4)}{1 - (-2)} = \\dfrac{9}{3} = 3$<br>
            $5 = 3 \\times 1 + b \\rightarrow b = 2$<br>
            <span class="ans">$y = 3x + 2$</span>
        </div>
        <h2>6 方程式のグラフ</h2>
        <div class="explanation-block">
            (1) $2x + y = 1 \\rightarrow $ <span class="ans">$y = -2x + 1$ の直線</span><br>
            (2) $4x - 3y = 9 \\rightarrow -3y = -4x + 9 \\rightarrow $ <span class="ans">$y = \\dfrac{4}{3}x - 3$ の直線</span><br>
            (3) $y = 6$ <span class="ans">→ 点 $(0, 6)$ を通る、横（$x$軸に平行）の直線</span><br>
            (4) $x = -5$ <span class="ans">→ 点 $(-5, 0)$ を通る、縦（$y$軸に平行）の直線</span>
        </div>
        <h2>7 2直線の交点の座標</h2>
        <div class="explanation-block">
            グラフより、2直線の式を読み取ります。<br>
            直線 $l$：切片4、$(4, 0)$ を通る $\\rightarrow y = -x + 4$<br>
            直線 $m$：切片 $-2$、$(1, 0)$ を通る $\\rightarrow y = 2x - 2$<br>
            連立して解く：$-x + 4 = 2x - 2 \\rightarrow 3x = 6 \\rightarrow x = 2$<br>
            $y = -2 + 4 = 2$<br>
            <span class="ans">交点 P の座標：$(2, 2)$</span>
        </div>
        <div class="graph-container">
            <div id="graph-93" class="jxgbox"></div>
            <div class="graph-caption">問6：(1) $2x+y=1$ (2) $4x-3y=9$ (3) $y=6$ (4) $x=-5$</div>
        </div>
        <div class="graph-container">
            <div id="graph-93b" class="jxgbox"></div>
            <div class="graph-caption">問7：$l: y=-x+4$　$m: y=2x-2$　交点 P$(2, 2)$</div>
        </div>
        <div class="qr-links"><h3>📖 QRコード リンク</h3><a href="https://k-qr.com/5m2a09301" target="_blank" rel="noopener" class="qr-link-btn">📖 考え方・解答</a></div>
    `,
    onRender: function() {
        // 問6のグラフ
        var b = GraphHelper.createBoard('graph-93', {
            boundingbox: [-7, 8, 7, -5], width: 300, height: 280
        });
        if (!b) return;
        // (1) 2x+y=1 → y=-2x+1
        GraphHelper.drawLine(b, -2, 1, { color: '#e74c3c', label: '(1)', labelX: -2 });
        // (2) 4x-3y=9 → y=4/3x-3
        GraphHelper.drawLine(b, 4/3, -3, { color: '#3498db', label: '(2)', labelX: 3 });
        // (3) y=6 → 水平線
        b.create('functiongraph', [function(x){return 6;}], { strokeColor: '#2ecc71', strokeWidth: 2.5, fixed: true, highlight: false });
        b.create('text', [4, 6.5, '(3)'], { fontSize: 12, color: '#2ecc71', fixed: true, highlight: false });
        // (4) x=-5 → 垂直線
        b.create('line', [[-5,0],[-5,1]], { straightFirst:true, straightLast:true, strokeColor:'#9b59b6', strokeWidth:2.5, fixed:true, highlight:false, point1:{visible:false}, point2:{visible:false} });
        b.create('text', [-5.5, -3, '(4)'], { fontSize: 12, color: '#9b59b6', fixed: true, highlight: false });
        // 問7のグラフ
        var b2 = GraphHelper.createBoard('graph-93b', {
            boundingbox: [-5, 6, 6, -5], width: 280, height: 280
        });
        if (!b2) return;
        // l: y = -x + 4
        GraphHelper.drawLine(b2, -1, 4, { color: '#3498db', label: 'ℓ', labelX: -1 });
        // m: y = 2x - 2
        GraphHelper.drawLine(b2, 2, -2, { color: '#e74c3c', label: 'm', labelX: 3 });
        // 交点 P(2, 2)
        GraphHelper.drawPoint(b2, 2, 2, { name: 'P(2, 2)', color: '#333', size: 4 });
    }
};

// 94ページ以降のプレースホルダー
for (let i = 94; i <= 234; i++) {
    guideData[i.toString()] = {
        title: `p.${i} の学習`,
        content: `<div class="empty-state">第4章以降のオリジナル解説は現在準備中です。</div>`
    };
}
