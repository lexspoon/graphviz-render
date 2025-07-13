document.querySelectorAll('pre[lang=graphviz]').forEach(el => {
    const graphCode = el.textContent;

    chrome.runtime.sendMessage(graphCode, (response) => {
        if (response.status === 'success') {
            // Convert the SVG to a DOM node by using innerHTML
            // on a hidden DOM element.
            const wrapper = document.createElement('div');
            wrapper.innerHTML = response.output;
            const svg = wrapper.firstElementChild;

            // Replace the original <pre> element with the SVG
            el.replaceWith(svg);
        } else {
            console.log(response);
        }
    });
});
