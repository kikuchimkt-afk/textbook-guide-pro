/**
 * 教科書スタイルのグラフ描画ヘルパー
 * JSXGraph を使用して教科書風のグラフ用紙上にグラフを描画します。
 */

const GraphHelper = {
    // 既存のボードを追跡（ページ遷移時のクリーンアップ用）
    _boards: {},

    /**
     * 教科書風のグラフ用紙ボードを作成します。
     * @param {string} elementId - div要素のID
     * @param {object} opts - オプション
     * @param {Array} opts.boundingbox - [xmin, ymax, xmax, ymin] (default: [-6, 6, 6, -6])
     * @param {number} opts.width - 幅px (default: 300)
     * @param {number} opts.height - 高さpx (default: 300)
     * @param {boolean} opts.showGrid - 方眼を表示 (default: true)
     * @returns {JXG.Board} JSXGraphボード
     */
    createBoard: function(elementId, opts = {}) {
        // 既存ボードがあれば破棄
        if (this._boards[elementId]) {
            try { JXG.JSXGraph.freeBoard(this._boards[elementId]); } catch(e) {}
        }

        const el = document.getElementById(elementId);
        if (!el) { console.warn('Graph element not found:', elementId); return null; }

        const bbox = opts.boundingbox || [-6, 6, 6, -6];
        const w = opts.width || 300;
        const h = opts.height || 300;
        el.style.width = w + 'px';
        el.style.height = h + 'px';

        const board = JXG.JSXGraph.initBoard(elementId, {
            boundingbox: bbox,
            axis: false,        // 自前で描画
            grid: false,        // 自前で描画
            showCopyright: false,
            showNavigation: false,
            pan: { enabled: false },
            zoom: { enabled: false },
            keepAspectRatio: true,
        });

        const [xmin, ymax, xmax, ymin] = bbox;

        // ===== 方眼（グラフ用紙のグリッド） =====
        if (opts.showGrid !== false) {
            // 細いグリッド（水色、グラフ用紙風）
            for (let x = Math.ceil(xmin); x <= Math.floor(xmax); x++) {
                board.create('line', [[x, 0], [x, 1]], {
                    straightFirst: true, straightLast: true,
                    strokeColor: '#b8dced', strokeWidth: 0.5,
                    fixed: true, highlight: false,
                    point1: { visible: false }, point2: { visible: false }
                });
            }
            for (let y = Math.ceil(ymin); y <= Math.floor(ymax); y++) {
                board.create('line', [[0, y], [1, y]], {
                    straightFirst: true, straightLast: true,
                    strokeColor: '#b8dced', strokeWidth: 0.5,
                    fixed: true, highlight: false,
                    point1: { visible: false }, point2: { visible: false }
                });
            }
        }

        // ===== 軸（太い黒線） =====
        // x軸
        board.create('arrow', [[xmin, 0], [xmax, 0]], {
            strokeColor: '#333', strokeWidth: 1.5,
            fixed: true, highlight: false,
            point1: { visible: false }, point2: { visible: false }
        });
        // y軸
        board.create('arrow', [[0, ymin], [0, ymax]], {
            strokeColor: '#333', strokeWidth: 1.5,
            fixed: true, highlight: false,
            point1: { visible: false }, point2: { visible: false }
        });

        // ===== 軸ラベル =====
        board.create('text', [xmax - 0.3, -0.5, 'x'], {
            fontSize: 14, fixed: true, highlight: false, anchorX: 'right'
        });
        board.create('text', [0.4, ymax - 0.3, 'y'], {
            fontSize: 14, fixed: true, highlight: false
        });

        // ===== 原点 O =====
        board.create('text', [-0.4, -0.5, 'O'], {
            fontSize: 13, fixed: true, highlight: false
        });

        // ===== 目盛り数値 =====
        if (opts.showTicks !== false) {
            for (let x = Math.ceil(xmin); x <= Math.floor(xmax); x++) {
                if (x === 0) continue;
                // 目盛り線
                board.create('segment', [[x, -0.15], [x, 0.15]], {
                    strokeColor: '#333', strokeWidth: 1,
                    fixed: true, highlight: false,
                    point1: { visible: false }, point2: { visible: false }
                });
                // 数値（5刻みまたは全表示、ボックスサイズに応じて）
                const range = xmax - xmin;
                if (range <= 14 || x % 5 === 0) {
                    board.create('text', [x, -0.6, x.toString()], {
                        fontSize: 11, fixed: true, highlight: false,
                        anchorX: 'middle', cssClass: 'graph-tick-label'
                    });
                }
            }
            for (let y = Math.ceil(ymin); y <= Math.floor(ymax); y++) {
                if (y === 0) continue;
                // 目盛り線
                board.create('segment', [[-0.15, y], [0.15, y]], {
                    strokeColor: '#333', strokeWidth: 1,
                    fixed: true, highlight: false,
                    point1: { visible: false }, point2: { visible: false }
                });
                // 数値
                const range = ymax - ymin;
                if (range <= 14 || y % 5 === 0) {
                    board.create('text', [-0.5, y, y.toString()], {
                        fontSize: 11, fixed: true, highlight: false,
                        anchorX: 'right', cssClass: 'graph-tick-label'
                    });
                }
            }
        }

        this._boards[elementId] = board;
        return board;
    },

    /**
     * 一次関数のグラフ（直線）を描画
     * @param {JXG.Board} board
     * @param {number} a - 傾き
     * @param {number} b - 切片
     * @param {object} opts - { color, width, dash, label, domain }
     */
    drawLine: function(board, a, b, opts = {}) {
        const color = opts.color || '#e74c3c';
        const width = opts.width || 2.5;
        const dash = opts.dash || 0;

        if (opts.domain) {
            // 変域あり → 線分
            const [x1, x2] = opts.domain;
            const y1 = a * x1 + b;
            const y2 = a * x2 + b;
            const seg = board.create('segment', [[x1, y1], [x2, y2]], {
                strokeColor: color, strokeWidth: width, dash: dash,
                fixed: true, highlight: false,
                point1: { visible: false }, point2: { visible: false }
            });
            // 端点を丸で表示
            board.create('point', [x1, y1], {
                size: 3, fillColor: color, strokeColor: color,
                fixed: true, name: '', highlight: false
            });
            board.create('point', [x2, y2], {
                size: 3, fillColor: color, strokeColor: color,
                fixed: true, name: '', highlight: false
            });
            return seg;
        } else {
            // 変域なし → 直線
            const line = board.create('functiongraph', [x => a * x + b], {
                strokeColor: color, strokeWidth: width, dash: dash,
                fixed: true, highlight: false
            });
            // ラベル（お好みで）
            if (opts.label) {
                const lx = opts.labelX || 2;
                const ly = a * lx + b;
                board.create('text', [lx + 0.3, ly + 0.5, opts.label], {
                    fontSize: 13, fixed: true, highlight: false,
                    color: color, fontStyle: 'italic'
                });
            }
            return line;
        }
    },

    /**
     * 点を描画
     * @param {JXG.Board} board
     * @param {number} x
     * @param {number} y
     * @param {object} opts - { name, color, size }
     */
    drawPoint: function(board, x, y, opts = {}) {
        const name = opts.name || '';
        const color = opts.color || '#e74c3c';
        const size = opts.size || 3;
        return board.create('point', [x, y], {
            size: size,
            fillColor: color,
            strokeColor: color,
            fixed: true,
            name: name,
            highlight: false,
            label: { fontSize: 12, offset: [8, 8], color: '#333' }
        });
    },

    /**
     * 矢印付き補助線（傾きの説明用）
     */
    drawSlopeGuide: function(board, x0, y0, dx, dy, opts = {}) {
        const color = opts.color || '#3498db';
        // 水平線
        board.create('segment', [[x0, y0], [x0 + dx, y0]], {
            strokeColor: color, strokeWidth: 1.5, dash: 2,
            fixed: true, highlight: false,
            point1: { visible: false }, point2: { visible: false }
        });
        // 垂直線
        board.create('segment', [[x0 + dx, y0], [x0 + dx, y0 + dy]], {
            strokeColor: color, strokeWidth: 1.5, dash: 2,
            fixed: true, highlight: false,
            point1: { visible: false }, point2: { visible: false }
        });
        // ラベル
        if (opts.hLabel) {
            board.create('text', [x0 + dx / 2, y0 - 0.5, opts.hLabel], {
                fontSize: 11, fixed: true, highlight: false,
                anchorX: 'middle', color: color
            });
        }
        if (opts.vLabel) {
            board.create('text', [x0 + dx + 0.4, y0 + dy / 2, opts.vLabel], {
                fontSize: 11, fixed: true, highlight: false, color: color
            });
        }
    },

    /**
     * すべてのボードを破棄（ページ遷移時）
     */
    cleanup: function() {
        for (const id in this._boards) {
            try { JXG.JSXGraph.freeBoard(this._boards[id]); } catch(e) {}
        }
        this._boards = {};
    }
};
