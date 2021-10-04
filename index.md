## Practica control de versiones de Abel Mataix Pascual

## Que es GIT?

GIT es un sistema de control de versiones. Esto significa que es un sistema que registra los cambios realizados sobre un archivo o conjunto de archivos a lo largo del tiempo. Este tipo de sistemas nos permiten tener un control en el tiempo de nuestro trabajo.

Con GIT podemos controlar todos los cambios que realizados en nuestro código y así tener un control absoluto de todo lo que ocurre, permitiendo volver atrás en el tiempo, abrir diferentes ramas de desarrollo, etc.

### GIT FLOW

Git Flow es la metodología que he utilizado en la creación de este proyecto, vamos a ver las distintas ramas con las que vamos a trabajar, y para que sirve caa una de ellas.

-Rama master y develeop.

En la rama master contiene el historial de lanzamiento oficial y contiene el código que está en producción.

En la rama develop integraremos las nuevas funcionalidades.

-Ramas feature

Este tipo de ramas, se utilizan para añadir nuevas características a tu proyecto, en futuras versiones. Estas ramas, dependerán de la rama dev y se creará una por cada característica que se quiera incorporar al proyecto.


## EXPLICACIÓN DEL PROCESO

### Usuario 1 crear el proyecto

El usuario 1 crea la estructura del proyecto(con el boileplate que nos hemos decargado), crea el apartado Home y realiza el primer commit.

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2019-54-30.png)
![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-09-30%2021-43-49.png)

-El usuario 1 crea la rama develop, necesaria para seguir la metología Git Flow

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2019-26-58.png)

### Ahora ya esta todo listo para empezar a trabajar, el usuario 2 y usuario 3, realizan un git clone del repositorio creado por el usuario 1 como vemos a continuación:

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2020-15-14.png)
![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2020-14-59.png)

- Ahora ya tenemos clonado el repositorio en el local de nuestros dos usuarios que van a trabajar en el proyecto junto al usuario 1.


### Funcionalidades del usuario 2.

Ahora el usuario 2 , crea dos ramas features, una por cada funcionalidad que va a realizar :

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2020-24-04.png)

Y luego realizamos un git push -u origin 'rama' para agregarlas al repositorio remoto.

#### Ahora, hacemos un commit de las nuevas funcionalidades.

- Realizamos commit de las nuevas funcionalidades del usuario 2, las haremos cadauna en su respectiva rama, para luego cuando esten las funcionalidades finalizadas hacer un merge con la rama develop. 

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2021-22-25.png)
![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2021-04-12.png)

- La ramas del usuario 2 ya estan actualizadas con sus nuevas funcionalidades.

### Funcionalidades usuario 3

El usuario 3 crea una rama features/estilosCSS para su funcionalidad : (El resultado final de los ficheros añadidos, los podemos ver en el repositorio)

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2021-32-15.png)

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2021-40-54.png)


## Ahora fusionaremos las ramas features con la rama develop :

Para ello utilizamos -> git fetch origin -> para actualizar y luego git merge 'rama'.

Como veremos a continuación pueden suirgir conflictos, que los arreglaremos facilmente.

-Feature contenido HTML (Haremos lo mismo para la rama atributos html):

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2022-00-23.png)

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2022-00-2378.png)

-Feature estilos CSS :

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2021-48-38.png)

## Una vez tenemos la rama develop actualizada y fusionada , hacemos un merge con master, asi ya tenemos la rama master para producción.(Lo podemos ver en los commits del repositorio).


## Usuario 1, etiqueta con version v1.0

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2022-26-40.png)
![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2022-28-29.png)


## Usuario 1, crea la rama test, para que los testers puedan probar el desarrollo.

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2022-37-00.png)

## Creación de Git Hooks

-Para crear Hooks, nos iremos a la carpeta oculta .git/hooks, ahi agregaremos los siguientes hooks : 

- Hook para instalar automaticamente la carpeta node_modules al realizar checkout : 

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2023-28-29.png)

-Hook que valida que los ficheros que se vayan a subir no tengan caracteres no deseados y que los formatos de los archivos html son correctos.

Para este hemos instalado el plguin eslint con : $ npm install eslint --save-dev -> lo configuramos como indicaba el link.


![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2023-41-59.png)

### Estos hooks estan disponibles para los demas usuario en la carpeta GitHooks.
