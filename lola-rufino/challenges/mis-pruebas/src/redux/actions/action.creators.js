import actionType from './action.types';

export function createCamera(camera) {
  return {
    type: actionType.CREATE_CAMERA,
    camera
  };
}

export function deleteCamera(camera) {
  return {
    type: actionType.DELETE_CAMERA,
    camera
  };
}

export function updateCamera(camera) {
  return {
    type: actionType.UPDATE_CAMERA,
    camera
  };
}

export function filterCamera(camera) {
  return {
    type: actionType.FILTER_CAMERA,
    camera
  };
}
