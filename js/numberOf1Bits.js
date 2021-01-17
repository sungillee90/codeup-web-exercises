const sortByBits = arr => arr.sort(
    (a, b) => (numBits(a) - numBits(b)) || (a - b)
);

let memo = {0 : 0};

function numBits(num) {
    if (memo[num] !== undefined) return memo[num];

    return (num & 1) + numBits(num >> 1);
}