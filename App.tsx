import { Loading } from "@components/Loading";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Teams } from "@screens/Teams";
import theme from "@theme/index";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";

export default function App() {
    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    return (
        <ThemeProvider theme={theme}>
            {fontsLoaded ? <Teams /> : <Loading />}
        </ThemeProvider>
    );
}
