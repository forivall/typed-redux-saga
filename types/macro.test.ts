/* eslint-disable import/no-unresolved */
/* eslint-disable functional/functional-parameters */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import * as Effects from "typed-redux-saga/macro";

function* mySaga(): Effects.SagaGenerator<void> {
  // $ExpectType number
  yield* Effects.call(function* (): Effects.SagaGenerator<number> {
    yield* Effects.take("OK");
    return 22;
  });
}