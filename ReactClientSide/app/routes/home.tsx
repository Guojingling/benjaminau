import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Artisan Canberra Cafe" },
    { name: "description", content: "Welcome to Artisan Canberra Cafe!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
