install: npm install

start: 
	npx babel-node src/games/brain-prime.js

publish: 
	npm publish --dry-run

lint: 
	npx eslint .
