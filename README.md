# Patrones de Diseño en TypeScript

Este repositorio contiene ejemplos de varios patrones de diseño implementados en **TypeScript**. Cada patrón está organizado en su propio archivo y demuestra cómo aplicarlos en situaciones comunes de desarrollo de software. Estos patrones son fundamentales para construir soluciones escalables y mantenibles.

## Índice

- [Requisitos Previos](#requisitos-previos)
- [Instrucciones de Instalación](#instrucciones-de-instalación)
- [Ejemplos de Patrones](#ejemplos-de-patrones)
  - [Builder Pattern](#builder-pattern)
  - [Observer Pattern](#observer-pattern)
  - [Factory Method Pattern](#factory-method-pattern)
  - [Chain of Responsibility Pattern](#chain-of-responsibility-pattern)
  - [Memento Pattern](#memento-pattern)
- [Conclusión](#conclusión)

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- **Node.js** v12 o superior.
- **TypeScript** (instalado globalmente). Puedes instalarlo ejecutando:
  ```bash
  npm install -g typescript
  
## Instrucciones de Instalación

Clona el repositorio:
  ```bash
  git clone https://github.com/FrankAsgard/Patrones-de-Dise-o-en-TypeScript.git
```

Navega a la carpeta del proyecto:
```bash
cd Patrones-de-Dise-o-en-TypeScript
```
Instala los paquetes necesarios:

```bash
npm install --save-dev typescript ts-node
```
Para ejecutar cualquiera de los ejemplos, utiliza el siguiente comando:

```bash
ts-node nombre-del-archivo.ts
```

# Ejemplos de Patrones

## Builder Pattern
El Builder Pattern es un patrón de creación que facilita la construcción de objetos complejos paso a paso, evitando la necesidad de constructores con demasiados parámetros. Este patrón es útil cuando los objetos pueden tener diferentes configuraciones.

Ejemplo: Supongamos que queremos construir un Car. Un auto puede tener diferentes configuraciones como tipo de motor, GPS, y transmisión. Usando el patrón Builder, podemos construir el auto paso a paso, añadiendo solo las características necesarias.
ts-node builder-pattern.ts

# Observer Pattern
El Observer Pattern define una relación uno-a-muchos, donde un objeto (el sujeto) notifica a múltiples observadores sobre cambios en su estado. Esto es útil cuando múltiples componentes deben actualizarse ante eventos específicos sin estar estrechamente acoplados.

Ejemplo: Imagina que tienes una aplicación de notificaciones en tiempo real. Cada vez que ocurre un evento, todos los usuarios observadores registrados reciben una notificación. En este caso, el patrón Observer es ideal para manejar las actualizaciones.
ts-node observer-pattern.ts

# Factory Method Pattern
El Factory Method Pattern es un patrón de creación que permite a las subclases decidir qué tipo de objeto crear. La clase base proporciona una interfaz para crear objetos, pero las subclases especifican el tipo exacto que debe ser instanciado.

Ejemplo: Consideremos una fábrica de Vehicles. La fábrica puede producir diferentes tipos de vehículos (como Car y Bike). Usando el patrón Factory Method, cada subclase puede decidir qué tipo de vehículo construir sin cambiar el código base.
ts-node factory-method-pattern.ts

# Chain of Responsibility Pattern
El Chain of Responsibility Pattern permite que una solicitud pase a través de una cadena de manejadores. Cada manejador decide si procesa la solicitud o la pasa al siguiente manejador en la cadena.

Ejemplo: En un sistema de aprobación de solicitudes, como un sistema de permisos, una solicitud puede ser manejada por diferentes niveles de jerarquía (por ejemplo, Manager, Director, CEO). Cada nivel tiene la oportunidad de procesar la solicitud o delegarla al siguiente.
ts-node chain-of-responsibility-pattern.ts

# Memento Pattern
El Memento Pattern permite capturar y almacenar el estado interno de un objeto sin exponer sus detalles, y restaurarlo en el futuro si es necesario. Es útil para implementar funciones como "deshacer" o "restaurar".

Ejemplo: Consideremos una aplicación de edición de texto donde se necesita una funcionalidad de "deshacer". Cada vez que el usuario realiza un cambio, el estado actual del documento se guarda en un memento. Si el usuario decide deshacer, puede restaurar el estado previo usando el memento.
ts-node memento-pattern.ts

# Conclusión
Este repositorio ofrece ejemplos prácticos de cómo implementar varios patrones de diseño en TypeScript. Estos patrones son esenciales para desarrollar aplicaciones modulares, mantenibles y escalables. Si bien cada patrón resuelve un problema específico de diseño, su comprensión y aplicación adecuada puede mejorar significativamente la calidad del software.

