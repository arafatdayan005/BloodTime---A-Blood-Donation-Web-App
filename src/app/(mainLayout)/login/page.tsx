import { LoginForm } from "./LoginForm";
import { LottieAnime } from "./LottieAnime";

export default function page() {
  return (
    <>
      <section className="bg-gray-50 py-20 relative flex justify-center flex-wrap lg:items-center">
        <LoginForm />
        <LottieAnime />
      </section>
    </> 
  );
}
