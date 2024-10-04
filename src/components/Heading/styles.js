import styled,{css} from 'styled-components';


const titleSize = {

    small:(theme) => css`
    font-size:${theme.font.sizes.small}`,
    medium:(theme) => css`${theme.font.sizes.large}`,
    big:(theme) => css`${theme.font.sizes.xlarge}`,
    huge:(theme) => css`${theme.font.sizes.xhuge}` 
};

const titleCase = (uppercase) => css`
text-transform:${uppercase ? 'uppercase':none};`

export const Title = styled.h1`

   ${ ({theme,colorDark,size,uppercase}) => css`
   color:${theme.colors.white};
   ${titleSize[size](theme)};
   ${titleCase[size](theme)};
   
   `}
`;