function SendEmail(){
  Email.send({
Host : "smtp.gmail.com",
Username : "fatehwebdeveloper@gmail.com",
Password : "Qwerty1987@",
To : 'fatehwebdeveloper@gmail.com',
From : document.getElementById("email").value,
Subject : "New Contact Form Enquiry",
Body : "Name "
  }).then(
message => alert(message)
)
}
