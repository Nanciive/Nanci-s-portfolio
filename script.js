// 控制每个项目图片轮播的索引


const currentIndices = [];
const carousels = document.querySelectorAll('.carousel-images');

carousels.forEach((_, idx) => {
  currentIndices[idx] = 0;  // 初始化每个项目的索引为0
});


function showImage(projectIndex, imageIndex) {
    const container = document.querySelectorAll(".carousel-container")[projectIndex];
    const images = container.querySelectorAll(".carousel-image");
  
    images.forEach((img, idx) => {
      img.style.display = idx === imageIndex ? "block" : "none";
    });
  
    // 更新当前索引
    currentIndexes[projectIndex] = imageIndex;
  
    // 更新指示器文字
    const indicator = document.getElementById(`indicator-${projectIndex}`);
    if (indicator) {
      indicator.textContent = `Image ${imageIndex + 1} of ${images.length}`;
    }
  }
  
  function prevImage(projectIndex) {
    const container = document.querySelectorAll(".carousel-container")[projectIndex];
    const images = container.querySelectorAll(".carousel-image");
  
    let currentIndex = currentIndexes[projectIndex] || 0;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  
    showImage(projectIndex, currentIndex);
  }
  
  function nextImage(projectIndex) {
    const container = document.querySelectorAll(".carousel-container")[projectIndex];
    const images = container.querySelectorAll(".carousel-image");
  
    let currentIndex = currentIndexes[projectIndex] || 0;
    currentIndex = (currentIndex + 1) % images.length;
  
    showImage(projectIndex, currentIndex);
  }
  
  // 初始化所有项目的第一张图片
  document.querySelectorAll(".carousel-container").forEach((container, index) => {
    currentIndexes[index] = 0;
    showImage(index, 0);
  });
  
  