module.exports = {
    outputStyle: 'sass', /* less || scss || sass || styl */
        columns: 12, /* number of grid columns */
        offset: '40px', /* gutter width px || % || rem */
        mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
        filename: '_smart-grid',
        container: {
            maxWidth: '1100px', /* max-width оn very large screen */
            fields: '20px' /* side fields */
        },
        breakPoints: {
            xl: {
                width: '1100px',
                fields: '40px'

            },
            lg: {
                width: '992px',
                fields: '60px'
            },
            md: {
                width: '768px',
                fields: '50px'
            },
            sm: {
                width: '576px',
                fields: '40px'
            },
            xs: {
                width: '320px',
                fields: '20px'
            },
            bp_1366: {
                width: '1366px',
                fields: '20px'
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