function solution(my_string, overwrite_string, s) {
    const temp = [...my_string]
    temp.splice(s, overwrite_string.length, overwrite_string)
    return temp.join('')
}