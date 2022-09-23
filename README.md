# typescript-eslint-setup

### Instalación
```npm init @eslint/config```

##### Pasos recomendados para la instalación
![img_6.png](img_6.png)
![img_7.png](img_7.png)
![img_8.png](img_8.png)
![img_9.png](img_9.png)
![img_10.png](img_10.png)
![img_11.png](img_11.png)
![img_12.png](img_12.png)

### Configuración<br>

El fichero de configuracion ```.eslintrc.json``` contiene las reglas de eslint:<br>
Mi configuración para typescript: 
```
{
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "ignorePatterns": ["dist/**"],
  "rules": {    
    "semi": ["error", "always"],      
    "no-console": 0,
    "no-tabs": "error",
    "no-mixed-requires":"error",
    "func-call-spacing":"error",
    "no-var": "error",
    "comma-spacing": "error",
    "no-multi-spaces": "error",
    "array-bracket-spacing": "error",
    "key-spacing": "error",
    "no-unused-vars": "off",
    "indent": ["error", 2],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/quotes": [ 2, "single", "avoid-escape" ]
  }
}
```



ver mas en [https://eslint.org/docs/latest/user-guide/configuring/](https://eslint.org/docs/latest/user-guide/configuring/)
