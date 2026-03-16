export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Inicio", href: "#home" },
  { id: "ecosistema", label: "Ecosistema", href: "#ecosistema" },
  { id: "contacto", label: "Contacto", href: "#contacto" }
];
