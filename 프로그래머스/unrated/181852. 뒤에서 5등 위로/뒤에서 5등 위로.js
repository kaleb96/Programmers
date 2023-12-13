const solution = (arr) => {

    let result = arr.sort((a, b) => { return a- b});
    // return result;
    // result = [...result].slice(5, arr.length);
    result = result.splice(5, arr.length);
    return result;
}