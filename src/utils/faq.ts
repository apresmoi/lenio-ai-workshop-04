export const faq = [
  {
    id: "1",
    question: "¿Qué es FlowX y cómo puede beneficiar a mi empresa?",
    answer:
      "FlowX es una plataforma de Marketing Automation visual diseñada para ayudar a las empresas a automatizar y optimizar sus campañas de marketing. Puede beneficiar a tu empresa al permitirte ahorrar tiempo y esfuerzo al automatizar tareas de marketing, mejorar la segmentación de tu público objetivo, crear campañas multicanal personalizadas y medir los resultados de manera efectiva.",
  },
  {
    id: "2",
    question:
      "¿Cuáles son las principales características y funcionalidades de FlowX?",
    answer:
      "Las principales características y funcionalidades de FlowX incluyen la carga de bases de contactos, generación de segmentos, Easy Mail Editor para crear plantillas de correo electrónico, campañas multistep basadas en eventos del canal, envío de mensajes por Whatsapp y email, medición de resultados con analítica del canal, configuración de criterios de conversión y visualización de informes de conversiones.",
  },
  {
    id: "3",
    question: "¿Cómo puedo cargar mi base de contactos en FlowX?",
    answer: `Puedes cargar tu base de contactos en FlowX importando un archivo en formato CSV codificado en UTF-8, lo cual puede hacer cuando guardas tu archivo desde Excel o Google Sheets, seleccionando la opción “CSV UTF-8” (en Google Sheets elige CSV y será por defecto UTF-8) que contenga la información de tus contactos. 

![Image 1](/images/image1.png)

Luego dentro de FlowX te diriges a la sección de Audiencia y seleccionas la opción Gestionar Contactos. Una vez allí puedes elegir entre cargar un archivo CSV explorando tu computadora local o arrastrando el mismo a la sección de carga o puedes optar por copiar las filas desde un archivo 
tabulado y pegarlas directamente en el área de texto. A continuación FlowX reconocerá las columnas y los encabezados, si los tuviera e intentará ajustar la selección de columnas con la base de clientes. Aquellas columnas que no hayan podido relacionarse con un campo de la base creado por Ud. podrán ser seleccionadas manualmente o creadas si no existiera. También podrá elegir descartar aquellas columnas que, en este momento, no desee cargar.`,
  },

  {
    id: "4",
    question:
      "¿Puedo personalizar y crear plantillas de correo electrónico en FlowX?",
    answer: `Sí, en FlowX puedes utilizar nuestro editor de templates para crear plantillas de correo electrónico personalizadas. El editor te permite arrastrar y soltar elementos, agregar imágenes, texto y enlaces, y personalizar el diseño y el estilo de tus correos electrónicos.
Para ello puedes dirigirte a la sección Plantillas y elegir comenzar una plantilla desde 0 o utilizar algunas de las plantillas prediseñadas que te facilitamos.`,
  },
  {
    id: "5",
    question:
      "¿Cómo puedo agregar elementos multimedia a mis plantillas personalizadas de FlowX?",
    answer:
      "Para agregar elementos multimedia a FlowX para utilizar dentro de tus plantillas personalizadas debes dirigirte a la sección de plantillas y seleccionar Media. Allí podrás subir tus archivos explorando la carpeta local de tu computadora o arrastrarlos y soltarlos en la lista o también puedes arrastrar las imágenes desde una página web (con elementos soportados).",
  },
  {
    id: "6",
    question:
      "¿Por qué no puedo seleccionar desde una campaña un segmento que acabo de crear?",
    answer:
      "Recuerda que para poder enviar una campaña hacia un segmento, primero debes publicarlo. La acción de publicar un segmento le indica a FlowX que el segmento ya ha finalizado su diseño y se encuentra listo para activarse.",
  },
  {
    id: "7",
    question:
      "¿Intento publicar una campaña, pero FlowX me indica que no se encuentra lista?",
    answer: `FlowX analiza la integridad de una campaña antes de permitirte avanzar en su ejecución. Puede haber varios motivos por los cuales FlowX no te permita publicar una campaña:
- No tiene nombre: una campaña debe tener un nombre antes de ser publicada.
- Hay nodos sin configurar: chequea que todos tengan completos los campos obligatorios. 
- Falta cerrar una rama con un nodo End: El nodo End le indica a FlowX que la rama que acabas de crear se encuentra cerrada y no se debe ejecutar ninguna acción posterior. Es necesario que todas las ramas desemboquen en un nodo End. Puedes conectar todos los nodos finales a un solo End o colocar uno por rama.`,
  },
  {
    id: "8",
    question: "¿Cómo puedo segmentar mi base de contactos en FlowX?",
    answer: `FlowX te permite segmentar tu base de contactos utilizando criterios basados en las propiedades que proporcionaste de tus contactos, como la ubicación geográfica, datos demográficos, comportamiento del usuario, entre otros. Puedes crear segmentos basados en estos criterios a través del editor el para dirigir tus campañas de marketing a grupos específicos de contactos que compartan características similares. 
Para ello deberás dirigirte a la sección Audiencias y seleccionar la opción Segmentos, allí puedes crear uno nuevo, reutilizar uno que ya hayas creado duplicandolo para mantener el original. 
Luego debes seleccionar las propiedades que te interesen y los valores buscados y a continuación chequear la calidad del segmento resultante visualizando los participantes y cantidad de contactos.

![Image 2](/images/image2.png)`,
  },
  {
    id: "9",
    question: "¿Puedo automatizar campañas de marketing multicanal con FlowX?",
    answer: `Sí, FlowX te permite automatizar campañas de marketing multicanal. Puedes configurar campañas que incluyan envíos de correo electrónico y mensajes de Whatsapp o SMS, y programar los pasos de la campaña en función de los eventos del canal, como si un usuario abrió un correo electrónico o hizo clic en un enlace. 
Para ello deberás iniciar la comunicación a partir de un canal como Email y luego decidir a quienes quieres volver a contactar basado en su comportamiento sobre esa comunicación (e.g quienes no abrieron el correo). Esto lo harás agregando un nodo de evaluación Wait and Check y configurando la espera y los eventos. A continuación agregaremos los
canales que querramos utilizar para reforzar la comunicación. Esto se puede repetir con diferentes canales hasta lograr la penetración deseada.`,
  },
  {
    id: "10",
    question:
      "¿Qué eventos del canal puedo utilizar para crear campañas en FlowX?",
    answer:
      "En FlowX, puedes utilizar eventos del canal como la apertura de un correo electrónico, el clic en un enlace o la no apertura de un correo electrónico como desencadenantes para configurar y personalizar tus campañas de marketing.",
  },
  {
    id: "11",
    question: "¿Cómo puedo medir los resultados de mis campañas en FlowX?",
    answer: `Para medir la efectividad de tus campañas, FlowX puedes dirigirte a la sección Analíticas, donde encontrarás la utilización de tus canales preferidos y podrás filtrar por periodos deseados. 
A continuación encontrarás el listado de tus campañas y podrás seleccionarlas para visualizar la analítica de Conversiones y los resultados de cada paso de la campaña. También podrás acceder a un listado detallado del comportamiento de los contactos que participaron en cada paso.`,
  },
  {
    id: "12",
    question:
      "¿Puedo rastrear si un contacto abrió un correo electrónico o hizo clic en un enlace en FlowX?",
    answer: `Por supuesto, en la sección Analíticas e ingresando a cada campaña, encontrarás los diferentes pasos de la misma y una sección llamada Mas detalles donde encontrarás un listado detallado del comportamiento de los contactos que participaron en cada paso.`,
  },
  {
    id: "13",
    question: "¿Porque no veo estadísticas de ejecución de mi campaña?",
    answer: `La analítica de las campañas se actualiza en tiempo real. Sin embargo, si acabas de ejecutar tu campaña y aún no puedes ver estadísticas de ejecución, existen varios motivos pueden provocar una demora entre la orden de ejecución y el comienzo de la generación de la estadística para la analítica. Entre ellos podemos encontrar:   
- Un segmento muy grande: esto provoca que el sistema tome su tiempo procesar la cola de envío. 
- Carga de trabajo del sistema: Si hay una alta carga de trabajo en el sistema debido a múltiples usuarios o procesos intensivos, la actualización de las estadísticas puede verse afectada. El sistema puede priorizar otras tareas o procesos críticos, lo que puede ralentizar la actualización de las estadísticas. 
- Problemas de red: un problema de conexión en alguna región puede ralentizar la respuesta de los servicios en los que se basa FlowX y sus proveedores.

No obstante, si luego de un tiempo prudencial, sigues sin poder visualizar la analítica, contacta con nuestro equipo de Soporte: <support@flowx.pro>.`,
  },
  {
    id: "14",
    question:
      "¿Es posible realizar envíos por otros canales además del correo electrónico en FlowX?",
    answer:
      "Por supuesto, FlowX es una plataforma Omnicanal que además correo electrónico te ofrece realizar envíos por SMS y Whatsapp, con la posibilidad de generar campañas multipasos combinando los canales de manera de llegar a tus clientes a través de sus canales preferidos.",
  },
  {
    id: "15",
    question:
      "¿Puedo cargar transacciones y configurar criterios de conversión en FlowX?",
    answer: `Con FlowX puedes medir la efectividad de tus campañas no solo a nivel de contactación, si no también de conversiones. 
Para ello deberás cargar un archivo en formato CSV codificado en UTF-8, lo cual puede hacer cuando guardas tu archivo desde Excel o Google Sheets, seleccionando la opción “CSV UTF-8” que contenga los datos de tus conversiones: Fecha, Item ID e identificador del contacto que realzó la transacción. 

![Image 1](/images/image1.png)

Luego dentro de FlowX te diriges a la sección de Campañas y seleccionas la opción Gestiona Conversiones. Una vez allí puedes elegir entre cargar un archivo CSV archivo explorando tu computadora local o arrastrando el mismo a la sección de carga o puedes optar por copiar las filas desde un archivo tabulado y pegarlas directamente en el área de texto. Acontinuación FlowX reconocerá las columnas y los encabezados, si los tuviera e intentará ajustar la selección de columnas con la base de clientes. Aquellas columnas que no hayan podido relacionarse con un campo de la base creado por Ud. podrán ser seleccionadas manualmente si no tuvieran los nombres esperados.`,
  },
  {
    id: "16",
    question:
      "¿Cómo puedo acceder al soporte técnico de FlowX si tengo preguntas o problemas?",
    answer:
      "El equipo de Soporte Técnico de FlowX estará siempre disponible para atender tus inquietudes a través de la siguiente dirección de email: <support@flowx.pro>. Envía un correo incluyendo la mayor cantidad de información sobre tu inquietud, sugerencia o inconveniente para que nuestro equipo pueda priorizarlo y responderte a la brevedad.",
  },
  {
    id: "17",
    question: "¿Cuál es el nivel de seguridad y protección de datos en FlowX?",
    answer: `Al estar alojado en AWS, FlowX se beneficia de la infraestructura segura y escalable proporcionada por AWS, incluyendo medidas de seguridad física, protección contra amenazas en la red, cifrado de datos en tránsito y en reposo, y una arquitectura de red y almacenamiento que cumple con los estándares de seguridad reconocidos. 
Además, FlowX implementa políticas y prácticas de seguridad para proteger los datos de los usuarios. Esto puede incluir el acceso seguro a la plataforma mediante autenticación y autorización, así como controles de acceso granulares para asegurar que solo las personas autorizadas tengan acceso a la información confidencial. 
Es importante tener en cuenta que FlowX también cumple con las leyes y regulaciones aplicables en materia de privacidad y protección de datos.`,
  },
  {
    id: "18",
    question:
      "¿Hay una versión de prueba gratuita de FlowX disponible para que pueda probar antes de comprar?",
    answer:
      "Si, puedes acceder a una versión trial de 30 días de duración para que puedas experimentar sus capacidades antes de decidirte por un plan pago.",
  },
  {
    id: "19",
    question: "¿Que es un MEC?",
    answer:
      "Un cliente activo al mes (CAM) es aquel usuario único al que se le ha contactado a través de una o más campañas durante el periodo de tiempo establecido, sin importar el medio empleado para comunicarse.",
  },
  {
    id: "20",
    question: "¿Cómo puedo usar Whatsapp con FlowX?",
    answer:
      "Antes de que pueda comenzar a utilizar WhatsApp para comunicaciones comerciales, primero debe someterse al proceso de aprobación oficial de WhatsApp, en el cual el equipo de la empresa revisa su solicitud de acuerdo con su Política de WhatsApp Business y su Política de comercio.",
  },
];
