function LetterChange(text){
    var s= text.split('');
    for (var i = 0; i< s.length; i++){

        switch(s[i]){
            case '':
                break;
            case 'z':
                s[i] = 'a';
                break;
            case 'Z':
                s[i] ='A';
                break;
                default:
                    s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }

        switch(s[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u': 
            s[i] = s[i].toUpperCase();
        }
    }
    return s.join('');
}

console.log(LetterChange("PYTHON"));
console.log(LetterChange("jamie"));
console.log(LetterChange("php"));
console.log(LetterChange("ACE"));