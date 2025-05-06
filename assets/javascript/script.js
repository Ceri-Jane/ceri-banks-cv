document.getElementById('downloadLink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default navigation

    const fileUrl = 'assets/cv-pdf/Ceri Banks CV 06.05.2025.pdf'; // Replace with actual file path or URL
    const fileName = 'ceri-banks-cv.pdf';        // Optional: customize downloaded file name

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });