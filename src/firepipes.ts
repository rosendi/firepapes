import { HasChildrenPipe } from './has_children_pipe'
import { NumChildrenPipe } from './num_children_pipe'
import { OnValuePipe } from './on_value_pipe'
import { ToArrayPipe } from './to_array_pipe'
import { ToObjectPipe } from './to_object_pipe'

export { AssignLocal } from './assign_local'
export { HasChildrenPipe } from './has_children_pipe'
export { NumChildrenPipe } from './num_children_pipe'
export { OnValuePipe } from './on_value_pipe'
export { ToArrayPipe } from './to_array_pipe'
export { ToObjectPipe } from './to_object_pipe'

export const FIREBASE_PIPES = [
  HasChildrenPipe,
  NumChildrenPipe,
  OnValuePipe,
  ToArrayPipe,
  ToObjectPipe,
];
