/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Provider } from '@lexical/yjs';
import type {
  LexicalCommand
} from 'lexical';
import type { Doc } from 'yjs';

import './index.css';

import {
  createCommand
} from 'lexical';


export const INSERT_INLINE_COMMAND: LexicalCommand<void> = createCommand(
  'INSERT_INLINE_COMMAND',
);



export default function CommentPlugin({
  providerFactory,
}: {
  providerFactory?: (id: string, yjsDocMap: Map<string, Doc>) => Provider;
}): JSX.Element {
  return (
    <div></div>
  )
}
