document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.choice');
    const resultDiv = document.getElementById('result');

    // 正解を設定 (コード B が正しい)
    const correctAnswer = 'B';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userAnswer = button.dataset.answer;
            if (userAnswer === correctAnswer) {
                resultDiv.textContent = '正解です！コード B が正しい構造です。';
                resultDiv.style.color = 'green';
            } else {
                resultDiv.textContent = '不正解です。コード B を確認してください。';
                resultDiv.style.color = 'red';
            }
        });
    });
});