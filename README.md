### npx create-next-app --ts micro-bank-next

### husky setup

1.yarn add -D husky
2.npx husky install
3.npx husky add .husky/pre-commit "yarn run lint"
4.npx husky add .husky/pre-commit "yarn run lint" 4. yarn add -D @commitlint/config-conventional @commitlint/cli
5.npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
