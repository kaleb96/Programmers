function solution(arr, queries) {
    queries.forEach(([a,b]) => {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    })
    return arr
}

/*
[3, 1, 2, 0, 4]
[3, 2, 1 ,0, 4]
[3, 4, 1, 0 ,2]
*/