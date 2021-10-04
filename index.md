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

El usuario 3 crea una rama features/estilosCSS para su funcionalidad : 

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2021-32-15.png)

![Alt text](https://github.com/abmataix5/practica_desplegament/blob/master/Imagenes_GPages/Captura%20de%20pantalla%20de%202021-10-03%2021-40-54.png)

