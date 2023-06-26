chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && !tab.url.startsWith('chrome://')) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['disable.js']
        });
    }
});