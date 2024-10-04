import { ArgTypes } from "@storybook/blocks";
import { Heading } from ".";
import { background } from "storybook/internal/theming";

export default {

    title:'Heading',
    component:Heading,
    args:{
        children:'Não seio',
    },
    ArgTypes:{
        children:{type:'string'},
    },
    parameters:{
        backgrounds:{
            dafault:'dark',
        }

    }
}

export const Templet = (args) => <Heading {...args} />

// Dark.args = {
//     children:'O texto',
//     colorDark:false,
// }