This is a browser extension that detects
[Graphviz](https://graphviz.org/) graphs
and renders them to SVG.

The general idea is that you can extend your Markdown
files to include graphs. Like Markdown at large,
Graphviz is a human-readable text format that can usually
be sorted out even without reading the documentation.
The format can then be rendered to HTML when the tooling
and context allow that to be done.

Here is a sample Graphviz graph. It is described
in a text format in this Markdown file, but you
can see it rendered if you browse to this file
on GitHub with the extension enabled.

```graphviz
digraph G {
  rankdir="BT"

  bgcolor=transparent;  
  node [shape=box, colorscheme=set33, color=1];

  class -> department;
  class -> storage_type;
}
```


Technical notes about the extension:

* It uses [viz-js](https://github.com/mdaines/viz-js)
  to do the rendering. The `viz-js` package is a
  build of Graphviz based on WASM.
* The extension looks for a tag that looks like
  `<pre lang=graphviz>`. This is the way that GitHub
  will embed Graphviz in its UI if you use it in your
  Markdown files.
* The extension only triggers on github.com right now.
  Please file an issue or send a patch if you would like
  something broader than that.
* The extension is for Chrome only, right now. I believe
  that Firefox extensions are similar, however. If you use
  Firefox, perhaps try to port this and see how it goes.
