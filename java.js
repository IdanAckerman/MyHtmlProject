function downloadCV() {
    var link = document.createElement('a');
    link.href = 'IdanAckermanCV_Updated.pdf';
    link.target = '_blank'; // Open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}