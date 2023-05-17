# amber-lint

amber-lint is used to configure eslint, prettier, stylelint, commitlint, husky, etc., as well as generate relevant configuration files to unify and standardize the code style in the project.

# Installation and Usage

You can install amber-lint using this command:
`yarn add amber-lint`
or
`npm install amber-lint`

Then you can run `yarn amber-lint` or `npx amber-lint` to generate the configuration files and install the dependencies.
You can make modifications based on this or use it directly.

# Notice

1. The generated file aelftsconfig.json is the basic configuration of tsconfig.json. If the tsconfig.json file already exists in the project, you need to manually copy the contents of aelftsconfig.json to tsconfig.json. **Note: keep your own configuration in the project.**
If there is no tsconfig.json file, you can directly rename the aelftsconfig.json file to tsconfig.json and use it directly.