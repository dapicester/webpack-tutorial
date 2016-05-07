all: bundle.js

bundle.js: src/entry.js
	webpack $< $@ --module-bind 'css=style!css'
