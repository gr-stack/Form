function fullName() {
    const name = document.getElementById("fullNameInput").value;
    alert("Your name is: " + name);

    const nameParts = name.split(" ");
    if (nameParts.length < 3) {
        alert("Please enter your full name (First, Middle, Last).");
        return;
    }

    const firstname = nameParts[0];
    const middlename = nameParts[1];
    const lastname = nameParts[2];

    alert("First name is: " + firstname);
    alert("Middle name is: " + middlename);
    alert("Last name is: " + lastname);
}

function aadhar() {
    let num4 = document.getElementById("aadharInput").value;
    if (num4.length !== 12) {
        alert("Invalid number");
    } else {
        alert("Aadhar number is: " + num4);
    }
}

function pan() {
    let num3 = document.getElementById("panInput").value;
    if (num3.length !== 10) {
        alert("Invalid number");
    } else {
        document.getElementById("panInput").value = num3.toUpperCase();
        alert("PAN card number is: " + num3.toUpperCase());
        return true;
    }
}

function mobile() {
    const mobile = document.getElementById("mobileInput").value;
    alert("Mobile No is: " + mobile);
}

function dateofbirth() {
    const dateofbirth = document.getElementById("dobInput").value;
    alert("Date of birth is: " + dateofbirth);
}

function calculateMarks() {
    const marks = [
        parseInt(document.getElementById('subject1Input').value),
        parseInt(document.getElementById('subject2Input').value),
        parseInt(document.getElementById('subject3Input').value),
        parseInt(document.getElementById('subject4Input').value),
        parseInt(document.getElementById('subject5Input').value),
        parseInt(document.getElementById('subject6Input').value),
    ];
    marks.sort((a, b) => b - a);

    const bestFiveTotal = marks.slice(0, 5).reduce((sum, mark) => sum + mark, 0);

    const percentage = bestFiveTotal / 5;

    alert("Percentage is: " + percentage + "%");
    console.log("Percentage is: " + percentage + "%");
}

function submitForm() {
    fullName();
    aadhar();
    pan();
    mobile();
    dateofbirth();
    calculateMarks();
}
