 async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    displayPosts(posts); 
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  
  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;
   h1.id = `post-title-${post.id}`;
    const p = document.createElement('p');
    p.textContent = post.body;

    
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

getPosts();


