# node-fs-promisified
Promise based API wrapper for the NodeJS File System with TypeScript type definitions.

## Overview
There are multiple libraries that can promisify callback based NodeJS APIs, however, if you then
want to use the promisified API in TypeScript all the existing callback based type definitions for
NodeJS will be completely and utterly useless. This project aims to solve that particular problem
for the File System API.

NOTE: The current wrapper is incomplete, and I'll only be promisifying the bits of the API that
I actually use. Feel free to submit PRs for anything that's missing.

## Setup
```
npm install https://github.com/enlight/node-fs-promisified --save
```

## Usage
```
import * as fsp from `fs-promisified`;

fsp.readFile(someFilePath, 'utf8')
.then(data => {
  // process the data
  ...
});
```

##License
MIT
