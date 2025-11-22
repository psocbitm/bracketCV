export const createModernMinimalTheme = (monaco) => {
  monaco.editor.defineTheme('modern-minimal', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '52525b', fontStyle: 'italic' },
      { token: 'keyword', foreground: 'c084fc' },
      { token: 'identifier', foreground: 'e4e4e7' },
      { token: 'string.key.json', foreground: 'e4e4e7' },
      { token: 'string.value.json', foreground: 'a1a1aa' },
      { token: 'number', foreground: '60a5fa' },
      { token: 'delimiter', foreground: '52525b' },
      { token: 'delimiter.bracket.json', foreground: '52525b' },
    ],
    colors: {
      'editor.background': '#00000000',
      'editorGutter.background': '#00000000',

      'editor.lineHighlightBackground': '#ffffff05',
      'editor.lineHighlightBorder': '#00000000',

      'editor.selectionBackground': '#3b82f620',
      'editor.inactiveSelectionBackground': '#3b82f610',

      'editorBracketMatch.background': '#00000000',
      'editorBracketMatch.border': '#e4e4e740',

      'editorCursor.foreground': '#3b82f6',

      'editorLineNumber.foreground': '#a1a1aa',
      'editorLineNumber.activeForeground': '#b1b1b1',

      'scrollbarSlider.background': '#ffffff10',
      'scrollbarSlider.hoverBackground': '#ffffff20',
      'scrollbarSlider.activeBackground': '#ffffff30',

      'editorSuggestWidget.background': '#09090b',
      'editorSuggestWidget.border': '#27272a',
      'editorSuggestWidget.selectedBackground': '#27272a',
      'editorSuggestWidget.foreground': '#e4e4e7',
    },
  })
}

export const modernMinimalOptions = {
  fontSize: 14,
  lineHeight: 24,
  fontFamily: 'JetBrains Mono, Geist Mono, Menlo, monospace',
  fontWeight: '500',
  fontLigatures: true,
  letterSpacing: 0.5,

  stickyScroll: { enabled: false },
  smoothScrolling: true,
  padding: { top: 24, bottom: 24 },

  cursorSmoothCaretAnimation: 'on',
  cursorBlinking: 'phase',
  cursorStyle: 'line',
  cursorWidth: 2,

  wordWrap: 'on',
  wrappingIndent: 'same',
  minimap: { enabled: false },

  formatOnPaste: true,
  formatOnType: true,
  autoClosingBrackets: 'always',
  autoClosingQuotes: 'always',
  autoSurround: 'quotes',

  renderWhitespace: 'none',
  overviewRulerBorder: false,
  overviewRulerLanes: 0,
  hideCursorInOverviewRuler: true,
  matchBrackets: 'near',

  scrollbar: {
    vertical: 'visible',
    horizontal: 'auto',
    verticalScrollbarSize: 10,
    horizontalScrollbarSize: 10,
    useShadows: false,
  },

  guides: {
    indentation: true,
    bracketPairs: false,
    highlightActiveBracketPair: true,
  },
  renderIndentGuides: true,

  hover: {
    enabled: true,
    delay: 300,
  },
  suggest: {
    showFields: false,
    showFunctions: false,
    showKeywords: true,
    preview: true,
  },
}
