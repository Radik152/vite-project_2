import Handlebars from "handlebars";

import { tmpl } from "./button.tmpl";

interface ButtonProps {
    text: string;
    onClick: any;
}

export const Button = (props: ButtonProps) => {
    return Handlebars.compile(tmpl)(props);
} 