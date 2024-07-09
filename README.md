# Pokemon List con Infinite Scroll (React)

Google reemplazó el pagineo por un Infinite Scroll, que a simple vista pareciera un cambio pequeño pero muy significante en el UX/UI
como usuarios de smartphones, las apps de redes sociales nos han acostumbrado a este tipo de comportamientos.

En el [React Digest](https://newsletter.reactdigest.net/p/enhancing-new-york-times-web-performance-react-18?utm_source=newsletter.reactdigest.net&utm_medium=newsletter&utm_campaign=enhancing-the-new-york-times-web-performance-with-react-18) de esta semana, uno de los artículos proponía un challenge para implementar el infite Scroll en React utilizando la [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API?ref=reactpractice.dev), una manera interesante y nativa de poder trabajar con las APIs de los navegadores y sin utilizar librerías de terceros.

A continuación les comparto mi solución, en el artículo hay una solución propuesta pero, hay varios cambios que me tomé la molestia en agregar. La aplicación usa VITE como generador del boilerplate.

**English**

Google replaced pagination with an Infinite Scroll, which at first glance seems like a small but very significant change in the UX/UI. As smartphone users, social media apps have accustomed us to this type of behavior.

In this week's [React Digest](https://newsletter.reactdigest.net/p/enhancing-new-york-times-web-performance-react-18?utm_source=newsletter.reactdigest.net&utm_medium=newsletter&utm_campaign=enhancing-the-new-york-times-web-performance-with-react-18), one of the articles proposed a challenge to implement the infite Scroll in React using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API?ref=reactpractice.dev), an interesting and native way to work with browser APIs and without using third-party libraries.

Below I share my solution, in the article there is a proposed solution but there are several changes that I took the trouble to add. The application uses VITE as the boilerplate generator.
