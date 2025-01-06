function countDistinctSubsequences(string) {
    const MOD = 1000000007; // To prevent integer overflow
    const n = string.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // base case with an empty string
    const lastOccurrence = {};

    for (let i = 1; i <= n; i++) {
        dp[i] = (2 * dp[i - 1]) % MOD;

        const char = string[i - 1];
        if (lastOccurrence[char] !== undefined) {
            dp[i] = (dp[i] - dp[lastOccurrence[char] - 1] + MOD) % MOD;
        }

        lastOccurrence[char] = i;
    }

    return dp[n];
}


const string = "abcbac";
const result = countDistinctSubsequences(string);
console.log("Number of Distinct Subsequences:", result);
