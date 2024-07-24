// import "../app/global.css";
import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <>
            <Tabs>
                <Tabs.Screen name="index"
                    options={{
                        title: "Grafik",
                        headerStyle: {
                            backgroundColor: "green"
                        }
                    }} />
                <Tabs.Screen name="upload/index"
                    options={{
                        title: "Unggah",
                        headerStyle: {
                            backgroundColor: "green"
                        },
                    }} />
            </Tabs>
            <StatusBar style="dark" />
        </>
    );
}
