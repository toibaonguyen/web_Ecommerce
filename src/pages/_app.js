import MainLayout from "@/components/Layouts/MainLayout";
import "../../styles/global.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
