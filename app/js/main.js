Reveal.initialize({
  width: 1500,
  transition: 'linear',
  dependencies: [

    // Interpret Markdown in <section> elements
    { src: 'bower_components/reveal.js/plugin/markdown/marked.js', condition: function() {
      return !!document.querySelector('[data-markdown]');
    } },
    { src: 'bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() {
      return !!document.querySelector('[data-markdown]');
    } },

    // Syntax highlight for <code> elements
    { src: 'bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() {
      hljs.initHighlightingOnLoad();
    } },

    // Speaker notes
    { src: 'bower_components/reveal.js/plugin/notes/notes.js', async: true, condition: function() {
      return !!document.body.classList;
    } },

  ]
})