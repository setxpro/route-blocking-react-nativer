import { useEffect, useState } from "react";
import { useNavigationState } from '@react-navigation/native'
import * as LocalAuthentication from 'expo-local-authentication';

export function useScreenGuard(screenName: string) {

    const [sessionTime, setSessionTime] = useState(0)
 
    const navigationsState = useNavigationState(state => state);

    async function handleAuthentication(){
        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: "Sessão Expirada"
        })

        if(auth.success) {
            setSessionTime(0);
        }
        else {
            // Se o usuário não desbloquear 
            // vou continuar mandando ele desbolquear
            handleAuthentication();
        }
    }

    useEffect(() => {
        
        // expiry time

        if(sessionTime < 10) {
            // Continua a contagem do tempo

            const timer = setTimeout(() => {
                setSessionTime(prevState => prevState + 1); // Vai pegar o estado anterior e acrescentar + 1
                console.log(sessionTime);
            }, 1000) // Fazer a contagem a cada segundo.

            return () => clearTimeout(timer)
        }
        else {

            if (navigationsState.routes) {
                const currentScreen = navigationsState.routes[navigationsState.index];

                if (currentScreen.name === screenName) {
                    // Momento para desbloquear a tela
                    handleAuthentication()
                    console.log("DESBLOQUEAR TELA")
                }
            }

        }

    }, [sessionTime])

    return;

}