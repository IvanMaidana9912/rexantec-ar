export interface Project {
  id: string;
  title: string;
  Sdescription: string;
  Ldescription: string;
  IMG: string;
  "IMG-2": string;
  href: string;
  content: string[];
  list_of_types: Record<string, unknown>;
}

export type ProjectsJSON = { proyectos: Project[] }[];
