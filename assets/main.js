document.getElementById("generation").addEventListener("click", function () {
    const inputValue = document.getElementById("input").value;
    const data = { message: inputValue };
    const imgElement = document.getElementById("image");
    const button = document.getElementById("generation");

    imgElement.style.display = "none";
    button.disabled = true;
    button.textContent = "Creating...";

    fetch('https://chatfxt.pythonanywhere.com/api/v2/image_response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(link => {
            if (link && link !== "") {
                imgElement.src = link;
                imgElement.style.display = "block";
            } else {
                imgElement.src = "/assets/blank.png";
                imgElement.style.display = "block";
            }
            button.disabled = false;
            button.textContent = "Generation";
        })
        .catch(error => {
            console.error('Error:', error);
            imgElement.src = "/assets/blank.png";
            imgElement.style.display = "block";
            button.disabled = false;
            button.textContent = "Generation";
        });
});
alert("Xin chào, đây là OpenFXT Image Generator, dịch vụ tạo ảnh theo yêu cầu sử dụng bất kỳ ngôn ngữ nào, hiện tại giao diện của website chỉ hỗ trợ trên desktop một cách mượt mà, bạn vui lòng sử dụng thiết bị laptop, PC để sử dụng dịch vụ một cách dễ dàng nhất. Dịch vụ này đã public API và source code trên mục API Docs và Github đi kèm, bạn vui lòng tham khảo thêm. Một vấn đề nữa là do hạn chế về kinh phí và nhân lực, dịch vụ sẽ không có uptime 100%, nếu trong quá trình sử dụng dịch vụ xảy ra lỗi, bạn vui lòng đợi và thử lại sau. Cảm ơn bạn đã quan tâm và sử dụng dịch vụ của OpenFXT!")
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://script.google.com/macros/s/AKfycbzR19jkkE5B75g7DGMI9PPmJ2erBrY2RjzyPQ8MgWr9v_Aakw4ULLRfxD_Vk7O-UtKP/exec?action=fxtgeneration')
        .catch(error => {
            console.error('Error:', error);
        });
});
