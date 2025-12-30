# DirectUI Documentation
Documenting the undocumented language made by Microsoft, built on top of [Docusaurus](https://docusaurus.io/).

# How do I run this locally?
You need these 2 things to run this locally on your machine:
- [Node.js](https://nodejs.org) for general stuff
- [yarn](https://classic.yarnpkg.com) as a package manager

You then want to run `yarn` in the directory of dui-docs. After the packages install, you run `yarn start` to start the development server, any change you make to the files will reflect in real-time without having to do anything else.

# How do I build this for static sites?
All you have to do is run `yarn build`, it will then generate the static content into the `build` directory as static content.
