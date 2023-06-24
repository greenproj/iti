document.addEventListener("DOMContentLoaded", function() {
    const notificationForm = document.getElementById("notificationForm");
    const notificationMsg = document.getElementById("notificationMsg");
    const providerSelect = document.getElementById("provider");
    const submitBtn = document.getElementById("submitBtn");

    notificationForm.addEventListener("submit", function(e) {
        e.preventDefault();
        submitBtn.disabled = true;
        notificationMsg.style.display = "none";

        const provider = providerSelect.value;
        const title = document.getElementById("title").value;
        const message = document.getElementById("message").value;
        const image = document.getElementById("image").value;
        const postId = document.getElementById("post_id").value;
        const link = document.getElementById("link").value;

        const uniqueId = Math.floor(Math.random() * 9000) + 1000;

        if (provider === "onesignal") {
            sendOneSignalNotification(uniqueId, title, message, image, link, postId);
        } else if (provider === "fcm") {
            sendFCMNotification(uniqueId, title, message, image, link, postId);
        }
    });

    function sendOneSignalNotification(uniqueId, title, message, bigImage, link, postId) {
        const content = { en: message };

        const data = {
            app_id: "d461664d-d794-41e0-b3df-0fc2c90cedf5",
            included_segments: ["All"],
            data: {
                foo: "bar",
                link: link,
                post_id: postId,
                unique_id: uniqueId
            },
            headings: { en: title },
            contents: content,
            big_picture: bigImage
        };

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://onesignal.com/api/v1/notifications");
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.setRequestHeader("Authorization", "Basic ZmRmNGQxYzktYmQ3MS00YjI3LTk3OWEtMzM2ZTFlMGI3YWI4");
        xhr.onload = function() {
            notificationMsg.textContent = "OneSignal push notification sent...";
            notificationMsg.style.display = "block";
            submitBtn.disabled = false;
        };
        xhr.send(JSON.stringify(data));
    }

    function sendFCMNotification(uniqueId, title, message, bigImage, link, postId) {
        const data = {
            to: "/topics/iti_job_info",
            data: {
                title: title,
                message: message,
                big_image: bigImage,
                link: link,
                post_id: postId,
                unique_id: uniqueId
            }
        };

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://fcm.googleapis.com/fcm/send");
        xhr.setRequestHeader("Authorization", "key=AAAAAmi4JyU:APA91bEd_APq5Btz5zmjYC0KnLImr6b6S3vBH6s1McKPU9eF-GQL5kdTyToox0dQqh1d8wWVM_DC4o16kD7dM4ASPVn7QE7IBEMvv_Hf-_kYCvRiFQ-lycGEVWZ2L195V46KgbyYVyBj");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
            notificationMsg.textContent = "FCM push notification sent...";
            notificationMsg.style.display = "block";
            submitBtn.disabled = false;
        };
        xhr.send(JSON.stringify(data));
    }
});
