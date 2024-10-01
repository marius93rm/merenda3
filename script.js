document.getElementById('esegui-test').addEventListener('click', function () {
    const risultatoDiv = document.getElementById('risultato-test');
    risultatoDiv.innerHTML = '';  // Svuota i risultati precedenti

    const testCases = [
        { input: { arr: [3, 1, 5, 12, 2, 11], K: 3 }, expected: [11, 12, 5] },
        { input: { arr: [10, 20, 30, 40, 50], K: 2 }, expected: [40, 50] },
        { input: { arr: [-1, -2, -3, -4, -5], K: 2 }, expected: [-2, -1] },
        { input: { arr: [], K: 3 }, expected: [] },
        { input: { arr: [5, 5, 5, 5, 5], K: 3 }, expected: [5, 5, 5] },
        { input: { arr: [1], K: 2 }, expected: [1] },
        { input: { arr: [1, 2, 3, 4], K: 0 }, expected: [] }
    ];

    let passedTests = 0;

    testCases.forEach((testCase, index) => {
        const { arr, K } = testCase.input;
        const expected = testCase.expected;
        const result = trovaKElementiPiuGrandi(arr, K);

        const testPassed = arraysEqualUnordered(result, expected);

        const resultText = document.createElement('p');
        resultText.textContent = `Test ${index + 1}: ${testPassed ? 'Passato' : 'Fallito'} - Input: [${arr}], K: ${K}, Output: [${result}], Atteso: [${expected}]`;
        resultText.style.color = testPassed ? 'green' : 'red';
        risultatoDiv.appendChild(resultText);

        if (testPassed) passedTests++;
    });

    const summaryText = document.createElement('h2');
    summaryText.textContent = `Test passati: ${passedTests} su ${testCases.length}`;
    risultatoDiv.appendChild(summaryText);
});

// Funzione di aiuto per confrontare due array senza considerare l'ordine
function arraysEqualUnordered(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
