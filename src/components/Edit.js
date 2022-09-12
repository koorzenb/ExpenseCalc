import React from 'react';

const EditExpensePage = (props) => {
    return (<div>
        My edit page with id {props.match.params.id}
    </div>
    );
}
    ;

export default EditExpensePage;