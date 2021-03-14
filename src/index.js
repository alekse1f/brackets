module.exports = function check(af, qt) {
    const arr = af.split("");
    let st = [];
    console.log(arr, st);
    for (let i = 0; i < arr.length; i++) {
        const symb = qt.indexOf(arr[i]); // 0
        console.log(i, symb);
        if (symb % 2 === 0) {
            if (arr[i] == qt[symb + 1]) {
                // | == |
                st[st.length - 1] == symb + 1 ? st.pop() : st.push(symb + 1);
            } else {
                st.push(symb);
            }
        } else {
            if (st.length == 0 || st[st.length - 1] != symb - 1) {
                return false;
            } else {
                st.pop();
            }
        }
    }
    return st.length == 0;
}
