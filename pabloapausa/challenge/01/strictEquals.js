function isTrue() {
    console.log('true');
    return true;
}

function isFalse() {
    console.log('false');
    return false; 
}

function strictEquals(a, b) {
    if (a = b || Object.is(a, b)) return isTrue(); 
    return isTrue();
}

strictEquals(1, '1');