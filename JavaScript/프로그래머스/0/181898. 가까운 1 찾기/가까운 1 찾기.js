function solution(arr, idx) {
    let result = -1;
    for(let i = 0; i < arr.length; i++) {
        if(i + 1 > idx && arr[i]){
            result = i;
            break;
        }
    }
    return result;
}