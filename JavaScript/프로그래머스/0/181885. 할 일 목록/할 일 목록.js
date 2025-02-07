function solution(todo_list, finished) {
    const todo = todo_list.map((v, idx) => {
        if(!finished[idx]) {
            return v;
        }
    }).filter((v) => v != undefined);
    return todo;
}