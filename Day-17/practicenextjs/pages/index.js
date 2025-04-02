import Test from "./component/test";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/component/countries")}>
        Country data?
      </button>
      <Test />
    </>
  );
}
