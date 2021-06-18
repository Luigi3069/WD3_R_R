function checkName1(formField) {
    var patt = new RegExp("[A-Za-z]{2,20}");

    if (patt.test(formField.value)) {
        formField.style.border = "2px solid green";
        document.getElementById("ferror").innerHTML = "";
    } else {
        formField.style.border = "solid red";
        document.getElementById("ferror").innerHTML = "Not A Useable First Name";
    }
}

function checkName2(formField) {
    var patt = new RegExp("[A-Za-z]{2,20}");

    if (patt.test(formField.value)) {
        formField.style.border = "2px solid green";
        document.getElementById("lerror").innerHTML = "";
    } else {
        formField.style.border = "solid red";
        document.getElementById("lerror").innerHTML = "Not A Useable Last Name";
    }
}

function checkEmail(formField) {
    var patt = new RegExp("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)");

    if (patt.test(formField.value)) {
        formField.style.border = "2px solid green";
        document.getElementById("emerror").innerHTML = "";
    } else {
        formField.style.border = "solid red";
        document.getElementById("emerror").innerHTML = "Not A Sutiable Email";
    }
}

function checkPhone(formField) {
    var patt = new RegExp('[0-9]{8,10}');
    if (patt.test(formField.value)) {
        formField.style.border = "2px solid green";
        document.getElementById("perror").innerHTML = "";
    } else {
        formField.style.border = "solid red";
        document.getElementById("perror").innerHTML = "Not A Sutiable Phone Number";
    }
}

function arepasswordsEqual(formField) {
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var patt = new RegExp("[A-Za-z]{2,20}");
    if (patt.test(formField.value)) {
        if (pass1.value != '' && pass2.value != '') {
            if (pass1.value != pass2.value) {
                formField.style.border = "solid red";
                document.getElementById("paerror").innerHTML = "Passwords Do Not Match";
            }else if(pass1.value != '' && pass2.value != ''){
                formField.style.border = "2px solid green";
                document.getElementById("paerror").innerHTML = "";
            }else {
                formField.style.border = "2px solid green";
                document.getElementById("paerror").innerHTML = "";
            }
        }
    }
}
(function() {
    $('form > input').keyup(function() {

        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#register').attr('disabled', 'disabled'); 
        } else {
            $('#register').removeAttr('disabled');
        }
    });
})()