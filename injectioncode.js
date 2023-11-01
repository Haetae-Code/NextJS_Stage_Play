function opt_checkSearchedWord(obj) {
    if (obj.length > 0) {
        // Combine special characters and reserved keywords into a single regular expression
        var expText =
            /[=%><]|(?:OR|SELECT|INSERT|DELETE|UPDATE|CREATE|DROP|EXEC|UNION|FETCH|DECLARE|TRUNCATE)/gi;
        if (expText.test(obj)) {
            console.log("특수문자나 예약어를 입력 할 수 없습니다.");
            obj = obj.replace(expText, "");
            return false;
        }
    }
    console.log("test pass");
    return true;
}

module.exports = opt_checkSearchedWord;