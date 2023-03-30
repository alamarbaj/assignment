
// Generate Country Matrix
const generateCountryMatrix = function (numRows, numCols, countries) {
    const matrix = [];
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numCols; j++) {
            const randomIndex = Math.floor(Math.random() * countries.length);
            const country = countries[randomIndex];
            row.push(country);
        }
        matrix.push(row);
    }
    return matrix;
}


const calculateCountryRank = (matrix, country) => {
    let maxRank = 0;
    for (let i = 0; i < matrix.length; i++) {
        let rank = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === country) {
                rank++;
                if (rank >= 2) {
                    maxRank = Math.max(rank, maxRank);
                }
            }
        }
    }
    return maxRank;
}
module.exports = {
    generateCountryMatrix,
    calculateCountryRank
}