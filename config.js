export const questions = [
    {
        question: "¿Cuál es el propósito principal de AWS Identity and Access Management (IAM)?",
        options: [
            "Proporcionar almacenamiento escalable en la nube.",
            "Gestionar el acceso a los servicios y recursos de AWS de forma segura.",
            "Monitorizar el rendimiento de las aplicaciones en AWS.",
            "Automatizar la implementación de código en AWS."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es el principio de 'privilegio mínimo' en el contexto de la seguridad en la nube?",
        options: [
            "Otorgar a todos los usuarios acceso completo a todos los recursos.",
            "Conceder a los usuarios solo los permisos necesarios para realizar sus tareas.",
            "Limitar el acceso a los recursos solo durante las horas de trabajo.",
            "Compartir contraseñas entre los miembros del equipo para facilitar el acceso."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes opciones es un servicio de AWS que ayuda a proteger las aplicaciones web de ataques comunes?",
        options: [
            "Amazon CloudWatch",
            "AWS Shield",
            "Amazon Inspector",
            "AWS Config"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué tipo de ataque busca explotar vulnerabilidades en el código de una aplicación para insertar o 'inyectar' código malicioso?",
        options: [
            "Ataque de denegación de servicio (DoS)",
            "Ataque de fuerza bruta",
            "Ataque de inyección",
            "Ataque de phishing"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué servicio de AWS permite cifrar datos en reposo y en tránsito?",
        options: [
            "Amazon S3",
            "AWS Key Management Service (KMS)",
            "Amazon CloudFront",
            "Amazon EC2"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el propósito de los AWS Security Groups?",
        options: [
            "Gestionar identidades de usuarios.",
            "Controlar el tráfico de red de entrada y salida para instancias EC2.",
            "Monitorizar el uso de recursos de AWS.",
            "Automatizar la creación de copias de seguridad de datos."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es AWS CloudTrail?",
        options: [
            "Un servicio para almacenar datos en la nube.",
            "Un servicio para monitorizar el rendimiento de las aplicaciones.",
            "Un servicio que registra las llamadas a la API de AWS realizadas en tu cuenta.",
            "Un servicio para gestionar bases de datos relacionales."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál de las siguientes NO es una práctica recomendada para proteger una cuenta de AWS?",
        options: [
            "Habilitar la autenticación multifactor (MFA) para todos los usuarios.",
            "Usar la cuenta raíz para tareas diarias.",
            "Aplicar el principio de privilegio mínimo.",
            "Rotar las claves de acceso regularmente."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué servicio de AWS proporciona información sobre la seguridad y el cumplimiento del estado de tu infraestructura de AWS?",
        options: [
            "Amazon GuardDuty",
            "AWS Trusted Advisor",
            "Amazon Inspector",
            "AWS Shield"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el propósito de un Network ACL (Access Control List) en AWS?",
        options: [
            "Gestionar identidades de usuarios.",
            "Controlar el tráfico de red a nivel de subred.",
            "Monitorizar el rendimiento de las aplicaciones web.",
            "Automatizar la implementación de código."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué tipo de vulnerabilidad implica engañar a un usuario para que revele información confidencial?",
        options: [
            "Cross-Site Scripting (XSS)",
            "Inyección SQL",
            "Phishing",
            "Denegación de Servicio (DoS)"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál de los siguientes servicios de AWS puede ayudar a detectar actividades maliciosas o no autorizadas en tu entorno de AWS?",
        options: [
            "Amazon CloudWatch",
            "AWS Config",
            "Amazon GuardDuty",
            "AWS Lambda"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué rol juega la encriptación en la seguridad de datos en la nube?",
        options: [
            "Reduce la necesidad de copias de seguridad.",
            "Impide el acceso no autorizado a los datos.",
            "Acelera la transferencia de datos.",
            "Elimina la necesidad de autenticación."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es un 'bucket' en Amazon S3?",
        options: [
            "Un tipo de instancia EC2.",
            "Un contenedor para almacenar objetos (archivos).",
            "Un servicio de base de datos.",
            "Una herramienta para monitorizar el tráfico de red."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el beneficio de utilizar AWS Web Application Firewall (WAF)?",
        options: [
            "Acelerar la entrega de contenido web.",
            "Proteger aplicaciones web contra exploits y bots.",
            "Gestionar el acceso a bases de datos.",
            "Monitorizar el rendimiento del servidor."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa el término 'cumplimiento' en el contexto de AWS?",
        options: [
            "Asegurar que todos los servicios de AWS estén actualizados.",
            "Adherirse a las regulaciones y estándares de la industria.",
            "Garantizar que todos los usuarios tengan acceso a los recursos.",
            "Optimizar el costo de los servicios de AWS."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué servicio de AWS se utiliza para gestionar certificados SSL/TLS?",
        options: [
            "AWS Certificate Manager (ACM)",
            "AWS Key Management Service (KMS)",
            "Amazon CloudWatch",
            "Amazon Inspector"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es la función principal de las políticas de IAM?",
        options: [
            "Definir la configuración de red.",
            "Controlar el acceso a los recursos de AWS.",
            "Monitorizar el rendimiento de las aplicaciones.",
            "Automatizar la implementación de código."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la autenticación multifactor (MFA)?",
        options: [
            "Un método para encriptar datos.",
            "Un proceso para verificar la identidad de un usuario utilizando múltiples factores.",
            "Una técnica para acelerar la entrega de contenido web.",
            "Una forma de gestionar el acceso a bases de datos."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué servicio de AWS permite realizar análisis de vulnerabilidades automatizados?",
        options: [
            "Amazon CloudWatch",
            "AWS Trusted Advisor",
            "Amazon Inspector",
            "AWS Shield"
        ],
        correctAnswer: 2
    }
];