function getNumbers() {
    const input = document.getElementById("inputNumbers").value;
    const numbers = input.split(",").map(num => Number(num.trim()));
    document.getElementById("originalList").textContent = numbers.join(", ");
    return numbers;
}

function bubbleSort(arr) {
    let a = [...arr];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    return a;
}

function selectionSort(arr) {
    let a = [...arr];
    for (let i = 0; i < a.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        let temp = a[i];
        a[i] = a[minIndex];
        a[minIndex] = temp;
    }
    return a;
}

function insertionSort(arr) {
    let a = [...arr];
    for (let i = 1; i < a.length; i++) {
        let key = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
    return a;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) result.push(left.shift());
        else result.push(right.shift());
    }
    return [...result, ...left, ...right];
}


function executeBubbleSort() {
    const sorted = bubbleSort(getNumbers());
    document.getElementById("sortedList").textContent = sorted.join(", ");
}

function executeSelectionSort() {
    const sorted = selectionSort(getNumbers());
    document.getElementById("sortedList").textContent = sorted.join(", ");
}

function executeInsertionSort() {
    const sorted = insertionSort(getNumbers());
    document.getElementById("sortedList").textContent = sorted.join(", ");
}

function executeMergeSort() {
    const sorted = mergeSort(getNumbers());
    document.getElementById("sortedList").textContent = sorted.join(", ");
}
