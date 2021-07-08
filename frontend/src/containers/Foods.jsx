import React, { Fragment } from 'react';

const Foods = ({
  match
}) => {
  return (
    <Fragment>
      フード一覧
      <p>
        restaurantsIdは{match.params.restaurantsId}です。
      </p>
    </Fragment>
  )
}

export default Foods
