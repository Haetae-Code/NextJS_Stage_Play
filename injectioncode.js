// function checkSearchedWord(obj) {
//     if (obj.length>0){
//         //특수문자 제거
//         var expText = /[%=><]/;
//         if (expText.test(obj) == true){
//             alert("특수문자를 입력 할 수 없습니다.");
//             obj.value = obj.value.split(expText).join("");
//             return false;
//         }

//         //특정문자열(sql 예약어의 앞뒤공백포함) 제거
//         var sqlArray = new Array(
//             //sql 예약어
//             "OR", "SELECT", "INSERT", "DELETE", "UPDATE", "CREATE", "DROP", "EXEC", "UNION", "FETCH", "DECLARE", "TRUNCATE"
//         );

//         var regex; //문자열에 패턴 문자 찾는 변수
//         for ( var i=0; i< sqlArray.length; i++){
//             regex = new RegEXP(sqlArray[i], "gi");

//             if (regex.test(obj)){
//                 alert("\"" + sqlArray[i] + "\"와(과) 같은 특정문자로 검색할 수 없습니다.");
//                 obj = obj.replace(regex, "");
//                 return false;
//             }
//         }
//     }
//     return true;
// }



function opt_checkSearchedWord(obj) {
    if (obj.length > 0) {
        // Combine special characters and reserved keywords into a single regular expression
        var expText = /[=%><]|(?:OR|SELECT|INSERT|DELETE|UPDATE|CREATE|DROP|EXEC|UNION|FETCH|DECLARE|TRUNCATE)/gi;
        if (expText.test(obj)) {
            alert("특수문자나 예약어를 입력 할 수 없습니다.");
            obj = obj.replace(expText, "");
            return false;
        }
    }
    return true;
}

test = "OR 123"
opt_checkSearchedWord(test);