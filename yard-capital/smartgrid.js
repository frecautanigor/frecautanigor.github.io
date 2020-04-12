module.exports = {
    outputStyle: 'sass', /* less || scss || sass || styl */
        columns: 12, /* number of grid columns */
        offset: '30px', /* gutter width px || % || rem */
        mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
        filename: '_smart-grid',
        container: {
            maxWidth: '1560px', /* max-width оn very large screen */
            fields: '15px' /* side fields */
        },
        breakPoints: {
            xlg: {
                width: '1560px', /* -> @media (max-width: 1100px) */
            },
            md: {
                width: '1107px'
            },
            md_1044: {
                width: '1044px'
            },
            sm: {
                width: '825px',
                fields: '15px' /* set fields only if you want to change container.fields */
            },
            sm_768: {
                width: '768px',
            },
            xs: {
                width: '783px'
            },
            xxs: {
                width: '414px'
            },
            s_500: {
                width: '500px'
            },
            s_400: {
                width: '400px'
            }
            /* 
            We can create any quantity of break points.
    
            some_name: {
                width: 'Npx',
                fields: 'N(px|%|rem)',
                offset: 'N(px|%|rem)'
            }
            */
        }
 };