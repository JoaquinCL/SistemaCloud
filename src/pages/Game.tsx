import { Unity, useUnityContext } from "react-unity-webgl";

function Game(){
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Ecomend.loader.js",
        dataUrl: "/Ecomend.data.unityweb",
        frameworkUrl: "/Ecomend.framework.js.unityweb",
        codeUrl: "/Ecomend.wasm.unityweb",
    });

    function HandleFireProjectile(){
        sendMessage("Robot", "FireProjectile");
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">EcoMend</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
                <div className="centered-button-container">
                    <button onClick={HandleFireProjectile}>Fire Projectile</button>
                </div>
            </div>
        </div>
    )
}
export default Game;
