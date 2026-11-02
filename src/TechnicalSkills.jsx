import React from "react";
import {
  Code2,
  Layers,
  Database,
  Server,
  Wrench,
  BrainCircuit,
} from "lucide-react";
import { Tilt } from "./use3DTilt.jsx";
import useInView from "./useInView.js";

// Tool Logo Vector Components
const Logos = {
  Cpp: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#00599C">
      <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z" />
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <path fill="#3776AB" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0zM8.708 1.85c.578 0 1.05.48 1.05 1.07 0 .59-.472 1.07-1.05 1.07-.58 0-1.05-.48-1.05-1.07 0-.59.47-1.07 1.05-1.07z" />
      <path fill="#FFD43B" d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24zm3.206-1.85c-.578 0-1.05-.48-1.05-1.07 0-.59.472-1.07 1.05-1.07.58 0 1.05.48 1.05 1.07 0 .59-.47 1.07-1.05 1.07z" />
    </svg>
  ),
  C: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <path fill="#00599C" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 11-5.94 14.34l2.55-2.55A4.8 4.8 0 1012 7.2c1.33 0 2.53.54 3.4 1.4l2.55-2.55A8.37 8.37 0 0012 3.6z" />
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path fill="#000" d="M6.4 18.7c.3.5.7.9 1.4.9.6 0 1-.2 1-1.1v-6h2v6c0 1.8-1.1 2.6-2.6 2.6-1.4 0-2.3-.7-2.7-1.6l1.9-1.1zm6.1-.1c.4.6 1 1.1 2 1.1.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.3-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8-.6 0-.9.3-.9.8 0 .6.4.8 1.2 1.2l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.8-.8-3.4-1.9l1.7-1z" />
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path fill="#FFF" d="M12.6 10.4h-5.2v2.2h1.8v6.7h2.4v-6.7h1v-2.2zm4.1 6.5c.9 0 1.5-.4 1.5-1.1 0-.8-.7-1-1.5-1.3l-.6-.2c-1.4-.5-2.2-1.2-2.2-2.5 0-1.5 1.2-2.6 3-2.6 1.4 0 2.4.5 3 1.5l-1.7 1.1c-.3-.5-.7-.7-1.3-.7-.6 0-1 .3-1 .8 0 .5.4.7 1.3 1l.6.2c1.7.6 2.4 1.3 2.4 2.6 0 1.6-1.3 2.7-3.3 2.7-1.7 0-2.8-.7-3.4-1.8l1.7-1.2c.4.7.9 1 1.5 1z" />
    </svg>
  ),
  SQL: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#38BDF8" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  Assembly: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#C084FC" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1" fill="#C084FC" fillOpacity="0.25" />
      <path d="M4 9H1M4 15H1M9 4V1M15 4V1M20 9h3M20 15h3M9 20v3M15 20v3" />
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  Nextjs: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#FFFFFF">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.33 16.5l-5.6-7.3v7.3H9.1V7.7h1.6l5.6 7.3V7.7h1.6v10.8h-1.57z" />
    </svg>
  ),
  Nodejs: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#5FA04E">
      <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L4.8 8.5v7.4L12 20.1l7.2-4.2V8.5L12 4.3z" />
    </svg>
  ),
  HTML5: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <path fill="#E34F26" d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" />
      <path fill="#EF652A" d="M12 2.2v19.6l6.8-2.2 1.5-17.4H12z" />
      <path fill="#FFF" d="M12 9.5H8.2l-.3-3.3h4.1V4H5.3l.8 8h5.9v-2.5zm0 6.6l-3.3-1-.2-2.3H6.1l.4 4.5 5.5 1.5v-2.7z" />
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <path fill="#1572B6" d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" />
      <path fill="#33A9DC" d="M12 2.2v19.6l6.8-2.2 1.5-17.4H12z" />
      <path fill="#FFF" d="M12 9.5H8.2l-.3-3.3h4.1V4H5.3l.8 8h5.9v-2.5zm0 6.6l-3.3-1-.2-2.3H6.1l.4 4.5 5.5 1.5v-2.7z" />
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#06B6D4">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <path fill="#47A248" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  ),
  Neo4j: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <circle cx="12" cy="12" r="4.5" fill="#008CC1" />
      <circle cx="5" cy="6" r="2.5" fill="#008CC1" />
      <circle cx="19" cy="6" r="2.5" fill="#008CC1" />
      <circle cx="12" cy="19.5" r="2.5" fill="#008CC1" />
      <line x1="5" y1="6" x2="12" y2="12" stroke="#008CC1" strokeWidth="1.8" />
      <line x1="19" y1="6" x2="12" y2="12" stroke="#008CC1" strokeWidth="1.8" />
      <line x1="12" y1="19.5" x2="12" y2="12" stroke="#008CC1" strokeWidth="1.8" />
    </svg>
  ),
  Redis: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <path fill="#DC382D" d="M2.5 7L12 2l9.5 5-9.5 5.2L2.5 7zm0 5l9.5 5 9.5-5-1.5 2.5-8 4.2-8-4.2L2.5 12zm0 5l9.5 5 9.5-5-1.5 2.5-8 4.2-8-4.2L2.5 17z" />
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#00758F">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7.5h2V9.5z" />
      <path d="M4 12c0 4.41 3.59 8 8 8s8-3.59 8-8c0-1.85-.63-3.55-1.69-4.9L12 14.5l-6.31-7.4A7.95 7.95 0 004 12z" opacity="0.35" fill="#F29111" />
    </svg>
  ),
  PostgreSQL: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#336791">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3.5c2.2 0 4.2.9 5.6 2.3l-2.1 2.1c-.9-.9-2.1-1.4-3.5-1.4-2.8 0-5 2.2-5 5s2.2 5 5 5c1.4 0 2.6-.5 3.5-1.4l2.1 2.1C16.2 19.6 14.2 20.5 12 20.5c-4.7 0-8.5-3.8-8.5-8.5S7.3 5.5 12 5.5z" />
    </svg>
  ),
  RestAPI: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#A78BFA" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
    </svg>
  ),
  WebSockets: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#818CF8" strokeWidth="2">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#818CF8" fillOpacity="0.25" />
    </svg>
  ),
  Streamlit: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#FF4B4B">
      <path d="M12 3l3.5 7h-7L12 3zm-6 9l3.5 7h-7L6 12zm12 0l3.5 7h-7l3.5-7z" />
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#F05032">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.428 1.9l2.658 2.66c.645-.23 1.387-.087 1.9.428.717.718.717 1.88 0 2.597-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.605-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#F0F6FC">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#2496ED">
      <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .101.084.186.186.186zm-2.95.003h2.118c.102 0 .186-.084.186-.186V8.776c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .1.084.183.186.183zm-2.935 0h2.119c.102 0 .186-.084.186-.186V8.776c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .1.084.183.186.183zm-2.937 0h2.12c.102 0 .186-.084.186-.186V8.776c0-.102-.084-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v2.119c0 .1.084.183.186.183zm-2.941 0h2.119c.102 0 .186-.084.186-.186V8.776c0-.102-.084-.186-.186-.186H2.22c-.102 0-.186.084-.186.186v2.119c0 .1.084.183.186.183zm2.941-2.941h2.12c.102 0 .186-.084.186-.186V5.838c0-.102-.084-.186-.186-.186h-2.12c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.937 0h2.119c.102 0 .186-.084.186-.186V5.838c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.935 0h2.118c.102 0 .186-.084.186-.186V5.838c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.935-2.938h2.118c.102 0 .186-.084.186-.186V2.897c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm18.326 2.202c-.366-.549-.893-.997-1.579-1.258a1.27 1.27 0 00-.186-.062c-.227-.061-.464-.092-.705-.092-.258 0-.518.037-.775.109l-.18.055a6.495 6.495 0 00-.77.301c-.426.2-.828.468-1.196.793v3.743c0 .243.084.453.253.628.169.176.379.263.63.263h2.385c.613-.01 1.157-.282 1.57-.791.411-.512.617-1.127.617-1.802.003-.668-.205-1.282-.619-1.888z" />
      <path d="M23.82 13.675c-.201-.274-.469-.475-.805-.605a5.555 5.555 0 00-.518-.15c-.482-.109-.982-.164-1.486-.164h-3.411v-1.637H2.22c-.628 0-1.139.511-1.139 1.139v2.119c0 5.482 4.456 9.938 9.938 9.938h2.119c5.482 0 9.938-4.456 9.938-9.938v-2.119c.003-.263-.075-.515-.224-.724v-.058z" />
    </svg>
  ),
  Postman: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path fill="#FFF" d="M15.5 8.5l-4.5 4.5-.3-.3-.6-.6c4.4-4.4 5.2-4.4 6-.4zm-4.9 4.9l4.5-4.5a.6.6 0 11.8.9l-4.7 4.1-.6-.5z" />
    </svg>
  ),
  Linux: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#FCC624">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 5c.83 0 1.5.67 1.5 1.5S11.33 10 10.5 10 9 9.33 9 8.5 9.67 7 10.5 7zm3 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-1.5 8c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" />
    </svg>
  ),
  Grafana: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#F46800">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3c3.87 0 7 3.13 7 7 0 2.22-1.04 4.2-2.65 5.48l-1.5-1.5A4.98 4.98 0 0017 12c0-2.76-2.24-5-5-5-1.54 0-2.91.7-3.83 1.8L6.6 7.23A6.98 6.98 0 0112 5zm-5 7c0-1.12.37-2.15 1-2.98L9.5 10.5A2.99 2.99 0 009 12c0 1.66 1.34 3 3 3 .62 0 1.19-.19 1.67-.51l1.54 1.54A4.98 4.98 0 0112 17c-2.76 0-5-2.24-5-5z" />
    </svg>
  ),
  VSCode: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#007ACC">
      <path d="M23.985 6.809a.575.575 0 00-.317-.457L18.57.857a.574.574 0 00-.737.195l-7.79 9.6-4.52-3.41a.578.578 0 00-.774.095L.198 12.875a.575.575 0 000 .723l4.55 5.538a.576.576 0 00.774.095l4.52-3.41 7.79 9.6a.574.574 0 00.737.195l5.098-5.495a.578.578 0 00.317-.572V7.381c.004-.202-.075-.395-.231-.522v-.05zM17.83 12l-7.73 5.83v-11.66L17.83 12z" />
    </svg>
  ),
  TensorFlow: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#FF6F00">
      <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.5L5.2 8.4v7.7L12 20.3l6.8-4.2V8.4L12 4.5zM11 9h2v7h-2V9zm-3 2h2v5H8v-5zm6 0h2v5h-2v-5z" />
    </svg>
  ),
  Keras: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <rect width="24" height="24" rx="4" fill="#D00000" />
      <path fill="#FFF" d="M6 5h3v5.5l5-5.5h4l-6 6.3 6.5 7.7h-4.2L9 13.5V19H6V5z" />
    </svg>
  ),
  Pandas: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <rect x="4" y="4" width="3.5" height="16" rx="1" fill="#150458" />
      <rect x="10.25" y="8" width="3.5" height="12" rx="1" fill="#E70488" />
      <rect x="16.5" y="4" width="3.5" height="16" rx="1" fill="#00D2B4" />
    </svg>
  ),
  NumPy: () => (
    <svg viewBox="0 0 24 24" width={18} height={18}>
      <rect width="24" height="24" rx="3" fill="#013243" />
      <path fill="#4DABCF" d="M5 6h3v12H5V6zm11 0h3v12h-3V6zm-5.5 3h2v6h-2V9z" />
    </svg>
  ),
  DeepLearning: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#F43F5E" strokeWidth="2">
      <circle cx="5" cy="6" r="2" fill="#F43F5E" />
      <circle cx="5" cy="18" r="2" fill="#F43F5E" />
      <circle cx="12" cy="12" r="2" fill="#F43F5E" />
      <circle cx="19" cy="6" r="2" fill="#F43F5E" />
      <circle cx="19" cy="18" r="2" fill="#F43F5E" />
      <line x1="7" y1="6" x2="10" y2="12" />
      <line x1="7" y1="18" x2="10" y2="12" />
      <line x1="14" y1="12" x2="17" y2="6" />
      <line x1="14" y1="12" x2="17" y2="18" />
    </svg>
  ),
  ComputerVision: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#FB7185" strokeWidth="2">
      <path d="M2 9V5a2 2 0 012-2h4M16 3h4a2 2 0 012 2v4M22 15v4a2 2 0 01-2 2h-4M8 21H4a2 2 0 01-2-2v-4" />
      <circle cx="12" cy="12" r="3" fill="#FB7185" fillOpacity="0.4" />
    </svg>
  ),
  LLM: () => (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#FDA4AF" strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" fill="#FDA4AF" fillOpacity="0.3" />
    </svg>
  ),
};

// 6 Categorized Skillsets with Completely Distinct Themes
const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    theme: "fuchsia",
    titleClass: "text-fuchsia-400 border-b-2 border-fuchsia-500",
    badgeClass: "bg-fuchsia-950/40 border border-fuchsia-500/30 text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.15)]",
    icon: <Code2 className="w-5 h-5 text-fuchsia-400" />,
    ambientClass: "bg-fuchsia-500",
    hoverBorderClass: "hover:border-fuchsia-500/40 hover:shadow-[0_0_30px_-5px_rgba(217,70,239,0.15)]",
    activeDotClass: "bg-fuchsia-400 shadow-[0_0_6px_rgba(232,121,249,0.7)]",
    skills: [
      { name: "C++", logo: <Logos.Cpp /> },
      { name: "Python", logo: <Logos.Python /> },
      { name: "C", logo: <Logos.C /> },
      { name: "JavaScript", logo: <Logos.JavaScript /> },
      { name: "TypeScript", logo: <Logos.TypeScript /> },
      { name: "SQL", logo: <Logos.SQL /> },
      { name: "Assembly", logo: <Logos.Assembly /> },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    theme: "cyan",
    titleClass: "text-cyan-400 border-b-2 border-cyan-400",
    badgeClass: "bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    ambientClass: "bg-cyan-500",
    hoverBorderClass: "hover:border-cyan-400/40 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)]",
    activeDotClass: "bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.7)]",
    skills: [
      { name: "React.js", logo: <Logos.React /> },
      { name: "Next.js", logo: <Logos.Nextjs /> },
      { name: "Node.js", logo: <Logos.Nodejs /> },
      { name: "HTML5", logo: <Logos.HTML5 /> },
      { name: "CSS3", logo: <Logos.CSS3 /> },
      { name: "Tailwind CSS", logo: <Logos.Tailwind /> },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    theme: "emerald",
    titleClass: "text-emerald-400 border-b-2 border-emerald-400",
    badgeClass: "bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.15)]",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    ambientClass: "bg-emerald-500",
    hoverBorderClass: "hover:border-emerald-400/40 hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.15)]",
    activeDotClass: "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]",
    skills: [
      { name: "MongoDB", logo: <Logos.MongoDB /> },
      { name: "Neo4j", logo: <Logos.Neo4j /> },
      { name: "Redis", logo: <Logos.Redis /> },
      { name: "MySQL", logo: <Logos.MySQL /> },
      { name: "PostgreSQL", logo: <Logos.PostgreSQL /> },
    ],
  },
  {
    id: "backend",
    title: "Backend & Frameworks",
    theme: "violet",
    titleClass: "text-violet-400 border-b-2 border-violet-500",
    badgeClass: "bg-violet-950/40 border border-violet-500/30 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.15)]",
    icon: <Server className="w-5 h-5 text-violet-400" />,
    ambientClass: "bg-violet-500",
    hoverBorderClass: "hover:border-violet-500/40 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]",
    activeDotClass: "bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.7)]",
    skills: [
      { name: "Node.js", logo: <Logos.Nodejs /> },
      { name: "RESTful APIs", logo: <Logos.RestAPI /> },
      { name: "WebSockets", logo: <Logos.WebSockets /> },
      { name: "Streamlit", logo: <Logos.Streamlit /> },
    ],
  },
  {
    id: "devtools",
    title: "Developer Tools",
    theme: "amber",
    titleClass: "text-amber-400 border-b-2 border-amber-400",
    badgeClass: "bg-amber-950/40 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
    icon: <Wrench className="w-5 h-5 text-amber-400" />,
    ambientClass: "bg-amber-500",
    hoverBorderClass: "hover:border-amber-400/40 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)]",
    activeDotClass: "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.7)]",
    skills: [
      { name: "Git", logo: <Logos.Git /> },
      { name: "GitHub", logo: <Logos.GitHub /> },
      { name: "Docker", logo: <Logos.Docker /> },
      { name: "Postman", logo: <Logos.Postman /> },
      { name: "Linux", logo: <Logos.Linux /> },
      { name: "Grafana", logo: <Logos.Grafana /> },
      { name: "VS Code", logo: <Logos.VSCode /> },
    ],
  },
  {
    id: "aiml",
    title: "AI/ML & Libraries",
    theme: "rose",
    titleClass: "text-rose-400 border-b-2 border-rose-500",
    badgeClass: "bg-rose-950/40 border border-rose-500/30 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.15)]",
    icon: <BrainCircuit className="w-5 h-5 text-rose-400" />,
    ambientClass: "bg-rose-500",
    hoverBorderClass: "hover:border-rose-500/40 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.15)]",
    activeDotClass: "bg-rose-400 shadow-[0_0_6px_rgba(251,113,133,0.7)]",
    skills: [
      { name: "Deep Learning", logo: <Logos.DeepLearning /> },
      { name: "TensorFlow", logo: <Logos.TensorFlow /> },
      { name: "Keras", logo: <Logos.Keras /> },
      { name: "Pandas", logo: <Logos.Pandas /> },
      { name: "NumPy", logo: <Logos.NumPy /> },
      { name: "Computer Vision", logo: <Logos.ComputerVision /> },
      { name: "LLMs", logo: <Logos.LLM /> },
    ],
  },
];

export default function TechnicalSkills() {
  const [ref, inView] = useInView(0.08);

  return (
    <section id="skills" className="relative bg-transparent overflow-hidden">
      <div ref={ref} className={`max-w-6xl mx-auto relative z-10 section-wrapper${inView ? " section-visible" : ""}`}>
        {/* Section Header Centered */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-label inline-block">Capabilities</div>
          <h2 className="section-title">Technical Skills<span className="text-cyan-400">.</span></h2>
          <p className="font-mono text-sm sm:text-base text-slate-400 max-w-xl mx-auto mt-3">
            Categorized inventory of programming languages, frameworks, distributed databases, developer tooling, and AI/ML ecosystems.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <Tilt
              key={cat.id}
              options={{ maxTilt: 2.5 }}
              className={`skill-card rounded-2xl border border-slate-800/80 bg-[#121620]/90 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden group transition-all duration-300 ${cat.hoverBorderClass}`}
            >
              {/* Subtle colored ambient glow matching each card's theme */}
              <div
                className={`pointer-events-none absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-500 ${cat.ambientClass}`}
              />

              {/* Card Header Structure */}
              <div className="relative z-10 flex items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Category Badge Icon */}
                  <div className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${cat.badgeClass}`}>
                    {cat.icon}
                  </div>
                  {/* Monospace Title with Custom Accent Underline */}
                  <h3 className="font-mono text-xl sm:text-2xl font-bold truncate">
                    <span className={`inline-block pb-0.5 ${cat.titleClass}`}>
                      {cat.title}
                    </span>
                  </h3>
                </div>
              </div>

              {/* Skill Chips / Pills Grid with Tool Brand Logos */}
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-6">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border border-slate-700/50 bg-[#171c28]/70 px-3.5 py-2.5 flex items-center gap-2.5 transition-all duration-200 hover:border-slate-500 hover:bg-[#1e2433] group/pill"
                  >
                    {/* Tool Brand Logo in front of skill */}
                    <span className="shrink-0 flex items-center justify-center w-5 h-5">
                      {skill.logo}
                    </span>
                    {/* Clean monospace label */}
                    <span className="font-mono text-xs sm:text-sm text-slate-200 truncate group-hover/pill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
