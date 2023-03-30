var date = new Date();

var morning = 'Morning group';
var afternoon = 'Afternoon group';
var evening = 'Evening group';
var noexist = 'The group does not exist';
var zero = null;

function Search() {
    var input = document.getElementById('groupnumber').value;
    console.log(input);
    var gr = Number(input.slice(-3,-2));
    if(input === ''){
        alert('Please enter the group number');
        return;
    }
    
    switch (gr) {
        case 1:
            document.getElementById('group').innerHTML = morning;
            document.body.style.background='linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)';
            break;
        case 2:
            document.getElementById('group').innerHTML = afternoon;
            document.body.style.background='linear-gradient(to right, #ff4e50, #f9d423)';
            break;
        case 3:
            document.getElementById('group').innerHTML = evening;
            document.body.style.background='linear-gradient(to right, #360033, #0b8793)';
            break;
        default:
            document.getElementById('group').innerHTML = noexist;
            document.body.style.background ='linear-gradient(to right, #114357, #f29492)';
            break;
    }
    
}