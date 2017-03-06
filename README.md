# swagger-editor-local

Spawn a Swagger Editor locally that automatically syncs changes to a swagger.yaml file.

## Environment

- Install [Vagrant](https://www.vagrantup.com/)

## Development Workflow

### 1. Clone the repository

```bash
git clone https://github.com/echelon-solutions/swagger-editor-local.git
```

### 2. Run the Swagger Editor

```bash
# Change into the repository directory
cd swagger-editor-local

# Bring up the Vagrant environment
vagrant up

# Login to the environment
vagrant ssh

# Change into the project directory
# Vagrant syncs the /project directory with your host machine
cd /project

# Install the dependencies
npm install

# Run the Swagger Editor
npm run editor
```

## Support

Please reach out to [support@echelon.solutions](mailto:support@echelon.solutions)
with any questions, concerns, or suggestions.

Also, feel free to clone/fork this project and suggest changes and
updates via a "Pull Request".
