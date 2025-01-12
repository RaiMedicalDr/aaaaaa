document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const codeInput = document.getElementById('codeInput');
    const resultDiv = document.getElementById('result');

    submitBtn.addEventListener('click', () => {
        const userCode = codeInput.value.trim();
        
        // 正解のコードを定義
        const correctCode = `
<h1>HTMLの基本</h1>
<h2>HTML入門</h2>
`.trim();

        // 判定処理
        if (userCode === correctCode) {
            resultDiv.textContent = '正解です！クリアしました！';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = '不正解です。もう一度試してください。';
            resultDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const codeInput = document.getElementById('codeInput');
    const resultDiv = document.getElementById('result');

    submitBtn.addEventListener('click', () => {
        const userCode = codeInput.value.trim();
        
        // 正解のコードを定義（例: kouza2.html）
        const correctCode2 = `
<p>HTMLはウェブページを作成するための基本的なマークアップ言語です。</p>
<p>CSSとJavaScriptと組み合わせることで、より豊かなウェブ体験を提供できます。</p>
`.trim();

        // 判定処理
        if (userCode === correctCode2) {
            resultDiv.textContent = '正解です！クリアしました！';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = '不正解です。もう一度試してください。';
            resultDiv.style.color = 'red';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const codeInput = document.getElementById('codeInput');
    const resultDiv = document.getElementById('result');

    submitBtn.addEventListener('click', () => {
        const userCode = codeInput.value.trim();

        // 正解のコードを定義
        const correctAnswers = {
            // kouza3.html (リスト)
            kouza3: `
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
`.trim(),
            // kouza4.html (リンク)
            kouza4: `
<a href="https://www.google.com">Google</a>
`.trim(),
            // kouza5.html (画像)
            kouza5: `
<img src="image.jpg">
`.trim(),
        };

        // ページタイトルでどの課題かを判定
        const pageTitle = document.title;

        let correctCode = '';
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
});