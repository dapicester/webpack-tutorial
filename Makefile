all: bundle.js

bundle.js: src/entry.js
	webpack $< $@
