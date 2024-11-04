function validateForm(){
    var Username = document.getElementById('Username').ariaValueMax;
    var UsernamePattern = /^[a-zA-Z0-9_]{5,20}$/;


    if (UsernamePattern.test(Username)){
        alert('bad username');
    }elseif{EmailPattern.test(Email)){
        alert('bad Email');
    }elseif{PasswordPattern.test(Password)){
        alert('bad Password');
    }elseif{AgePattern.test(Age)){
        alert('bad Age');
    }
    }
}