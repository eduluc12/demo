# Instalacion 

Ejecutar en la linea de consola , el siguiente comando:

```bash
yarn install
```

Posterior a ello , ejecutar el siguiente comando:

```bash
npx sls dynamodb install
```

# Entorno de trabajo
Debido a que este proyecto utiliza dynamodb y entorno de AWS, tener las credenciales de AWS definidas

```bash
export AWS_ACCESS_KEY_ID=<VALUE>
export AWS_SECRET_ACCESS_KEY=<VALUE>
```

Para levantar el emulador ejecutar el siguiente comando

```bash
yarn run local:database
```

Posteriormente para levantar las funciones con el codigo 'typescript' ya transpilado a javascript, ejecutar el siguiente comando

```bash
yarn run local:server
```
# Despliegue
Para el despliegue tener las credenciales definidas como se menciona en la parte de entorno de trabajo

```bash
yarn run deploy
```

# Testing
Para el testing de pruebas unitarias, ejecutar el siguiente comando

```bash
yarn test
```

# Build
Para el transpilado de typescript a javascript, ejecutar el siguiente comando

```bash
yarn build
```

# Automatizacion OPENAPI
Para la generacion del swagger.json usando tsoa, ejecutar el siguiente comando

```bash
yarn run gen:openapi
```