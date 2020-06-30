// Saves options to chrome.storage
function saveOptions() {

    var token = document.getElementById('token').value;

    chrome.storage.sync.set({ token }, function () {
        var status = document.getElementById('status');
        status.textContent = '保存しました';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });

}

function restoreOptions() {
    chrome.storage.sync.get({ token: '' }, function (items) {
        document.getElementById('token').value = items.token;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);