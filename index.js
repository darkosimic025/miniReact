import { miniReact } from "./miniReact";
import { App } from "./App";

const element = <App />;
const container = document.getElementById("root");
miniReact.render(element, container);
