import { useReducer } from "react";
import appContext from "./appContext";
import appReducer from "./appReducer";
import {
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA,
  SUBIR_ARCHIVO_EXITO,
  SUBIR_ARCHIVO_ERROR,
  CREAR_ENLACE_EXITO,
  CREAR_ENLACE_ERROR,
} from "@/types";

const AppState = ({ children }) => {
  const initialState = {
    mensaje_archivo: "",
  };

  //Crear dispatch y state
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Muestra una alerta
  const mostrarAlerta = (msg) => {
    dispatchEvent({
      type: MOSTRAR_ALERTA,
      payload: msg,
    });
  };
  return (
    <appContext.Provider
      value={{ mensaje_archivo: state.mensaje_archivo, mostrarAlerta }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
