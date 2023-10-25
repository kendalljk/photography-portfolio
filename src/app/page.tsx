import Welcome from "./welcome/page";
import Bio from "./components/Bio";
import RecentProjects from "./components/RecentProjects";
import Awards from "./components/Awards";

export default function Home() {
    return (
        <main className="">
            <Welcome />
            <RecentProjects />
        </main>
    );
}
