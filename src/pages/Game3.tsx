import { Unity, useUnityContext } from "react-unity-webgl";
function Game3(){
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/Trivia1.loader.js",
        dataUrl: "/Trivia1.data.unityweb",
        frameworkUrl: "/Trivia1.framework.js.unityweb",
        codeUrl: "/Trivia1.wasm.unityweb",
    });

    function SceneHelPer(){
        sendMessage("","");
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Trivia</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
                <div className="centered-button-container">
                    <button onClick={SceneHelPer}>ReiniciarScena</button>
                </div>
            </div>
        </div>
    )
}
export default  Game3;
