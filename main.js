document.querySelector('.Open').addEventListener('click',()=>{
    document.querySelector('.nav-link').style.display='flex';
    document.querySelector('.Open').style.display='none';
    document.querySelector('.Close').style.display='inline-block';
})
document.querySelector('.Close').addEventListener('click',()=>{
    document.querySelector('.nav-link').style.display='none';
    document.querySelector('.Open').style.display='inline-block';
    document.querySelector('.Close').style.display='none';
})

document.querySelector('.inline').addEventListener('click',()=>{
    document.querySelector('.inline input').classList.toggle('red');
})
// validation


  document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('.form-section form');
    const errorAlert = document.querySelector('.message-alert-error');

    signUpForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form input values
      const firstName = document.querySelector('input[placeholder="First Name"]').value;
      const lastName = document.querySelector('input[placeholder="Last Name"]').value;
      const userName = document.querySelector('input[placeholder="User Name"]').value;
      const email = document.querySelector('input[placeholder="Email"]').value;
      const password = document.querySelector('input[placeholder="Create Password"]').value;
      const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;
      const profileImg = document.querySelector('#uplod-img').files[0];

      // Perform basic validation
      if (!firstName || !lastName || !userName || !email || !password || !confirmPassword) {
        errorAlert.style.display = 'block';
        errorAlert.innerHTML = 'Please fill in all fields.';
        return;
      }

      if (password !== confirmPassword) {
        errorAlert.style.display = 'block';
        errorAlert.innerHTML = 'Passwords do not match.';
        return;
      }

      // Save user data to local storage
      const userData = {
        firstName,
        lastName,
        userName,
        email,
        password,
        profileImg: profileImg ? profileImg.name : null,
      };

      localStorage.setItem('user', JSON.stringify(userData));

      // Clear error message
      errorAlert.style.display = 'none';

      // You can redirect or perform any other action after successful signup
      alert('Sign up successful!');
    });
  });



  
  document.addEventListener('DOMContentLoaded', function () {
    const addPostForm = document.querySelector('.form-section form');
    const errorAlert = document.querySelector('.message-alert-error');
  
    addPostForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form input values
      const title = document.querySelector('input[placeholder="Title"]').value;
      const category = document.querySelector('select').value;
      const isFeatured = document.querySelector('#is-Featured').checked;
      const thumb = document.querySelector('#thumb').files[0];
      const body = document.querySelector('textarea').value;
  
      // Perform basic validation
      if (!title || !category || !body) {
        errorAlert.style.display = 'block';
        errorAlert.innerHTML = 'Please fill in all required fields.';
        return;
      }
  
      // Save post data to local storage
      const postData = {
        title,
        category,
        isFeatured,
        thumb: thumb ? thumb.name : null,
        body,
      };
  
      // Assuming you have an array to store posts in local storage
      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(postData);
      localStorage.setItem('posts', JSON.stringify(posts));
  
      // Clear error message
      errorAlert.style.display = 'none';
  
      // You can redirect or perform any other action after successful post creation
      alert('Post added successfully!');
    });
  });
  

 
    