import type { LinksFunction } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";

export const meta: V2_MetaFunction = () => [
  { charset: "utf-8" },
  { title: "New Remix App" },
  { viewport: "width=device-width,initial-scale=1" },
];

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en" data-theme="emerald">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
