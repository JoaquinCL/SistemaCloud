import { Unity, useUnityContext } from "react-unity-webgl";
function Game4(){
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/PiedraPapelTijera.loader.js",
        dataUrl: "/PiedraPapelTijera.data.unityweb",
        frameworkUrl: "/PiedraPapelTijera.framework.js.unityweb",
        codeUrl: "/PiedraPapelTijera.wasm.unityweb",
    });

    function SceneHelPer(){
        sendMessage("","");
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Piedra, papel o tijera</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
                <div className="centered-button-container">
                    <button onClick={SceneHelPer}>ReiniciarScena</button>
                </div>
            </div>
        </div>
    )
}
export default  Game4;
