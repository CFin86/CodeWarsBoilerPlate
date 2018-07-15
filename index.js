exports.revrot = function(str, sz) {
    let chunkArr = [];
    let startInd = 0;
    let sumOfCubes = 0;
    let stopCond = str.length - sz;

    if (sz <= 0 || sz == null || sz > str.length) {
        return "";
    } else {
        while (startInd <= stopCond) {
            let chunk = str.substr(startInd, sz);
            startInd += sz;
            let transformChunk = chunk.split('');
            const cubanArray = transformChunk.map(int => Math.pow(int,3));
            const cubanSumFunct = (sum, value) => sum + value;
            sumOfCubes = cubanArray.reduce(cubanSumFunct);

            if (sumOfCubes % 2 === 0) {
                let revChunk = chunk.split('').reverse().join('');
                chunkArr.push(revChunk);
                sumOfCubes = 0;
            } else {
                let newRotate = transformChunk.slice(1, transformChunk.length)
                newRotate = newRotate + transformChunk[0];
                newRotate = newRotate.replace(/,/g,"");
                chunkArr.push(newRotate);
                sumOfCubes = 0;
            }
        }
        return chunkArr.join("");
    }
}
