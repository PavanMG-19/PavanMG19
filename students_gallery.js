// Fetch like count from the server
async function fetchLikeCount(imageId) {
    const response = await fetch(`/likes/${imageId}`);
    const data = await response.json();
    return data.likes;
  }
  
  // Toggle like (increment/decrement) on the server
  async function toggleLike(imageId) {
    const response = await fetch(`/likes/${imageId}`, {
      method: 'POST',
    });
  
    const data = await response.json();
    document.getElementById(`like-count-${imageId}`).textContent = `${data.likes} Likes`;
  }
  
  // Initialize like counts when the page loads
  window.onload = async () => {
    const imageIds = ['image1', 'image2'];
    for (const imageId of imageIds) {
      const likeCount = await fetchLikeCount(imageId);
      document.getElementById(`like-count-${imageId}`).textContent = `${likeCount} Likes`;
    }
  };
  