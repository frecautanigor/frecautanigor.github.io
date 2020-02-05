module.exports = {
    outputStyle: 'sass', /* less || scss || sass || styl */
        columns: 12, /* number of grid columns */
        offset: '30px', /* gutter width px || % || rem */
        mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
        filename: '_smart-grid',
        container: {
            maxWidth: '1166px', /* max-width оn very large screen */
            fields: '15px' /* side fields */
        },
        breakPoints: {
            lg: {
                width: '1196px', /* -> @media (max-width: 1100px) */
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