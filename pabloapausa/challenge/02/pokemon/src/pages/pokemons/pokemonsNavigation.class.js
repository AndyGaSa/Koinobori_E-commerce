function after() {
    if (page === last) return;
    page += 1;
    const eva = new Eva();
}

function before() {
    if (page === 0) return;
    page -= 1;
    const eva = new Eva();
}

function pagination(items) {
    limit = (items === 5) ? items : limit; 
    limit = (items === 10) ? items : limit; 
    limit = (items === 20) ? items : limit; 
    limit = (items === 50) ? items : limit; 
    page = 0; 
    const eva = new Eva();
}
