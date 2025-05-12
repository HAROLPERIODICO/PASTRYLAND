<script>
  const modalBlog = document.getElementById("modalBlog");
  const btnBlog = document.getElementById("btnBlog");
  const closeBlog = document.querySelector(".close-blog");

  btnBlog.onclick = function (e) {
    e.preventDefault();
    modalBlog.style.display = "block";
  }

  closeBlog.onclick = function () {
    modalBlog.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modalBlog) {
      modalBlog.style.display = "none";
    }
  }
</script>
