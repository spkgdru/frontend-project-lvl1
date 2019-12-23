install: npm install

start: 
	npx babel-node src/games/brain-gcd.js

publish: 
	npm publish --dry-run

lint: 
	npx eslint .
