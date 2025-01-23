function solution(arr1, arr2) {
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;
    
    if(arr1Len === arr2Len) {
        const sumArr1 = arr1.reduce((acc, cur) => (acc + cur));
        const sumArr2 = arr2.reduce((acc, cur) => (acc + cur));
        return sumArr2 >= sumArr1 
            ? sumArr2 === sumArr1 
            ? 0 : -1 
            : 1 
    } else {
        return arr2Len > arr1Len ? -1 : 1;
    }
}