import actionTypes from '../actions/action.types';
import camerasMock from '../../constants/cameras.mock';

export default function camerasReducer(cameraList = camerasMock, action) {
  let newCameraList;
  const newCamera = { id: `camera-${action.camera}`, name: action.camera };
  switch (action.type) {
    case actionTypes.CREATE_CAMERA:
      // Me quedo con todas las cámaras que había, y añado la cámara de mi action
      newCameraList = [...cameraList, newCamera];
      break;
    case actionTypes.DELETE_CAMERA:
      // Filtro y me quedo con todas las cámaras que no sean la que coincide con mi action
      newCameraList = cameraList.filter((camera) => camera !== action.camera);
      break;
    case actionTypes.UPDATE_CAMERA:
      newCameraList = cameraList.map((camera) => ((camera.id === action.camera.id)
        ? {
          ...camera,
          ...action.camera
        }
        : camera));
      break;
    case actionTypes.FILTER_CAMERA:
      newCameraList = cameraList.filter((camera) => camera === action.camera);
      break;
    case actionTypes.LOAD_CAMERAS:
      newCameraList = actionTypes.cameraList;
      break;
    default:
      newCameraList = cameraList;
      break;
  }

  return newCameraList;
}
