function isFalse() {
    console.log('false');
    return false; 
}

function strictEquals(a, b) {
    if (a != b) return isFalse();
    if ((typeof a == 'number') && (typeof b != 'number')) return isFalse();
    if ((typeof b == 'number') && (typeof a != 'number')) return isFalse();
    console.log('true');
    return true;
}