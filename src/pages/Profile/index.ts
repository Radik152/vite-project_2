import Handlebars from "handlebars";

import { Link } from "../../components/Link";

import { tmpl } from "./profile.tmpl";
// import { Button } from "../../components/Button";

export const Profile = () => {

    return Handlebars.compile(tmpl)({
        mainPageLink: Link({to: '/', text: 'mainPage'}),
        chatPageLink: Link({to: '/chat', text: 'chatPage'}),
        // ButtonClick: Button({text: 'click', onClick: () => console.log('123')})
    });
}
