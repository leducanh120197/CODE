console.log("Background running");
chrome.browserAction.onClicked.addListener(IconClicked);
function IconClicked(tab)
{
    console.log("xxxxxxxxxxx");
}