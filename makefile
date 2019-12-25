install: npm install

start: 
	npx babel-node src/games/brain-games.js

build:
	rm -rf dist
	npm run build

publish: 
	npm publish --dry-run

lint: 
	npx eslint .
