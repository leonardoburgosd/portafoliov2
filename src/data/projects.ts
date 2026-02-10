import { Project } from "../components/project";

export const projects: Project[] = [
    {
        title: "Avitrax",
        imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax.webp",
        description: "Sistema de gestión de control de cuentas",
        tech: [
            "React",
            "Tailwind CSS",
            "NestJS",
        ],
        isModal: true,
        fullDescription: "Sistema de gestión de control de cuentas por cobrar y por pagar",
        features: [
            "Autenticación",
            "Modo claro/oscuro",
            "Dashboard de resumen",
            "Registro de ventas",
            "Registro de pagos",
            "Gestión de clientes",
            "Cruce de jabas",
            "Reportes",
            "Gestión de zonas",
            "Historial de precios",
            "Gestión de camiones",
            "Gestión de jabas",
            "Gestión de usuarios"
        ],
        technologies: [
            "React",
            "Tailwind CSS",
            "PostgreSQL",
            "NestJS",
            "AI",
        ],
        projectUrl: "#", // Placeholder
        gallery: [
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax1.webp",
                title: "Login",
                description: "Autenticacion basica"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax2.webp",
                title: "Modo claro",
                description: "Modo claro de la aplicacion"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax3.webp",
                title: "Dashboard",
                description: "Dashboard de resumen de cuentas"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax4.webp",

                title: "Registro de ventas",
                description: "Registro de ventas por cliente"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax5.webp",
                title: "Registro de pagos",
                description: "Registro de pagos por usuario, fecha y monto"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax6.webp",
                title: "Gestión de clientes",
                description: "Gestión de clientes"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax7.webp",
                title: "Cruce de jabas",
                description: "Comparación en conteo de jabas entre el sistema y el usuario"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax8.webp",
                title: "Reportes",
                description: "Reportes de estados de cuenta"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax9.webp",
                title: "Gestión de zonas",
                description: "Gestión de zonas"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax10.webp",
                title: "Historial de precios",
                description: "Historial de precios por día"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax11.webp",
                title: "Gestión de camiones",
                description: "Gestión de camiones de transporte"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax12.webp",
                title: "Gestión de jabas",
                description: "Gestión de pesos de jabas"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/avitrax13.webp",
                title: "Gestión de usuarios",
                description: "Gestión de usuarios con permisos granulares"
            }
        ]
    },
    {
        title: "Dining Web",
        imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/diningWeb.webp",
        description: "Sistema de gestión de reporte de comidas corporativo",
        tech: [
            "React",
            "Tailwind CSS",
            "Firebase",
        ],
        isModal: true,
        fullDescription: "Sistema de vista de pases de comida corporativa y gestión de usuarios",
        features: [
            "Autenticación",
            "Historial de pases de comida con filtro de fecha",
            "Descarga de reporte en hoja de calculo",
            "Gestión de usuarios con permisos y funcionalidades",
        ],
        technologies: [
            "React",
            "Tailwind CSS",
            "Firebase",
            "AI"
        ],
        projectUrl: "#", // Placeholder
        gallery: [
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/diningweb1.webp",
                title: "Login",
                description: "Autenticacion basica"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/diningweb2.webp",
                title: "Registro de pases registrados",
                description: "Lista de pases registrados sincronizados desde DiningAPP"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/diningweb3.webp",
                title: "Gestión de usuarios",
                description: "Gestión de usuarios con permisos granulares"
            }
        ]
    },
    {
        title: "Dining APP",
        description: "Aplicacion movil para registrar empleados y pases de comida",
        tech: ["FluterFlow", "Firebase"],
        isModal: true,
        imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/diningApp.avif",
        fullDescription: "Aplicacion móvil para registro de pases de comida con Firebase y FlutterFlow",
        features: [
            "Registro de empleados",
            "Registro de pases de comida por documento de identidad",
            "Historial de pases de comida",
            "Funcionamiento offline",
            "Impresión térmica por bluetooth",
            "Desarga de reporte",
            "Sincronización de datos con Firebase",
        ],
        technologies: [
            "FlutterFlow",
            "Firebase",
        ],
        gallery: [
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/dinningApp1.jpg",
                title: "Inicio",
                description: "Pantalla principal"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/dinningApp2.jpg",
                title: "Registro del pase de comida",
                description: "Ingresa el número de documento del empleado"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/dinningApp3.jpg",
                title: "Pantalla de pases generado",
                description: "Muestra el pase generado y permite su impresión"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/dinningApp4.jpg",
                title: "Pantalla de la configuración",
                description: "Opciones de registro de empleado, registro de pase de comida y sincronización con la base de datos"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/dinningApp5.jpg",
                title: "Lista de empleados",
                description: "Vista de empleados registrados y botón para agregar un nuevo empleado, editar, eliminar y ver QR"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/dinningApp6.jpg",
                title: "Registro de empleado",
                description: "Formulario de registro de empleado"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/dinningApp7.jpg",
                title: "Actualización de empleado",
                description: "Formulario de actualización de datos de empleado"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/dinningApp8.jpg",
                title: "Historial de registro de pases",
                description: "Historial de registro de pases de comida y descarga de reporte"
            },
            {
                url: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/dinningApp9.jpg",
                title: "Sincronización de datos",
                description: "Sincronización de datos y lista de cambios realizados en la base de datos"
            }
        ]
    },
    {
        title: "Auth0rize",
        imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/authdashboard.avif",
        description: "Proyecto de administración de autenticación de usuarios",
        tech: ["Angular", "C#", "Postgre"],
        projectUrl: "https://auth0rize.leonardoburgos.site"
    },
    {
        title: "ButtonStyle",
        imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/buttonstyleportada.avif",
        description: "Proyecto con HTML y CSS de estilo de botones",
        tech: ["HTML", "CSS"],
        projectUrl: "https://github.com/leonardoburgosd/button-styles"
    },
    {
        title: "BCreate",
        imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/bcCreate.avif",
        description: "Estructura y código SQL para crear un blog",
        tech: ["SqlServer"],
        projectUrl: "https://github.com/leonardoburgosd/bd-structure"
    },
    {
        title: "Integra:login",
        imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/integragroup.avif",
        description: "Proyecto de diseño de registro y login en Photoshop",
        tech: ["Photoshop"],
        projectUrl: "https://github.com/leonardoburgosd/bd-structure"
    },
    {
        title: "Akamika",
        imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/akamikaProyc.avif",
        description: "Platforma de educación online",
        tech: ["C#", "SqlServer", "Bootstrap"],
        projectUrl: "https://www.youtube.com/watch?v=63l2ByJUAUM"
    },
    {
        title: "Aplicativo movil con IOT",
        imageUrl: "https://s3.us-east-2.amazonaws.com/leonardoburgosd.site/portafolio/preview/firebaseProyc.avif",
        description: "Proyecto encendido de diodo led desde Xamarin con Firebase y Arduino sin ESP",
        tech: ["Firebase", "C#", "Xamain", "Arduino"],
        projectUrl: "https://www.youtube.com/watch?v=whdph6Q_oek"
    }
];
