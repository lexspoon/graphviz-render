importScripts('deps/viz-standalone.js');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    Viz.instance().then(function (viz) {
        console.log('Received a Graphviz graph');

        const result = viz.render(message, { format: 'svg_inline' });

        sendResponse(result);
        console.log('Sent back an SVG');
    });

    return true;
});
