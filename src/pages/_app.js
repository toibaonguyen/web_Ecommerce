import MainLayout from "@/components/Layouts/MainLayout";
import "../../styles/global.scss";
export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
