window.addEventListener('DOMContentLoaded', () => {
    const inputFile = document.getElementById('inputFile');
    const compressButton = document.getElementById('compressButton');
    const originalImage = document.getElementById('originalImage');
    const compressedImage = document.getElementById('compressedImage');
    const downloadLink = document.getElementById('downloadLink');

    inputFile.addEventListener('change', () => {
        const file = inputFile.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            originalImage.src = reader.result;
        });

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    compressButton.addEventListener('click', () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const maxWidth = 800; // Maximum width for the compressed image

        const image = new Image();
        image.src = originalImage.src;

        image.addEventListener('load', () => {
            let width = image.width;
            let height = image.height;

            if (width > maxWidth) {
                height *= maxWidth / width;
                width = maxWidth;
            }

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(image, 0, 0, width, height);

            const compressedDataURL = canvas.toDataURL('image/jpeg', 0.7); // Adjust compression quality if needed

            compressedImage.src = compressedDataURL;
            downloadLink.href = compressedDataURL;
            downloadLink.style.display = 'inline';
        });
    });
});
