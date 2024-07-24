import { Link } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
    useSafeAreaInsets();
    return (
        <View className="flex flex-1 text-center items-center justify-center bg-slate-700">
            <Link className=" text-red-500 font-extrabold text-5xl" href={"/"}>Index page</Link>
            <Link className="font-semibold text-3xl hover:opacity-60" href={"/details/1"}>Detail 1</Link>
        </View>
    );
}