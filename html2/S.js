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
<style>
.h1 {
color: blue;
}
.h2 {
color: green;
}
</style>
`),
            // kouza2.html
            kouza2: normalizeCode(`
<style>
.h1 {
font-size: 10px;
}
.h2 {
font-size: 15px;
}
</style>               
`),
            // kouza3.html
            kouza3: normalizeCode(`
<style>
.h1 {
background-color: blue;
width: 500;
height: 500;
}
</style>
`),


        };     

        // ページタイトルで正解を判定
        const pageTitle = document.title;

        let correctCode = '';
        if (pageTitle.includes('講座 1')) correctCode = correctAnswers.kouza1;
        if (pageTitle.includes('講座 2')) correctCode = correctAnswers.kouza2;
        if (pageTitle.includes('講座 3')) correctCode = correctAnswers.kouza3;

        

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