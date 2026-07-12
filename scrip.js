function changeColor() {
    const colors = [
        "#f4f4f4",
        "#FFDAB9",
        "#E6E6FA",
        "#D8BFD8",
        "#98FB98",
        "#FFFACD",
        "#ADD8E6"
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
.then(response => response.json())
.then(data => {
    let output = "";

    data.forEach(post => {
        output += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
    });

    document.getElementById("posts").innerHTML = output;
});
document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("message").innerHTML =
        "Please fill all fields.";
    } else {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML =
        "Form submitted successfully!";
    }
    let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
    message.innerHTML="Enter a valid email.";
}
document.getElementById("myForm").reset();
.catch(()=>{
document.getElementById("posts").innerHTML="Unable to load posts.";
});
document.body.classList.toggle("dark"); 
});