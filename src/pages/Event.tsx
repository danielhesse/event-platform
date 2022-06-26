import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  function Redirect() {
    window.location.href = "/event/lesson/abertura-do-evento-ignite-lab";

    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <Redirect />}
        <Sidebar />
      </main>
    </div>
  );
}
