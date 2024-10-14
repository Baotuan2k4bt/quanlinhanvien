// Lấy phần tử tiêu đề và nội dung chi tiết
const toggleHeader = document.getElementById('toggle-details');
const detailsContent = document.getElementById('details-content');

// Thêm sự kiện nhấp chuột để mở/đóng nội dung
toggleHeader.addEventListener('click', function() {
    if (detailsContent.style.display === "none" || detailsContent.style.display === "") {
        detailsContent.style.display = "block";  // Hiện ra khi nhấn
    } else {
        detailsContent.style.display = "none";   // Ẩn đi khi nhấn lại
    }
});
