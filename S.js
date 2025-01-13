document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const codeInput = document.getElementById('codeInput');
    const resultDiv = document.getElementById('result');

    submitBtn.addEventListener('click', () => {
        const userCode = normalizeCode(codeInput.value);

        // 正解のコードを定義
        const correctAnswers = {
            // kouza1.html
            kouza1: normalizeCode(`
<h1>HTMLの基本</h1>
<h2>HTML入門</h2>
`),
            // kouza2.html
            kouza2: normalizeCode(`
<p>HTMLはウェブページを作成するための基本的なマークアップ言語です。</p>
<p>CSSとJavaScriptと組み合わせることで、より豊かなウェブ体験を提供できます。</p>
`),
            // kouza3.html (リスト)
            kouza3: normalizeCode(`
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>
`),
            // kouza4.html (リンク)
            kouza4: normalizeCode(`
<a href="https://www.google.com">Google</a>
`),
            // kouza5.html (画像)
            kouza5: normalizeCode(`
<img src="image.jpg">
`),
        };

        // ページタイトルで正解を判定
        const pageTitle = document.title;

        let correctCode = '';
        if (pageTitle.includes('講座 1')) correctCode = correctAnswers.kouza1;
        if (pageTitle.includes('講座 2')) correctCode = correctAnswers.kouza2;
        if (pageTitle.includes('講座 3')) correctCode = correctAnswers.kouza3;
        if (pageTitle.includes('講座 4')) correctCode = correctAnswers.kouza4;
        if (pageTitle.includes('講座 5')) correctCode = correctAnswers.kouza5;

        // 判定処理
        if (userCode === correctCode) {
            resultDiv.textContent = '正解です！クリアしました！';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = '不正解です。もう一度試してください。';
            resultDiv.style.color = 'red';
        }
    });

    // 入力の正規化処理を定義
    function normalizeCode(code) {
        return code
            .replace(/\s+/g, ' ') // すべての余分な空白を1つのスペースに
            .replace(/>\s+</g, '><') // タグ間のスペースや改行を削除
            .trim(); // 前後の余分な空白を削除
    }
});
