Reveal.initialize({
  width: 1500,
  transition: 'linear',
  dependencies: [

    // Interpret Markdown in <section> elements
    { src: 'components/reveal.js/plugin/markdown/showdown.js', condition: function() {
      return !!document.querySelector('[data-markdown]');
     } },
    { src: 'components/reveal.js/plugin/markdown/markdown.js', condition: function() {
      return !!document.querySelector('[data-markdown]');
    } },

    // Syntax highlight for <code> elements
    { src: 'components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() {
      hljs.initHighlightingOnLoad();
    } },

    // Speaker notes
    { src: 'components/reveal.js/plugin/notes/notes.js', async: true, condition: function() {
      return !!document.body.classList;
    } },

  ]
})