function age() {
    var myYear = 1997;
    var date = new Date();
    day = date.getDate();
    var realYear = date.getFullYear();
    age = realYear - myYear;
    document.getElementById('age').innerHTML = age;
}