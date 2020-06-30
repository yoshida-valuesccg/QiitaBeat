chrome.runtime.onMessage.addListener(function ({ options }, sender, reply) {
    chrome.tabs.create({
        url: chrome.runtime.getURL('options/index.html')
    });
});