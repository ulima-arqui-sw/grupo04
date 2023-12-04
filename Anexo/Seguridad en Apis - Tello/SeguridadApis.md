# Seguridad en APIS

## Autenticación:
La autenticación es el proceso de verificar la identidad de un usuario o aplicación que solicita acceso a la API. El objetivo de la autenticación es garantizar que solo los usuarios autorizados puedan acceder a la API.

Hay muchos métodos diferentes de autenticación que se pueden utilizar en las APIs. Algunos de los métodos más comunes incluyen:

### Tokens de Acceso (JWT):

Utilizar JSON Web Tokens (JWT) es una práctica común. Estos son tokens firmados digitalmente que contienen información sobre el usuario y sus permisos. El servidor emite un JWT después de la autenticación, y este token se envía en las cabeceras de las solicitudes subsiguientes.
La firma digital del JWT garantiza que el token no haya sido manipulado y proporciona un nivel de confianza en la identidad del usuario.

### Claves de API:
En lugar de utilizar un nombre de usuario y una contraseña, algunas APIs emiten claves de API únicas para cada desarrollador. Estas claves son secretas y deben manejarse con cuidado. El servidor autentica al usuario verificando la validez de la clave de API incluida en las solicitudes.
Las claves de API suelen ir acompañadas de un secreto compartido para autenticación segura.

## Autorización:
Proceso de determinar si un usuario o aplicación tiene permiso para realizar una acción específica en una API. El objetivo de la autorización es garantizar que solo los usuarios autorizados puedan realizar acciones que podrían poner en riesgo la seguridad o la integridad de la API.

La autorización se basa en la información proporcionada durante el proceso de autenticación. Por ejemplo, si un usuario se autentica con su nombre de usuario y contraseña, la autorización puede verificar si el usuario tiene permiso para realizar una acción específica, como crear, leer, actualizar o eliminar un recurso.

### Roles y Permisos:
Asignar roles y permisos permite un control más granular sobre qué acciones pueden realizar los usuarios autenticados. Por ejemplo, un usuario puede tener el rol de "lector" con permisos limitados, mientras que un "administrador" tiene acceso completo.
La autorización basada en roles es esencial para garantizar que los usuarios solo puedan acceder y modificar los recursos permitidos.

### OAuth 2.0:

OAuth 2.0 es un protocolo de autorización que permite a los usuarios otorgar acceso a terceros sin compartir sus credenciales. Proporciona flujos de autorización específicos para diferentes escenarios, como la autenticación de aplicaciones web, móviles o de dispositivos.

Los recursos protegidos por OAuth 2.0 requieren que los clientes obtengan un token de acceso válido antes de acceder a ellos.

## Rate Limiting:
Técnica que se utiliza para limitar la cantidad de solicitudes que un usuario o aplicación puede realizar a la API en un período de tiempo determinado. El objetivo del rate limiting es proteger la API de ataques de denegación de servicio (DoS), así como de otros tipos de uso excesivo.

El rate limiting se puede implementar de varias maneras. Algunas de las formas más comunes pueden ser:
### Límites por IP o Usuario:

Establecer límites de solicitudes por dirección IP o usuario ayuda a prevenir ataques de fuerza bruta o abusos. Si un usuario supera el límite especificado, su acceso puede ser temporalmente bloqueado o limitado.
Sin embargo, ten en cuenta que el rate limiting no debe afectar negativamente la experiencia del usuario legítimo.

### Cuotas de Acceso:

Definir cuotas de acceso por tiempo (por ejemplo, 1000 solicitudes por hora) permite un control más preciso. Esto es especialmente útil para APIs públicas donde se necesita equilibrar el acceso entre diferentes usuarios o aplicaciones.
Proporcionar información clara sobre las cuotas ayuda a los desarrolladores a trabajar dentro de los límites establecidos.

## Gestión de Vulnerabilidades:
La gestión de vulnerabilidades es el proceso continuo de identificar, evaluar, tratar e informar sobre las vulnerabilidades de seguridad en una organización. El objetivo de la gestión de vulnerabilidades es proteger los activos de la organización de los ataques cibernéticos.

### Pruebas de Penetración:
Realizar pruebas regulares de penetración ayuda a identificar y corregir posibles debilidades en la seguridad. Esto implica simular ataques para evaluar la resistencia del sistema.

Las pruebas pueden incluir análisis de seguridad estáticos y dinámicos, así como evaluaciones de la arquitectura y configuración de la API.

### Monitoreo Constante:
Implementar soluciones de monitoreo constante permite detectar y responder a posibles amenazas en tiempo real. Esto puede incluir la supervisión de registros, alertas de seguridad y sistemas de prevención de intrusiones.

Un enfoque proactivo hacia la seguridad ayuda a mitigar riesgos antes de que se conviertan en problemas graves.

## CONSIDERACIONES TÉCNICAS
