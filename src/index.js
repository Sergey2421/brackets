module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let length = 0;
    str.split('');
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < bracketsConfig.length; j++){
            if (str[i] === bracketsConfig[j][0] && length === 0) {
                arr.push(j);
                break;
            } else if (str[i] === bracketsConfig[j][0] && length > 0) {
                if (bracketsConfig[arr[length - 1]][0] !== bracketsConfig[j][1]) {
                    arr.push(j);
                    break;
                }
            }
        }
        if (length !== arr.length) length++
        else for (let k = 0; k < bracketsConfig.length; k++){
            if (str[i] === bracketsConfig[k][1]) {
                if (arr.pop() !== k) return false
                else length--;
                break;
            }
        }
    }
    if (arr.length > 0) return false;
    return true;
}
