function copy() {
    var copyText = document.getElementById("ip");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    navigator.clipboard.writeText(copyText.value);
}